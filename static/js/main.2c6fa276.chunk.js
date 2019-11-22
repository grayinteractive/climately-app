(this["webpackJsonpclimately-app"]=this["webpackJsonpclimately-app"]||[]).push([[0],{171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},174:function(t,e,a){},177:function(t,e,a){},178:function(t,e,a){},179:function(t,e,a){},180:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(49),o=a.n(c),i=(a(56),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),h=a(17),d=a.n(h),p=a(50),f=a.n(p),v=(a(171),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).handleQueryChange=function(t){a.setState({query:t.target.value})},a.handleSearch=function(t){t.preventDefault(),a.props.searchSubmit(a.state.query)},a.state={query:""},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSearch},r.a.createElement("input",{type:"search",value:this.state.query,name:"searchBox",id:"searchBox",placeholder:"Enter City",onChange:this.handleQueryChange,style:{borderBottom:"2px solid ".concat(this.props.accentColor)}}),r.a.createElement("span",{className:"search-button fa fa-search",onClick:this.handleSearch,style:{background:"".concat(this.props.accentColor),borderBottom:"1px solid ".concat(this.props.accentColor)}})))}}]),e}(n.Component)),y=(a(172),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).changeUnit=function(t){var e=t.target.textContent;a.props.onUnitChange(e)},a.state={unit:"C"},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"unit-container"},r.a.createElement("span",{className:"unit-value ".concat("C"===this.props.unit?"active-unit":""),style:{borderBottom:"C"===this.props.unit?"1px solid ".concat(this.props.accentColor):"none",background:"C"===this.props.unit?"".concat(this.props.accentColor):"transparent"},onClick:this.changeUnit},"C"),r.a.createElement("span",{className:"unit-value ".concat("F"===this.props.unit?"active-unit":""),style:{borderBottom:"F"===this.props.unit?"1px solid ".concat(this.props.accentColor):"none",background:"F"===this.props.unit?"".concat(this.props.accentColor):"transparent"},onClick:this.changeUnit},"F"))}}]),e}(n.Component)),E=(a(173),function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).sendNewUnitToParent=function(t){a.props.changeUnit(t)},a.sendQueryStringToParent=function(t){a.props.searchSubmit(t)},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navbar-container"},r.a.createElement("li",{className:"navbar-list-item"},r.a.createElement(v,{searchSubmit:this.sendQueryStringToParent,accentColor:this.props.accentColor})),r.a.createElement("li",{className:"navbar-list-item city-name"},r.a.createElement("span",{className:""},this.props.data.city)),r.a.createElement("li",{className:"navbar-list-item"},r.a.createElement(y,{unit:this.props.unit,onUnitChange:this.sendNewUnitToParent,accentColor:this.props.accentColor}))))}}]),e}(n.Component)),g=(a(174),[300,301,302,310,311,313,314,321,500,501,502,503,504,511,520,521,522,531,611,612,615,616,620,701]),w=[210,211,212,221,731,761,762,800],b=[200,201,202,230,231,232,600,601,602,621,622,711,721,741,771,781,801,802,803,804],D=function(t){var e=function(t,e){return t.indexOf(e)>-1};return e(g,t)?"wi-blue":e(w,t)?"wi-yellow":e(b,t)?"wi-gray":"wi-blue"},C=a(47),N=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.data,e=t.day,a=t.date,n=t.weatherId,c=t.description,o=t.mainTemp,i=t.minTemp,s=t.maxTemp,l=t.pressure,m=t.humidity,u=t.windSpeed,h=t.hours,d=t.localTime,p=t.timezoneId,f=this.props.unit,v=D(n),y="C"===f?"m/s":"miles/hr",E=0,g="";return h>=0&&h<6?(E=1,g="night"):h>=6&&h<12?(E=2,g="day"):h>=12&&h<18?(E=3,g="day"):h>=18&&h<24&&(E=4,g="night"),r.a.createElement("div",null,r.a.createElement("div",{className:"current-forecast-container"},r.a.createElement("div",{className:"date-container"},r.a.createElement("div",{className:"time-container"},d?C.tz(d,p).format("h:mm A"):null),r.a.createElement("div",null,e),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"icon-desc-container"},r.a.createElement("div",{className:"icon-conatainer"},r.a.createElement("i",{className:"wi wi-owm-".concat(g,"-").concat(n," weather-icon ").concat(v)})),r.a.createElement("div",{className:"weather-desc"},c)),r.a.createElement("div",{className:"temp-container"},r.a.createElement("div",{className:"temp-text"},r.a.createElement("span",null,o),r.a.createElement("i",{className:"wi wi-degrees"})),r.a.createElement("div",{className:"high-low-container"},r.a.createElement("div",{className:"high-low-item accent-color-".concat(E)},r.a.createElement("span",null,r.a.createElement("i",{className:"wi wi-direction-up"})),r.a.createElement("span",null,"Max"),r.a.createElement("span",null,r.a.createElement("span",null,s,"\xb0"))),r.a.createElement("div",{className:"high-low-item accent-color-".concat(E)},r.a.createElement("span",null,r.a.createElement("i",{className:"wi wi-direction-down"})),r.a.createElement("span",null,"Min"),r.a.createElement("span",null,r.a.createElement("span",null,i,"\xb0")))))),r.a.createElement("div",{className:"extra-info-container"},r.a.createElement("div",{className:"extra-info-item  accent-color-".concat(E)},r.a.createElement("span",null,r.a.createElement("i",{className:"wi wi-humidity"})),r.a.createElement("span",null,"Humidity:"),r.a.createElement("span",null,m,"%")),r.a.createElement("div",{className:"extra-info-item  accent-color-".concat(E)},r.a.createElement("span",null,r.a.createElement("i",{className:"wi wi-barometer"})),r.a.createElement("span",null,"Pressure:"),r.a.createElement("span",null,l," hPa")),r.a.createElement("div",{className:"extra-info-item  accent-color-".concat(E)},r.a.createElement("span",null,r.a.createElement("i",{className:"wi wi-strong-wind"})),r.a.createElement("span",null,"Wind:"),r.a.createElement("span",null,u," ",y))))}}]),e}(n.Component),S=(a(177),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.data.hours,e=0;t>=0&&t<6?e=1:t>=6&&t<12?e=2:t>=12&&t<18?e=3:t>=18&&t<24&&(e=4);var a=this.props.data.map((function(t){return r.a.createElement(F,{key:t.day,data:t,accentColor:e})}));return r.a.createElement("div",null,r.a.createElement("p",{className:"multiday-forecast-info"},"6-Day Forecast"),r.a.createElement("div",{className:"multiday-forecast-container"},a))}}]),e}(n.Component)),F=function(t){var e=t.data,a=e.day,n=e.weatherId,c=e.description,o=e.mainTemp,i=t.accentColor,s=D(n);return r.a.createElement("div",{className:"single-list-item accent-color-".concat(i)},r.a.createElement("div",{className:"li-info-container"},r.a.createElement("div",{className:"li-day"},a),r.a.createElement("div",{className:"li-temp-text"},o,"\xb0"),r.a.createElement("div",{className:"li-desc"},c)),r.a.createElement("div",{className:"li-weather-icon"},r.a.createElement("i",{className:"wi wi-owm-".concat(n," ").concat(s)})))},O=S,j=a(18),x=(a(178),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-container"},r.a.createElement("p",{className:"graph-info"},"6-Day Trend"),r.a.createElement("div",{className:"graph"},r.a.createElement(j.Sparklines,{data:this.props.data,height:50},r.a.createElement(j.SparklinesLine,{color:this.props.accentColor}),r.a.createElement(j.SparklinesSpots,{style:{fill:"#ffffff"}}))))}}]),e}(n.Component)),T=(a(179),a(47)),k=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).onUnitChange=function(t){a.setState({unit:t},a.notifyStateChange)},a.onSearchSubmit=function(t){a.setState({queryString:t,latLng:[]},a.notifyStateChange)},a.notifyStateChange=function(){var t=a.state.latLng.length>0,e=""!==a.state.queryString;(t||e)&&(a.fetchCurrentForecast(t).then((function(t){var e=a.extractDataForNavbar(t),n=a.extractDataForCurrentForecast(t);a.fetchLocationTime(n.coords,n.timestamp),a.setState({navbarData:e,currentForecastData:n}),a.makeItRain()})).catch((function(t){console.log("Error:",t)})),a.fetchDailyWeatherForecast(t).then((function(t){var e=a.extractDataForMultiDayAndGraphComponents(t),n=e.multiDayForecastData,r=e.graphData;a.setState({multiDayForecastData:n,graphData:r})})).catch((function(t){console.log("Error:",t)})))},a.fetchCurrentForecast=function(t){var e=t?"lat=".concat(a.state.latLng[0],"&lon=").concat(a.state.latLng[1]):"q=".concat(a.state.queryString),n="C"===a.state.unit?"metric":"imperial",r="".concat("https://api.openweathermap.org/data/2.5/weather","?").concat(e,"&units=").concat(n,"&cnt=7&appid=").concat("e936cc62b3f22eb537ef8c1e231de24f");return d.a.get(r).then((function(t){return t.data})).catch((function(t){console.log("Error:",t)}))},a.fetchDailyWeatherForecast=function(t){var e=t?"lat=".concat(a.state.latLng[0],"&lon=").concat(a.state.latLng[1]):"q=".concat(a.state.queryString),n="C"===a.state.unit?"metric":"imperial",r="".concat("https://api.openweathermap.org/data/2.5/forecast/daily","?").concat(e,"&units=").concat(n,"&cnt=7&appid=").concat("e936cc62b3f22eb537ef8c1e231de24f");return d.a.get(r).then((function(t){return t.data})).catch((function(t){console.log("Error:",t)}))},a.fetchLocationTime=function(t,e){var n="".concat("https://maps.googleapis.com/maps/api/timezone/json","?location=").concat(t.lat,",").concat(t.lon,"&timestamp=").concat(e,"&key=").concat("AIzaSyAxc2CKDD9g8c9Wxgryv_7RTvddmkEEd1U");return d.a.get(n).then((function(t){var e=a.extractDataForTimezone(t.data);a.setState({locationTimezoneData:e})})).catch((function(t){console.log("Error:",t)}))},a.extractDataForNavbar=function(t){return{city:"".concat(t.name,", ").concat(t.sys.country)}},a.extractDataForTimezone=function(t){var e=t.timeZoneId,n=new Date(1e3*a.state.currentForecastData.timestamp);t.time=T.tz(n,e).format(),t.hours=T.tz(n,e).format("H"),t.day=T.tz(n,e).format("dddd"),t.date=T.tz(n,e).format("MMMM DD, YYYY");var r=t.time,c=t.hours,o=t.day,i=t.date,s=JSON.parse(JSON.stringify(a.state.currentForecastData));s.localTime=r,s.timezoneId=e,s.hours=c,s.day=o,s.date=i;var l=JSON.parse(JSON.stringify(a.state.multiDayForecastData));l.hours=c;var m=a.state.accentColor;return c>=0&&c<6?m="#fe1743":c>=6&&c<12?m="#a96ed3":c>=12&&c<18?m="#19b4fc":c>=18&&c<24&&(m="#fcc319"),a.setState({currentForecastData:s,multiDayForecastData:l,accentColor:m}),{hours:c,day:o,date:i}},a.extractDataForCurrentForecast=function(t){return{weather:t.weather[0].main,weatherId:t.weather[0].id,description:t.weather[0].description,mainTemp:Math.round(t.main.temp),minTemp:Math.round(t.main.temp_min),maxTemp:Math.round(t.main.temp_max),pressure:t.main.pressure,humidity:t.main.humidity,windSpeed:t.wind.speed,coords:t.coord,timestamp:t.dt}},a.getDay=function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday ","Friday","Saturday","Tomorrow"][new Date(t).getDay()]},a.extractDataForMultiDayAndGraphComponents=function(t){var e=[],n=[];return t.list.forEach((function(t){var r={};r.day=a.getDay(1e3*t.dt),r.weatherId=t.weather[0].id,r.description=t.weather[0].description,r.mainTemp=Math.round(t.temp.day),e.push(r),n.push(t.temp.day)})),e.shift(),{multiDayForecastData:e,graphData:n}},a.state={unit:"C",queryString:"",latLng:[],accentColor:"transparent",navbarData:{},currentForecastData:{},locationTimezoneData:{},multiDayForecastData:[],graphData:[]},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=navigator.geolocation;if(e){e.getCurrentPosition((function(e){t.setState({latLng:[e.coords.latitude,e.coords.longitude]},t.notifyStateChange)}),(function(){console.log("Permission Denied")}))}else console.log("GeoLocation not supported...")}},{key:"makeItRain",value:function(){var t=document.getElementsByClassName("rain")[0];if(this.state.currentForecastData.weatherId>=500&&this.state.currentForecastData.weatherId<=550&&""!==t.innerHTML);else if(this.state.currentForecastData.weatherId>=500&&this.state.currentForecastData.weatherId<=550&&""===t.innerHTML){var e=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},a=800;!function(){for(var n=window.screen.width,r=1;r<a;r++){var c=e(0,n),o=e(-1e3,1400);t.innerHTML+='<div class="drop" id="drop'+r+'"></div>';var i=document.getElementById("drop"+r);i.style.left=c+"px",i.style.top=o+"px"}}()}else t.innerHTML=""}},{key:"render",value:function(){var t=this.state.latLng.length>0,e=""!==this.state.queryString,a=t||e,n=r.a.createElement("div",{className:"app-instructions"},r.a.createElement("p",null,"Allow Location Access or type city name/zip code in search area to get started.")),c=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-today"},r.a.createElement(N,{data:this.state.currentForecastData,unit:this.state.unit})),r.a.createElement("div",{className:"app-list-graph"},r.a.createElement(f.a,{dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},r.a.createElement("div",{id:"tab1"},r.a.createElement(O,{data:this.state.multiDayForecastData})),r.a.createElement("div",{id:"tab2"},r.a.createElement(x,{data:this.state.graphData,accentColor:this.state.accentColor})))));return r.a.createElement(r.a.Fragment,null,this.state.locationTimezoneData.hours>=20||this.state.locationTimezoneData.hours<=5?r.a.createElement("div",{className:"stars"}):null,"Rain"===this.state.currentForecastData.weather?r.a.createElement("div",{className:"rain"}):null,r.a.createElement("div",{className:"app-container hour-".concat(this.state.locationTimezoneData?this.state.locationTimezoneData.hours:0)},r.a.createElement("div",{className:"app-nav"},r.a.createElement(E,{searchSubmit:this.onSearchSubmit,changeUnit:this.onUnitChange,unit:this.state.unit,data:this.state.navbarData,accentColor:this.state.accentColor})),a?c:n),"Clouds"===this.state.currentForecastData.weather||"Rain"===this.state.currentForecastData.weather||"Snow"===this.state.currentForecastData.weather?r.a.createElement("div",{className:"clouds clouds1".concat(document.location.href.indexOf("github")>-1?" on-github":"")}):null,"Clouds"===this.state.currentForecastData.weather||"Rain"===this.state.currentForecastData.weather||"Snow"===this.state.currentForecastData.weather?r.a.createElement("div",{className:"clouds clouds2".concat(document.location.href.indexOf("github")>-1?" on-github":"")}):null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},51:function(t,e,a){t.exports=a(180)},56:function(t,e,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.2c6fa276.chunk.js.map