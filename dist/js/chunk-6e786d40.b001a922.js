(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e786d40"],{2827:function(e,t,r){},"46c5":function(e,t,r){"use strict";r("7c6b")},"7c6b":function(e,t,r){},8246:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=Object(n["J"])("data-v-81150eac");Object(n["u"])("data-v-81150eac");var s=Object(n["i"])("h2",null,"Dashboard",-1),a=Object(n["i"])("p",null,"This page is only visible to users that are currently logged in, pease register or log in.",-1),i=Object(n["h"])("Log in here"),u={key:1},o=Object(n["i"])("header",null,[Object(n["i"])("h2",null,"Messages")],-1),l={key:2};Object(n["s"])();var b=c((function(e,t,r,b,j,O){var d=Object(n["z"])("router-link"),f=Object(n["z"])("base-card"),h=Object(n["z"])("base-dialog"),g=Object(n["z"])("base-spinner"),m=Object(n["z"])("request-item"),p=Object(n["z"])("base-wrap");return O.isLoggedIn?(Object(n["r"])(),Object(n["f"])("section",u,[Object(n["i"])(h,{show:!!j.error,title:"An error occurred!",onClose:O.handleError},{default:c((function(){return[Object(n["i"])("p",null,Object(n["C"])(j.error),1)]})),_:1},8,["show","onClose"]),j.isLoading?(Object(n["r"])(),Object(n["f"])(g,{key:0})):Object(n["g"])("",!0),Object(n["i"])("section",null,[o,j.isLoading?(Object(n["r"])(),Object(n["f"])(g,{key:0})):O.hasRequests&&!j.isLoading&&O.isLoggedIn?(Object(n["r"])(),Object(n["f"])(p,{key:1},{default:c((function(){return[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(O.receivedRequests,(function(e){return Object(n["r"])(),Object(n["f"])(m,{key:e.id,email:e.userEmail,message:e.message,name:e.userName},null,8,["email","message","name"])})),128))]})),_:1})):(Object(n["r"])(),Object(n["f"])("h3",l,"You haven't received any requests yet!"))])])):(Object(n["r"])(),Object(n["f"])(f,{key:0},{default:c((function(){return[s,a,Object(n["i"])(d,{to:"/auth"},{default:c((function(){return[i]})),_:1})]})),_:1}))})),j=r("1da1"),O=(r("96cf"),r("b0c0"),Object(n["J"])("data-v-74a6f7f8"));Object(n["u"])("data-v-74a6f7f8");var d={class:"contact-request"},f=Object(n["i"])("b",null,"Message :",-1),h={class:"button-group"},g=Object(n["h"])("Delete"),m=Object(n["h"])("Reply");Object(n["s"])();var p=O((function(e,t,r,c,s,a){var i=Object(n["z"])("base-link");return Object(n["r"])(),Object(n["f"])("div",d,[Object(n["i"])("ul",null,[Object(n["i"])("li",null,[Object(n["i"])("h3",null,Object(n["C"])(r.name),1)]),Object(n["i"])("li",null,[Object(n["i"])("a",{href:a.emailLink},Object(n["C"])(r.email),9,["href"])]),Object(n["i"])("li",null,[f,Object(n["h"])(" "+Object(n["C"])(r.message),1)])]),Object(n["i"])("div",h,[Object(n["i"])(i,null,{default:O((function(){return[g]})),_:1}),Object(n["i"])(i,{href:a.emailLink},{default:O((function(){return[m]})),_:1},8,["href"])])])})),v={props:["email","message","name"],computed:{emailLink:function(){return"mailto:"+this.email}}};r("46c5");v.render=p,v.__scopeId="data-v-74a6f7f8";var k=v,q={components:{RequestItem:k},data:function(){return{isLoading:!1,error:null}},computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated},receivedRequests:function(){return this.$store.getters["requests/requests"]},hasRequests:function(){return this.$store.getters["requests/hasRequests"]}},created:function(){this.loadRequests()},methods:{loadRequests:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("requests/fetchRequests");case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),e.error=t.t0.message||"Something failed!";case 9:e.isLoading=!1;case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},handleError:function(){this.error=null}}};r("cfc7");q.render=b,q.__scopeId="data-v-81150eac";t["default"]=q},cfc7:function(e,t,r){"use strict";r("2827")}}]);
//# sourceMappingURL=chunk-6e786d40.b001a922.js.map