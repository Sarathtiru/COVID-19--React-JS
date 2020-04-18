(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__jza8Y",card:"Cards_card__s5qF8",infected:"Cards_infected__3QaW0",infectedTextColor:"Cards_infectedTextColor__2Hein",recovered:"Cards_recovered__g3DeY",recoveredTextColor:"Cards_recoveredTextColor__2TzZo",deaths:"Cards_deaths__348yN",deathsTextColor:"Cards_deathsTextColor__2TgU8"}},205:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(73),o=a.n(c),s=(a(89),a(6)),u=a.n(s),l=a(47),i=a(10),d=a(16),f=a(222),m=a(226),p=a(223),v=a(224),h=a(32),b=a.n(h),E=a(33),_=a.n(E),C=a(11),g=a.n(C),x=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return n.a.createElement("div",{className:g.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:m.a,xs:12,md:3,className:_()(g.a.card,g.a.infected)},n.a.createElement(p.a,null,n.a.createElement(v.a,{gutterBottom:!0,className:g.a.infectedTextColor,variant:"h5"},"Infected"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(f.a,{item:!0,component:m.a,xs:12,md:3,className:_()(g.a.card,g.a.recovered)},n.a.createElement(p.a,null,n.a.createElement(v.a,{className:g.a.recoveredTextColor,variant:"h5",gutterBottom:!0},"Recovered"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(f.a,{item:!0,component:m.a,xs:12,md:3,className:_()(g.a.card,g.a.deaths)},n.a.createElement(p.a,null,n.a.createElement(v.a,{className:g.a.deathsTextColor,variant:"h5",gutterBottom:!0},"Deaths"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(b.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(v.a,{variant:"body2"},"Number of deaths caused by COVID-19")))))},y=a(34),O=a.n(y),j="https://covid19.mathdro.id/api",w=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,n,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j,t&&(a="".concat(j,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,l=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(j,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(j,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=a(45),T=a(79),S=a.n(T),I=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,l=Object(r.useState)([]),f=Object(d.a)(l,2),m=f[0],p=f[1];Object(r.useEffect)((function(){console.log("Chart.js useEffect called"),function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var v=m.length?n.a.createElement(N.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,h=a?n.a.createElement(N.a,{data:{labels:["infected","recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return n.a.createElement("div",{className:S.a.container},s?h:v)},B=a(227),U=a(225),V=a(80),z=a.n(V),A=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(d.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){console.log("CountryPicker.js useEffect called"),function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),n.a.createElement(B.a,{className:z.a.formControl},n.a.createElement(U.a,{onChange:function(e){t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},P=a(46),H=a.n(P),J=a(81),L=a.n(J);var Y=function(){var e=Object(r.useState)({data:{},country:""}),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){console.log("App.js useEffect called"),Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c((function(e){return Object(l.a)({},e,{data:t})}));case 4:case"end":return e.stop()}}),e)})))()}),[]);var o=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a=e.sent,c((function(e){return Object(l.a)({},e,{data:a,country:t})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:H.a.container},n.a.createElement("img",{className:H.a.image,src:L.a,alt:"COVID-19"}),Object.keys(a.data).length>0?n.a.createElement(x,{data:a.data}):"Loading...",n.a.createElement(A,{handleCountryChange:o}),n.a.createElement(I,{data:a.data,country:a.country}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__H0uL7",image:"App_image__1Uzol"}},79:function(e,t,a){e.exports={container:"Chart_container__1BguO"}},80:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__XvIch"}},81:function(e,t,a){e.exports=a.p+"static/media/COVID.d7265326.png"},84:function(e,t,a){e.exports=a(205)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.afa53889.chunk.js.map