!function(){"use strict";var e="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){var r=new XMLHttpRequest;for(var i in r.open(t.method||"get",e),t.headers)r.setRequestHeader(i,t.headers[i]);function c(){var e,t=[],n=[],o={};return r.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,i,c){t.push(i=i.toLowerCase()),n.push([i,c]),e=o[i],o[i]=e?e+","+c:c}),{ok:1==(r.status/200|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:c,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}r.withCredentials="include"==t.credentials,r.onload=function(){n(c())},r.onerror=o,r.send(t.body)})},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();mapboxgl.supported()||alert("Hi sorry, looks like your browser is not supported to render the map 😢.\n\nYou could try to load this site on another (latest) browser perhaps? 🙏"),mapboxgl.accessToken="pk.eyJ1IjoiY2hlZWF1biIsImEiOiJjaXhmb3o3bTEwMDAzMnRudTJuNjh1eXQ1In0.yO6WeKJwx6yIPoVx5aPavQ";var r=new mapboxgl.Map({container:"map",style:"mapbox://styles/cheeaun/cixol8ezg002g2rqs007w3jmt",maxZoom:15.5,logoPosition:"top-right",attributionControl:!1,boxZoom:!1,zoom:.1}),i=(document.getElementById("info"),document.getElementById("info-countries")),c=document.getElementById("info-places"),a=document.getElementById("info-checkins"),s=document.getElementById("countries"),u=document.body.classList;function l(){u.add("interactive")}function d(){u.remove("interactive")}r.on("dragstart",l),r.on("zoomstart",l),s.addEventListener("touchstart",d,!1),s.addEventListener("mouseenter",d),r.on("click",function(){u.toggle("interactive")});var p=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};r.addControl(new mapboxgl.AttributionControl({compact:!0}),"top-right");var m=function(){function e(){t(this,e)}return n(e,[{key:"onAdd",value:function(e){var t=document.createElement("div");t.className="mapboxgl-ctrl mapboxgl-ctrl-group";var n=document.createElement("button");return n.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24">\n      <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.5-.07l-3.57 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07L4.93 15.5c.05.15.07.32.07.5 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.5.07l4.57-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56c-.05-.14-.07-.3-.07-.5 0-1.1.9-2 2-2s2 .9 2 2z"/>\n    </svg>',n.type="button",n.title="Show/hide journey lines",n.addEventListener("click",function(){"visible"===e.getLayoutProperty("lines","visibility")?(e.setLayoutProperty("lines","visibility","none"),n.classList.remove("active")):(e.setLayoutProperty("lines","visibility","visible"),n.classList.add("active"))},!1),t.appendChild(n),t}}]),e}();r.addControl(new m,"top-right"),r.addControl(new mapboxgl.NavigationControl,"top-right");var f=void 0,y=function(){function e(){t(this,e)}return n(e,[{key:"onAdd",value:function(){var e=document.createElement("div");return e.className="mapboxgl-ctrl pitch-ctrl",e.innerHTML='<svg viewBox="0 0 24 24">\n      <title>Pitch</title>\n      <path d="M14 6l-3.8 5 3 3.8-1.7 1.2L7 10l-6 8h22L14 6z"/>\n    </svg>',(f=document.createElement("input")).type="range",f.step=5,f.min=f.value=0,f.max=60,f.className="pitch-slider",f.addEventListener("change",function(e){r.easeTo({pitch:e.target.value})},!1),e.appendChild(f),e}}]),e}();function h(e,t){var n=Math.ceil(t/60),o=0;requestAnimationFrame(function r(){o>=t||((o+=n)>t&&(o=t),e.textContent=p(o),requestAnimationFrame(r))})}r.addControl(new y,"top-right"),r.on("pitchend",function(){f.value=r.getPitch()}),Promise.all([new Promise(function(e,t){r.on("load",e),r.on("error",t)}),e("data/checkins.min.geojson").then(function(e){return e.json()})]).then(function(e){var t=o(e,2),n=(t[0],t[1]),l={},d={},m=n.features.length,f=[];n.features=n.features.filter(function(e,t){var r=e.properties,i=r.id,c=r.country,a=!d[i],s=o(e.geometry.coordinates,2),u=s[0],p=s[1];if(a){if(!l[c]){var m=e.properties.cc.toLowerCase();l[c]={cc:m,bounds:new mapboxgl.LngLatBounds,places_count:0,checkins_count:0}}l[c].bounds.extend([u,p]),l[c].places_count++,d[i]=!0}l[c].checkins_count++;var y=n.features[t+1];if(y&&e.properties.date===y.properties.date){var h=o(y.geometry.coordinates,2),v=h[0],g=h[1];v+=v-u>180?-360:u-v>180?360:0,f.push([[u,p],[v,g]])}return a});var y=Object.keys(d).length,v=Object.keys(l).map(function(e){var t=l[e];return{name:e,cc:t.cc,bounds:t.bounds,places_count:t.places_count,checkins_count:t.checkins_count}}),g=v.length;v.sort(function(e,t){return t.places_count-e.places_count}),v.forEach(function(e,t){var n=e.cc,o=e.name,i=e.bounds,c=e.checkins_count,a=e.places_count,u=document.createElement("button");u.type="button",u.addEventListener("click",function(e){r.fitBounds(i,{padding:150})},!1),u.innerHTML='\n      <img src="data/countries/'+n+'.svg" width="50" height="50" alt=""><br>\n      <b>'+o+"</b>\n      <br>\n      "+p(c)+" check-in"+(c>1?"s":"")+"\n      <br>\n      "+p(a)+" place"+(a>1?"s":"")+"\n    ",s.appendChild(u)});var b=r.getStyle().layers.reverse(),w=b.findIndex(function(e){return"symbol"!==e.type}),x=-1!==w?b[w].id:void 0;r.addSource("checkins",{type:"geojson",data:n,cluster:!0,clusterMaxZoom:10,clusterRadius:10}),r.addLayer({id:"cluster",type:"circle",source:"checkins",filter:["has","point_count"],paint:{"circle-radius":{property:"point_count",stops:[[{zoom:0,value:3},7],[{zoom:0,value:10},10],[{zoom:0,value:100},13],[{zoom:0,value:200},16]]},"circle-color":"#14B7F4","circle-opacity":.9,"circle-stroke-width":{property:"point_count",stops:[[3,3],[50,6]]},"circle-stroke-color":"#14B7F4","circle-stroke-opacity":.3}}),r.addLayer({id:"checkins-count",type:"symbol",source:"checkins",filter:["has","point_count"],maxzoom:11,layout:{"text-field":"{point_count_abbreviated}","text-size":10}}),r.addLayer({id:"checkins",type:"circle",source:"checkins",minzoom:8,filter:["!has","point_count"],paint:{"circle-radius":3,"circle-color":"#14B7F4","circle-opacity":.9,"circle-stroke-width":3,"circle-stroke-color":"#14B7F4","circle-stroke-opacity":.1}},x),r.once("data",function(){requestAnimationFrame(function(){h(a,m),h(c,y),h(i,g),u.add("render")})}),r.on("mouseenter","cluster",function(){r.getCanvas().style.cursor="pointer"}),r.on("click","cluster",function(e){e.originalEvent.stopPropagation(),r.flyTo({center:e.lngLat,zoom:r.getZoom()+2})}),r.on("mouseleave","cluster",function(){r.getCanvas().style.cursor=""}),r.addLayer({id:"lines",type:"line",source:{type:"geojson",data:{type:"Feature",geometry:{type:"MultiLineString",coordinates:f}}},layout:{visibility:"none"},paint:{"line-color":"#fff","line-opacity":.3}},x),r.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:15,paint:{"fill-extrusion-color":"#999","fill-extrusion-height":{type:"identity",property:"height"},"fill-extrusion-base":{type:"identity",property:"min_height"},"fill-extrusion-opacity":.6}},x);var k=function(e){confirm("Oops, the map is acting weird now. Reload this page? 😅")&&location.reload(),console.error(e)};r.on("error",k),window.onerror=k})}();
//# sourceMappingURL=app.js.map
