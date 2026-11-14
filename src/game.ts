// @ts-nocheck
// Game logic carried over from the published ROOHU Football Arena artifact.
const RAW=`Yashin|URS|GK|92|1929|0
Neuer|GER|GK|91|1986|1
Buffon|ITA|GK|91|1978|1
Casillas|ESP|GK|90|1981|1
Kahn|GER|GK|89|1969|0
Schmeichel|DEN|GK|88|1963|0
Beckenbauer|GER|DF|93|1945|1
Maldini|ITA|DF|92|1968|0
Baresi|ITA|DF|91|1960|0
Cafu|BRA|DF|90|1970|1
Roberto Carlos|BRA|DF|90|1973|1
Sergio Ramos|ESP|DF|90|1986|1
Van Dijk|NED|DF|90|1991|0
Bobby Moore|ENG|DF|89|1941|1
Lahm|GER|DF|89|1983|1
Cannavaro|ITA|DF|89|1973|1
Puyol|ESP|DF|88|1978|1
Thuram|FRA|DF|87|1972|1
Maradona|ARG|MF|97|1960|1
Cruyff|NED|MF|96|1947|0
Zidane|FRA|MF|95|1972|1
Iniesta|ESP|MF|93|1984|1
Xavi|ESP|MF|92|1980|1
Platini|FRA|MF|92|1955|0
Pirlo|ITA|MF|91|1979|1
Modrić|CRO|MF|91|1985|0
Matthäus|GER|MF|91|1961|1
De Bruyne|BEL|MF|91|1991|0
Gullit|NED|MF|90|1962|0
Kroos|GER|MF|90|1990|1
Busquets|ESP|MF|88|1988|1
Kanté|FRA|MF|87|1991|1
Pelé|BRA|FW|98|1940|1
Messi|ARG|FW|98|1987|1
Ronaldo Nazário|BRA|FW|96|1976|1
Cristiano Ronaldo|POR|FW|95|1985|0
Mbappé|FRA|FW|94|1998|1
Puskás|HUN|FW|93|1927|0
Van Basten|NED|FW|93|1964|0
Ronaldinho|BRA|FW|93|1980|1
Henry|FRA|FW|92|1977|1
Eusébio|POR|FW|92|1942|0
Garrincha|BRA|FW|92|1933|1
Lewandowski|POL|FW|92|1988|0
Gerd Müller|GER|FW|91|1945|1
Romário|BRA|FW|90|1966|1
Zoff|ITA|GK|90|1942|1
Gordon Banks|ENG|GK|90|1937|1
Courtois|BEL|GK|90|1992|0
Alisson|BRA|GK|89|1992|0
Ederson|BRA|GK|87|1993|0
Lloris|FRA|GK|87|1986|1
Emiliano Martínez|ARG|GK|88|1992|1
Čech|CZE|GK|89|1982|0
Van der Sar|NED|GK|89|1970|0
Barthez|FRA|GK|85|1971|1
Oblak|SVN|GK|89|1993|0
Taffarel|BRA|GK|86|1966|1
Sepp Maier|GER|GK|88|1944|1
Peter Shilton|ENG|GK|88|1949|0
Ter Stegen|GER|GK|88|1992|0
Keylor Navas|CRC|GK|87|1986|0
Donnarumma|ITA|GK|88|1999|0
Piqué|ESP|DF|88|1987|1
Zanetti|ARG|DF|87|1973|0
Dani Alves|BRA|DF|90|1983|0
Marcelo|BRA|DF|89|1988|0
Lúcio|BRA|DF|87|1978|1
Thiago Silva|BRA|DF|88|1984|0
Rio Ferdinand|ENG|DF|88|1978|0
John Terry|ENG|DF|87|1980|0
Vidić|SRB|DF|88|1981|0
Nesta|ITA|DF|90|1976|1
Scirea|ITA|DF|90|1953|1
Facchetti|ITA|DF|90|1942|0
Chiellini|ITA|DF|88|1984|0
Bonucci|ITA|DF|87|1987|0
Blanc|FRA|DF|88|1965|1
Desailly|FRA|DF|89|1968|1
Lizarazu|FRA|DF|86|1969|1
Varane|FRA|DF|88|1993|1
De Ligt|NED|DF|86|1999|0
Ronald Koeman|NED|DF|88|1963|0
Ruud Krol|NED|DF|87|1949|0
Jaap Stam|NED|DF|88|1972|0
Paul Breitner|GER|DF|88|1951|1
Brehme|GER|DF|86|1960|1
Kohler|GER|DF|87|1965|1
Sammer|GER|DF|89|1967|0
Djalma Santos|BRA|DF|89|1929|1
Nilton Santos|BRA|DF|89|1925|1
Carlos Alberto|BRA|DF|88|1944|1
Passarella|ARG|DF|88|1953|1
Alexander-Arnold|ENG|DF|86|1998|0
Hakimi|MAR|DF|87|1998|0
Alphonso Davies|CAN|DF|85|2000|0
Koulibaly|SEN|DF|86|1991|0
Ashley Cole|ENG|DF|87|1980|0
Pepe|POR|DF|87|1983|0
Rúben Dias|POR|DF|87|1997|0
Neeskens|NED|MF|90|1951|0
Bobby Charlton|ENG|MF|93|1937|1
Sócrates|BRA|MF|90|1954|0
Zico|BRA|MF|93|1953|0
Falcão|BRA|MF|89|1953|0
Didi|BRA|MF|91|1928|1
Rivelino|BRA|MF|91|1946|1
Gérson|BRA|MF|88|1941|1
Kaká|BRA|MF|91|1982|1
Rivaldo|BRA|MF|91|1972|1
Dunga|BRA|MF|86|1963|1
Paul Scholes|ENG|MF|89|1974|0
Gerrard|ENG|MF|90|1980|0
Lampard|ENG|MF|89|1978|0
Beckham|ENG|MF|88|1975|0
Bryan Robson|ENG|MF|87|1957|0
Gascoigne|ENG|MF|88|1967|0
Bellingham|ENG|MF|89|2003|0
Rakitić|CRO|MF|87|1988|0
Fàbregas|ESP|MF|89|1987|1
Xabi Alonso|ESP|MF|90|1981|1
David Silva|ESP|MF|89|1986|1
Pedri|ESP|MF|87|2002|0
Rodri|ESP|MF|91|1996|0
Gattuso|ITA|MF|87|1978|1
Verratti|ITA|MF|87|1992|0
Vieira|FRA|MF|89|1976|1
Deschamps|FRA|MF|86|1968|1
Petit|FRA|MF|86|1970|1
Pogba|FRA|MF|88|1993|1
Tigana|FRA|MF|87|1955|0
Giresse|FRA|MF|87|1952|0
Griezmann|FRA|MF|90|1991|1
Roy Keane|IRL|MF|88|1971|0
Nedvěd|CZE|MF|89|1972|0
Hagi|ROU|MF|90|1965|0
Deco|POR|MF|87|1977|0
Figo|POR|MF|91|1972|0
Rui Costa|POR|MF|88|1972|0
Bernardo Silva|POR|MF|89|1994|0
Bruno Fernandes|POR|MF|88|1994|0
Özil|GER|MF|89|1988|1
Schweinsteiger|GER|MF|89|1984|1
Khedira|GER|MF|86|1987|1
Overath|GER|MF|88|1943|1
Fritz Walter|GER|MF|89|1920|1
Riquelme|ARG|MF|89|1978|0
Di María|ARG|MF|89|1988|1
Ardiles|ARG|MF|86|1952|1
Mac Allister|ARG|MF|87|1998|1
Enzo Fernández|ARG|MF|86|2001|1
Edgar Davids|NED|MF|87|1973|0
Rijkaard|NED|MF|89|1962|0
Seedorf|NED|MF|88|1976|0
Sneijder|NED|MF|88|1984|0
Francescoli|URU|MF|88|1961|0
Yaya Touré|CIV|MF|89|1983|0
Laudrup|DEN|MF|90|1964|0
Giggs|WAL|MF|89|1973|0
Masopust|CZE|MF|88|1931|0
Haaland|NOR|FW|93|2000|0
Neymar|BRA|FW|93|1992|0
Vinícius Júnior|BRA|FW|91|2000|0
Harry Kane|ENG|FW|91|1993|0
Salah|EGY|FW|92|1992|0
Mané|SEN|FW|89|1992|0
Benzema|FRA|FW|92|1987|0
Luis Suárez|URU|FW|91|1987|0
Cavani|URU|FW|88|1987|0
Forlán|URU|FW|88|1979|0
Eto'o|CMR|FW|90|1981|0
Drogba|CIV|FW|90|1978|0
George Weah|LBR|FW|89|1966|0
Roger Milla|CMR|FW|85|1952|0
Ibrahimović|SWE|FW|91|1981|0
Larsson|SWE|FW|88|1971|0
Stoichkov|BUL|FW|90|1966|0
Batistuta|ARG|FW|91|1969|0
Paolo Rossi|ITA|FW|91|1956|1
Del Piero|ITA|FW|91|1974|1
Totti|ITA|FW|90|1976|1
Meazza|ITA|FW|91|1910|1
Just Fontaine|FRA|FW|89|1933|0
Kopa|FRA|FW|90|1931|0
Trezeguet|FRA|FW|87|1977|1
Rudi Völler|GER|FW|89|1960|1
Rummenigge|GER|FW|91|1955|0
Klinsmann|GER|FW|88|1964|1
Klose|GER|FW|90|1978|1
Uwe Seeler|GER|FW|90|1936|0
Lineker|ENG|FW|88|1960|0
Michael Owen|ENG|FW|88|1979|0
Shearer|ENG|FW|89|1970|0
Rooney|ENG|FW|90|1985|0
Geoff Hurst|ENG|FW|87|1941|1
Dalglish|SCO|FW|90|1951|0
George Best|NIR|FW|91|1946|0
Gareth Bale|WAL|FW|89|1989|0
Hugo Sánchez|MEX|FW|87|1958|0
Blokhin|URS|FW|89|1952|0
Shevchenko|UKR|FW|90|1976|0
Son Heung-min|KOR|FW|88|1992|0
Agüero|ARG|FW|89|1988|0
Julián Álvarez|ARG|FW|87|2000|1
Lautaro Martínez|ARG|FW|88|1997|1
Raúl|ESP|FW|90|1977|0
David Villa|ESP|FW|90|1981|1
Fernando Torres|ESP|FW|89|1984|1
Butragueño|ESP|FW|88|1963|0
Thomas Müller|GER|FW|89|1989|1
Eden Hazard|BEL|FW|90|1991|0
Robben|NED|FW|90|1984|0
Bergkamp|NED|FW|91|1969|0
Roberto Baggio|ITA|FW|93|1967|0
Di Stéfano|ARG|FW|94|1926|0
Kempes|ARG|FW|91|1954|1
Jairzinho|BRA|FW|90|1944|1
Tostão|BRA|FW|90|1947|1`;
const P=RAW.split('\n').map((l,i)=>{const[n,c,p,o,b,w]=l.split('|');return{id:i,n,c,p,o:+o,b:+b,w:w=='1'}});
const F={'4-3-3':{DF:4,MF:3,FW:3},'4-4-2':{DF:4,MF:4,FW:2},'3-5-2':{DF:3,MF:5,FW:2},'3-4-3':{DF:3,MF:4,FW:3}};
const T={'Balanced':[1,1,1],'Possession':[.97,1.08,1],'Counterattack':[1.06,.95,1.02],'High pressing':[1.04,1.05,.93],'Low block':[.92,.97,1.1],'Direct':[1.05,.94,1],'Wide attacking':[1.03,1,.98]};
const POS=['GK','DF','MF','FW'],DIFF=['Beginner','Normal','Professional','Legendary'];
const A=document.querySelector('#app'),$=s=>document.querySelector(s);let S={};let inGame=false,scr='home',ACX=null,PQ='',PT='ALL';
const NET={on:false,me:0,names:['Host','Guest'],send(){},api:{quick(){},create(){},join(){},leave(){}}};
const rnd=seed=>{let a=seed>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
function rec(){const d={w:0,d:0,l:0,hist:[],sc:{},cups:0,str:0,set:{sound:1},ach:{}};try{const x=JSON.parse(localStorage.getItem('rfa')||'');return{...d,...x,set:{...d.set,...x.set},ach:{...d.ach,...x.ach}}}catch(e){return d}}
function saveRec(r){try{localStorage.setItem('rfa',JSON.stringify(r))}catch(e){}}
const FL={GER:'DE',ITA:'IT',ESP:'ES',FRA:'FR',BRA:'BR',ARG:'AR',NED:'NL',POR:'PT',HUN:'HU',POL:'PL',DEN:'DK',CRO:'HR',BEL:'BE',SVN:'SI',CZE:'CZ',SRB:'RS',CAN:'CA',SEN:'SN',MAR:'MA',IRL:'IE',ROU:'RO',NOR:'NO',EGY:'EG',URU:'UY',CMR:'CM',CIV:'CI',LBR:'LR',SWE:'SE',BUL:'BG',MEX:'MX',UKR:'UA',KOR:'KR',CRC:'CR',NIR:'GB'},SUB={ENG:'gbeng',SCO:'gbsct',WAL:'gbwls'};
const flag=c=>SUB[c]?String.fromCodePoint(0x1F3F4,...[...SUB[c]].map(x=>0xE0000+x.charCodeAt(0)),0xE007F):FL[c]?String.fromCodePoint(...[...FL[c]].map(x=>127397+x.charCodeAt(0))):'🌐';
const tier=o=>o>=96?'ic':o>=92?'go':o>=90?'si':'br';
const IC={ko:'⏱️',ht:'⏸️',ft:'🏁',goal:'⚽',save:'🧤',miss:'💨',corner:'🚩',yellow:'🟨',red:'🟥',pen:'🎯'};
function home(){clearInterval(S.tm);clearTimeout(S.ct);if(NET.on){NET.on=false;NET.api.leave()}inGame=false;scr='home';const r=rec(),n=r.w+r.d+r.l;
A.innerHTML=`<section class="hero a"><div class=orb></div><div class=ring><span>R</span></div><h1>ROOHU<b>FOOTBALL ARENA</b></h1><p>Draft legends. Build your XI. Win the final.</p></section>
<div class="mode a" style="--d:.1s"><div class=mh><span class=mi>🤖</span><div><h3>Play vs CPU</h3><small>Choose your rival’s strength</small></div></div><div class=chips>${DIFF.map((d,i)=>`<button class="chip lv${i}" onclick="start('cpu',${i})">${d}</button>`).join('')}</div></div>
<div class="mode a" style="--d:.15s"><div class=mh><span class=mi>🌐</span><div><h3>Play online<span class=nw>NEW</span></h3><small>Real players · quick match or private room</small></div></div><button class="p big" style="margin:0" onclick="onlineHub()">Play online</button></div>
<div class="mode a" style="--d:.2s"><div class=mh><span class=mi>👥</span><div><h3>Pass and play</h3><small>Two players, one device</small></div></div><button class="p big" style="margin:0" onclick="start('local',0)">Start match-up</button></div>
<div class="rec a" style="--d:.3s"><div><b>${r.w}</b><small>Wins</small></div><div><b>${r.d}</b><small>Draws</small></div><div><b>${r.l}</b><small>Losses</small></div><div><b>${n?Math.round(r.w/n*100):0}%</b><small>Win rate</small></div></div>
<p class="mu a" style="--d:.4s;text-align:center">Ratings are game ratings, not official statistics. Offline modes plus online multiplayer.</p>${navbar('h')}`}
function start(mode,d){inGame=true;S={mode,d,me:mode=='online'?NET.me:0,q:'',rdy:[0,0],rq:[0,0],names:mode=='cpu'?['You','CPU']:mode=='online'?[...NET.names]:['Player 1','Player 2'],form:[],picks:[[],[]],tac:[],tab:'ALL',t:0,order:Array.from({length:22},(_,k)=>[0,1,1,0][k%4])};formation(S.me)}
const isCpu=s=>S.mode=='cpu'&&s==1;
function fdots(f){const q=F[f],ys={GK:88,DF:68,MF:44,FW:20};let h='';POS.forEach(pos=>{const n=pos=='GK'?1:q[pos];for(let j=0;j<n;j++)h+=`<i style="left:${(j+1)/(n+1)*100}%;top:${ys[pos]}%"></i>`});return h}
function formation(s){A.innerHTML=`<div class=a><h2>${S.names[s]}<b>Choose your formation</b></h2></div><div class=fgrid>${Object.keys(F).map((f,i)=>`<button class="fc a" style="--d:${i*.07}s" onclick="setF(${s},'${f}')"><div class=mp>${fdots(f)}</div><strong>${f}</strong></button>`).join('')}</div>`}
function setF(s,f,rm){S.form[s]=f;if(S.mode=='online'){if(!rm)NET.send({t:'form',s,f});if(S.form[0]&&S.form[1])draft();else if(!rm)wait('Waiting for '+S.names[1-S.me]+' to choose a formation…');return}if(s==0){if(S.mode=='cpu'){const k=Object.keys(F);S.form[1]=k[Math.random()*k.length|0];draft()}else formation(1)}else draft()}
function need(s,pos){return(pos=='GK'?1:F[S.form[s]][pos])-S.picks[s].filter(i=>P[i].p==pos).length}
function pitch(s,anim){const f=F[S.form[s]],ps=S.picks[s].map(i=>P[i]),ys={GK:90,DF:72,MF:48,FW:22};let h=`<div class="pitch ${anim?'in':''}"><i class=cc></i><i class=bx></i><i class="bx b2"></i>`,k=0;
POS.forEach(pos=>{const n=pos=='GK'?1:f[pos],a=ps.filter(p=>p.p==pos);for(let j=0;j<n;j++){const p=a[j],x=(j+1)/(n+1)*100;h+=`<div class="dot ${p?tier(p.o):'e'} ${p&&p.id===S.last?'new':''}" style="left:${x}%;top:${ys[pos]}%;--i:${k++}"><i>${p?p.o:'+'}</i>${p?`<u>${p.n.split(' ').pop()}</u>`:''}</div>`}});return h+'</div>'}
function dlist(s){const tk=S.picks.flat(),cpu=isCpu(s),wt=S.mode=='online'&&s!=S.me,q=(S.q||'').trim();
const l=P.filter(p=>!tk.includes(p.id)&&(S.tab=='ALL'||p.p==S.tab)&&(!q||(p.n+' '+p.c).toLowerCase().includes(q))).sort((a,b)=>b.o-a.o);
return l.length?l.map(p=>`<button class="pc ${tier(p.o)}" ${need(s,p.p)>0&&!cpu&&!wt?'':'disabled'} onclick="pick(${p.id})"><em>${p.o}</em><span class=ps>${p.p}</span><span class=fl>${flag(p.c)}</span><b>${p.n}</b><small>${p.c}</small></button>`).join(''):'<p class=mu style="grid-column:1/-1;text-align:center">No players match.</p>'}
function ovr(s){const a=S.picks[s];return a.length?Math.round(a.reduce((x,i)=>x+P[i].o,0)/a.length):0}
function setQ(v){S.q=v.toLowerCase().replace(/[<>"]/g,'');const e=$('#dg');if(e&&S.t<22)e.innerHTML=dlist(S.order[S.t])}
function draft(){if(S.t>=22){tactics(S.mode=='online'?S.me:0);return}const s=S.order[S.t],cpu=isCpu(s),wt=S.mode=='online'&&s!=S.me;
A.innerHTML=`<div class=dh><div><small>Pick ${S.t+1} of 22 · ${S.form[s]}${S.mode=='online'?' · <i class=live></i>Online':''}</small><h2>${S.names[s]}<b>${cpu||wt?'is picking…':S.mode=='local'?'your turn':'your pick'}</b></h2></div><div class=ovr><b>${ovr(s)||'--'}</b><small>Squad OVR</small></div></div><div class="pg w"><i style="--w:${S.t/22*100}%"></i></div>${pitch(s)}
<div class=tabs>${['ALL',...POS].map(t=>`<button class="${S.tab==t?'on':''}" onclick="setTab('${t}')">${t}${t!='ALL'?' '+need(s,t):''}</button>`).join('')}</div>
<input class="inp sb" placeholder="Search name or country…" value="${S.q||''}" oninput="setQ(this.value)"><div class=grid id=dg>${dlist(s)}</div>`;
clearTimeout(S.ct);if(cpu)S.ct=setTimeout(cpuPick,700)}
function pick(id,rm){const s=S.order[S.t];if(S.picks.flat().includes(id)||need(s,P[id].p)<1)return;if(S.mode=='online'&&!rm){if(s!=S.me)return;NET.send({t:'pick',id})}S.picks[s].push(id);S.last=id;snd('pick');S.t++;draft()}
function cpuPick(){if(!inGame||S.t>=22)return;const s=S.order[S.t],tk=S.picks.flat(),nz=[25,12,5,0][S.d];
const c=P.filter(p=>!tk.includes(p.id)&&need(s,p.p)>0).map(p=>({p,v:p.o+Math.random()*nz})).sort((a,b)=>b.v-a.v);pick(c[0].p.id)}
function str(s){const ps=S.picks[s].map(i=>P[i]),av=pos=>{const a=ps.filter(p=>p.p==pos);return a.reduce((x,p)=>x+p.o,0)/a.length},nat={};
ps.forEach(p=>nat[p.c]=(nat[p.c]||0)+1);const chem=Object.values(nat).filter(n=>n>1).reduce((x,n)=>x+n,0)/11*2,t=T[S.tac[s]||'Balanced'],b=(S.cup&&S.bo?S.bo[s]:isCpu(s)?[-4,0,2,4][S.d]:0)+chem;
return{ps,chem,att:(av('FW')*.6+av('MF')*.4)*t[0]+b,mid:av('MF')*t[1]+b,def:(av('DF')*.7+av('GK')*.3)*t[2]+b,gk:ps.find(p=>p.p=='GK')}}
function tactics(s,f=1){S.tac[s]=S.tac[s]||'Balanced';const q=str(s),a=f?'a':'',bar=(l,v)=>`<div class=br><span>${l}</span><div><i style="--w:${cl((v-70)/30*100,5,100)}%"></i></div><b>${v.toFixed(0)}</b></div>`;
A.innerHTML=`<div class="${a}"><h2>${S.names[s]}<b>Tactics · ${S.form[s]}</b></h2></div>${pitch(s,f)}<div class="card ${a}">${bar('Attack',q.att)}${bar('Midfield',q.mid)}${bar('Defence',q.def)}<small>Chemistry bonus +${q.chem.toFixed(1)}</small></div>
<div class=chips>${Object.keys(T).map(t=>`<button class="chip ${S.tac[s]==t?'on':''}" onclick="setTac(${s},'${t}')">${t}</button>`).join('')}</div><button class="p big" onclick="tacDone(${s})">Confirm lineup ▶</button>`}
function tacDone(s,rm){if(S.mode=='online'){S.rdy[s]=1;if(!rm)NET.send({t:'tac',s,tac:S.tac[s]||'Balanced'});if(S.rdy[0]&&S.rdy[1]){if(S.me==0)goOnline();else wait('Kick-off incoming…')}else if(!rm)wait('Waiting for '+S.names[1-S.me]+' to confirm their lineup…');return}if(s==0){if(S.mode=='cpu'){const k=Object.keys(T);S.tac[1]=k[Math.random()*k.length|0];afterTac()}else tactics(1)}else afterTac()}function afterTac(){S.cup?cupInit():match()}
function sim(seed){const R=rnd(seed),Tm=[str(0),str(1)],ev=[],sc=[0,0],st=[0,1].map(()=>({sh:0,sot:0,co:0,fo:0,yc:0,rc:0,pos:0})),pm=[1,1],pl={};
const ps=i=>pl[i]||(pl[i]={g:0,a:0,s:0}),add=(m,side,type,text)=>ev.push({m,side,type,text,sc:[...sc]});
const pw=(arr,w)=>{let t=arr.reduce((x,p)=>x+w(p),0),r=R()*t;for(const p of arr){r-=w(p);if(r<=0)return p}return arr[arr.length-1]};
function run(from,to,k){for(let m=from;m<=to;m++){const p=1/(1+Math.exp(-(Tm[0].mid*pm[0]-Tm[1].mid*pm[1])/6));st[R()<p?0:1].pos++;if(R()>.3*k)continue;
const a=R()<p?0:1,d=1-a,TA=Tm[a],TD=Tm[d],q=TA.att*pm[a]-TD.def*pm[d],N=S.names;
if(R()<cl(.5+q/80,.25,.8)){const sh=pw(TA.ps.filter(x=>x.p!='GK'),x=>({FW:3,MF:1.2,DF:.2}[x.p])*x.o*x.o);st[a].sh++;
if(R()<cl(.42+q/120,.25,.65)){st[a].sot++;if(R()<cl(.3+(sh.o-TD.gk.o)/120+q/220,.1,.55)){sc[a]++;const as=R()<.7?pw(TA.ps.filter(x=>x!==sh&&x.p!='GK'),x=>x.p=='MF'?2:1):null;ps(sh.id).g++;if(as)ps(as.id).a++;add(m,a,'goal','GOAL! '+sh.n+' scores for '+N[a]+(as?' (assist: '+as.n+')':'')+'.')}
else{ps(TD.gk.id).s++;add(m,a,'save',TD.gk.n+' saves a shot from '+sh.n+'.')}}else add(m,a,'miss',sh.n+' fires wide.')}
else{const x=R();if(x<.4){st[a].co++;add(m,a,'corner','Corner for '+N[a]+'.')}else if(x<.75){const df=TD.ps.filter(y=>y.p!='GK')[R()*10|0];st[d].fo++;
if(R()<.07){const tk=TA.ps.filter(y=>y.p=='FW').sort((u,v)=>v.o-u.o)[0],ok=R()<.78;st[a].sh++;if(ok){st[a].sot++;sc[a]++;ps(tk.id).g++}add(m,a,ok?'goal':'save','Penalty to '+N[a]+'! '+tk.n+(ok?' scores!':' misses!'))}
else if(R()<.015){st[d].rc++;pm[d]*=.93;add(m,d,'red','RED CARD! '+df.n+' is sent off.')}else if(R()<.2){st[d].yc++;add(m,d,'yellow','Yellow card: '+df.n+'.')}}}}}
add(0,-1,'ko','Kick-off! '+S.names[0]+' vs '+S.names[1]+'.');run(1,45,1);add(45,-1,'ht','Half-time.');run(46,90,1);add(90,-1,'ft','Full-time.');
if(sc[0]==sc[1]){add(90,-1,'ht','Level after 90. Extra time.');run(91,105,.8);run(106,120,.8);add(120,-1,'ft','End of extra time.')}
let pens=null;if(sc[0]==sc[1]){pens=[0,0];add(120,-1,'ko','Penalty shootout!');const tk=[0,1].map(s=>Tm[s].ps.filter(p=>p.p!='GK').sort((x,y)=>y.o-x.o));
for(let rd=0;rd<5||(pens[0]==pens[1]&&rd<20);rd++)for(const s of[0,1]){const k=tk[s][rd%10],ok=R()<cl(.76+(k.o-Tm[1-s].gk.o)/250,.55,.92);if(ok)pens[s]++;add(120,s,'pen',k.n+(ok?' scores':' misses')+' ('+pens[0]+'-'+pens[1]+').')}
if(pens[0]==pens[1])pens[0]++}
const win=sc[0]!=sc[1]?(sc[0]>sc[1]?0:1):(pens[0]>pens[1]?0:1);let potm=null;
[0,1].forEach(s=>Tm[s].ps.forEach(p=>{const z=pl[p.id]||{g:0,a:0,s:0};const r=6+z.g*1.2+z.a*.7+z.s*.25+(R()-.5)+(win==s?.3:0)+((p.p=='GK'||p.p=='DF')&&sc[1-s]==0?.4:0);if(!potm||r>potm.r)potm={n:p.n,r,s}}));
const tp=st[0].pos+st[1].pos;st.forEach(x=>x.pp=Math.round(x.pos/tp*100));return{ev,sc,st,pens,win,seed,potm,pl}}
function match(sd){S.seed=typeof sd=='number'?sd:Math.floor(Math.random()*1e9);S.res=sim(S.seed);
A.innerHTML=`<div class="sbd a" id=sbd><div class=tn>${S.names[0]}<small>${S.tac[0]} · ${S.form[0]}</small></div><div class=sc><span id=s0>0</span><i>:</i><span id=s1>0</span></div><div class=tn>${S.names[1]}<small>${S.tac[1]} · ${S.form[1]}</small></div></div>
<div class="mpb a"><i id=mp></i><span id=tm>0′</span></div><div id=gb class=gb></div>
<div class="row3 a" id=ctl><button onclick="play(350)">▶ Normal</button><button onclick="play(70)">⏩ Fast</button><button class=p onclick="play(0)">⚡ Instant</button></div>${S.mode=='online'?'<div class=emo>'+['👏','🔥','😮','😂','🤝'].map(e=>`<button onclick="emoji('${e}')">${e}</button>`).join('')+'</div>':''}<div id=feed></div><div id=fin></div>`}
function play(sp){const R=S.res;let i=0;$('#ctl').style.display='none';if(sp)snd('whistle');const f=$('#feed'),step=()=>{const e=R.ev[i++];$('#s0').textContent=e.sc[0];$('#s1').textContent=e.sc[1];$('#tm').textContent=e.m+'′';$('#mp').style.width=Math.min(100,e.m/120*100)+'%';
f.insertAdjacentHTML('afterbegin','<div class="ev '+e.type+'"><span>'+(IC[e.type]||'•')+'</span><p><b>'+e.m+'′</b> '+e.text+'</p></div>');
if(sp&&e.type=='goal'){snd('goal');try{navigator.vibrate(120)}catch(x){}const g=$('#gb'),b=$('#sbd');g.textContent=e.text;g.className='gb';b.className='sbd';void g.offsetWidth;g.className='gb show';b.className='sbd flash'}};
if(!sp){while(i<R.ev.length)step();fin();return}S.tm=setInterval(()=>{if(i>=R.ev.length){clearInterval(S.tm);fin()}else step()},sp)}
function confetti(){const c=document.createElement('div');c.className='cf';let h='';for(let i=0;i<46;i++)h+=`<i style="left:${Math.random()*100}%;--d:${Math.random()*1.2}s;--c:${['#19e36b','#ffd54a','#fff','#47c6ff'][i%4]};--r:${Math.random()*720}deg"></i>`;c.innerHTML=h;document.body.appendChild(c);setTimeout(()=>c.remove(),4200)}
function snd(k){if(!rec().set.sound)return;try{ACX=ACX||new (window.AudioContext||window.webkitAudioContext)();const t=ACX.currentTime,tone=(f,d,o=0,v=.12)=>{const os=ACX.createOscillator(),g=ACX.createGain();os.frequency.value=f;os.type='triangle';g.gain.setValueAtTime(v,t+o);g.gain.exponentialRampToValueAtTime(.001,t+o+d);os.connect(g);g.connect(ACX.destination);os.start(t+o);os.stop(t+o+d)};
if(k=='pick'){tone(660,.08);tone(880,.1,.07)}else if(k=='goal')[523,659,784,1047].forEach((f,i)=>tone(f,.25,i*.09,.15));else if(k=='whistle')tone(2300,.35,0,.1);else if(k=='win')[392,523,659,784,1047].forEach((f,i)=>tone(f,.3,i*.12,.15))}catch(e){}}
const RNAME=C=>(C.size==4?['Semi-finals','Final']:['Quarter-finals','Semi-finals','Final'])[C.rounds.length-1];
function fin(){const R=S.res,st=R.st,w=S.names[R.win],me=S.mode=='cpu'?R.win==0:S.mode=='online'?R.win==S.me:true,r=rec();
if(S.mode=='cpu'){if(R.win==0){r.w++;r.str++;if(S.d==3)r.ach.leg=1;if(R.pens)r.ach.pen=1;if(r.str>=3)r.ach.s3=1}else{r.l++;r.str=0}}else if(S.mode=='online'){if(R.win==S.me){r.w++;r.str++;r.ach.on=1;if(R.pens)r.ach.pen=1;if(r.str>=3)r.ach.s3=1}else{r.l++;r.str=0}}
Object.entries(R.pl).forEach(([id,z])=>{if(z.g>0&&(S.mode=='local'||S.picks[S.me||0].includes(+id))){r.sc[P[id].n]=(r.sc[P[id].n]||0)+z.g;if(z.g>=3)r.ach.hat=1}});
r.hist.unshift({t:Date.now(),a:S.names[0],b:S.names[1],s:R.sc,p:R.pens,w:R.win,m:S.cup?'Cup':S.mode=='cpu'?'vs '+DIFF[S.d]:S.mode=='online'?'Online':'Local'});r.hist=r.hist.slice(0,20);saveRec(r);
const bar=(l,a,b,x='')=>{const t=(a+b)||1;return `<div class=sr><b>${a}${x}</b><div>${l}<div class=sp><i style="--w:${a/t*100}%"></i></div></div><b>${b}${x}</b></div>`};
$('#fin').innerHTML=`<div class="card res a"><div class=tr>${me?'🏆':'🥈'}</div><h2>${w} ${w=='You'?'win':'wins'}<b>${S.cup?RNAME(S.cup):'the final'}</b></h2><div class=fs>${R.sc[0]} - ${R.sc[1]}</div>${R.pens?`<small>Penalties ${R.pens[0]} - ${R.pens[1]}</small>`:''}
<div style="margin-top:12px">${bar('Possession',st[0].pp,st[1].pp,'%')}${bar('Shots',st[0].sh,st[1].sh)}${bar('On target',st[0].sot,st[1].sot)}${bar('Corners',st[0].co,st[1].co)}${bar('Fouls',st[0].fo,st[1].fo)}${bar('Yellow cards',st[0].yc,st[1].yc)}${bar('Red cards',st[0].rc,st[1].rc)}</div>
<div class=potm>⭐ Player of the Match: <b>${R.potm.n}</b> (${R.potm.r.toFixed(1)})</div><small>Match seed ${R.seed}: same squads and seed always give the same match.</small>
<div class=row3>${S.cup?'<button class=p onclick="cupNext()">Continue ▶</button>':S.mode=='online'?'<button id=rqb class=p onclick="rematch()">Rematch</button><button onclick="leaveOnline()">Leave</button>':'<button class=p onclick="match()">Rematch</button><button onclick="home()">New game</button>'}</div></div>`;if(me){confetti();snd('win')}}
function navbar(a){return `<nav class=nav>${[['h','🏠','Play','home()'],['c','🏆','Cup','cupSetup()'],['p','👤','Players','players()'],['s','📊','Stats','hall()'],['g','⚙️','Settings','settings()']].map(x=>`<button class="${a==x[0]?'on':''}" onclick="${x[3]}"><span>${x[1]}</span>${x[2]}</button>`).join('')}</nav>`}
function plist(){const q=PQ.trim();return P.filter(p=>(PT=='ALL'||p.p==PT)&&(!q||(p.n+' '+p.c).toLowerCase().includes(q))).sort((a,b)=>b.o-a.o).map(p=>`<button class="pc ${tier(p.o)}" onclick="prof(${p.id})"><em>${p.o}</em><span class=ps>${p.p}</span><span class=fl>${flag(p.c)}</span><b>${p.n}</b><small>${p.w?'🏆 ':''}${p.c} · b. ${p.b}</small></button>`).join('')||'<p class=mu style="grid-column:1/-1;text-align:center">No players match.</p>'}
function setPq(v){PQ=v.toLowerCase().replace(/[<>"]/g,'');const e=$('#pgr');if(e)e.innerHTML=plist()}
function players(t='ALL'){scr='tab';PT=t;A.innerHTML=`<h2 class=a>Player<b>Database · ${P.length} legends</b></h2><div class=tabs>${['ALL',...POS].map(x=>`<button class="${t==x?'on':''}" onclick="players('${x}')">${x}</button>`).join('')}</div><input class="inp sb" placeholder="Search name or country…" value="${PQ}" oninput="setPq(this.value)"><div class=grid id=pgr>${plist()}</div>${navbar('p')}`}
function prof(id){const p=P[id];scr='tab';A.innerHTML=`<div class=a><button onclick="players()">← Back</button></div><div class="pc ${tier(p.o)} pf a"><em>${p.o}</em><span class=ps>${p.p}</span><span class=fl>${flag(p.c)}</span><b>${p.n}</b></div><div class="card a lst"><div><span>Nation</span><b>${flag(p.c)} ${p.c}</b></div><div><span>Position</span><b>${{GK:'Goalkeeper',DF:'Defender',MF:'Midfielder',FW:'Forward'}[p.p]}</b></div><div><span>Born</span><b>${p.b}</b></div><div><span>Won a World Cup as a player</span><b>${p.w?'Yes 🏆':'No'}</b></div><div><span>Card tier</span><b>${{ic:'Icon',go:'Gold',si:'Silver',br:'Bronze'}[tier(p.o)]}</b></div></div><p class=mu>Ratings are game ratings, not official statistics.</p>${navbar('p')}`}
function hall(){scr='tab';const r=rec(),n=r.w+r.d+r.l,top=Object.entries(r.sc).sort((a,b)=>b[1]-a[1]).slice(0,5);
const AL=[['🥇','First win',r.w>=1],['🔥','3 wins in a row',r.ach.s3],['🎩','Hat-trick hero',r.ach.hat],['🎯','Won on penalties',r.ach.pen],['👑','Beat Legendary CPU',r.ach.leg],['🏆','Cup champion',r.cups>=1],['🏟️','Play 10 matches',n>=10],['🌐','Won an online match',r.ach.on]];
A.innerHTML=`<h2 class=a>Hall<b>of fame</b></h2><div class="rec a"><div><b>${r.w}</b><small>Wins</small></div><div><b>${r.l}</b><small>Losses</small></div><div><b>${r.cups}</b><small>Cups</small></div><div><b>${n?Math.round(r.w/n*100):0}%</b><small>Win rate</small></div></div>
<div class="card a"><h3>Top scorers</h3><div class=lst>${top.length?top.map((x,i)=>`<div><span>${i+1}. ${x[0]}</span><b>${x[1]} ⚽</b></div>`).join(''):'<small>Play a match to fill this in.</small>'}</div></div>
<div class="card a"><h3>Achievements</h3><div class=ach>${AL.map(x=>`<div class="${x[2]?'':'lock'}">${x[0]} ${x[1]}</div>`).join('')}</div></div>
<div class="card a"><h3>Recent matches</h3><div class=lst>${r.hist.length?r.hist.slice(0,10).map(h=>`<div><span>${h.a} ${h.s[0]}-${h.s[1]} ${h.b}${h.p?' (pens '+h.p[0]+'-'+h.p[1]+')':''}</span><b>${h.m}</b></div>`).join(''):'<small>No matches yet.</small>'}</div></div>${navbar('s')}`}
function settings(){scr='tab';const r=rec();A.innerHTML=`<h2 class=a>Settings<b>Roohu Football Arena</b></h2><div class="card a lst"><div><span>Sound effects</span><button class="chip ${r.set.sound?'on':''}" style="flex:none" onclick="setSound()">${r.set.sound?'On':'Off'}</button></div><div><span>Erase stats and history</span><button class=chip style="flex:none" onclick="resetAll()">Reset</button></div></div>
<div class="card a"><h3>About</h3><p class=mu>Ratings are game ratings, not official statistics. Birth years and World Cup winner badges are factual. Matches are simulated from a stored seed. Offline modes work without internet. Online matches use a direct peer-to-peer link between the two phones, and the match result is computed identically on both from a shared seed.</p></div>${navbar('g')}`}
function setSound(){const r=rec();r.set.sound=r.set.sound?0:1;saveRec(r);settings()}
function resetAll(){if(window.confirm('Erase all stats and history?')){try{localStorage.removeItem('rfa')}catch(e){}settings()}}
const CN=['Thunder FC','Royal Lions','Desert Kings','Neon Wolves','Iron Eagles','Crimson Stars','Golden Falcons','Night Owls'];
function cupSetup(){scr='tab';A.innerHTML=`<h2 class=a>Full Cup<b>Knockout tournament</b></h2>${[4,8].map(n=>`<div class="mode a"><div class=mh><span class=mi>🏆</span><div><h3>${n}-team cup</h3><small>${n==4?'Semi-finals and final':'Quarter-finals, semi-finals, final'}</small></div></div><div class=chips>${DIFF.map((d,i)=>`<button class="chip lv${i}" onclick="cupGo(${n},${i})">${d}</button>`).join('')}</div></div>`).join('')}<p class=mu>You draft against a rival in round one. The other teams are built by the CPU.</p>${navbar('c')}`}
function cupGo(n,d){start('cpu',d);S.cup={size:n}}
function cupInit(){const C=S.cup,bo=[-4,0,2,4][S.d],nz=[25,12,5,0][S.d]+6,fk=Object.keys(F),tk=Object.keys(T),nm=[...CN].sort(()=>Math.random()-.5);
const tm=[{name:'You',form:S.form[0],tac:S.tac[0],picks:[...S.picks[0]],bo:0},{name:nm.pop(),form:S.form[1],tac:S.tac[1],picks:[...S.picks[1]],bo}];
while(tm.length<C.size){const form=fk[Math.random()*fk.length|0],picks=[];POS.forEach(pos=>{const n=pos=='GK'?1:F[form][pos];P.filter(p=>p.p==pos).map(p=>({p,v:p.o+Math.random()*nz})).sort((a,b)=>b.v-a.v).slice(0,n).forEach(x=>picks.push(x.p.id))});tm.push({name:nm.pop(),form,tac:tk[Math.random()*tk.length|0],picks,bo})}
C.teams=tm;C.rounds=[cupPairs(tm.map((_,i)=>i))];C.champ=null;C.paid=0;cupHub()}
function cupPairs(ids){const o=[];for(let i=0;i<ids.length;i+=2)o.push({a:ids[i],b:ids[i+1],w:null,sa:0,sb:0,p:null});return o}
function sides(a,b){const C=S.cup,x=C.teams[a],y=C.teams[b];S.names=[x.name,y.name];S.form=[x.form,y.form];S.picks=[x.picks,y.picks];S.tac=[x.tac,y.tac];S.bo=[x.bo,y.bo]}
function cupDone(g,R){g.sa=R.sc[0];g.sb=R.sc[1];g.p=R.pens;g.w=R.win==0?g.a:g.b}
function cupSettle(){const C=S.cup,r=C.rounds[C.rounds.length-1];
for(const g of r)if(g.w==null&&g.a!=0&&g.b!=0){sides(g.a,g.b);cupDone(g,sim(Math.floor(Math.random()*1e9)))}
if(r.every(g=>g.w!=null)){if(r.length==1){C.champ=r[0].w;if(C.champ==0&&!C.paid){C.paid=1;const q=rec();q.cups++;q.ach.cup=1;saveRec(q)}}else C.rounds.push(cupPairs(r.map(g=>g.w)))}}
function cupHub(){const C=S.cup,T0=C.teams;inGame=true;scr='game';
const me=C.rounds[C.rounds.length-1].find(g=>g.w==null&&(g.a==0||g.b==0));
A.innerHTML=`<h2 class=a>${C.champ!=null?'Cup':RNAME(C)}<b>${C.size}-team knockout</b></h2>${C.champ!=null?`<div class="card res a"><div class=tr>${C.champ==0?'🏆':'👑'}</div><h2>${T0[C.champ].name}<b>${C.champ==0?'are the champions':'win the cup'}</b></h2></div>`:''}
${C.rounds.map((r,ri)=>`<div class="card a"><h3>${C.size==4?['Semi-finals','Final'][ri]:['Quarter-finals','Semi-finals','Final'][ri]}</h3>${r.map(g=>`<div class=gm><b class="${g.a==0?'me':''}">${T0[g.a].name}</b><i>${g.w!=null?g.sa+'-'+g.sb:'vs'}</i><b class="${g.b==0?'me':''}">${T0[g.b].name}</b></div>${g.p?`<small class=mu>Penalties ${g.p[0]}-${g.p[1]}</small>`:''}`).join('')}</div>`).join('')}
${C.champ!=null?'<button class="p big" onclick="home()">Back to menu</button>':me?'<button class="p big" onclick="cupPlay()">Play your match ▶</button>':'<button class="p big" onclick="cupSim()">Simulate next round ▶</button>'}`;
if(C.champ==0){confetti();snd('win')}}
function cupPlay(){const C=S.cup,g=C.rounds[C.rounds.length-1].find(g=>g.w==null&&(g.a==0||g.b==0));C.cur=g;sides(g.a,g.b);match()}
function cupNext(){cupDone(S.cup.cur,S.res);cupSettle();cupHub()}
function cupSim(){cupSettle();cupHub()}
function setTab(t){S.tab=t;draft()}
function setTac(s,t){S.tac[s]=t;tactics(s,0)}
function isInGame(){return inGame}
home();
// ---------- Online multiplayer (game protocol; transport lives in online.ts) ----------
// Both phones run the same deterministic game. Each player's choices (formation, picks, tactics) are
// mirrored to the other phone; the host picks the match seed, so sim(seed) gives the same result on both.
const myName=()=>(rec().set.name||'Player').slice(0,14);
function setName(v){const r=rec();r.set.name=v.replace(/[<>"]/g,'').slice(0,14);saveRec(r)}
function onlineHub(){scr='tab';A.innerHTML=`<h2 class=a>Play online<b>Real players · real matches</b></h2>
<div class="card a"><h3>Your name</h3><input id=nm class=inp maxlength=14 placeholder="Player" value="${rec().set.name||''}" oninput="setName(this.value)"></div>
<div class="mode a" style="--d:.08s"><div class=mh><span class=mi>⚡</span><div><h3>Quick match</h3><small>Get paired with another player who is searching</small></div></div><button class="p big" style="margin:0" onclick="netQuick()">Find opponent</button></div>
<div class="mode a" style="--d:.16s"><div class=mh><span class=mi>🔒</span><div><h3>Private room</h3><small>Create a code and send it to a friend</small></div></div><button class="p big" style="margin:0" onclick="netCreate()">Create room</button>
<div class=jr><input id=cd class="inp code" maxlength=5 placeholder="CODE" autocapitalize=characters><button class=p onclick="netJoin(document.getElementById('cd').value)">Join</button></div></div>
<p class="mu a" style="--d:.24s;text-align:center">Needs an internet connection on both phones. Both players need this version of the app.</p>${navbar('h')}`}
function netQuick(){NET.api.quick()}function netCreate(){NET.api.create()}function netJoin(c){NET.api.join(c)}
function wait(m,sub,code){scr='game';A.innerHTML=`<div class="wait a"><div class=spin></div><h3>${m}</h3>${sub?`<small>${sub}</small>`:''}${code?`<div class=code>${code}</div><button class="p big" onclick="shareCode('${code}')">Share code</button>`:''}<button class=big onclick="leaveOnline()">Cancel</button></div>`}
function shareCode(c){const t='Play me on Roohu Football Arena! Room code: '+c;try{if(navigator.share)navigator.share({text:t}).catch(()=>{});else if(navigator.clipboard){navigator.clipboard.writeText(t);toast('Code copied')}}catch(e){}}
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),2400)}
function leaveOnline(){home()}
function netStart(me,names){NET.on=true;NET.me=me;NET.names=[String(names[0]||'Host'),String(names[1]||'Guest')];if(NET.names[0]==NET.names[1])NET.names[1]+=' 2';start('online',0)}
function netEnd(why){if(!NET.on)return;NET.on=false;inGame=false;clearInterval(S.tm);scr='game';A.innerHTML=`<div class="wait a"><div class=tr>📡</div><h3>${why}</h3><button class="p big" onclick="home()">Back to menu</button></div>`}
function goOnline(){const sd=Math.floor(Math.random()*1e9);NET.send({t:'go',seed:sd});match(sd)}
function rematch(s,rm){if(s==null)s=S.me;S.rq[s]=1;if(!rm)NET.send({t:'rq',s});if(S.rq[0]&&S.rq[1]){S.rq=[0,0];if(S.me==0)goOnline();else wait('Starting rematch…')}else if(!rm){const b=$('#rqb');if(b){b.textContent='Waiting for opponent…';b.disabled=true}}else toast(S.names[s]+' wants a rematch')}
const EMO=['👏','🔥','😮','😂','🤝'];
function emoji(e){if(!NET.on||!EMO.includes(e))return;NET.send({t:'em',e});toast('You '+e)}
function netMsg(m){if(!NET.on||!m||typeof m!='object')return;const o=1-S.me;
if(m.t=='form'){if(m.s===o&&F[m.f])setF(o,m.f,1)}
else if(m.t=='pick'){if(S.order[S.t]===o&&P[m.id])pick(m.id,1)}
else if(m.t=='tac'){if(m.s===o&&T[m.tac]){S.tac[o]=m.tac;tacDone(o,1)}}
else if(m.t=='go'){if(S.me==1&&typeof m.seed=='number')match(m.seed)}
else if(m.t=='rq'){if(m.s===o)rematch(o,1)}
else if(m.t=='em'){if(EMO.includes(m.e))toast(S.names[o]+' '+m.e)}}
function isHome(){return scr=='home'&&!inGame}
export {home,start,setF,pick,draft,tactics,tacDone,match,play,setTab,setTac,isInGame,isHome,players,prof,hall,settings,setSound,resetAll,cupSetup,cupGo,cupPlay,cupNext,cupSim,NET,netStart,netMsg,netEnd,wait,toast,onlineHub,myName,setName,netQuick,netCreate,netJoin,leaveOnline,shareCode,rematch,emoji,setQ,setPq};
