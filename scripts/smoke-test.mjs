// Runs the real game logic (src/game.ts) in Node with a fake DOM:
// 300 full drafts + matches, checks nothing gets stuck and results are deterministic.
import fs from 'node:fs';
import vm from 'node:vm';
let src = fs.readFileSync(new URL('../src/game.ts', import.meta.url), 'utf8').replace(/^export .*$/m, '');
const el = () => ({ innerHTML: '', style: {}, textContent: '', className: '', offsetWidth: 0, classList: { add() {} }, insertAdjacentHTML() {}, remove() {} });
const stub = { querySelector: el, createElement: el, body: { appendChild() {} } };
const test = `
for(let k=0;k<300;k++){start(k%2?'cpu':'local',k%4);setF(0,Object.keys(F)[k%4]);if(S.mode=='local')setF(1,Object.keys(F)[(k+1)%4]);
 while(S.t<22){const s=S.order[S.t];const c=P.filter(p=>!S.picks.flat().includes(p.id)&&need(s,p.p)>0);if(!c.length)throw new Error('draft stuck');pick(s==1?c[0].id:c[c.length-1].id)}
 S.tac=['Balanced','Direct'];const a=sim(k+1),b=sim(k+1);
 if(JSON.stringify(a)!==JSON.stringify(b))throw new Error('non-deterministic');
 if(a.sc[0]===a.sc[1]&&!a.pens)throw new Error('draw without penalties');
 if(a.pens&&a.pens[0]===a.pens[1])throw new Error('tied shootout');
 if(k<8){home();formation(0);tactics(0);setTac(0,'Direct');tacDone(0);if(S.mode=='local')tacDone(1);match();play(0);setTab('FW');}}

for(const n of [4,8])for(let k=0;k<30;k++){cupGo(n,k%4);setF(0,'4-3-3');while(S.t<22){const s=S.order[S.t];const c=P.filter(p=>!S.picks.flat().includes(p.id)&&need(s,p.p)>0);pick(c[s==1?0:c.length-1].id)}tacDone(0);let g=0;
 while(S.cup.champ===null){if(g++>20)throw new Error('cup stuck');const me=S.cup.rounds[S.cup.rounds.length-1].find(x=>x.w==null&&(x.a==0||x.b==0));if(me){cupPlay();play(0);cupNext()}else cupSim()}
 if(S.cup.rounds.length!==(n==4?2:3))throw new Error('bad bracket')}
players();prof(0);hall();settings();cupSetup();isHome();onlineHub();wait('x','y','ABCDE');toast('x');setQ('mes');setPq('mes');
'OK: 300 drafts and matches, 60 cups, all screens';`;
const ctx = { document: stub, localStorage: { getItem: () => null, setItem() {} }, setTimeout: () => 0, clearTimeout() {}, clearInterval() {}, setInterval: () => 0, console };
console.log(vm.runInNewContext('"use strict";' + src.replace('// @ts-nocheck', '') + test, ctx));

// ---- Online: two simulated phones joined by an in-memory link ----
const mk = () => { const c = { document: stub, localStorage: { getItem: () => null, setItem() {} }, setTimeout: () => 0, clearTimeout() {}, clearInterval() {}, setInterval: () => 0, console }; vm.createContext(c); vm.runInContext('"use strict";' + src.replace('// @ts-nocheck', ''), c); return c; };
const run = (c, s) => vm.runInContext(s, c);
const A = mk(), B = mk(), toA = [], toB = []; A.__out = toB; B.__out = toA;
run(A, 'NET.send=m=>__out.push(JSON.parse(JSON.stringify(m)))'); run(B, 'NET.send=m=>__out.push(JSON.parse(JSON.stringify(m)))');
const pump = () => { while (toA.length || toB.length) { if (toA.length) run(A, 'netMsg(' + JSON.stringify(toA.shift()) + ')'); if (toB.length) run(B, 'netMsg(' + JSON.stringify(toB.shift()) + ')'); } };
const eq = (x, y, m) => { if (x !== y) throw new Error('online: ' + m + ' (' + x + ' vs ' + y + ')'); };
run(A, "netStart(0,['Ann','Bob'])"); run(B, "netStart(1,['Ann','Bob'])");
run(A, "setF(0,'4-3-3')"); run(B, "setF(1,'4-4-2')"); pump();
eq(run(A, 'S.t'), 0, 'draft start A'); eq(run(B, 'JSON.stringify(S.form)'), run(A, 'JSON.stringify(S.form)'), 'formations');
for (let k = 0; k < 22; k++) {
  const side = run(A, 'S.order[S.t]'), own = side == 0 ? A : B, oth = side == 0 ? B : A;
  const id = run(own, '(()=>{const s=S.order[S.t];return P.filter(p=>!S.picks.flat().includes(p.id)&&need(s,p.p)>0)[0].id})()');
  run(oth, 'pick(' + id + ')'); eq(run(oth, 'S.t'), k, 'non-owner pick must be ignored');
  run(own, 'pick(' + id + ')'); pump();
}
eq(run(B, 'JSON.stringify(S.picks)'), run(A, 'JSON.stringify(S.picks)'), 'picks in sync');
run(A, "setTac(0,'Direct');tacDone(0)"); pump(); run(B, "setTac(1,'Possession');tacDone(1)"); pump();
eq(run(A, 'S.seed'), run(B, 'S.seed'), 'same seed'); eq(run(A, 'JSON.stringify(S.res)'), run(B, 'JSON.stringify(S.res)'), 'same match');
const s1 = run(A, 'S.seed'); run(A, 'play(0)'); run(B, 'play(0)');
run(A, 'rematch()'); pump(); run(B, 'rematch()'); pump();
if (run(A, 'S.seed') === s1) throw new Error('rematch seed unchanged'); eq(run(A, 'JSON.stringify(S.res)'), run(B, 'JSON.stringify(S.res)'), 'rematch same');
run(A, "netMsg({t:'pick',id:9999});netMsg({t:'go',seed:'x'});netMsg(null);netMsg({t:'form',s:1,f:'bad'})");
console.log('OK: online two-device flow in sync (formation, draft, tactics, seed, rematch, bad messages ignored)');
