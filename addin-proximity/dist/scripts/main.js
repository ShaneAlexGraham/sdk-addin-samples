"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,n,a,i,r,o){try{var c=e[r](o),d=c.value}catch(e){return void n(e)}c.done?t(d):Promise.resolve(d).then(a,i)}function _asyncToGenerator(c){return function(){var e=this,o=arguments;return new Promise(function(t,n){var a=c.apply(e,o);function i(e){asyncGeneratorStep(a,t,n,i,r,"next",e)}function r(e){asyncGeneratorStep(a,t,n,i,r,"throw",e)}i(void 0)})}}geotab.addin.proximity=function(){var w,n,x,c,T,d,M,u,l,s,m,f,y,p,g,v,I,t,D=250,E={},k=[],h=!0,S=!1,B=!1,C=["DeviceID, Date, Time, Latitude, Longitude\n"],O=function(e){g.innerHTML=e},G=function(e){clearTimeout(t),e?(I.disabled=!0,v.style.display="block",p.textContent="Cancel",p.style.display="block",p.disabled=!1,d.disable(),M.disabled=!0,u.disabled=!0,l.disabled=!0,s.disabled=!0,f.disabled=!0,y.disabled=!0):t=setTimeout(function(){v.style.display="none",p.style.display="none",d.enable(),M.disabled=!1,u.disabled=!1,l.disabled=!1,s.disabled=!1,f.disabled=!1,y.disabled=!1},600)},b=function(e){return e*(h?1:1.09361)},R=function(e){var t,n=new L.LatLng(e.latitude,e.longitude),a=e.distance,i=(t=n,new L.Marker(t,{icon:new L.DivIcon({className:"map-icon",iconSize:[16,16]})})),r=new Date(e.dateTime);i.bindTooltip("".concat(E[e.device.id].name," was ").concat(Math.floor(b(a))," ").concat(h?" m":" yd"," away on ").concat(r.toDateString()," at ").concat(r.toTimeString())),c.addLayer(i)},_=function(e){var t=e.split("T");return[t[0],t[1].split(".")[0]]},z=function(){if(B=!1,O(""),C=["DeviceID, Date, Time, Latitude, Longitude\n"],""!==M.value)if(S||0!==k.length){var e=new Date(f.value+":00Z"),h=new Date(e.setMinutes(e.getMinutes()+(new Date).getTimezoneOffset())).toISOString(),t=new Date(y.value+":00Z"),b=new Date(t.setMinutes(t.getMinutes()+(new Date).getTimezoneOffset())).toISOString();c.clearLayers(),T.clearLayers(),G(!0),w.call("GetCoordinates",{addresses:[M.value]},function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var i,r,n,a,o,c,d,u,l,s,m,f,y,p,g,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||t.length<1||!t[0])return O("Could not find the address"),G(!1),e.abrupt("return");e.next=4;break;case 4:if(B)return G(!1),e.abrupt("return");e.next=7;break;case 7:i=function(e){return e.forEach(function(e){R(e);var t=_slicedToArray(_(e.dateTime),2),n=t[0],a=t[1];C.push("".concat(E[e.device.id].name,", ").concat(n,", ").concat(a,", ").concat(e.latitude,", ").concat(e.longitude,"\n"))}),e.length},r=function(e,t,n){return["Get",{typeName:"LogRecord",search:{deviceSearch:{id:e},fromDate:t,toDate:n},resultsLimit:5e4}]},a=(n=function(e,t,n,a,i){return new L.Circle([t,e],n,{stroke:!1,fillColor:a,fillOpacity:i})})(t[0].x,t[0].y,1*D,"#ff4444",.3),o=n(t[0].x,t[0].y,2*D,"#ff8800",.3),c=n(t[0].x,t[0].y,3*D,"#ff8800",.3),d=n(t[0].x,t[0].y,4*D,"#99cc00",.3),u=n(t[0].x,t[0].y,5*D,"#33b5e5",.3),l={latitude:t[0].y,longitude:t[0].x},window.geotabHeatMap=window.geotabHeatMap||{},window.geotabHeatMap.center=l,x.setView(new L.LatLng(l.latitude,l.longitude),14),T.addLayer(a),T.addLayer(o),T.addLayer(c),T.addLayer(d),T.addLayer(u),s=S?Object.keys(E).map(function(e){return E[e]}):k.map(function(e){return E[e]}),m=[],f=function(a){return new Promise(function(t,n){var e=r(a.id,h,b);w.call(e[0],e[1],function(e){5e4===e.length&&m.push(A(a.name));var params={array:e,center:l,radiusFactor:D,aggregate:!0,maxThreads:navigator.hardwareConcurrency||1};hamsters.promise(params,function(){var r=params.center,o=5*params.radiusFactor,c=function(e){return e*(Math.PI/180)};params.array.forEach(function(e){if(e.id){var t=c(r.latitude-e.latitude),n=c(r.longitude-e.longitude),a=Math.sin(t/2)*Math.sin(t/2)+Math.cos(c(e.latitude))*Math.cos(c(r.latitude))*Math.sin(n/2)*Math.sin(n/2),i=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));e.distance=6371e3*i,e.distance<o&&rtn.data.push(e)}})}).then(function(rtn){return rtn.data[0]}).then(i).then(t)},function(e){O(e),G(!1),n(e)})})},p=y=0;case 25:if(s.length>p)return e.next=28,f(s[p]);e.next=36;break;case 28:if(g=e.sent,y+=g||0,B)return G(!1),e.abrupt("return");e.next=33;break;case 33:p++,e.next=25;break;case 36:v=0===m.length?"":"<p>* ".concat(m.join(",")," was limited to ").concat(5e4," GPS positions, try narrowing date range to see all positions.</p>"),O(0<y?"<p>There were ".concat(y," locations recorded nearby to ").concat(M.value,".</p>").concat(v):"<p>There was no one near this area during this time frame.</p>".concat(v)),I.disabled=!1,G(!1);case 40:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),function(e){O(e),G(!1)})}else O("Select at least one vehicle to display")},i=function(i,e){var t=function(e){var t,n,a=b(5*e);D=e,n=i&&1e3<=a?(t=Number(Math.round(a/1e3+"e1")+"e-1"),"km"):!i&&1760<=a?(t=Number(Math.round(a/1760+"e1")+"e-1"),"mi"):(t=Math.round(a),i?" m":" yd"),document.getElementById("proximity-size-label").innerHTML="("+t+" "+n+")"};h=i,x=new L.Map("proximity-map",{center:new L.LatLng(e.latitude,e.longitude),zoom:9}),L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvdGFiIiwiYSI6ImNpd2NlaW02MjAxc28yeW9idTR3dmRxdTMifQ.ZH0koA2g2YMMBOcx6EYbwQ").addTo(x),c=L.markerClusterGroup({spiderfyOnMaxZoom:!1,disableClusteringAtZoom:18}).addTo(x),T=L.layerGroup().addTo(x),M=document.getElementById("proximity-address"),u=document.getElementById("proximity-size"),l=document.getElementById("proximity-select-all"),s=document.getElementById("proximity-vehicles"),f=document.getElementById("proximity-from"),y=document.getElementById("proximity-to"),g=document.getElementById("proximity-error"),v=document.getElementById("proximity-loading"),m=document.getElementById("proximity-div-vehicles"),p=document.getElementById("proximity-cancel"),I=document.getElementById("proximity-run-report");var n=new Date,a=n.getDate(),r=n.getMonth()+1,o=n.getFullYear();a<10&&(a="0"+a),r<10&&(r="0"+r),f.value=o+"-"+r+"-"+a+"T00:00",y.value=o+"-"+r+"-"+a+"T23:59",t(300),(d=new Choices(s,{removeItemButton:!0})).passedElement.element.addEventListener("change",function(){k=d.getValue().map(function(e){return e.value}),z()}),I.addEventListener("click",function(){var e=_slicedToArray(_((new Date).toISOString()),2),t=e[0],n=e[1];!function(e,t){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout(function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)},0)}}(C=C.size?C:new Blob(C),"ProximityReport-".concat(t,"-").concat(n.replace(/\:/g,"."),".csv"))}),M.addEventListener("keydown",function(e){13===e.keyCode&&z()}),u.addEventListener("change",function(e){t(e.target.value),z()}),l.addEventListener("change",function(e){e.preventDefault(),S=!S,m.style.display=S?"none":"block",z()}),f.addEventListener("change",function(e){e.preventDefault(),z()}),y.addEventListener("change",function(e){e.preventDefault(),z()}),p.addEventListener("click",function(e){e.preventDefault(),p.textContent="Canceling...",p.disabled=!0,B=!0})},A=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};return{initialize:function(e,t,a){w=e,n=t,hamsters.init&&hamsters.init({debug:"verbose"}),function(t){if(!t)throw new Error('"callback" is null or undefined');w.getSession(function(e){w.call("Get",{typeName:"User",search:{name:e.userName}},function(e){t(0<e.length&&!!e[0].isMetric)},function(){t(!1)})},!1)}(function(t){var n={longitude:-79.709441,latitude:43.434497};"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){i(t,e.coords),a()},function(e){i(t,n),a()},{timeout:5e3}):(i(t,n),a())})},focus:function(e,t){w=e,n=t,E={},G(B=!0),w.call("Get",{typeName:"Device",resultsLimit:1e3,search:{fromDate:(new Date).toISOString(),groups:n.getGroupFilter()}},function(e){if(e&&!(e.length<1)){var t=e.map(function(e){return{value:(E[e.id]=e).id,label:A(e.name)}});d=d.setChoices(t,"value","label",!0),G(!1)}},function(e){O(e),G(!1)}),setTimeout(function(){x.invalidateSize()},800)},blur:function(){E&&(E={}),B=!0}}};