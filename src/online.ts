// Online transport: WebRTC peer-to-peer through the free PeerJS cloud (signalling only, no game server).
// Game protocol and rules live in game.ts (netStart / netMsg / netEnd).
import Peer from 'peerjs';
import { NET, netStart, netMsg, netEnd, wait, toast, onlineHub, myName } from './game';

const PRE = 'rfa-v1-';
const CH = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const QN = 6; // quick-match slots
let peer: any = null, conn: any = null, gen = 0;
const clean = (x: any) => String(x || 'Player').replace(/[<>"]/g, '').slice(0, 14);

function cleanup() {
  gen++;
  try { conn && conn.close(); } catch {}
  try { peer && peer.destroy(); } catch {}
  conn = null; peer = null; NET.send = () => {};
}
function fail(msg: string) { cleanup(); onlineHub(); toast(msg); }

// Handshake: guest sends "hi", host replies "start" with both names, then every message goes to the game.
function attach(c: any, host: boolean, g: number, onFail: () => void) {
  conn = c; let started = false;
  c.on('open', () => { if (!host) c.send({ t: 'hi', name: myName() }); });
  c.on('data', (d: any) => {
    if (g !== gen || !d || typeof d !== 'object') return;
    if (!started) {
      if (host && d.t === 'hi') {
        started = true; const names = [myName(), clean(d.name)];
        NET.send = (m: any) => { try { c.send(m); } catch {} };
        c.send({ t: 'start', names }); netStart(0, names);
      } else if (!host && d.t === 'start' && Array.isArray(d.names)) {
        started = true; NET.send = (m: any) => { try { c.send(m); } catch {} };
        netStart(1, d.names.slice(0, 2).map(clean));
      } else if (!host && d.t === 'busy') onFail();
      return;
    }
    netMsg(d);
  });
  const end = () => {
    if (g !== gen) return;
    if (started) { netEnd('Your opponent left the match.'); cleanup(); } else onFail();
  };
  c.on('close', end); c.on('error', end);
}

function hostOn(p: any, g: number) {
  p.on('connection', (cn: any) => {
    if (conn) { cn.on('open', () => { cn.send({ t: 'busy' }); setTimeout(() => cn.close(), 400); }); return; }
    attach(cn, true, g, () => { conn = null; });
  });
  p.on('disconnected', () => { try { p.reconnect(); } catch {} });
}

function create() {
  cleanup(); const g = gen;
  const code = Array.from({ length: 5 }, () => CH[(Math.random() * CH.length) | 0]).join('');
  wait('Creating room…');
  const p: any = (peer = new Peer(PRE + code));
  p.on('open', () => { if (g === gen) wait('Waiting for a friend…', 'Send them this code', code); });
  p.on('error', (e: any) => { if (g !== gen) return; if (e.type === 'unavailable-id') create(); else fail('Could not reach the online service. Check your internet.'); });
  hostOn(p, g);
}

function join(raw: string) {
  const code = (raw || '').trim().toUpperCase();
  if (code.length !== 5) { toast('Enter the 5-letter code'); return; }
  cleanup(); const g = gen; wait('Connecting to room ' + code + '…');
  const p: any = (peer = new Peer());
  p.on('open', () => {
    if (g !== gen) return;
    const t = setTimeout(() => { if (g === gen) fail('Room not found or the host is offline.'); }, 12000);
    const cn = p.connect(PRE + code, { reliable: true });
    cn.on('open', () => clearTimeout(t));
    attach(cn, false, g, () => { clearTimeout(t); if (g === gen) fail('Room not found, full or closed.'); });
  });
  p.on('error', (e: any) => { if (g === gen) fail(e.type === 'peer-unavailable' ? 'No room with that code.' : 'Connection problem. Try again.'); });
}

// Quick match: slot IDs act as a lobby. Free slot = wait there as host; taken slot = connect to its owner.
// A busy slot (already in a match) answers "busy" and the searcher moves on to the next slot.
function quick() { cleanup(); wait('Finding an opponent…', 'Looking for another player'); slot(0, gen); }
function slot(i: number, g: number) {
  if (g !== gen) return;
  if (i >= QN) { fail('No opponent found right now. Try again or use a room code.'); return; }
  try { peer && peer.destroy(); } catch {}
  const p: any = (peer = new Peer(PRE + 'qm-' + i));
  p.on('open', () => { if (g === gen) wait('Waiting for an opponent…', 'Quick match lobby'); });
  hostOn(p, g);
  p.on('error', (e: any) => {
    if (g !== gen) return;
    if (e.type !== 'unavailable-id') { fail('Could not reach the online service. Check your internet.'); return; }
    try { p.destroy(); } catch {}
    const q: any = (peer = new Peer());
    const next = () => { if (g === gen) slot(i + 1, g); };
    q.on('error', next);
    q.on('open', () => {
      const t = setTimeout(next, 6000);
      const cn = q.connect(PRE + 'qm-' + i, { reliable: true });
      cn.on('open', () => clearTimeout(t));
      attach(cn, false, g, () => { clearTimeout(t); next(); });
    });
  });
}

NET.api = { quick, create, join, leave: cleanup };
