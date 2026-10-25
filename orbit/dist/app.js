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
const $=s=>document.querySelector(s), fmt=n=>n.toLocaleString('en-AU',{maximumFractionDigits:2});
const canvas=$('#space'),ctx=canvas.getContext('2d'),portrait=$('#portrait'),pc=portrait.getContext('2d');
let selected=2,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,showLabels=true,days=0,speed=20,yaw=-0.12,pitch=.70,zoom=1,width=0,height=0,dpr=1,targets=[],drag=null,lastFrame=0;
let seed=42;function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
const stars=Array.from({length:650},()=>({x:random(),y:random(),r:random()*1.1+.25,a:random()*.5+.12}));
function hex(h){return h.match(/\w\w/g).map(x=>parseInt(x,16));}
function noise(x,y){return Math.sin(x*2.5+Math.sin(y*3.7)*2)+.48*Math.sin(x*7.4-y*4)+.23*Math.sin(x*18+y*13);}
// Software-rendered spheres: surface normals, spherical coordinates, and directional lighting.
function sphere(p,n=180){
 const c=document.createElement('canvas');c.width=c.height=n;const cc=c.getContext('2d'),im=cc.createImageData(n,n),col=p.colours.map(hex),r=n/2-2;
 for(let py=0;py<n;py++)for(let px=0;px<n;px++){
  const x=(px-n/2)/r,y=(py-n/2)/r,rr=x*x+y*y;if(rr>1)continue;const z=Math.sqrt(1-rr),lat=Math.asin(y),lon=Math.atan2(x,z),v=noise(lon*2+1,lat*3),light=Math.max(.12,(-x*.48-y*.5+z*.72))*.86+.12;
  let rgb=col[0].slice();
  if(p.name==='Earth'){
   const land=noise(lon*2.2+.5,lat*2.9)+.5*Math.sin(lat*5-lon*3);rgb=land>.35?[78+v*8,114+v*10,75+v*5]:[28+v*3,89+v*6,143+v*8];
   if(Math.abs(lat)>1.22||noise(lon*6+7,lat*8)>.94)rgb=[204,219,225];
  }else if(p.name==='Jupiter'||p.name==='Saturn'){
   const band=Math.sin(lat*40+Math.sin(lon*7+lat*4)*.6)+Math.sin(lat*83)*.3,t=(band+1.3)/2.6;rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);
   if(p.name==='Jupiter'&&((lon-.38)/.35)**2+((lat-.24)/.12)**2<1)rgb=[172,106,80];
  }else if(p.name==='Uranus'||p.name==='Neptune'){
   const t=.55+Math.sin(lat*21+Math.sin(lon*4)*.1)*.08;rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);
  }else{const t=(v+1.7)/3.4;rgb=col[1].map((v,i)=>v+(col[2][i]-v)*t);if(p.name==='Mercury'){const cr=Math.sin(lon*47)*Math.cos(lat*53);if(cr>.86)rgb=rgb.map(v=>v*.72);}}
  const k=(py*n+px)*4;im.data[k]=rgb[0]*light;im.data[k+1]=rgb[1]*light;im.data[k+2]=rgb[2]*light;im.data[k+3]=Math.min(255,(1-rr)*r*200);
 }
 cc.putImageData(im,0,0);return c;
}
const textures=planets.map(p=>sphere(p,240));
function drawWorld(c,i,x,y,r,highlight=false){
 const p=planets[i];
 if(highlight){c.save();c.strokeStyle='#efa77d88';c.lineWidth=1;c.setLineDash([2,4]);c.beginPath();c.arc(x,y,r+7,0,Math.PI*2);c.stroke();c.restore();}
 if(p.name==='Saturn')drawRings(c,x,y,r,false);
 c.drawImage(textures[i],x-r,y-r,r*2,r*2);
 if(p.name==='Saturn')drawRings(c,x,y,r,true);
}
function drawRings(c,x,y,r,front){c.save();c.translate(x,y);c.rotate(-.32);c.scale(1,.34);c.lineWidth=r*.42;c.strokeStyle='#c3b28b88';c.beginPath();c.arc(0,0,r*1.65,front?0:Math.PI,front?Math.PI:Math.PI*2);c.stroke();c.lineWidth=r*.09;c.strokeStyle='#e5d5ad88';c.beginPath();c.arc(0,0,r*1.95,front?0:Math.PI,front?Math.PI:Math.PI*2);c.stroke();c.restore();}
function choose(i){
 selected=i;const p=planets[i];
 $('#planet-order').textContent=`0${i+1} / 08`;$('#planet-type').textContent=p.type.toUpperCase();$('#planet-name').textContent=p.name;$('#planet-symbol').textContent=p.symbol;$('#nickname').textContent=p.nick;
 $('#diameter').innerHTML=`${fmt(p.diameter)} <small>km</small>`;$('#distance').innerHTML=`${fmt(p.distance)} <small>million km</small>`;$('#description').textContent=p.desc;
 const facts=[['ONE ORBIT',p.year<2?`${fmt(p.year*365.256)} Earth days`:`${fmt(p.year)} Earth years`],['ONE ROTATION',`${fmt(Math.abs(p.rotation))} hours${p.rotation<0?' ↶':''}`],['GRAVITY',`${fmt(p.gravity)} m/s²`],['MEAN TEMPERATURE',`${p.temp>0?'+':''}${p.temp} °C`],['ATMOSPHERE',p.atmosphere],['MOONS',p.moon],['AXIAL TILT',`${p.tilt}°`],['RINGS',p.rings?'Yes':'None']];
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
function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
new ResizeObserver(resize).observe(canvas);
function project(x,y,z){const xx=x*Math.cos(yaw)-z*Math.sin(yaw),zz=x*Math.sin(yaw)+z*Math.cos(yaw),yy=y*Math.cos(pitch)-zz*Math.sin(pitch),depth=y*Math.sin(pitch)+zz*Math.cos(pitch),s=1050/(1050+depth);const fit=Math.min(width/890,height/760)*zoom;return {x:width*.51+xx*s*fit,y:height*(width<600?.65:.61)+yy*s*fit,s:s*fit,depth};}
const radii=[62,90,122,155,218,285,351,415];
function render(now){
 const dt=lastFrame?Math.min((now-lastFrame)/1000,.1):0;lastFrame=now;if(!paused&&!document.hidden)days+=dt*speed;
 ctx.clearRect(0,0,width,height);
 for(const star of stars){ctx.globalAlpha=star.a;ctx.fillStyle='#c9d7ef';ctx.beginPath();ctx.arc(star.x*width,star.y*height,star.r,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
 const centre=project(0,0,0),glow=ctx.createRadialGradient(centre.x,centre.y,0,centre.x,centre.y,100*centre.s);glow.addColorStop(0,'#ffa45420');glow.addColorStop(1,'#ffa45400');ctx.fillStyle=glow;ctx.fillRect(centre.x-100*centre.s,centre.y-100*centre.s,200*centre.s,200*centre.s);
 radii.forEach((r,i)=>{ctx.beginPath();for(let step=0;step<=140;step++){const a=step/140*Math.PI*2,p=project(Math.cos(a)*r,0,Math.sin(a)*r);if(!step)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y);}ctx.strokeStyle=i===selected?'#ac82634d':'#63768c2c';ctx.lineWidth=i===selected?1.2:.7;ctx.stroke();});
 // Asteroid belt, deliberately compressed with the rest of the display.
 for(let j=0;j<150;j++){const a=j*2.39996,r=181+Math.sin(j*73)*11,p=project(Math.cos(a)*r,Math.sin(j)*2,Math.sin(a)*r);ctx.fillStyle='#a49a8830';ctx.fillRect(p.x,p.y,1,1);}
 const objects=planets.map((p,i)=>{const a=p.angle+days/(p.year*365.256)*Math.PI*2;return {...project(Math.cos(a)*radii[i],0,Math.sin(a)*radii[i]),i};});objects.push({...centre,i:-1});objects.sort((a,b)=>b.depth-a.depth);targets=[];
 for(const o of objects){if(o.i===-1){const r=19*o.s,g=ctx.createRadialGradient(o.x-r*.3,o.y-r*.4,1,o.x,o.y,r);g.addColorStop(0,'#fff2b1');g.addColorStop(.6,'#ffd168');g.addColorStop(1,'#e98c37');ctx.shadowColor='#ffb458';ctx.shadowBlur=22;ctx.fillStyle=g;ctx.beginPath();ctx.arc(o.x,o.y,r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;if(showLabels){ctx.fillStyle='#c8aa7b';ctx.font='9px "DM Sans",sans-serif';ctx.textAlign='center';ctx.fillText('SUN',o.x,o.y+r+18);}continue;}
 const p=planets[o.i],r=Math.max(3,p.size*o.s);drawWorld(ctx,o.i,o.x,o.y,r,o.i===selected);targets.push({x:o.x,y:o.y,r:Math.max(13,r+7),i:o.i});if(showLabels){ctx.textAlign='center';ctx.font=`${o.i===selected?'600':'400'} 10px "DM Sans",sans-serif`;ctx.fillStyle=o.i===selected?'#efb38f':'#a1adbd';ctx.fillText(p.name,o.x,o.y+r+20);}
 }
 requestAnimationFrame(render);
}
function setPause(){ $('#pause').textContent=paused?'▶':'Ⅱ';$('#pause').setAttribute('aria-label',paused?'Play simulation':'Pause simulation');}setPause();
$('#pause').onclick=()=>{paused=!paused;setPause();};$('#speed').onchange=e=>speed=Number(e.target.value);$('#labels').onclick=()=>{showLabels=!showLabels;$('#labels').setAttribute('aria-pressed',showLabels);$('#labels span').textContent=showLabels?'on':'off';};
function reset(){yaw=-.12;pitch=.70;zoom=1;}$('#reset').onclick=reset;$('#zoom-in').onclick=()=>zoom=Math.min(2.8,zoom*1.16);$('#zoom-out').onclick=()=>zoom=Math.max(.45,zoom/1.16);
canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.45,Math.min(2.8,zoom*Math.exp(-e.deltaY*.001)));},{passive:false});
canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,total:0};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.total+=Math.abs(dx)+Math.abs(dy);yaw+=dx*.006;pitch=Math.max(.15,Math.min(1.5,pitch+dy*.004));drag.x=e.clientX;drag.y=e.clientY;});
canvas.addEventListener('pointerup',e=>{if(drag&&drag.total<7){const rect=canvas.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top;const t=targets.slice().reverse().find(t=>Math.hypot(x-t.x,y-t.y)<t.r);if(t)choose(t.i);}drag=null;});canvas.addEventListener('pointercancel',()=>drag=null);
canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','+','-','0'].includes(e.key))e.preventDefault();if(e.key==='ArrowLeft')yaw-=.1;if(e.key==='ArrowRight')yaw+=.1;if(e.key==='ArrowUp')pitch=Math.min(1.5,pitch+.1);if(e.key==='ArrowDown')pitch=Math.max(.15,pitch-.1);if(e.key==='+')$('#zoom-in').click();if(e.key==='-')$('#zoom-out').click();if(e.key===' ')$('#pause').click();if(e.key==='0')reset();});
resize();requestAnimationFrame(render);
