(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c10784"],{2532:function(t,e,r){"use strict";var n=r("23e7"),i=r("5a34"),o=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),o=r("b622"),a=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},a96a:function(t,e,r){"use strict";r("b0e1")},ab13:function(t,e,r){var n=r("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},b0e1:function(t,e,r){},b338:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i=Object(n["J"])("data-v-001e769f");Object(n["u"])("data-v-001e769f");var o={class:"form-control"},a=Object(n["i"])("label",{for:"email"},"E-Mail",-1),c={class:"form-control"},u=Object(n["i"])("label",{for:"password"},"Password",-1),s={key:0};Object(n["s"])();var d=i((function(t,e,r,d,l,b){var f=Object(n["z"])("base-dialog"),p=Object(n["z"])("base-spinner"),m=Object(n["z"])("base-button"),h=Object(n["z"])("base-card");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["i"])(f,{show:!!l.error,title:"An error occurred",onClose:b.handleError},{default:i((function(){return[Object(n["i"])("p",null,Object(n["C"])(l.error),1)]})),_:1},8,["show","onClose"]),Object(n["i"])(f,{show:l.isLoading,title:"Authenticating...",fixed:""},{default:i((function(){return[Object(n["i"])(p)]})),_:1},8,["show"]),Object(n["i"])(h,null,{default:i((function(){return[Object(n["i"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){return b.submitForm&&b.submitForm.apply(b,arguments)}),["prevent"]))},[Object(n["i"])("div",o,[a,Object(n["H"])(Object(n["i"])("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.email=t})},null,512),[[n["E"],l.email,void 0,{trim:!0}]])]),Object(n["i"])("div",c,[u,Object(n["H"])(Object(n["i"])("input",{type:"password",id:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return l.password=t})},null,512),[[n["E"],l.password,void 0,{trim:!0}]])]),l.formIsValid?Object(n["g"])("",!0):(Object(n["r"])(),Object(n["f"])("p",s,"Please enter a valid email and password (must be at least 6 characters long).")),Object(n["i"])(m,null,{default:i((function(){return[Object(n["h"])(Object(n["C"])(b.submitButtonCaption),1)]})),_:1}),Object(n["i"])(m,{type:"button",mode:"flat",onClick:b.switchAuthMode},{default:i((function(){return[Object(n["h"])(Object(n["C"])(b.switchModeButtonCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])})),l=r("1da1"),b=(r("96cf"),r("caad"),r("2532"),r("ac1f"),r("5319"),{data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,error:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"Login":"Signup"},switchModeButtonCaption:function(){return"login"===this.mode?"Signup instead":"Login instead"}},methods:{submitForm:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.formIsValid=!0,""!==t.email&&t.email.includes("@")&&!(t.password.length<6)){e.next=4;break}return t.formIsValid=!1,e.abrupt("return");case 4:if(t.isLoading=!0,r={email:t.email,password:t.password},e.prev=6,"login"!==t.mode){e.next=12;break}return e.next=10,t.$store.dispatch("login",r);case 10:e.next=14;break;case 12:return e.next=14,t.$store.dispatch("signup",r);case 14:n="/"+(t.$route.query.redirect||"dashboard"),t.$router.replace(n),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](6),t.error=e.t0.message||"Failed to authenticate, try later.";case 21:t.isLoading=!1;case 22:case"end":return e.stop()}}),e,null,[[6,18]])})))()},switchAuthMode:function(){"login"===this.mode?this.mode="signup":this.mode="login"},handleError:function(){this.error=null}}});r("a96a");b.render=d,b.__scopeId="data-v-001e769f";e["default"]=b},caad:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").includes,o=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
//# sourceMappingURL=chunk-51c10784.af3ac5bd.js.map