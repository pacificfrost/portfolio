(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0cdc":function(t,e,n){t.exports=n.p+"img/dog-hero.153fc5b1.jpg"},"0d9f":function(t,e,n){},"736c":function(t,e,n){},8498:function(t,e,n){"use strict";var a=n("736c"),r=n.n(a);r.a},"9a29":function(t,e,n){"use strict";var a=n("0d9f"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("9483");Object(a["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"white","elevate-on-scroll":""}},[n("pa-nav")],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},s=[],o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"px-2",attrs:{justify:"space-between",align:"center"}},[n("v-btn",{attrs:{fab:"",text:"",to:"/"}},[n("v-icon",{attrs:{"x-large":""}},[t._v("$vuetify.icons.mapet")])],1),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{attrs:{rounded:"",text:"",to:"about"}},[t._v("About")]),n("v-btn",{attrs:{rounded:"",text:"",to:"how-it-works"}},[t._v("How it Works")]),n("v-btn",{attrs:{rounded:"",text:"",to:"locate"}},[t._v("Locate Pet")])],1),n("v-menu",{attrs:{"close-on-click":!1,"close-on-content-click":!1,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{outlined:"",rounded:""}},"v-btn",r,!1),a),[n("v-icon",{attrs:{left:"",small:""}},[t._v("lock")]),t._v(" Login ")],1)]}}]),model:{value:t.loginMenu,callback:function(e){t.loginMenu=e},expression:"loginMenu"}},[n("v-card",{attrs:{"min-width":"280"}},[n("v-card-title",[t._v("Login")]),n("v-form",{ref:"login",model:{value:t.login.valid,callback:function(e){t.$set(t.login,"valid",e)},expression:"login.valid"}},[n("v-card-text",[n("v-text-field",{attrs:{rules:[t.formRules.required],filled:"",label:"Username"}}),n("v-text-field",{attrs:{filled:"",rules:[t.formRules.required],label:"Password",type:"password"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"pr-3",attrs:{text:"",rounded:""},on:{click:function(e){t.loginMenu=!1}}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("close")]),t._v(" Cancel ")],1),n("v-btn",{staticClass:"pr-3",attrs:{disabled:!t.login.valid,dark:t.login.valid,color:"deep-purple",rounded:""}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("check")]),t._v(" Login ")],1)],1)],1)],1)],1),n("v-menu",{attrs:{"close-on-click":!1,"close-on-content-click":!1,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"deep-purple",dark:"",rounded:""}},"v-btn",r,!1),a),[t._v(" Sign Up ")])]}}]),model:{value:t.signUpMenu,callback:function(e){t.signUpMenu=e},expression:"signUpMenu"}},[n("v-card",{attrs:{"min-width":"280"}},[n("v-card-title",[t._v("Sign Up")]),n("v-form",{ref:"signUp",model:{value:t.signUp.valid,callback:function(e){t.$set(t.signUp,"valid",e)},expression:"signUp.valid"}},[n("v-card-text",[n("v-text-field",{attrs:{filled:"",rules:[t.formRules.required,t.formRules.minLength],label:"Username"},model:{value:t.signUp.username,callback:function(e){t.$set(t.signUp,"username",e)},expression:"signUp.username"}}),n("v-text-field",{attrs:{filled:"",rules:[t.formRules.required,t.formRules.password,t.formRules.minLength],label:"Password",type:"password"},model:{value:t.signUp.password,callback:function(e){t.$set(t.signUp,"password",e)},expression:"signUp.password"}}),n("v-text-field",{attrs:{filled:"",rules:[t.formRules.required,t.formRules.password,t.formRules.minLength,t.confirmPasswordRules],label:"Confirm Password",type:"password"},model:{value:t.signUp.confirmPassword,callback:function(e){t.$set(t.signUp,"confirmPassword",e)},expression:"signUp.confirmPassword"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"pr-3",attrs:{text:"",rounded:""},on:{click:function(e){t.signUpMenu=!1}}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("close")]),t._v(" Cancel ")],1),n("v-btn",{staticClass:"pr-3",attrs:{disabled:!t.signUp.valid,dark:t.signUp.valid,color:"deep-purple",rounded:""}},[n("v-icon",{attrs:{left:"",small:""}},[t._v("check")]),t._v(" Sign Up ")],1)],1)],1)],1)],1)],1)},c=[],l=(n("4d63"),n("ac1f"),n("25f0"),o["default"].extend({name:"Nav",components:{},computed:{confirmPasswordRules:function(){var t=this;return function(){return t.signUp.username===t.signUp.confirmPassword||"Password must match"}}},data:function(){return{formRules:{required:function(t){return!!t||"Required"},minLength:function(t){return t.length>=8||"Must be at least 8 characters long"},password:function(t){return new RegExp(/^/).test(t)||"Must have uppercase, lowercase, number and symbols"}},login:{username:"",password:"",valid:!1},loginMenu:!1,signUp:{username:"",password:"",confirmPassword:"",valid:!1},signUpMenu:!1}}})),u=l,d=n("2877"),p=n("6544"),v=n.n(p),f=n("8336"),m=n("b0af"),g=n("99d9"),h=n("4bd4"),b=n("132d"),w=n("e449"),_=n("0fd9"),x=n("2fa4"),C=n("8654"),y=Object(d["a"])(u,i,c,!1,null,null,null),k=y.exports;v()(y,{VBtn:f["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VForm:h["a"],VIcon:b["a"],VMenu:w["a"],VRow:_["a"],VSpacer:x["a"],VTextField:C["a"]});var P=o["default"].extend({name:"App",components:{"pa-nav":k},data:function(){return{}}}),j=P,U=n("7496"),V=n("40dc"),O=n("a523"),E=n("553a"),R=n("f6c4"),M=Object(d["a"])(j,r,s,!1,null,null,null),S=M.exports;v()(M,{VApp:U["a"],VAppBar:V["a"],VContainer:O["a"],VFooter:E["a"],VMain:R["a"]});var T=n("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-row",{attrs:{justify:"space-between",align:"center"}},[a("v-col",[a("h2",{staticClass:"d-inline-block text-h2"},[t._v("Keep your friends close")]),a("br"),a("h4",{staticClass:"d-inline-block text-h4"},[t._v("Keep your fur-iends closer")]),a("br"),a("v-btn",{staticClass:"mt-12",attrs:{dark:"",color:"deep-purple",elevation:"12",raised:""}},[t._v("Get a Tag")])],1),a("v-card",{attrs:{rounded:"",elevation:"4"}},[a("v-img",{attrs:{"max-width":"480",src:n("0cdc")}})],1)],1),a("h3",{staticClass:"text-h3 text-center"},[t._v("What is Mapet?")])],1)},$=[],L=o["default"].extend({name:"Home",components:{},data:function(){return{}}}),q=L,D=n("62ad"),B=n("adda"),F=Object(d["a"])(q,A,$,!1,null,null,null),I=F.exports;v()(F,{VBtn:f["a"],VCard:m["a"],VCol:D["a"],VContainer:O["a"],VImg:B["a"],VRow:_["a"]});var Z,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"24"}},[n("v-carousel",{attrs:{continuous:!1,"show-arrows":!1,"delimiter-icon":"mdi-minus",height:"300","hide-delimiter-background":""}},t._l(t.pet.images,(function(t,e){return n("v-carousel-item",{key:e,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1),n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-h4"},[t._v(t._s(t.pet.name))]),n("v-flex",[n("v-row",{staticClass:"ma-0 my-4",attrs:{justify:"space-between"}},[n("v-card",{staticClass:"flex-grow-1 pa-2",attrs:{tile:"",elevation:"0"}},[t._v(" Breed: "),n("h2",{staticClass:"text-h5"},[t._v(t._s(t.pet.breed))])]),n("v-card",{staticClass:"flex-grow-1 pa-2",attrs:{tile:"",elevation:"0"}},[t._v(" Weight: "),n("h2",{staticClass:"text-h5"},[t._v(t._s(t.pet.weight))])]),n("v-card",{staticClass:"flex-grow-1 pa-2",attrs:{tile:"",elevation:"0"}},[t._v(" Age: "),n("h2",{staticClass:"text-h5"},[t._v(t._s(t.pet.age))])]),n("v-card",{staticClass:"flex-grow-1 pa-2",attrs:{tile:"",elevation:"0"}},[t._v(" Friendly: "),n("h2",{staticClass:"text-h5"},[t.pet.social?n("v-icon",{attrs:{color:"green"}},[t._v("check")]):n("v-icon",{attrs:{color:"red"}},[t._v("cross")])],1)])],1)],1),n("v-flex",[n("v-row",{staticClass:"mx-0",attrs:{align:"center",justify:"space-between"}},[n("v-avatar",[n("v-img",{attrs:{src:"https://myesadoctor.com/wp-content/uploads/2020/04/client-1y.webp"}})],1),n("v-col",{staticClass:"pa-0"},[n("v-card-title",[t._v(t._s(t.pet.contact.name))]),n("v-card-subtitle",[t._v(t._s(t.pet.contact.phone))])],1),n("v-btn",{attrs:{color:"ml-12 green",fab:"",small:""}},[n("v-icon",{staticClass:"white--text"},[t._v("phone")])],1),n("v-btn",{attrs:{color:"ml-4 blue",fab:"",small:""}},[n("v-icon",{staticClass:"white--text"},[t._v("mail")])],1)],1)],1),n("v-flex",[n("v-row",{staticClass:"mx-0",attrs:{align:"center",justify:"space-between"}},[n("v-avatar",{attrs:{color:"blue"}},[n("v-icon",{staticClass:"white--text"},[t._v("local_hospital")])],1),n("v-col",{staticClass:"pa-0"},[n("v-card-title",[t._v("Vetinary Contact")]),n("v-card-subtitle",[n("span",[t._v(t._s(t.pet.contact.vetContact.address))]),n("br"),n("span",[t._v(t._s(t.pet.contact.vetContact.phone))])])],1),n("v-btn",{attrs:{color:"ml-12 green",fab:"",small:""}},[n("v-icon",{staticClass:"white--text"},[t._v("phone")])],1)],1)],1),n("h5",{staticClass:"text-h6"},[t._v("Description")]),n("p",{staticClass:"text-body1"},[t._v(t._s(t.pet.description))]),n("h5",{staticClass:"text-h6"},[t._v("Location")])],1),n("google-map")],1)],1)},N=[],z=(n("96cf"),n("1da1")),H=n("2cf3"),K=n("069e"),G=(n("a4d3"),n("e01a"),n("b0c0"),n("d4ec")),W=function t(){Object(G["a"])(this,t),this.age=0,this.breed="",this.contact={vetContact:{address:"",phone:""},phone:"",username:"",name:"",email:""},this.description="",this.dob="",this.id="",this.image=[""],this.location=[0,0],this.name="",this.social=!0,this.type="",this.weight=0},J=W,Y=(n("d3b7"),n("ade3")),X=n("2909");(function(t){t["UPDATE_PETS"]="UPDATE_PETS"})(Z||(Z={}));var tt,et=Object(Y["a"])({},Z.UPDATE_PETS,(function(t,e){t.pets=Object(X["a"])(e)}));(function(t){t["REQUEST_PETS"]="REQUEST_PETS"})(tt||(tt={}));var nt,at,rt=Object(Y["a"])({},tt.REQUEST_PETS,(function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.abrupt("return",fetch("/static/pets.json").then(function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:a=t.sent,n(Z.UPDATE_PETS,a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))()})),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-canvas"})},ot=[],it=(n("d81d"),n("99af"),"AIzaSyAeuYNb7zf8K111qzEhQiZCKsQfeGLEwBs"),ct="gmapsCallback",lt="https://maps.googleapis.com/maps/api/js?key=".concat(it,"&callback=").concat(ct),ut=!!window.google,dt=new Promise((function(t,e){nt=t,at=e})),pt=function(){if(ut)return dt;ut=!0,window[ct]=function(){return nt(window.google)};var t=document.createElement("script");t.async=!0,t.defer=!0,t.onerror=at,t.src=lt;var e=document.querySelector("head");return e&&e.appendChild(t),dt},vt=pt,ft={name:"GoogleMap",data:function(){return{google:{},mapOptions:{zoom:12,draggable:!1,disableDefaultUI:!0,disableDoubleClickZoom:!0,panControl:!1,center:{lat:-34.397,lng:150.644}},map:{},marker:{}}},mounted:function(){var t=this;return Object(z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,vt().then((function(e){t.google=e,navigator.geolocation&&navigator.geolocation.getCurrentPosition(t.showPosition)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},methods:{showPosition:function(t){this.$set(this.mapOptions,"center",{lat:t.coords.latitude,lng:t.coords.longitude}),this.map=new this.google.maps.Map(this.$el,this.mapOptions),this.marker=new this.google.maps.Marker({position:this.mapOptions.center,map:this.map,title:"Pet"})}}},mt=ft,gt=(n("9a29"),Object(d["a"])(mt,st,ot,!1,null,"3847817a",null)),ht=gt.exports,bt=o["default"].extend({components:{"google-map":ht},beforeMount:function(){this._getPets()},data:function(){return{loading:!0,pet:new J}},name:"PetProfile",methods:{_getPets:function(){var t=this;return Object(z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch(tt.REQUEST_PETS).then((function(){t.pet=t.$store.getters.getPet(t.$route.params.id),t._getPetAge(),t.loading=!1}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),t.loading=!1;case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},_getPetAge:function(){var t=Object(H["a"])(this.pet.dob,"MM/yy",new Date),e=new Date,n=Object(K["a"])(e,t);this.$set(this.pet,"age",n)}}}),wt=bt,_t=n("8212"),xt=n("5e66"),Ct=n("3e35"),yt=n("0e8f"),kt=Object(d["a"])(wt,Q,N,!1,null,null,null),Pt=kt.exports;v()(kt,{VAvatar:_t["a"],VBtn:f["a"],VCard:m["a"],VCardSubtitle:g["b"],VCardTitle:g["d"],VCarousel:xt["a"],VCarouselItem:Ct["a"],VCol:D["a"],VContainer:O["a"],VFlex:yt["a"],VIcon:b["a"],VImg:B["a"],VRow:_["a"]}),o["default"].use(T["a"]);var jt=[{component:I,name:"Home",path:"/"},{component:Pt,name:"PetProfile",path:"/pet/:id"}],Ut=new T["a"]({mode:"history",routes:jt}),Vt=Ut,Ot=n("2f62"),Et=(n("7db0"),{getPet:function(t){return function(e){return t.pets.find((function(t){return t.id===e}))||new J}}}),Rt={pets:[new J]},Mt={actions:rt,getters:Et,mutations:et,state:Rt};o["default"].use(Ot["a"]);var St=new Ot["a"].Store({modules:{Pet:Mt}}),Tt=(n("d1e78"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 50 50"}},[n("path",{staticClass:"icon",attrs:{d:"M39.37,13.17h0L36.57.87A1.11,1.11,0,0,0,34.71.31l-4.2,4a1.13,1.13,0,0,1-1.1.26A15.55,15.55,0,0,0,24.23,4a14.55,14.55,0,0,0-3.44.57,1.1,1.1,0,0,1-1.07-.25L15.53.36a1.12,1.12,0,0,0-1.85.56L10.84,13a16.42,16.42,0,0,0-1.67,7.21v.1c0,6,9.59,14.3,9.93,14.76,1.65,2.24,3.29,11,4.89,14.28a1.1,1.1,0,0,0,2,0c1.58-3.26,3.05-11.4,4.8-13.6.31-.38,10-9.71,10-16A15.76,15.76,0,0,0,39.37,13.17Zm-14.3,1.74c2.48,0,4.49-.23,4.49,2.25a2.85,2.85,0,0,1,0,.29,2.23,2.23,0,0,0-2.47,3.71c-.6.3-1.27-.64-2-.64s-1.38.94-2,.64A2.21,2.21,0,0,0,24,19.4a2.24,2.24,0,0,0-2.24-2.24,2.28,2.28,0,0,0-1.1.29c0-.1,0-.19,0-.29C20.58,14.68,22.59,14.91,25.07,14.91ZM15.64,6.85l-.76-.64L12.6,11.12,15,1.3,18.68,5l-.6.38L16.48,5Zm13.2,20v2.83A2.32,2.32,0,0,1,26.53,32H23.21a2.31,2.31,0,0,1-2.3-2.31V26.78l-3.34-2.63s2.66.32,3.52.51,1.27-.46,2.18-.28l3.26,0c.75-.06,1.77.47,2.52.29s3.23-.49,3.23-.49ZM35.58,6.21l-.76.64L34,5l-1.6.38L31.77,5,35.5,1.3l2.36,9.82Z"}})])}),At=[],$t={name:"icon-mapet"},Lt=$t,qt=(n("8498"),Object(d["a"])(Lt,Tt,At,!1,null,"37175584",null)),Dt=qt.exports,Bt=n("ce5b"),Ft=n.n(Bt);o["default"].use(Ft.a);var It=new Ft.a({icons:{values:{mapet:{component:Dt}}}});o["default"].config.devtools=!0,o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(S)},router:Vt,store:St,vuetify:It}).$mount("#app")}});
//# sourceMappingURL=app.eeb5a2ea.js.map