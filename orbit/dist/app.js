'use strict';
const planets = [
 {name:'Mercury',type:'Terrestrial planet',nick:'Small world. Extreme days.',symbol:'☿',diameter:4879,distance:57.9,year:0.24085,rotation:1407.5,mass:0.3301,gravity:3.70,temp:167,tilt:0.034,rings:false,colours:['#a8a39a','#77756f','#d0c9bc'],colour:'Grey and brown, with a heavily cratered rocky surface.',desc:'The smallest planet and the closest to the Sun. Its thin exosphere offers little protection from dramatic changes in temperature.',atmosphere:'Very thin exosphere',moon:'No moons',size:4.5,angle:2.2},
 {name:'Venus',type:'Terrestrial planet',nick:'Beautiful. Blisteringly hot.',symbol:'♀',diameter:12104,distance:108.2,year:0.6152,rotation:-5832.4,mass:4.8673,gravity:8.87,temp:464,tilt:177.4,rings:false,colours:['#dcc28e','#b99a62','#f1dfb0'],colour:'Cream and pale yellow clouds hide its rocky surface.',desc:'A rocky world wrapped in thick clouds. Its carbon dioxide atmosphere traps heat, making Venus hotter than Mercury despite being farther from the Sun.',atmosphere:'Mostly carbon dioxide',moon:'No moons',size:7.2,angle:4.0},
 {name:'Earth',type:'Terrestrial planet',nick:'Our pale blue dot.',symbol:'♁',diameter:12756,distance:149.6,year:1.0000,rotation:23.934,mass:5.9722,gravity:9.80,temp:15,tilt:23.4,rings:false,colours:['#347cbd','#6c9673','#e2eaf0'],colour:'Blue oceans, green and brown land, and white clouds.',desc:'Our home is a rocky planet with liquid oceans and an atmosphere that supports life. It is the only world currently known to be inhabited.',atmosphere:'Nitrogen & oxygen',moon:'One moon',size:8.0,angle:5.6},
 {name:'Mars',type:'Terrestrial planet',nick:'A rusty world of possibilities.',symbol:'♂',diameter:6792,distance:228.0,year:1.88085,rotation:24.623,mass:0.6417,gravity:3.71,temp:-65,tilt:25.2,rings:false,colours:['#c67d58','#8e4e39','#d9a281'],colour:'Rusty red and orange from iron minerals in its dust.',desc:'A cold desert world with a thin atmosphere. Mars has polar ice, immense volcanoes, and evidence that liquid water flowed there long ago.',atmosphere:'Mostly carbon dioxide',moon:'Phobos & Deimos',size:5.8,angle:1.6},
 {name:'Jupiter',type:'Gas giant',nick:'The giant of the family.',symbol:'♃',diameter:142984,distance:778.5,year:11.8626,rotation:9.925,mass:1898.125,gravity:24.79,temp:-110,tilt:3.1,rings:true,colours:['#d8c5ab','#ae7960','#eee1ce'],colour:'Cream, tan, and reddish-brown bands of swirling clouds.',desc:'The largest planet has a deep gaseous envelope and powerful storms. Its Great Red Spot is a vast, long-lived storm in the cloud tops.',atmosphere:'Hydrogen & helium',moon:'Europa, Io & many more',size:24,angle:3.1},
 {name:'Saturn',type:'Gas giant',nick:'The solar system’s ring bearer.',symbol:'♄',diameter:120536,distance:1432,year:29.4475,rotation:10.656,mass:568.317,gravity:10.44,temp:-140,tilt:26.7,rings:true,colours:['#d8c59a','#b09b72','#efe1bd'],colour:'Pale gold and beige clouds, surrounded by icy rings.',desc:'Saturn is a gas giant with spectacular rings made mostly of ice particles. Its average density is lower than that of liquid water.',atmosphere:'Hydrogen & helium',moon:'Titan, Enceladus & more',size:20,angle:5.4},
 {name:'Uranus',type:'Ice giant',nick:'A world turned on its side.',symbol:'⛢',diameter:51118,distance:2867,year:84.0168,rotation:-17.240,mass:86.8099,gravity:8.87,temp:-195,tilt:97.8,rings:true,colours:['#9acfd0','#70abad','#cae8e4'],colour:'Pale cyan; methane absorbs red light in its atmosphere.',desc:'An ice giant with a deep interior rich in water, ammonia, and methane. Its strongly tilted axis means it travels around the Sun almost on its side.',atmosphere:'Hydrogen, helium, methane',moon:'Titania, Oberon & more',size:13,angle:2.0},
 {name:'Neptune',type:'Ice giant',nick:'Beyond the familiar.',symbol:'♆',diameter:49528,distance:4515,year:164.7913,rotation:16.110,mass:102.4092,gravity:11.15,temp:-200,tilt:28.3,rings:true,colours:['#6aafca','#4389b0','#acd8e2'],colour:'Blue-green in natural colour; some images enhance its blue.',desc:'The most distant major planet is a cold, windy ice giant. Neptune takes almost 165 Earth years to complete one trip around the Sun.',atmosphere:'Hydrogen, helium, methane',moon:'Triton & other moons',size:12.5,angle:4.8}
];
// Representative moons; sizes, separations, and speeds are illustrative.
const moons=[[],[],[['Moon','#d2d2ca']], [['Phobos','#afa18e'],['Deimos','#c3b5a0']], [['Io','#e3cc75'],['Europa','#e4d9be'],['Ganymede','#b7aaa0'],['Callisto','#8e8880']], [['Enceladus','#e1edf2'],['Titan','#dfb66e']], [['Titania','#bfc7ce'],['Oberon','#a6a9b1']], [['Triton','#c6d8d7']]];
const moonFacts={"Moon": ["The same side always faces Earth as the Moon travels around us.", "https://science.nasa.gov/moon/facts/"], "Phobos": ["The larger Martian moon races around Mars in about 7 hours and 39 minutes.", "https://science.nasa.gov/mars/moons/"], "Deimos": ["Mars’s smaller moon is a tiny, lumpy world covered in impact craters.", "https://science.nasa.gov/mars/moons/deimos/"], "Io": ["The most volcanically active world in our solar system.", "https://science.nasa.gov/jupiter/jupiter-moons/io/facts/"], "Europa": ["Evidence points to a liquid water ocean beneath its icy crust.", "https://spaceplace.nasa.gov/europa/en/"], "Ganymede": ["The solar system’s largest moon is wider than the planet Mercury.", "https://science.nasa.gov/jupiter/jupiter-moons/ganymede/facts/"], "Callisto": ["Its heavily cratered surface records a long history of impacts.", "https://science.nasa.gov/jupiter/jupiter-moons/callisto/facts/"], "Enceladus": ["Jets spray water vapour and ice from an ocean beneath its frozen crust.", "https://science.nasa.gov/mission/cassini/science/enceladus/"], "Titan": ["A thick atmosphere surrounds a world with lakes and seas of liquid methane and ethane.", "https://science.nasa.gov/saturn/moons/titan/facts/"], "Titania": ["Voyager 2 images revealed signs of past geological activity on this icy moon.", "https://science.nasa.gov/uranus/moons/titania/"], "Oberon": ["Uranus’s second-largest moon has an ancient surface marked by many craters.", "https://science.nasa.gov/uranus/moons/oberon/"], "Triton": ["It keeps the same side facing Neptune as it orbits the planet.", "https://science.nasa.gov/neptune/moons/triton/"]};
let moonClock=0;
const destroyedMoons=new Set();
function moonPosition(i,j,o,r){
 const orbit=r*(i===5?2.3:1.3)+10+j*10,angle=moonClock*(i===7?-1:1)*(.7/(1+j*.5))+j*2.4+i;
 return {x:o.x+Math.cos(angle)*orbit,y:o.y+Math.sin(angle)*orbit*.48,r:Math.max(2.4,Math.min(4.8,r*.18+(j%2)*.45)),front:Math.sin(angle)>=0};
}
function targetMoon(i,ax,ay,o,r){
 return moons[i].map((_,j)=>({...moonPosition(i,j,o,r),j})).reverse().find(m=>!destroyedMoons.has(`${i}:${m.j}`)&&(m.front||Math.hypot(m.x-o.x,m.y-o.y)>r+m.r)&&Math.hypot(ax-m.x,ay-m.y)<=m.r+7);
}
function drawMoons(o,r,front){
 const list=moons[o.i];
 list.forEach(([name,colour],j)=>{
  if(destroyedMoons.has(`${o.i}:${j}`))return;
  const orbit=(r*(o.i===5?2.3:1.3)+10+j*10),flatten=.48;
  const angle=moonClock*(o.i===7?-1:1)*(.7/(1+j*.5))+j*2.4+o.i;
  const x=o.x+Math.cos(angle)*orbit,y=o.y+Math.sin(angle)*orbit*flatten;
  if(!front){ctx.save();ctx.strokeStyle=o.i===selected?'#b4c9e842':'#b4c9e81c';ctx.lineWidth=.6;ctx.beginPath();ctx.ellipse(o.x,o.y,orbit,orbit*flatten,0,0,Math.PI*2);ctx.stroke();ctx.restore();}
  if((Math.sin(angle)>=0)!==front)return;
  const mr=Math.max(2.4,Math.min(4.8,r*.18+(j%2)*.45));
  const shade=ctx.createRadialGradient(x-mr*.35,y-mr*.4,0,x,y,mr);
  shade.addColorStop(0,colour);shade.addColorStop(.6,colour);shade.addColorStop(1,'#48505b');
  ctx.fillStyle=shade;ctx.beginPath();ctx.arc(x,y,mr,0,Math.PI*2);ctx.fill();
  if(showLabels&&o.i===selected){ctx.font='9px "DM Sans",sans-serif';ctx.textAlign='center';ctx.lineWidth=3;ctx.strokeStyle='#080c13';ctx.strokeText(name,x,y-mr-5);ctx.fillStyle='#d5dfeb';ctx.fillText(name,x,y-mr-5);}
 });
}
const $=s=>document.querySelector(s), fmt=n=>n.toLocaleString('en-AU',{maximumFractionDigits:2});
const canvas=$('#space'),ctx=canvas.getContext('2d'),portrait=$('#portrait'),pc=portrait.getContext('2d');
let selected=2,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,showLabels=true,days=0,speed=20,yaw=-0.12,pitch=.70,zoom=1,width=0,height=0,dpr=1,targets=[],drag=null,lastFrame=0;
let destruction=null,cannonView=false,shot=null,nuke=null;
const destroyedPlanets=new Set();
const planetDamage=planets.map(()=>[]),damagedSurfaces=planets.map(()=>null);
const cannonAim={x:.5,y:.49};
const damageProgress=planets.map(()=>0);
let earthPanicUntil=0,peopleTime=0,lastPeoplePreview=-Infinity,peopleWerePanicking=false;
function surfaceDamage(hits){
 let removed=0,total=0;
 for(let y=-39;y<=39;y++)for(let x=-39;x<=39;x++){const nx=x/40,ny=y/40;if(nx*nx+ny*ny>.96)continue;total++;if(hits.some(h=>(nx-h.x)**2+(ny-h.y)**2<h.r*h.r))removed++;}
 return removed/total;
}
let seed=42;function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
// Render the distant galaxy once per resize, keeping animation work inexpensive.
const galaxy=document.createElement('canvas');
function paintGalaxy(){
 galaxy.width=canvas.width;galaxy.height=canvas.height;
 const sky=galaxy.getContext('2d');sky.setTransform(dpr,0,0,dpr,0,0);
 let skySeed=7281;const rand=()=>{skySeed=(skySeed*1664525+1013904223)>>>0;return skySeed/4294967296;};
 const band=t=>height*(.78-.64*t)+Math.sin(t*5)*height*.045;
 // Layer violet, blue and rose clouds along a broad diagonal Milky Way.
 sky.globalCompositeOperation='screen';
 for(let i=0;i<85;i++){
  const t=rand(),x=t*width,y=band(t)+(rand()-.5)*height*.18,r=height*(.08+rand()*.15);
  const cloud=sky.createRadialGradient(x,y,0,x,y,r);
  const colour=['84,74,156','57,106,169','133,73,131'][i%3];
  cloud.addColorStop(0,`rgba(${colour},.055)`);cloud.addColorStop(.45,`rgba(${colour},.025)`);cloud.addColorStop(1,`rgba(${colour},0)`);
  sky.fillStyle=cloud;sky.fillRect(x-r,y-r,r*2,r*2);
 }
 // More faint stars cluster inside the galaxy; brighter foreground stars stay sparse.
 const count=Math.min(6000,Math.max(2400,Math.round(width*height/230)));
 for(let i=0;i<count;i++){
  const x=rand()*width,cluster=i%3!==0;
  const spread=(rand()+rand()+rand()-1.5)*height*.14;
  const y=cluster?band(x/width)+spread:rand()*height;
  const bright=rand(),r=bright>.995?1.6:bright>.96?.95:.25+rand()*.45;
  sky.globalAlpha=cluster?.12+rand()*.4:.18+rand()*.65;
  sky.fillStyle=['#d6e5ff','#fff1da','#b4caff'][i%3];
  sky.beginPath();sky.arc(x,y,r,0,Math.PI*2);sky.fill();
  if(bright>.995){
   const halo=sky.createRadialGradient(x,y,0,x,y,9);halo.addColorStop(0,'#d3e4ff88');halo.addColorStop(1,'#b2cfff00');
   sky.fillStyle=halo;sky.fillRect(x-9,y-9,18,18);
   sky.strokeStyle='#dceaff66';sky.lineWidth=.6;sky.beginPath();sky.moveTo(x-4,y);sky.lineTo(x+4,y);sky.moveTo(x,y-4);sky.lineTo(x,y+4);sky.stroke();
  }
 }
 sky.globalAlpha=1;sky.globalCompositeOperation='source-over';
}
function hex(h){return h.match(/\w\w/g).map(x=>parseInt(x,16));}
function noise(x,y){return Math.sin(x*2.5+Math.sin(y*3.7)*2)+.48*Math.sin(x*7.4-y*4)+.23*Math.sin(x*18+y*13);}
// Cached high-resolution spherical artwork; patterns are illustrative, not maps.
function detailNoise(x,y){return noise(x,y)*.58+noise(x*2.13+7,y*2.13)*.27+noise(x*4.7,y*4.7+3)*.11+noise(x*10.1,y*10.1)*.04;}
function sphere(p,n=480){
 const c=document.createElement('canvas');c.width=c.height=n;
 const cc=c.getContext('2d'),im=cc.createImageData(n,n),col=p.colours.map(hex),r=n/2-3;
 const rocky=p.name==='Mercury'||p.name==='Mars';
 const craters=Array.from({length:rocky?36:0},(_,j)=>({x:Math.sin(j*127.1+4)*1.5,y:Math.sin(j*311.7+2)*1.35,r:.025+(Math.sin(j*73.3)+1)*.055}));
 for(let py=0;py<n;py++)for(let px=0;px<n;px++){
  const x=(px-n/2)/r,y=(py-n/2)/r,rr=x*x+y*y;if(rr>1)continue;
  const z=Math.sqrt(1-rr),lat=Math.asin(y),lon=Math.atan2(x,z),v=detailNoise(lon*3+1,lat*5);
  const diffuse=Math.max(0,-x*.48-y*.38+z*.79),light=.075+.925*Math.pow(diffuse,.85);
  let rgb=col[0].slice(),bump=1;
  if(p.name==='Earth'){
   const land=noise(lon*1.15+.5,lat*1.6)+.3*Math.sin(lat*3-lon*2);
   rgb=land>.24?[64+v*21,100+v*24,53+v*16]:[12+v*3,62+v*9,117+v*14];
   if(land>.75)rgb=[134+v*15,121+v*9,81+v*5];
   if(Math.abs(lat)>1.2+Math.sin(lon*7)*.06)rgb=[218,233,236];
   if(land<.24){const spec=Math.pow(Math.max(0,-x*.35-y*.3+z*.88),35)*.4;rgb=rgb.map((v,i)=>v+spec*[100,135,155][i]);}
  }else if(p.name==='Jupiter'||p.name==='Saturn'){
   const warp=detailNoise(lon*3,lat*5)*.012;
   const band=Math.sin((lat+warp)*42)+Math.sin((lat+warp)*91)*.32+detailNoise(lon*17,lat*34)*.08;
   const t=Math.max(0,Math.min(1,.5+band*.33));rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);
   if(p.name==='Jupiter'){
    const storm=((lon-.38)/.3)**2+((lat-.25)/.14)**2;
    if(storm<1.4){const swirl=Math.sin(Math.atan2((lat-.25)/.14,(lon-.38)/.3)*3+storm*13);const blend=Math.max(0,1-storm/1.4)*.9;rgb=rgb.map((v,i)=>v*(1-blend)+[179+swirl*17,91+swirl*12,60+swirl*8][i]*blend);}
   }
  }else if(p.name==='Uranus'||p.name==='Neptune'){
   const t=.5+Math.sin(lat*27+v*.23)*.06+v*.04;rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);
   if(p.name==='Neptune'){const streak=Math.max(0,detailNoise(lon*4,lat*24)-.8)*.3;rgb=rgb.map(v=>v+(235-v)*streak);}
  }else if(p.name==='Venus'){
   const t=.5+detailNoise(lon*4+Math.sin(lat*7),lat*12)*.23;rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);
  }else{
   const t=Math.max(0,Math.min(1,.5+v*.3));rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);bump=1+detailNoise(lon*25,lat*30)*.08;
   for(const crater of craters){const d=Math.hypot((lon-crater.x)*Math.cos(lat),lat-crater.y)/crater.r;if(d<1.15){bump*=d<.78?.77+Math.sin(d*4)*.07:1.17;}}
   if(p.name==='Mars'&&Math.abs(lat)>1.28+Math.sin(lon*9)*.06)rgb=[224,223,212];
  }
  const rim=Math.pow(1-z,3)*diffuse*(p.name==='Earth'?.45:p.name==='Neptune'?.18:0);
  const k=(py*n+px)*4;for(let i=0;i<3;i++)im.data[k+i]=Math.min(255,rgb[i]*light*bump+rim*[60,135,230][i]);
  im.data[k+3]=Math.min(255,(1-rr)*r*160);
 }
 cc.putImageData(im,0,0);return c;
}
const textures=planets.map(p=>sphere(p));
// A separate cloud shell drifts in longitude over Earth's stationary surface.
const earthClouds=document.createElement('canvas');earthClouds.width=earthClouds.height=240;
const cloudContext=earthClouds.getContext('2d'),cloudPixels=cloudContext.createImageData(240,240);
const cloudMapWidth=512,cloudMapHeight=256,cloudMap=new Float32Array(cloudMapWidth*cloudMapHeight),cloudGeometry=[];
for(let y=0;y<cloudMapHeight;y++)for(let x=0;x<cloudMapWidth;x++){
 const lon=x/cloudMapWidth*Math.PI*2,lat=(y/(cloudMapHeight-1)-.5)*Math.PI;
 const weather=detailNoise(Math.cos(lon)*3+lat*2,Math.sin(lon)*3+lat*5);
 cloudMap[y*cloudMapWidth+x]=Math.min(.88,Math.max(0,(weather-.2)*1.1));
}
for(let py=0;py<240;py++)for(let px=0;px<240;px++){
 const x=(px-120)/118.5,y=(py-120)/118.5,rr=x*x+y*y;if(rr>=1)continue;
 const z=Math.sqrt(1-rr),lat=Math.asin(y),lon=Math.atan2(x,z);
 cloudGeometry.push({k:(py*240+px)*4,u:lon/(Math.PI*2)*cloudMapWidth,v:Math.min(cloudMapHeight-1,Math.max(0,Math.round((lat/Math.PI+.5)*(cloudMapHeight-1)))),shade:.075+.925*Math.pow(Math.max(0,-x*.48-y*.38+z*.79),.85),edge:Math.min(1,(1-rr)*118.5)});
}
let lastCloudPhase=-1,lastCloudUpdate=-Infinity;
function updateEarthClouds(now){
 const phase=moonClock*.09;
 if(phase===lastCloudPhase||now-lastCloudUpdate<66)return false;
 for(const g of cloudGeometry){
  const u=((g.u+phase/(Math.PI*2)*cloudMapWidth)%cloudMapWidth+cloudMapWidth)%cloudMapWidth;
  const left=Math.floor(u),blend=u-left,row=g.v*cloudMapWidth;
  const alpha=cloudMap[row+left]*(1-blend)+cloudMap[row+(left+1)%cloudMapWidth]*blend;
  cloudPixels.data[g.k]=cloudPixels.data[g.k+1]=cloudPixels.data[g.k+2]=Math.round(245*g.shade);
  cloudPixels.data[g.k+3]=Math.round(alpha*g.edge*255);
 }
 cloudContext.putImageData(cloudPixels,0,0);lastCloudPhase=phase;lastCloudUpdate=now;return true;
}
updateEarthClouds(0);
function planetSurface(i){
 const hits=planetDamage[i];if(!hits.length)return null;
 const phase=i===2?lastCloudPhase:0,cache=damagedSurfaces[i];
 if(cache&&cache.count===hits.length&&cache.phase===phase)return cache.canvas;
 const surface=cache?cache.canvas:document.createElement('canvas');surface.width=surface.height=480;
 const c=surface.getContext('2d');c.drawImage(textures[i],0,0,480,480);
 if(i===2)c.drawImage(earthClouds,0,0,480,480);
 c.globalCompositeOperation='source-atop';
 for(const hit of hits){c.strokeStyle='#5d382b99';c.lineWidth=4;c.beginPath();c.arc(240+hit.x*240,240+hit.y*240,hit.r*240+2,0,Math.PI*2);c.stroke();}
 c.globalCompositeOperation='destination-out';
 for(const hit of hits){c.beginPath();c.arc(240+hit.x*240,240+hit.y*240,hit.r*240,0,Math.PI*2);c.fill();}
 c.globalCompositeOperation='source-over';damagedSurfaces[i]={canvas:surface,count:hits.length,phase};return surface;
}
function refreshEarthPortrait(){pc.clearRect(0,0,360,250);drawWorld(pc,selected,180,128,planets[selected].name==='Saturn'?67:87);}
function refreshDamagedPlanet(i){
 if(selected===i)refreshEarthPortrait();
 const thumb=document.querySelectorAll('.planet-option canvas')[i];
 if(thumb){const c=thumb.getContext('2d');c.clearRect(0,0,108,84);drawWorld(c,i,54,42,planets[i].name==='Saturn'?18:25);}
}
// Playful miniature inhabitants, deliberately enlarged so they remain visible.
function drawEarthPeople(c,x,y,r){
 if(r<18||destroyedPlanets.has(2))return;
 const panic=peopleTime<earthPanicUntil,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const t=peopleTime/1000,run=panic&&!reduced;
 const shirts=['ochre','slate','rust','grey','ivory','olive','sand'];
 for(let i=0;i<shirts.length;i++){
  const stride=run?Math.sin(t*26+i*2.1):0;
  const angle=-2.85+i*.4+(run?Math.sin(t*(2.8+i*.15)+i)*.14:0),nx=Math.cos(angle)*.98,ny=Math.sin(angle)*.98;
  if(planetDamage[2].some(h=>Math.hypot(nx-h.x,ny-h.y)<h.r+.045))continue;
  const size=Math.max(5,Math.min(12,r*.11));
  c.save();c.translate(x+nx*r,y+ny*r);c.rotate(angle+Math.PI/2);
  if(run)c.translate(0,-Math.abs(stride)*size*.12);
  c.lineCap='round';c.lineJoin='round';
  const skin=['#dbb394','#9b7055','#bd8e6d','#76543f'][i%4];
  const limb=(points,colour,thickness)=>{c.strokeStyle=colour;c.lineWidth=size*thickness;c.beginPath();points.forEach(([px,py],j)=>j?c.lineTo(px*size,py*size):c.moveTo(px*size,py*size));c.stroke();};
  // Articulated knees, tapered clothing, boots, neck, and shaded faces.
  limb([[-.1,-.4],[-.15-stride*.1,-.2],[-.17-stride*.14,0]],'#34414b',.14);
  limb([[.1,-.4],[.15+stride*.1,-.22],[.18+stride*.14,-Math.max(0,stride)*.12]],'#27343d',.14);
  limb([[-.17-stride*.14,0],[-.26-stride*.14,0]],'#182128',.1);
  limb([[.18+stride*.14,-Math.max(0,stride)*.12],[.27+stride*.14,-Math.max(0,stride)*.12]],'#182128',.1);
  const jacket=c.createLinearGradient(-size*.2,0,size*.2,0);jacket.addColorStop(0,'#25313b');jacket.addColorStop(.45,['#8b775d','#536e72','#805f56','#646078','#8b9296','#586c58','#8c705c'][i]);jacket.addColorStop(1,'#35414b');
  c.fillStyle=jacket;c.beginPath();c.moveTo(-size*.18,-size*.72);c.lineTo(size*.16,-size*.72);c.lineTo(size*.13,-size*.37);c.lineTo(-size*.13,-size*.37);c.closePath();c.fill();
  for(const side of [-1,1]){const hand=panic?-.95+stride*.16*side:-.43;limb([[side*.16,-.68],[side*.29,-.68+(panic?-.14:.14)],[side*.34,hand]],'#52606a',.1);c.fillStyle=skin;c.beginPath();c.ellipse(side*size*.34,hand*size,size*.055,size*.075,0,0,Math.PI*2);c.fill();}
  limb([[0,-.72],[0,-.8]],skin,.12);
  const face=c.createRadialGradient(-size*.04,-size*.89,0,0,-size*.88,size*.15);face.addColorStop(0,skin);face.addColorStop(1,'#5a463a');c.fillStyle=face;c.beginPath();c.ellipse(0,-size*.88,size*.115,size*.15,0,0,Math.PI*2);c.fill();
  c.fillStyle=['#30271f','#241f1c','#514136','#38302a'][i%4];c.beginPath();c.ellipse(-size*.015,-size*.98,size*.115,size*.065,-.2,Math.PI,Math.PI*2);c.fill();
  c.restore();
 }
}
// Project licensed photographic planet maps onto shaded spheres once per load.
const planetMapImages=Array(8).fill(null),mapPixelCache=new WeakMap(),sphereGeometryCache=new Map();
let lastSpinPhase=-1,lastSpinFrame=-Infinity;
function mappedSphere(image,n=320,rotation=0,emissive=false){
 let map=mapPixelCache.get(image);
 if(!map){const source=document.createElement('canvas');source.width=image.naturalWidth;source.height=image.naturalHeight;const sc=source.getContext('2d');sc.drawImage(image,0,0);map={pixels:sc.getImageData(0,0,source.width,source.height).data,w:source.width,h:source.height};mapPixelCache.set(image,map);}
 const {pixels,w,h}=map;
 let geometry=sphereGeometryCache.get(n);
 if(!geometry){geometry=[];const radius=n/2-3;
  for(let py=0;py<n;py++)for(let px=0;px<n;px++){
   const x=(px-n/2)/radius,y=(py-n/2)/radius,d=x*x+y*y;if(d>=1)continue;
   const z=Math.sqrt(1-d);
   geometry.push({k:(py*n+px)*4,u:Math.atan2(x,z)/(Math.PI*2)+.5,v:Math.asin(y)/Math.PI+.5,light:.018+.982*Math.pow(Math.max(0,-x*.72-y*.28+z*.63),1.18),sunlight:.68+.32*z,alpha:Math.min(255,(1-d)*radius*160)});
  }sphereGeometryCache.set(n,geometry);
 }
 const result=document.createElement('canvas');result.width=result.height=n;
 const c=result.getContext('2d'),out=c.createImageData(n,n);
 for(const g of geometry){
  const u=((g.u+rotation/(Math.PI*2))%1+1)%1*w,v=g.v*(h-1),ix=Math.floor(u),iy=Math.floor(v),fx=u-ix,fy=v-iy;
  for(let ch=0;ch<3;ch++){
   const a=pixels[(iy*w+ix)*4+ch],b=pixels[(iy*w+(ix+1)%w)*4+ch],cc=pixels[(Math.min(h-1,iy+1)*w+ix)*4+ch],dd=pixels[(Math.min(h-1,iy+1)*w+(ix+1)%w)*4+ch];
   out.data[g.k+ch]=((a*(1-fx)+b*fx)*(1-fy)+(cc*(1-fx)+dd*fx)*fy)*(emissive?g.sunlight:g.light);
  }out.data[g.k+3]=g.alpha;
 }
 c.putImageData(out,0,0);return result;
}
function updatePlanetRotation(now){
 if(moonClock===lastSpinPhase||now-lastSpinFrame<125)return;
 lastSpinPhase=moonClock;lastSpinFrame=now;
 planetMapImages.forEach((image,i)=>{
  if(!image||destroyedPlanets.has(i))return;
  // Exaggerated rotation rates make surface motion readable at this scale.
  const rate=Math.sign(planets[i].rotation)*.22*Math.max(.45,Math.min(1.6,Math.sqrt(23.934/Math.abs(planets[i].rotation))));
  textures[i]=mappedSphere(image,256,moonClock*rate);damagedSurfaces[i]=null;refreshDamagedPlanet(i);
 });
}
let sunSurface=null;
function drawDetailedSun(x,y,r){
 ctx.save();
 const corona=ctx.createRadialGradient(x,y,r*.9,x,y,r*2.9);corona.addColorStop(0,'#fff0a077');corona.addColorStop(.18,'#ffd0663a');corona.addColorStop(.5,'#ff9d3010');corona.addColorStop(1,'#ff9d3000');ctx.fillStyle=corona;ctx.fillRect(x-r*3,y-r*3,r*6,r*6);
 if(sunSurface)ctx.drawImage(sunSurface,x-r,y-r,r*2,r*2);
 else{const glow=ctx.createRadialGradient(x,y,0,x,y,r);glow.addColorStop(0,'#fff0b0');glow.addColorStop(1,'#f6b448');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
 ctx.strokeStyle='#ffd48766';ctx.lineWidth=Math.max(.5,r*.025);
 for(let j=0;j<7;j++){const a=j*2.39996;ctx.save();ctx.translate(x+Math.cos(a)*r*.98,y+Math.sin(a)*r*.98);ctx.rotate(a);ctx.beginPath();ctx.ellipse(r*.035,0,r*.1,r*.045,0,-Math.PI*.6,Math.PI*.6);ctx.stroke();ctx.restore();}
 ctx.restore();
}
const sunImage=new Image();sunImage.onload=()=>{sunSurface=mappedSphere(sunImage,480,0,true);};sunImage.src='textures/sun.jpg';
function loadPlanetMaps(){
 const files=['mercury','venus_atmosphere','earth_daymap','mars','jupiter','saturn','uranus','neptune'];
 files.forEach((file,i)=>{const image=new Image();image.onload=()=>{
  planetMapImages[i]=image;textures[i]=mappedSphere(image);damagedSurfaces[i]=null;refreshDamagedPlanet(i);
 };image.src=`textures/${file}.jpg`;});
}
function drawWorld(c,i,x,y,r,highlight=false){
 const p=planets[i];
 c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(highlight){c.strokeStyle='#efa77d88';c.lineWidth=1;c.setLineDash([2,4]);c.beginPath();c.arc(x,y,r+7,0,Math.PI*2);c.stroke();c.setLineDash([]);}
 if(i===2||i===1||i===6||i===7){const aura=c.createRadialGradient(x,y,r*.94,x,y,r*1.13);aura.addColorStop(0,'#00000000');aura.addColorStop(.35,i===1?'#eac58140':'#78baff28');aura.addColorStop(1,'#78baff00');c.fillStyle=aura;c.fillRect(x-r*1.14,y-r*1.14,r*2.28,r*2.28);}
 if(p.name==='Saturn')drawRings(c,x,y,r,false);
 const damaged=planetSurface(i);c.drawImage(damaged||textures[i],x-r,y-r,r*2,r*2);
 if(i===2&&!damaged)c.drawImage(earthClouds,x-r,y-r,r*2,r*2);
 if(p.name==='Saturn')drawRings(c,x,y,r,true);
 if(i===2)drawEarthPeople(c,x,y,r);
 c.restore();
}
function drawRings(c,x,y,r,front){
 c.save();c.translate(x,y);c.rotate(-.32);c.scale(1,.34);
 for(let j=0;j<48;j++){
  const radius=1.24+j*.016;if(radius>1.69&&radius<1.77)continue;
  const tone=Math.round(150+Math.sin(j*2.7)*20+j*.9);
  c.lineWidth=r*.018;c.strokeStyle=`rgba(${tone+25},${tone+9},${tone-20},${.48+(Math.sin(j*1.9)+1)*.15})`;
  c.beginPath();c.arc(0,0,r*radius,front?0:Math.PI,front?Math.PI:Math.PI*2);c.stroke();
 }
 c.restore();
}
function showMoonFacts(i){
 const list=moons[i];
 $('#moon-facts').innerHTML=list.length?`<h3>Meet the moons</h3><p class="moon-facts-intro">A few companions orbiting ${planets[i].name}.</p><div class="moon-fact-list">${list.map(([name,colour])=>{
  const [fact,url]=moonFacts[name];return `<article class="moon-fact"><h4><span style="background:${colour}" aria-hidden="true"></span>${name}</h4><p>${fact}</p><a href="${url}" target="_blank" rel="noopener">More at NASA ↗</a></article>`;
 }).join('')}</div>`:`<h3>Moon watch</h3><p class="moon-facts-intro">${planets[i].name} has no natural moons.</p>`;
}
function choose(i){
 if(shot||nuke)return;
 selected=i;syncCannon();const p=planets[i];
 $('#planet-order').textContent=`0${i+1} / 08`;$('#planet-type').textContent=p.type.toUpperCase();$('#planet-name').textContent=p.name;$('#planet-symbol').textContent=p.symbol;$('#nickname').textContent=p.nick;
 $('#diameter').innerHTML=`${fmt(p.diameter)} <small>km</small>`;$('#distance').innerHTML=`${fmt(p.distance)} <small>million km</small>`;$('#description').textContent=p.desc;
 const facts=[['ONE ORBIT',p.year<2?`${fmt(p.year*365.256)} Earth days`:`${fmt(p.year)} Earth years`],['ONE ROTATION',`${fmt(Math.abs(p.rotation))} hours${p.rotation<0?' ↶':''}`],['GRAVITY',`${fmt(p.gravity)} m/s²`],['MEAN TEMPERATURE',`${p.temp>0?'+':''}${p.temp} °C`],['ATMOSPHERE',p.atmosphere],['MOONS',p.moon],['AXIAL TILT',`${p.tilt}°`],['RINGS',p.rings?'Yes':'None']];
 showMoonFacts(i);
 $('#facts').innerHTML=facts.map(([label,value])=>`<div><span>${label}</span><strong>${value}</strong></div>`).join('');
 $('#swatches').innerHTML=p.colours.map(c=>`<span class="swatch" style="background:${c}" title="Illustrative colour ${c}"></span>`).join('');$('#colour-description').textContent=p.colour;
 $('#learn').textContent=`Explore ${p.name} at NASA ↗`;$('#learn').href=`https://science.nasa.gov/${p.name.toLowerCase()}/`;
 portrait.setAttribute('aria-label',`Artistic illustration of ${p.name}`);pc.clearRect(0,0,360,250);drawWorld(pc,i,180,128,p.name==='Saturn'?67:87);
 document.querySelectorAll('.planet-option').forEach((b,j)=>b.setAttribute('aria-pressed',i===j));document.querySelectorAll('#comparison tr').forEach((tr,j)=>tr.classList.toggle('selected',i===j));
}
planets.forEach((p,i)=>{
 const b=document.createElement('button');b.className='planet-option';b.setAttribute('aria-label',`Explore ${p.name}`);b.innerHTML=`<span class="planet-index">0${i+1}</span><canvas width="108" height="84" aria-hidden="true"></canvas><span class="nav-name">${p.name}</span>`;b.onclick=()=>choose(i);$('#planet-nav').appendChild(b);drawWorld(b.querySelector('canvas').getContext('2d'),i,54,42,p.name==='Saturn'?18:25);
 const tr=document.createElement('tr');tr.innerHTML=`<td><button aria-label="Show ${p.name} facts"><span class="dot" style="background:${p.colours[0]}"></span>${p.name}</button></td><td>${fmt(p.diameter)}</td><td>${fmt(p.diameter/12756)}×</td><td>${fmt(p.year)}</td><td>${fmt(Math.abs(p.rotation))}${p.rotation<0?' ↶':''}</td><td>${fmt(p.mass)}</td><td>${p.rings?'Yes':'—'}</td>`;tr.querySelector('button').onclick=()=>{choose(i);$('.planet-panel').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});};$('#comparison').appendChild(tr);
});
choose(2);
function updateModel(){const input=$('#earth-size'),size=Number(input.value);if(!Number.isFinite(size)||size<.1||size>1000){$('#model-results').textContent='Enter an Earth diameter between 0.1 and 1,000 cm.';$('#model-distance').textContent='';return;}
 $('#model-results').innerHTML=planets.map(p=>`<div class="model-row"><span>${p.name}</span><strong>${fmt(size*p.diameter/12756)} <small>cm</small></strong></div>`).join('');
 const earthMetres=149600000/12756*size/100,neptuneKm=4515000000/12756*size/100000;
 $('#model-distance').textContent=`At this scale, Earth is ${fmt(earthMetres)} m from the Sun, and Neptune is ${fmt(neptuneKm)} km away. All model sizes are diameters.`;
}$('#earth-size').addEventListener('input',updateModel);updateModel();
function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);paintGalaxy();}
new ResizeObserver(resize).observe(canvas);
function project(x,y,z){const xx=x*Math.cos(yaw)-z*Math.sin(yaw),zz=x*Math.sin(yaw)+z*Math.cos(yaw),yy=y*Math.cos(pitch)-zz*Math.sin(pitch),depth=y*Math.sin(pitch)+zz*Math.cos(pitch),s=1050/(1050+depth);const fit=Math.min(width/890,height/760)*zoom;return {x:width*.51+xx*s*fit,y:height*(width<600?.65:.61)+yy*s*fit,s:s*fit,depth};}
const radii=[62,90,122,155,218,285,351,415];
function render(now){
 const dt=lastFrame?Math.min((now-lastFrame)/1000,.1):0;lastFrame=now;if(!paused&&!document.hidden){days+=dt*speed;moonClock+=dt*Math.sqrt(speed/20);}
 updatePlanetRotation(now);
 peopleTime=now;
 const panicActive=now<earthPanicUntil;
 const peopleChanged=(panicActive||peopleWerePanicking)&&now-lastPeoplePreview>50;
 if(peopleChanged){lastPeoplePreview=now;peopleWerePanicking=panicActive;}
 const cloudsChanged=updateEarthClouds(now);
 if(cloudsChanged||peopleChanged){
  if(selected===2){pc.clearRect(0,0,360,250);drawWorld(pc,2,180,128,87);}
  const earthPreview=document.querySelectorAll('.planet-option canvas')[2];
  if(earthPreview){const preview=earthPreview.getContext('2d');preview.clearRect(0,0,108,84);drawWorld(preview,2,54,42,25);}
 }
 ctx.clearRect(0,0,width,height);
 if(width&&height)ctx.drawImage(galaxy,0,0,width,height);
 if(cannonView){renderCannon(now);requestAnimationFrame(render);return;}
 const centre=project(0,0,0);
 const blastProgress=destruction?Math.min(1,(now-destruction.started)/3000):0;
 const blastRadius=blastProgress*Math.hypot(width,height)*1.2;
 if(destruction&&blastProgress===1&&!destruction.complete){destruction.complete=true;$('#sun-status').textContent='The Sun and all eight planets are gone. Restore to explore again.';}
 if(destruction&&blastProgress===1&&(destruction.reduced||now-destruction.started>5500)){targets=[];requestAnimationFrame(render);return;}
 if(!destruction){const glow=ctx.createRadialGradient(centre.x,centre.y,0,centre.x,centre.y,100*centre.s);glow.addColorStop(0,'#fff39b99');glow.addColorStop(.25,'#ffdb4966');glow.addColorStop(.6,'#ffd12e22');glow.addColorStop(1,'#ffd12e00');ctx.fillStyle=glow;ctx.fillRect(centre.x-100*centre.s,centre.y-100*centre.s,200*centre.s,200*centre.s);}
 radii.forEach((r,i)=>{ctx.beginPath();for(let step=0;step<=140;step++){const a=step/140*Math.PI*2,p=project(Math.cos(a)*r,0,Math.sin(a)*r);if(!step)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);}ctx.strokeStyle=i===selected?'#ac82634d':'#63768c2c';ctx.lineWidth=i===selected?1.2:.7;ctx.stroke();});
 // Asteroid belt, deliberately compressed with the rest of the display.
 for(let j=0;j<150;j++){const a=j*2.39996,r=181+Math.sin(j*73)*11,p=project(Math.cos(a)*r,Math.sin(j)*2,Math.sin(a)*r);ctx.fillStyle='#a49a8830';ctx.fillRect(p.x,p.y,1,1);}
 const objects=planets.map((p,i)=>{const a=p.angle+days/(p.year*365.256)*Math.PI*2;return {...project(Math.cos(a)*radii[i],0,Math.sin(a)*radii[i]),i};});objects.push({...centre,i:-1});objects.sort((a,b)=>b.depth-a.depth);targets=[];
 for(const o of objects){if(destroyedPlanets.has(o.i))continue;if(destruction&&(o.i===-1||Math.hypot(o.x-centre.x,o.y-centre.y)<blastRadius)){if(!destruction.bursts.has(o.i))destruction.bursts.set(o.i,{x:o.x,y:o.y,r:o.i===-1?32*o.s:Math.max(10,planets[o.i].size*o.s),started:now,colour:o.i===-1?'#ffc869':planets[o.i].colours[0]});continue;}if(o.i===-1){const r=19*o.s;drawDetailedSun(o.x,o.y,r);if(showLabels){ctx.fillStyle='#c8aa7b';ctx.font='9px "DM Sans",sans-serif';ctx.textAlign='center';ctx.fillText('SUN',o.x,o.y+r+18);}continue;}
 const p=planets[o.i],r=Math.max(3,p.size*o.s);drawMoons(o,r,false);drawWorld(ctx,o.i,o.x,o.y,r,o.i===selected);drawMoons(o,r,true);targets.push({x:o.x,y:o.y,r:Math.max(13,r+7),i:o.i});if(showLabels){ctx.textAlign='center';ctx.font=`${o.i===selected?'600':'400'} 10px "DM Sans",sans-serif`;ctx.fillStyle=o.i===selected?'#efb38f':'#a1adbd';ctx.fillText(p.name,o.x,o.y+r+20);}
 }
 if(destruction){
  for(const burst of destruction.bursts.values())drawPlanetBreakup(burst,(now-burst.started)/1000);
  ctx.save();ctx.globalAlpha=(1-blastProgress)*.55;ctx.strokeStyle='#ffe18c';ctx.lineWidth=3+18*(1-blastProgress);ctx.shadowColor='#ffc83d';ctx.shadowBlur=25;
  ctx.beginPath();ctx.arc(centre.x,centre.y,blastRadius,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0;
  for(let i=0;i<150;i++){const angle=i*2.39996,r=blastRadius*(.25+(i%17)/23);ctx.fillStyle=i%3?'#ffcd58':'#fff4bf';ctx.beginPath();ctx.arc(centre.x+Math.cos(angle)*r,centre.y+Math.sin(angle)*r,1+(i%3),0,Math.PI*2);ctx.fill();}
  ctx.restore();
 }
 requestAnimationFrame(render);
}
function syncCannon(){
 $('#cannon-view').textContent=cannonView?'Exit cannon ↩':'Orbital cannon ⊕';
 $('#cannon-view').setAttribute('aria-pressed',cannonView);
 $('#cannon-view').disabled=!!destruction||!!nuke;
 $('#nuclear-strike').disabled=!!shot||!!nuke||!!destruction||destroyedPlanets.has(selected);
 $('#nuclear-strike').textContent=`☢ Nuke ${planets[selected].name}`;
 $('#destroy-sun').disabled=!!destruction||!!nuke;
 $('#fire-cannon').hidden=!cannonView;
 $('#fire-cannon').disabled=!!shot||!!nuke||!!destruction||destroyedPlanets.has(selected);
 $('#fire-cannon').textContent=`Fire ∞ · ${Math.round(damageProgress[selected]*100)}% damaged`;
 $('#restore-system').disabled=!nuke&&!destruction&&!destroyedPlanets.size&&!destroyedMoons.size&&!planetDamage.some(hits=>hits.length);
 if(!destruction)$('#scene-label').textContent=cannonView?`CANNON VIEW · ${planets[selected].name.toUpperCase()}`:'SOLAR SYSTEM · ORBIT VIEW';
 $('.hint').textContent=cannonView?'Move pointer / drag to aim · Arrow keys aim · Space or Fire to shoot · Aim at planets or moving moons · Unlimited shots':'↔ Drag to explore · Scroll to zoom · Click a planet';
 canvas.style.cursor=cannonView?'crosshair':'';
 canvas.setAttribute('aria-label',cannonView?`First person orbital cannon aimed at ${planets[selected].name}. Move your pointer or drag to aim. Arrow keys aim, Space fires. Unlimited shots. Destroy enough surface to break the planet and its moons apart.`:'3D solar system. Drag to rotate, scroll to zoom. Select a planet using the buttons below.');
}
function cannonGeometry(){return {x:width*.5,y:height*.49,r:Math.min(width,height)*.16};}
function aimCannon(e){const rect=canvas.getBoundingClientRect();cannonAim.x=Math.max(.02,Math.min(.98,(e.clientX-rect.left)/rect.width));cannonAim.y=Math.max(.04,Math.min(.94,(e.clientY-rect.top)/rect.height));}
function applyCannonImpact(){
 if(!shot||shot.applied)return;shot.applied=true;
 if(!shot.hit){$('#sun-status').textContent='Miss! Aim at a moon or intact planet surface.';return;}
 if(shot.moonIndex!==undefined){destroyedMoons.add(`${shot.i}:${shot.moonIndex}`);$('#sun-status').textContent=`${moons[shot.i][shot.moonIndex][0]} destroyed. Its planet and other moons are intact.`;syncCannon();return;}
 if(shot.i===2)earthPanicUntil=performance.now()+15000;
 planetDamage[shot.i].push({x:shot.nx,y:shot.ny,r:.28});
 damageProgress[shot.i]=surfaceDamage(planetDamage[shot.i]);
 if(damageProgress[shot.i]>=.7)destroyedPlanets.add(shot.i);
 refreshDamagedPlanet(shot.i);syncCannon();
 $('#sun-status').textContent=destroyedPlanets.has(shot.i)?`${planets[shot.i].name} and its moons destroyed. Other worlds are intact.`:`Chunk destroyed! ${Math.round(damageProgress[shot.i]*100)}% of the surface destroyed. Unlimited shots — aim at another intact area.`;
}
function drawCannonHardware(ax,ay,elapsed){
 const recoil=shot?Math.max(0,1-elapsed/.25)*12:0,L=Math.min(180,height*.23),scale=Math.min(1,width/620);
 ctx.save();ctx.translate(width*.5,height+recoil);ctx.rotate(Math.atan2(ax-width*.5,height-ay));ctx.scale(scale,1);
 const armour=ctx.createLinearGradient(-65,0,65,0);armour.addColorStop(0,'#101923');armour.addColorStop(.3,'#52677b');armour.addColorStop(.5,'#25394c');armour.addColorStop(.75,'#40596d');armour.addColorStop(1,'#0c141e');
 const plate=(points,fill,stroke='#7d99ad')=>{ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();ctx.stroke();};
 plate([[-78,0],[-53,-L*.42],[-27,-L*.55],[27,-L*.55],[53,-L*.42],[78,0]],armour);
 // Paired armoured rails enclose a luminous accelerator core.
 for(const side of [-1,1]){
  plate([[side*13,-L*.38],[side*17,-L],[side*32,-L*1.08],[side*43,-L*.93],[side*41,-L*.27]],armour);
  ctx.shadowColor='#76bbce';ctx.shadowBlur=4;ctx.strokeStyle='#8ec4ce';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(side*25,-L*.4);ctx.lineTo(side*27,-L*.93);ctx.stroke();ctx.shadowBlur=0;
  for(let j=0;j<5;j++){ctx.fillStyle='#0a1420';ctx.fillRect(side<0?-48:35,-L*.3+j*9,13,4);}
  for(let j=0;j<3;j++){ctx.fillStyle='#b1bdc7';ctx.beginPath();ctx.arc(side*52,-L*.2+j*13,2,0,Math.PI*2);ctx.fill();}
 }
 ctx.fillStyle='#071722';ctx.fillRect(-10,-L*.9,20,L*.55);
 const core=ctx.createLinearGradient(0,-L,0,0);core.addColorStop(0,'#d3ffff');core.addColorStop(.5,'#3cdcf5');core.addColorStop(1,'#164761');ctx.fillStyle=core;ctx.shadowColor='#79bac9';ctx.shadowBlur=6;ctx.fillRect(-4,-L*.94,8,L*.52);ctx.shadowBlur=0;
 plate([[-28,-L*.92],[-28,-L*1.04],[28,-L*1.04],[28,-L*.92]],'#263e50');
 ctx.fillStyle='#051019';ctx.fillRect(-15,-L*1.025,30,L*.07);ctx.fillStyle='#afffff';ctx.fillRect(-9,-L*1.01,18,3);
 ctx.fillStyle='#9debf2';ctx.font='8px monospace';ctx.textAlign='center';ctx.fillText('ORBITAL // MK II',0,-L*.14);
 if(shot&&elapsed<.16){const size=22*(1-elapsed/.16);const flash=ctx.createRadialGradient(0,-L*1.08,0,0,-L*1.08,size*2);flash.addColorStop(0,'#ffffff');flash.addColorStop(.3,'#9bf5ffcc');flash.addColorStop(1,'#55ddff00');ctx.fillStyle=flash;ctx.fillRect(-size*2,-L*1.08-size*2,size*4,size*4);}
 ctx.restore();
}
function drawImpactExplosion(x,y,r,age,final,colour){
 const t=Math.min(1,Math.max(0,age/1.05)),size=r*(final?2.5:.62),radius=Math.max(1,size*(.15+t*1.5));
 ctx.save();
 // Expanding fireball, shock ring, smoke and incandescent fragments.
 const fire=ctx.createRadialGradient(x,y,0,x,y,radius);
 fire.addColorStop(0,`rgba(255,250,220,${(1-t)*.95})`);fire.addColorStop(.22,`rgba(255,208,83,${(1-t)*.85})`);fire.addColorStop(.6,`rgba(255,92,28,${(1-t)*.6})`);fire.addColorStop(1,'#d64a1900');
 ctx.globalCompositeOperation='screen';ctx.fillStyle=fire;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
 ctx.strokeStyle=`rgba(225,194,157,${(1-t)*.35})`;ctx.lineWidth=Math.max(.5,4*(1-t));ctx.beginPath();ctx.arc(x,y,radius*1.1,0,Math.PI*2);ctx.stroke();ctx.globalCompositeOperation='source-over';
 for(let i=0;i<9;i++){const a=i*2.39996,d=size*t*(.3+(i%4)*.2),sr=size*(.08+t*.18);const sx=x+Math.cos(a)*d,sy=y+Math.sin(a)*d;const smoke=ctx.createRadialGradient(sx,sy,0,sx,sy,Math.max(1,sr));smoke.addColorStop(0,`rgba(89,73,65,${Math.sin(t*Math.PI)*.22})`);smoke.addColorStop(1,'#34303b00');ctx.fillStyle=smoke;ctx.fillRect(sx-sr,sy-sr,sr*2,sr*2);}
 ctx.globalAlpha=1-t;
 for(let i=0;i<64;i++){const a=i*2.39996,d=size*t*(.45+(i%17)/12),dx=Math.cos(a),dy=Math.sin(a);ctx.strokeStyle=i%3?colour:'#ffe5a1';ctx.lineWidth=i%3?2:1;ctx.beginPath();ctx.moveTo(x+dx*d,y+dy*d);ctx.lineTo(x+dx*(d+size*.1*(1-t)),y+dy*(d+size*.1*(1-t)));ctx.stroke();}
 ctx.restore();
}
let strikeNoticeTimer=null;
function announceStrike(title,detail){
 clearTimeout(strikeNoticeTimer);
 $('#strike-announcement-title').textContent=title;$('#strike-announcement-detail').textContent=detail;$('#strike-announcement').hidden=false;
}
function detonateNuke(){
 if(!nuke||nuke.impacted)return;nuke.impacted=true;
 announceStrike('☢ IMPACT',`${planets[nuke.i].name} hit. About one-third of the planet’s visible surface is blasted away.`);
 planetDamage[nuke.i].push({x:0,y:0,r:Math.sqrt(1/3)});
 damageProgress[nuke.i]=surfaceDamage(planetDamage[nuke.i]);damagedSurfaces[nuke.i]=null;
 if(nuke.i===2)earthPanicUntil=performance.now()+15000;
 refreshDamagedPlanet(nuke.i);syncCannon();
 $('#sun-status').textContent=`Direct hit! ${planets[nuke.i].name} has lost about one-third of its visible surface. Its moons remain in orbit. Restore repairs it.`;
}
function drawStrikePlane(x,y,size){
 ctx.save();ctx.translate(x,y);ctx.scale(size*1.45,size*.92);
 const shape=(points,fill,stroke='#26313a')=>{ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.lineWidth=.65;ctx.beginPath();points.forEach(([px,py],i)=>i?ctx.lineTo(px,py):ctx.moveTo(px,py));ctx.closePath();ctx.fill();ctx.stroke();};
 // Swept wings, a slender fuselage, and individual engine nacelles.
 const wing=ctx.createLinearGradient(-30,-45,10,45);wing.addColorStop(0,'#667580');wing.addColorStop(.45,'#adb7bc');wing.addColorStop(1,'#485966');
 shape([[12,-4],[-21,-40],[-32,-43],[-15,-6],[-15,6],[-32,43],[-21,40],[12,4]],wing);
 shape([[-32,-3],[-47,-18],[-54,-19],[-46,-3],[-46,3],[-54,19],[-47,18],[-32,3]],'#78858e');
 for(const side of [-1,1])for(let j=0;j<2;j++){
  const ex=-8-j*9,ey=side*(15+j*10),metal=ctx.createLinearGradient(0,ey-3,0,ey+3);metal.addColorStop(0,'#c7ced0');metal.addColorStop(.4,'#80929d');metal.addColorStop(1,'#303f49');
  ctx.fillStyle=metal;ctx.beginPath();ctx.ellipse(ex,ey,9,3.1,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#17232b';ctx.beginPath();ctx.ellipse(ex+7.5,ey,1.7,2.4,0,0,Math.PI*2);ctx.fill();
 }
 const fuselage=ctx.createLinearGradient(0,-6,0,6);fuselage.addColorStop(0,'#586873');fuselage.addColorStop(.35,'#d0d5d6');fuselage.addColorStop(.65,'#9daab1');fuselage.addColorStop(1,'#344550');
 ctx.fillStyle=fuselage;ctx.strokeStyle='#394a55';ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(55,0);ctx.bezierCurveTo(50,-5,25,-6,-24,-5);ctx.lineTo(-53,-1.5);ctx.lineTo(-56,0);ctx.lineTo(-53,1.5);ctx.lineTo(-24,5);ctx.bezierCurveTo(25,6,50,5,55,0);ctx.closePath();ctx.fill();ctx.stroke();
 shape([[40,-3],[46,-1.4],[46,1.4],[40,3],[33,2.5],[33,-2.5]],'#253b4a','#a9b8bf');
 ctx.strokeStyle='#475b6780';ctx.lineWidth=.5;for(let j=0;j<6;j++){const fx=-23+j*9;ctx.beginPath();ctx.moveTo(fx,-4.4);ctx.lineTo(fx,4.4);ctx.stroke();}
 ctx.strokeStyle='#d7dde080';ctx.beginPath();ctx.moveTo(-22,-35);ctx.lineTo(-8,-14);ctx.moveTo(-22,35);ctx.lineTo(-8,14);ctx.stroke();
 shape([[-36,0],[-49,-9],[-53,-9],[-47,1]],'#627782');
 ctx.strokeStyle='#d2dce52b';ctx.lineWidth=.8;for(const side of [-1,1]){ctx.beginPath();ctx.moveTo(-20,side*24);ctx.lineTo(-82,side*28);ctx.stroke();}
 ctx.restore();
}
function drawPlanetBreakup(burst,age){
 if(age<0||age>2.2)return;
 if(age<1.3)drawImpactExplosion(burst.x,burst.y,burst.r,age/1.3,true,burst.colour);
 const t=age/2.2;ctx.save();ctx.globalAlpha=Math.max(0,1-t);
 for(let i=0;i<48;i++){
  const a=i*2.39996,speed=burst.r*(1.2+(i%11)*.4),distance=speed*t*2;
  ctx.save();ctx.translate(burst.x+Math.cos(a)*distance,burst.y+Math.sin(a)*distance);ctx.rotate(a+t*(i%2?3:-3));
  const size=Math.max(1,burst.r*(.04+(i%7)*.012))*(1-t*.4);
  ctx.fillStyle=i%4?burst.colour:'#e8bb79';ctx.strokeStyle='#382e2b';ctx.lineWidth=.5;
  ctx.beginPath();ctx.moveTo(-size,-size*.4);ctx.lineTo(size*.2,-size);ctx.lineTo(size,size*.3);ctx.lineTo(-size*.5,size*.8);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.restore();
 }ctx.restore();
}
function drawMushroomCloud(x,y,r,age){
 const t=Math.min(1,Math.max(0,age/4.7)),rise=r*(.35+Math.pow(t,.65)*1.8),wide=r*(.3+Math.pow(t,.55)*1.2);
 const fade=Math.min(1,age*3)*Math.min(1,(1-t)*4);
 ctx.save();ctx.globalAlpha=fade;
 const puff=(px,py,rx,ry,heat,shade)=>{
  ctx.save();ctx.translate(px,py);ctx.scale(1,Math.max(.1,ry/rx));
  const g=ctx.createRadialGradient(-rx*.26,-rx*.3,0,0,0,rx);
  const v=Math.round(95+shade*65),warm=Math.max(0,heat)*(1-t);
  g.addColorStop(0,`rgba(${Math.round(v+warm*80)},${Math.round(v*.94+warm*38)},${Math.round(v*.86)},.82)`);
  g.addColorStop(.55,`rgba(${Math.round(v*.63+warm*75)},${Math.round(v*.61+warm*24)},${Math.round(v*.58)},.8)`);
  g.addColorStop(.85,`rgba(${Math.round(v*.43)},${Math.round(v*.44)},${Math.round(v*.46)},.55)`);g.addColorStop(1,'#36363800');
  ctx.fillStyle=g;ctx.fillRect(-rx,-rx,rx*2,rx*2);ctx.restore();
 };
 // Low dust ring and turbulent stem, followed by the rolling cap.
 for(let i=0;i<26;i++){const a=i*2.39996,d=r*(.3+t*2.3)*( .55+(i%5)*.1);puff(x+Math.cos(a)*d,y+Math.sin(a)*d*.12,r*(.12+t*.2),r*(.05+t*.09),.35,(i%7)/7);}
 for(let i=0;i<42;i++){const f=i/42,sway=Math.sin(i*3.7+t*5)*r*.08*f;puff(x+sway,y-rise*f,r*(.1+t*.15)*(1+.2*Math.sin(i)),r*(.12+t*.13),1-f,(i%9)/9);}
 for(let i=0;i<78;i++){const a=i*2.39996,rad=Math.sqrt((i+.5)/78),curl=Math.sin(t*3+i*.4)*wide*.035;const px=x+Math.cos(a)*rad*wide,py=y-rise+Math.sin(a)*rad*wide*.31+curl;puff(px,py,wide*(.17+(i%7)*.013),wide*(.12+(i%5)*.012),Math.max(0,Math.sin(a))*.55,(1-Math.sin(a))*.35);}
 ctx.restore();
}
function renderNuclearStrike(now){
 targets=[];const t=(now-nuke.started)/1000,{x,y,r}=cannonGeometry();
 const flightY=Math.max(height*.27,y-r-65),planeX=-80+(width+160)*Math.min(1,t/3);
 if(t>=2.5)detonateNuke();
 if(!destroyedPlanets.has(nuke.i)){const o={i:nuke.i,x,y};drawMoons(o,r,false);drawWorld(ctx,nuke.i,x,y,r);drawMoons(o,r,true);}
 if(t<3)drawStrikePlane(planeX,flightY,Math.min(1,width/650));
 if(t>=1.5&&!nuke.released){nuke.released=true;announceStrike('☢ BOMB RELEASED',`Bomb falling toward ${planets[nuke.i].name}. Impact incoming.`);$('#sun-status').textContent=`Bomb released over ${planets[nuke.i].name}!`;}
 if(t>=1.5&&t<2.5){
  const f=t-1.5,bombY=flightY+(y-flightY)*f*f;
  ctx.save();ctx.translate(x,bombY);ctx.fillStyle='#d8c388';ctx.strokeStyle='#ffe4a0';ctx.lineWidth=1;
  ctx.beginPath();ctx.ellipse(0,0,5,11,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#9a8149';ctx.fillRect(-7,-13,14,4);ctx.fillStyle='#262c31';ctx.fillRect(-4,-2,8,4);ctx.restore();
  if(nuke.i===2)earthPanicUntil=now+15000;
 }
 if(t>=2.5){
  const age=t-2.5,q=Math.min(1,age/3);
  if(age<1.05)drawImpactExplosion(x,y,r*1.4,age,true,'#ffbf60');
  drawMushroomCloud(x,y,r,age);
 }
 if(t>=7.3){nuke=null;$('#strike-announcement').hidden=true;syncCannon();}
}
$('#nuclear-strike').onclick=()=>{
 if(shot||nuke||destruction||destroyedPlanets.has(selected))return;
 cannonView=true;nuke={i:selected,started:performance.now(),impacted:false,released:false};syncCannon();announceStrike('AIRCRAFT INBOUND',`Target: ${planets[selected].name}. Stand by for bomb release.`);
 $('#sun-status').textContent=`Plane inbound over ${planets[selected].name}. Bomb release in 1.5 seconds…`;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){detonateNuke();nuke=null;syncCannon();strikeNoticeTimer=setTimeout(()=>{$('#strike-announcement').hidden=true;},4000);}
};
function renderCannon(now){
 if(nuke){renderNuclearStrike(now);return;}
 targets=[];const {x,y,r}=cannonGeometry(),ax=cannonAim.x*width,ay=cannonAim.y*height;
 const elapsed=shot?(now-shot.started)/1000:0;
 if(shot&&shot.moonIndex!==undefined&&!shot.applied){const m=moonPosition(shot.i,shot.moonIndex,{x,y},r);shot.x=m.x;shot.y=m.y;}
 if(shot&&elapsed>=.8)applyCannonImpact();
 if(!destroyedPlanets.has(selected)){const o={i:selected,x,y};drawMoons(o,r,false);drawWorld(ctx,selected,x,y,r);drawMoons(o,r,true);}
 ctx.save();ctx.strokeStyle='#a3e1dcbb';ctx.lineWidth=1;
 ctx.beginPath();ctx.arc(ax,ay,12,0,Math.PI*2);ctx.stroke();
 for(let i=0;i<4;i++){const a=i*Math.PI/2;ctx.beginPath();ctx.moveTo(ax+Math.cos(a)*17,ay+Math.sin(a)*17);ctx.lineTo(ax+Math.cos(a)*25,ay+Math.sin(a)*25);ctx.stroke();}
 drawCannonHardware(ax,ay,elapsed);
 if(shot){
  if(elapsed<.8){const t=elapsed/.8;ctx.strokeStyle='#ffe699';ctx.lineWidth=.7;ctx.shadowColor='#ffd65a';ctx.shadowBlur=1.5;ctx.beginPath();ctx.moveTo(width*.5,height*.88);ctx.lineTo(width*.5+(shot.x-width*.5)*t,height*.88+(shot.y-height*.88)*t);ctx.stroke();ctx.shadowBlur=0;}
  else{const final=destroyedPlanets.has(shot.i);drawImpactExplosion(final?x:shot.x,final?y:shot.y,shot.moonIndex!==undefined?18:r,elapsed-.8,final,shot.moonIndex!==undefined?moons[shot.i][shot.moonIndex][1]:shot.hit?planets[shot.i].colours[0]:'#78dbff');}

  if(elapsed>=1.9){shot=null;syncCannon();}
 }
 ctx.restore();
}
$('#cannon-view').onclick=()=>{
 applyCannonImpact();cannonView=!cannonView;shot=null;syncCannon();
 $('#sun-status').textContent=cannonView?'Aim with pointer, touch, or arrow keys. Fire at intact areas. Unlimited shots until the planet breaks apart.':'Orbit view. Damage remains until you Restore.';
 if(cannonView)canvas.focus({preventScroll:true});
};
$('#fire-cannon').onclick=()=>{
 if(!cannonView||shot||nuke||destruction||destroyedPlanets.has(selected))return;
 const {x,y,r}=cannonGeometry(),nx=(cannonAim.x*width-x)/r,ny=(cannonAim.y*height-y)/r;
 const moon=targetMoon(selected,cannonAim.x*width,cannonAim.y*height,{x,y},r);
 const hit=!!moon||Math.hypot(nx,ny)<.98&&!planetDamage[selected].some(h=>Math.hypot(nx-h.x,ny-h.y)<h.r);
 shot={started:performance.now(),i:selected,x:cannonAim.x*width,y:cannonAim.y*height,nx,ny,hit,applied:false,...(moon?{moonIndex:moon.j}:{})};targets=[];
 if(moon)$('#sun-status').textContent=`Locked onto ${moons[selected][moon.j][0]}.`;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){applyCannonImpact();shot=null;}
 else $('#sun-status').textContent=`Firing at ${planets[selected].name}…`;
 syncCannon();
};
function setPause(){ $('#pause').textContent=paused?'▶':'Ⅱ';$('#pause').setAttribute('aria-label',paused?'Play simulation':'Pause simulation');}setPause();
$('#pause').onclick=()=>{paused=!paused;setPause();};$('#speed').onchange=e=>speed=Number(e.target.value);$('#labels').onclick=()=>{showLabels=!showLabels;$('#labels').setAttribute('aria-pressed',showLabels);$('#labels span').textContent=showLabels?'on':'off';};
$('#destroy-sun').onclick=()=>{
 if(destruction)return;
 cannonView=false;shot=null;syncCannon();
 destruction={started:performance.now()-(matchMedia('(prefers-reduced-motion: reduce)').matches?3000:0),complete:false,bursts:new Map(),reduced:matchMedia('(prefers-reduced-motion: reduce)').matches};targets=[];
 $('#destroy-sun').disabled=true;$('#restore-system').disabled=false;
 $('#sun-status').textContent='Solar explosion! The shockwave is sweeping away the planets.';
 $('#scene-label').textContent='SOLAR SYSTEM · DESTRUCTION';syncCannon();
};
$('#restore-system').onclick=()=>{
 destruction=null;shot=null;nuke=null;clearTimeout(strikeNoticeTimer);$('#strike-announcement').hidden=true;earthPanicUntil=0;destroyedPlanets.clear();destroyedMoons.clear();planetDamage.forEach(h=>h.length=0);damagedSurfaces.fill(null);damageProgress.fill(0);planets.forEach((_,i)=>refreshDamagedPlanet(i));targets=[];$('#destroy-sun').disabled=false;$('#restore-system').disabled=true;
 $('#sun-status').textContent='Solar system restored. All eight planets are back!';
 syncCannon();
};
function reset(){yaw=-.12;pitch=.70;zoom=1;}$('#reset').onclick=reset;$('#zoom-in').onclick=()=>zoom=Math.min(2.8,zoom*1.16);$('#zoom-out').onclick=()=>zoom=Math.max(.45,zoom/1.16);
canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.45,Math.min(2.8,zoom*Math.exp(-e.deltaY*.001)));},{passive:false});
canvas.addEventListener('pointerdown',e=>{if(cannonView){aimCannon(e);canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);return;}drag={x:e.clientX,y:e.clientY,total:0};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{if(cannonView){aimCannon(e);return;}if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.total+=Math.abs(dx)+Math.abs(dy);yaw+=dx*.006;pitch=Math.max(.15,Math.min(1.5,pitch+dy*.004));drag.x=e.clientX;drag.y=e.clientY;});
canvas.addEventListener('pointerup',e=>{if(drag&&drag.total<7){const rect=canvas.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top;const t=targets.slice().reverse().find(t=>Math.hypot(x-t.x,y-t.y)<t.r);if(t)choose(t.i);}drag=null;});canvas.addEventListener('pointercancel',()=>drag=null);
canvas.addEventListener('keydown',e=>{if(cannonView){if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','Enter'].includes(e.key))e.preventDefault();const step=e.shiftKey?.01:.035;if(e.key==='ArrowLeft')cannonAim.x=Math.max(.02,cannonAim.x-step);if(e.key==='ArrowRight')cannonAim.x=Math.min(.98,cannonAim.x+step);if(e.key==='ArrowUp')cannonAim.y=Math.max(.04,cannonAim.y-step);if(e.key==='ArrowDown')cannonAim.y=Math.min(.94,cannonAim.y+step);if((e.key===' '||e.key==='Enter')&&!e.repeat)$('#fire-cannon').click();return;}if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','+','-','0'].includes(e.key))e.preventDefault();if(e.key==='ArrowLeft')yaw-=.1;if(e.key==='ArrowRight')yaw+=.1;if(e.key==='ArrowUp')pitch=Math.min(1.5,pitch+.1);if(e.key==='ArrowDown')pitch=Math.max(.15,pitch-.1);if(e.key==='+')$('#zoom-in').click();if(e.key==='-')$('#zoom-out').click();if(e.key===' ')$('#pause').click();if(e.key==='0')reset();});
resize();requestAnimationFrame(render);

loadPlanetMaps();
