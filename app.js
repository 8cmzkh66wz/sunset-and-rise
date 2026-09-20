let lang = localStorage.getItem("sunsetHunterLang") || null;
const T = {
  en: {
    title:"🌅 Sunset Hunter",
    sub:"Sunrise & sunset color prediction — find places with the best chance of dramatic pink, orange and red skies.",
    search:"Search",locate:"Use my location",date:"From",forecast:"Forecast",
    d3:"Next 3 days",d7:"Next 7 days",start:"Search for a city to begin.",
    score:"Score",best:"BEST DAY",sunset:"Sunset",sunrise:"Sunrise",
    high:"High cloud",mid:"Mid cloud",low:"Low cloud",rain:"Rain chance",vis:"Visibility",hum:"Humidity",
    excellent:"Exceptional 🔥",very:"Excellent ⭐",promising:"Very promising 👍",possible:"Possible",lowchance:"Low chance",
    how:"How the score works",
    tip:"The model looks for a useful combination of <b>high and middle cloud</b> (the best canvas) and rewards when both layers are present. It penalizes excessive low cloud and rain, while factoring in visibility and moderate humidity. Applied separately to sunrise and sunset times. Result is a <b>0–100 Score</b> — not a guarantee.",
    loading:"Loading forecast…",finding:"Finding place…",notfound:"Place not found.",fail:"Could not load the forecast.",
    sunsetDir:"Sunset direction",sunriseDir:"Sunrise direction",solarNoon:"Solar noon",elevation:"Elevation",
    solarAlt:"Solar altitude",viewDir:"Best viewing direction",horizon:"Horizon",
    openSky:"Open horizon (terrain DEM not loaded)",
    solarNote:"Solar position is calculated locally. The map contains no weather layer.",
    solarHint:"Sunrise / sunset direction and solar path",
    today:"Today",tomorrow:"Tomorrow",pick:"Select a location",
    rank:"Rank",dateCol:"Date",verdict:"Verdict",
    sunriseScore:"Sunrise Score",sunsetScore:"Sunset Score",
    styleTitle:"Sunset style",
    styleGold:"Golden-leaning",
    styleFire:"Fire-cloud / orange-red",
    stylePink:"Pink-leaning",
    styleRainbow:"Rainbow possible",
    styleDull:"Likely muted",
    styleNormal:"Ordinary glow",
    photoTitle:"📸 Photography Tips",
    photoBody:`<p style="margin-bottom:10px;color:var(--text-muted);font-size:.9rem">Golden hour ≈ first 45–60 min after sunrise / last 45–60 min before sunset.</p><div class="settings"><div class="set-item"><b>ISO</b>100–400 (tripod: 100)</div><div class="set-item"><b>Aperture</b>f/8–f/11 landscape · f/1.8–f/4 portrait</div><div class="set-item"><b>Shutter</b>1/125+ handheld · slower on tripod</div><div class="set-item"><b>White Balance</b>Cloudy / Shade (warm tones)</div><div class="set-item"><b>Format</b>RAW always</div><div class="set-item"><b>Exposure</b>−0.3 to −1 EV (protect sky)</div></div><ul><li><b>Arrive early</b> — be on location 20–30 min before sunrise / sunset.</li><li><b>Composition</b> — rule of thirds; put horizon on lower or upper third. Use foreground for depth.</li><li><b>Silhouette</b> — expose for the sky; let subjects go dark against the color.</li><li><b>Starburst</b> — small aperture (f/16) + sun just at edge of frame.</li><li><b>Stay longer</b> — best color often peaks 10–20 min after the sun dips / rises.</li><li><b>Phone tip</b> — use HDR or Pro mode, lock exposure on the bright sky, then recompose.</li></ul>`
  },
  zh: {
    title:"🌅 晚霞獵人",
    sub:"日出與晚霞預測——尋找最有機會出現粉紅、橘紅與壯觀天空的地方。",
    search:"搜尋",locate:"使用我的位置",date:"起始日期",forecast:"預測天數",
    d3:"未來 3 天",d7:"未來 7 天",start:"請搜尋一個城市開始。",
    score:"指數",best:"最佳預測日",sunset:"日落",sunrise:"日出",
    high:"高雲",mid:"中雲",low:"低雲",rain:"降雨機率",vis:"能見度",hum:"濕度",
    excellent:"極佳 🔥",very:"非常值得 ⭐",promising:"很有機會 👍",possible:"有機會",lowchance:"機會偏低",
    how:"指數怎麼算？",
    tip:"模型會尋找適量的<b>高雲與中雲</b>（最佳畫布），並在兩者同時出現時額外加分。同時降低低雲與降雨的遮蔽影響，也會考慮能見度與適中濕度。日出與日落分別計算。結果是 <b>0～100 指數</b>，不是保證。",
    loading:"正在載入預報……",finding:"正在尋找地點……",notfound:"找不到這個地點。",fail:"無法取得預報。",
    sunsetDir:"日落方向",sunriseDir:"日出方向",solarNoon:"太陽正午",elevation:"海拔",
    solarAlt:"太陽高度角",viewDir:"最佳觀看方向",horizon:"地平線",
    openSky:"開闊地平線（尚未載入地形 DEM）",
    solarNote:"太陽位置由本地計算；地圖不含氣象圖層。",
    solarHint:"日出／日落方向與太陽路徑",
    today:"今天",tomorrow:"明天",pick:"請選擇地點",
    rank:"排名",dateCol:"日期",verdict:"評價",
    sunriseScore:"日出指數",sunsetScore:"晚霞指數",
    styleTitle:"晚霞風格",
    styleGold:"偏黃金日落",
    styleFire:"偏火燒雲／橘紅",
    stylePink:"偏粉紅",
    styleRainbow:"有彩虹機會",
    styleDull:"平淡機會高",
    styleNormal:"一般晚霞",
    photoTitle:"📸 攝影技巧",
    photoBody:`<p style="margin-bottom:10px;color:var(--text-muted);font-size:.9rem">黃金時刻 ≈ 日出後 45–60 分鐘 / 日落前 45–60 分鐘。</p><div class="settings"><div class="set-item"><b>ISO</b>100–400（腳架可鎖 100）</div><div class="set-item"><b>光圈</b>風景 f/8–f/11 · 人像 f/1.8–f/4</div><div class="set-item"><b>快門</b>手持 ≥1/125 · 腳架可更慢</div><div class="set-item"><b>白平衡</b>陰天 / 陰影（偏暖）</div><div class="set-item"><b>格式</b>一律拍 RAW</div><div class="set-item"><b>曝光</b>−0.3～−1 EV（保護天空）</div></div><ul><li><b>提早到場</b> — 日出／日落前 20–30 分鐘就定位好。</li><li><b>構圖</b> — 三分法，地平線放在上或下 1/3。用前景增加層次。</li><li><b>剪影</b> — 對天空測光，讓主體變成深色輪廓。</li><li><b>星芒</b> — 小光圈 f/16，太陽剛擦到畫面邊緣。</li><li><b>多待一會兒</b> — 最美的顏色常出現在太陽升起／落下後 10–20 分鐘。</li><li><b>手機技巧</b> — 開 HDR 或專業模式，先對亮部天空鎖定曝光再構圖。</li></ul>`
  }
};
function tr(k){return (T[lang||"en"]||T.en)[k]||k}
function setLang(x){lang=x;localStorage.setItem("sunsetHunterLang",x);document.getElementById("langScreen").style.display="none";applyLang();fillDateOptions();if(current)run(current)}
function applyLang(){if(!lang)return;$("title").innerHTML=tr("title");$("subtitle").textContent=tr("sub");$("search").textContent=tr("search");$("locate").textContent=tr("locate");$("dateLabel").textContent=tr("date");$("daysLabel").textContent=tr("forecast");$("days").options[0].text=tr("d3");$("days").options[1].text=tr("d7");$("howTitle").textContent=tr("how");$("tipText").innerHTML=tr("tip");$("solarMapHint").textContent=tr("solarHint");$("photoTitle").textContent=tr("photoTitle");$("photoContent").innerHTML=tr("photoBody");if(!current)$("status").textContent=tr("start");$("place").placeholder=lang==="zh"?"搜尋城市或地點，例如：台北、倫敦、東京":"Search any city or place, e.g. Taipei, London, Tokyo"}
const $=id=>document.getElementById(id);
const today=new Date();today.setHours(0,0,0,0);
function clamp(x,a=0,b=100){return Math.max(a,Math.min(b,x))}
function ideal(v,lo,hi){if(v>=lo&&v<=hi)return 100;if(v<lo)return clamp(100-(lo-v)*2);return clamp(100-(v-hi)*2)}
function skyScore(w){const high=ideal(w.high,25,70);const mid=ideal(w.mid,15,55);const interact=Math.sqrt((high/100)*(mid/100))*100;const low=100-clamp(Math.max(0,w.low-25)*2.2);const rain=100-clamp(w.pop*1.3);const vis=ideal(w.vis/1000,7,28);const hum=ideal(w.hum,40,72);return Math.round(clamp(high*.27+mid*.15+interact*.15+low*.16+rain*.12+vis*.10+hum*.05))}
function verdict(s){if(s>=88)return tr("excellent");if(s>=78)return tr("very");if(s>=68)return tr("promising");if(s>=55)return tr("possible");return tr("lowchance")}
function styleIdeal(x,a,b){if(x>=a&&x<=b)return 1;if(x<a)return Math.max(0,1-(a-x)/Math.max(a,1));return Math.max(0,1-(x-b)/Math.max(100-b,1))}
function sunsetStyles(w){
  const H=w.high||0,M=w.mid||0,L=w.low||0,P=w.pop||0,U=w.hum||50;
  const Vkm=(w.vis||10000)/1000;
  const h=H/100,m=M/100,l=L/100,p=P/100;
  const v=Math.max(0,Math.min(1,(Vkm-5)/20));
  const u=Math.max(0,Math.min(1,1-Math.abs(U-55)/40));
  const gold=100*(0.30*styleIdeal(H,20,55)+0.25*styleIdeal(M,15,45)+0.25*(1-l)+0.15*v+0.05*u);
  const fire=100*(0.40*styleIdeal(H,35,80)+0.20*styleIdeal(M,10,50)+0.25*Math.pow(1-l,1.2)+0.15*v);
  const pink=100*(0.25*styleIdeal(H,15,50)+0.20*styleIdeal(M,10,40)+0.15*(1-l)+0.25*styleIdeal(Vkm,8,18)+0.15*u);
  const rainTerm=(P>=25&&P<=70)?Math.sqrt(Math.max(0,p*(1-p)))*2:(P>=15&&P<25?0.25*Math.sqrt(Math.max(0,p*(1-p)))*2:0);
  const rainbow=100*(0.55*rainTerm+0.25*(1-l)+0.15*v+0.05*styleIdeal(H,10,60));
  const dull=100*(0.45*l+0.30*(1-v)+0.15*p+0.10*Math.max(0,0.3-h-m));
  return{gold:Math.round(gold),fire:Math.round(fire),pink:Math.round(pink),rainbow:Math.round(rainbow),dull:Math.round(dull)};
}
function styleLabel(st){
  if(st.dull>=65)return{key:"dull",score:st.dull,text:tr("styleDull")};
  const map=[["gold",st.gold,tr("styleGold")],["fire",st.fire,tr("styleFire")],["pink",st.pink,tr("stylePink")],["rainbow",st.rainbow,tr("styleRainbow")]];
  map.sort((a,b)=>b[1]-a[1]);
  if(map[0][1]<45)return{key:"normal",score:map[0][1],text:tr("styleNormal")};
  const top={key:map[0][0],score:map[0][1],text:map[0][2]};
  if(map[1][1]>=45&&map[0][1]-map[1][1]<8) top.second={key:map[1][0],score:map[1][1],text:map[1][2]};
  return top;
}
function nearestIndex(times,target){let bi=0,bd=Infinity;for(let i=0;i<times.length;i++){const d=Math.abs(new Date(times[i])-target);if(d<bd){bd=d;bi=i}}return bi}
function fillDateOptions(){const sel=$("date");sel.innerHTML="";for(let i=0;i<7;i++){const d=new Date(today);d.setDate(d.getDate()+i);const s=d.toISOString().slice(0,10);const o=document.createElement("option");o.value=s;o.textContent=i===0?tr("today"):i===1?tr("tomorrow"):s;sel.appendChild(o)}}
async function geocode(q){const u="https://geocoding-api.open-meteo.com/v1/search?name="+encodeURIComponent(q)+"&count=8&language="+(lang||"en")+"&format=json";const j=await fetch(u).then(r=>r.json());if(!j.results?.length)throw new Error("notfound");return j.results}
async function forecast(lat,lon,date){const u=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=cloud_cover_low,cloud_cover_mid,cloud_cover_high,precipitation_probability,relative_humidity_2m,visibility&daily=sunset,sunrise&timezone=auto&start_date=${date}&end_date=${date}`;const r=await fetch(u);if(!r.ok)throw new Error("fail");return r.json()}
function weatherAt(j,idx){return{high:j.hourly.cloud_cover_high[idx]??0,mid:j.hourly.cloud_cover_mid[idx]??0,low:j.hourly.cloud_cover_low[idx]??0,pop:j.hourly.precipitation_probability[idx]??0,hum:j.hourly.relative_humidity_2m[idx]??0,vis:j.hourly.visibility[idx]??0}}
async function getDay(place,date){const j=await forecast(place.latitude,place.longitude,date);const sunset=new Date(j.daily.sunset[0]);const sunrise=new Date(j.daily.sunrise[0]);const iSun=nearestIndex(j.hourly.time,sunset);const iRise=nearestIndex(j.hourly.time,sunrise);const wSun=weatherAt(j,iSun);const wRise=weatherAt(j,iRise);const styles=sunsetStyles(wSun);return{date,sunsetScore:skyScore(wSun),sunriseScore:skyScore(wRise),sunset,sunrise,elevation:j.elevation??0,wSun,wRise,styles,style:styleLabel(styles)}}
let current=null;
async function run(place){current=place;$("candidates").style.display="none";$("status").textContent=`${tr("loading")} ${place.name}${place.country?", "+place.country:""}`;$("app").innerHTML="";$("solarInfo").style.display="none";try{const startDate=$("date").value;const n=Number($("days").value);const start=new Date(startDate+"T12:00:00");const out=[];for(let k=0;k<n;k++){const d=new Date(start);d.setDate(d.getDate()+k);out.push(await getDay(place,d.toISOString().slice(0,10)))}out.sort((a,b)=>Math.max(b.sunriseScore,b.sunsetScore)-Math.max(a.sunriseScore,a.sunsetScore));const best=out[0];const tzHint=best.sunset.toLocaleTimeString("en-US",{timeZoneName:"short"}).split(" ").slice(-1)[0]||"local";$("status").textContent=`✓ ${place.name}${place.country?", "+place.country:""} · ${place.latitude.toFixed(2)}°, ${place.longitude.toFixed(2)}° · ${tzHint}`;$("app").innerHTML=`<div class="card"><div class="place-name">${place.name}${place.country?", "+place.country:""}</div><div class="muted" style="text-align:center;margin-bottom:12px">${tr("best")} · ${best.date}</div><div class="dual-scores"><div class="score-card sunrise"><div class="label">☀️ ${tr("sunriseScore")}</div><div class="num">${best.sunriseScore}</div><div class="verdict">${verdict(best.sunriseScore)}</div><div class="time">${fmtTime(best.sunrise)}</div></div><div class="score-card sunset"><div class="label">🌅 ${tr("sunsetScore")}</div><div class="num">${best.sunsetScore}</div><div class="verdict">${verdict(best.sunsetScore)}</div><div class="time">${fmtTime(best.sunset)}</div></div></div><div class="style-row" style="margin:12px 0 4px;text-align:center"><span style="font-size:.78rem;color:var(--text-muted)">${tr("styleTitle")}</span><div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center"><span class="style-badge" style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(255,122,61,.15);border:1px solid rgba(255,122,61,.35);font-size:.85rem;font-weight:650">${best.style.text}${best.style.score!=null?` · ${best.style.score}`:``}</span>${best.style.second?`<span class="style-badge" style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(255,179,71,.12);border:1px solid rgba(255,179,71,.3);font-size:.85rem;font-weight:650">${best.style.second.text} · ${best.style.second.score}</span>`:``}</div><div style="margin-top:8px;font-size:.72rem;color:var(--text-muted);opacity:.9">🥇${best.styles.gold} · 🔥${best.styles.fire} · 💗${best.styles.pink} · 🌈${best.styles.rainbow} · ☁️${best.styles.dull}</div></div><div class="grid"><div class="metric"><span>${tr("high")} (↓)</span><b>${best.wSun.high}%</b></div><div class="metric"><span>${tr("mid")} (↓)</span><b>${best.wSun.mid}%</b></div><div class="metric"><span>${tr("low")} (↓)</span><b>${best.wSun.low}%</b></div><div class="metric"><span>${tr("rain")} (↓)</span><b>${best.wSun.pop}%</b></div><div class="metric"><span>${tr("vis")} (↓)</span><b>${(best.wSun.vis/1000).toFixed(1)} km</b></div><div class="metric"><span>${tr("hum")} (↓)</span><b>${best.wSun.hum}%</b></div></div><p class="muted" style="margin-top:10px;font-size:.8rem">↓ = sunset-time values · sunrise uses its own hour</p></div><div class="card"><table><thead><tr><th>${tr("rank")}</th><th>${tr("dateCol")}</th><th>☀️ ${tr("sunrise")}</th><th>🌅 ${tr("sunset")}</th><th>${tr("verdict")}</th></tr></thead><tbody>${out.map((x,i)=>`<tr><td class="top">${i+1}</td><td>${x.date}</td><td class="top">${x.sunriseScore}</td><td class="top">${x.sunsetScore}</td><td>${verdict(Math.max(x.sunriseScore,x.sunsetScore))}</td></tr>`).join("")}</tbody></table></div>`;drawSolarMap(place,best)}catch(e){console.error(e);$("status").textContent=tr("fail")}}
async function doSearch(){const q=$("place").value.trim();if(!q)return;$("status").textContent=tr("finding");$("candidates").style.display="none";try{const results=await geocode(q);if(results.length===1)run(results[0]);else showCandidates(results)}catch(e){$("status").textContent=tr("notfound")}}
function showCandidates(list){const box=$("candidates");box.innerHTML=`<div class="muted" style="margin-bottom:6px">${tr("pick")}</div>`;list.forEach(p=>{const div=document.createElement("div");div.className="cand";div.innerHTML=`<div><b>${p.name}</b><br><span>${[p.admin1,p.country].filter(Boolean).join(", ")}</span></div><span>${p.latitude.toFixed(2)}°, ${p.longitude.toFixed(2)}°</span>`;div.onclick=()=>run(p);box.appendChild(div)});box.style.display="flex";$("status").textContent=`${list.length} places found`}
$("search").onclick=doSearch;$("place").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});$("days").onchange=()=>current&&run(current);$("date").onchange=()=>current&&run(current);
$("locate").onclick=()=>{if(!navigator.geolocation){$("status").textContent=tr("fail");return}$("status").textContent=tr("finding");navigator.geolocation.getCurrentPosition(p=>run({name:lang==="zh"?"我的位置":"Your location",country:"",latitude:p.coords.latitude,longitude:p.coords.longitude}),()=>{$("status").textContent=lang==="zh"?"無法取得位置權限":"Location permission denied"})};
let solarMap=null,solarLayers=[];
function rad(d){return d*Math.PI/180}function deg(r){return r*180/Math.PI}function clampN(x,a,b){return Math.max(a,Math.min(b,x))}
function solarPosition(date,lat,lon){const dayMs=86400000,J1970=2440588,J2000=2451545;const toJulian=d=>d.getTime()/dayMs-0.5+J1970;const toDays=d=>toJulian(d)-J2000;const e=rad(23.4397);const d=toDays(date);const M=rad(357.5293+0.98560028*d);const C=rad(1.9148)*Math.sin(M)+rad(0.02)*Math.sin(2*M)+rad(0.0003)*Math.sin(3*M);const P=rad(102.9372);const L=M+C+P+Math.PI;const decl=Math.asin(Math.sin(e)*Math.sin(L));const ra=Math.atan2(Math.sin(L)*Math.cos(e),Math.cos(L));const lw=rad(-lon);const phi=rad(lat);const sidereal=rad(280.16+360.9856235*d)-lw;const H=sidereal-ra;const alt=Math.asin(Math.sin(phi)*Math.sin(decl)+Math.cos(phi)*Math.cos(decl)*Math.cos(H));let az=Math.atan2(Math.sin(H),Math.cos(H)*Math.sin(phi)-Math.tan(decl)*Math.cos(phi));az=(deg(az)+180)%360;if(az<0)az+=360;return{azimuth:az,elevation:deg(alt),declination:deg(decl)}}
function bearingName(a){if(lang==="zh"){const dirs=["北","北東","東","南東","南","南西","西","北西"];return dirs[Math.round(a/45)%8]}const dirs=["N","NE","E","SE","S","SW","W","NW"];return dirs[Math.round(a/45)%8]}
function destination(lat,lon,bearing,km){const R=6371,br=rad(bearing),la=rad(lat),lo=rad(lon),d=km/R;const nla=Math.asin(Math.sin(la)*Math.cos(d)+Math.cos(la)*Math.sin(d)*Math.cos(br));const nlo=lo+Math.atan2(Math.sin(br)*Math.sin(d)*Math.cos(la),Math.cos(d)-Math.sin(la)*Math.sin(nla));return[deg(nla),((deg(nlo)+540)%360)-180]}
function fmtTime(d){return d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
function initSolarMap(){if(!window.L||solarMap)return;solarMap=L.map("solarMap",{zoomControl:true,attributionControl:true}).setView([23.7,121],7);L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:19,attribution:"© OpenStreetMap © CARTO"}).addTo(solarMap)}
function clearSolar(){solarLayers.forEach(x=>solarMap.removeLayer(x));solarLayers=[]}
function drawSolarMap(place,day){initSolarMap();if(!solarMap)return;clearSolar();const lat=Number(place.latitude),lon=Number(place.longitude);const sunset=day.sunset,sunrise=day.sunrise;const sr=solarPosition(sunrise,lat,lon),ss=solarPosition(sunset,lat,lon);const noon=new Date((sunrise.getTime()+sunset.getTime())/2),np=solarPosition(noon,lat,lon);solarMap.setView([lat,lon],9);const observer=L.circleMarker([lat,lon],{radius:8,color:"#fff",weight:3,fillColor:"#ff7a3d",fillOpacity:1}).addTo(solarMap);observer.bindTooltip(`${place.name||"Location"}<br>${lat.toFixed(3)}°, ${lon.toFixed(3)}°`,{permanent:true,direction:"top",offset:[0,-8]});solarLayers.push(observer);const srEnd=destination(lat,lon,sr.azimuth,80),ssEnd=destination(lat,lon,ss.azimuth,80);solarLayers.push(L.polyline([[lat,lon],srEnd],{color:"#ffd84d",weight:4,dashArray:"10 8"}).addTo(solarMap),L.polyline([[lat,lon],ssEnd],{color:"#ff7145",weight:4,dashArray:"10 8"}).addTo(solarMap));const path=[];for(let t=sunrise.getTime();t<=sunset.getTime();t+=15*60000){const d=new Date(t),p=solarPosition(d,lat,lon);if(p.elevation>-1)path.push(destination(lat,lon,p.azimuth,Math.min(110,35+Math.max(0,p.elevation)*0.75)))}if(path.length>1)solarLayers.push(L.polyline(path,{color:"#b8d6ea",weight:2.5,dashArray:"5 7",opacity:.9}).addTo(solarMap));const sun1=L.circleMarker(srEnd,{radius:9,color:"#ffd84d",fillColor:"#ffd84d",fillOpacity:1,weight:2}).addTo(solarMap);const sun2=L.circleMarker(ssEnd,{radius:10,color:"#ff9a4d",fillColor:"#ff8a3d",fillOpacity:1,weight:2}).addTo(solarMap);sun1.bindTooltip(`☀️ ${tr("sunrise")} ${fmtTime(sunrise)}<br>${sr.azimuth.toFixed(1)}° (${bearingName(sr.azimuth)})`,{permanent:true,direction:"right"});sun2.bindTooltip(`🌅 ${tr("sunset")} ${fmtTime(sunset)}<br>${ss.azimuth.toFixed(1)}° (${bearingName(ss.azimuth)})`,{permanent:true,direction:"left"});solarLayers.push(sun1,sun2);const info=$("solarInfo");info.style.display="block";info.innerHTML=`<div class="solar-grid"><div class="solar-metric"><span>${tr("sunrise")}</span><b>${fmtTime(sunrise)}</b></div><div class="solar-metric"><span>${tr("sunset")}</span><b>${fmtTime(sunset)}</b></div><div class="solar-metric"><span>${tr("sunriseDir")}</span><b>${sr.azimuth.toFixed(1)}° ${bearingName(sr.azimuth)}</b></div><div class="solar-metric"><span>${tr("sunsetDir")}</span><b>${ss.azimuth.toFixed(1)}° ${bearingName(ss.azimuth)}</b></div><div class="solar-metric"><span>${tr("solarNoon")}</span><b>${fmtTime(noon)}</b></div><div class="solar-metric"><span>${tr("solarAlt")} (${tr("solarNoon")})</span><b>${np.elevation.toFixed(1)}°</b></div><div class="solar-metric"><span>${tr("elevation")}</span><b>${Number(day.elevation||0).toFixed(0)} m</b></div><div class="solar-metric"><span>${tr("viewDir")}</span><b>${bearingName(ss.azimuth)} ${ss.azimuth.toFixed(0)}°</b></div></div><div class="solar-note">${tr("solarNote")} ${tr("horizon")}: ${tr("openSky")}</div>`}
if(lang)document.getElementById("langScreen").style.display="none";
fillDateOptions();applyLang();
setTimeout(initSolarMap,300);
