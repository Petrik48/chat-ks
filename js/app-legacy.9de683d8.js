(function(){"use strict";var e={1905:function(e,t,s){s(6992),s(8674),s(9601),s(7727);var n=s(8935),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-main-wrapper")],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-main-wrapper"},[s("router-view")],1)},o=[],u=s(3019),c=s(4665),l={name:"v-main-wrapper",components:{},props:{},data:function(){return{}},computed:{},methods:(0,u.Z)({},(0,c.nv)(["FETCH_USERS"])),mounted:function(){this.FETCH_USERS()}},m=l,d=s(1001),p=(0,d.Z)(m,i,o,!1,null,"4b5c46dd",null),v=p.exports,_={name:"App",components:{VMainWrapper:v}},f=_,h=(0,d.Z)(f,r,a,!1,null,null,null),g=h.exports,E=(s(8309),s(7327),s(1539),s(9653),s(8862),s(6166)),S=s.n(E);n.Z.use(c.ZP);var C=new c.ZP.Store({state:{users:[],dialogs:[],messages:[],activeUserId:0,activeUserName:"",receiverName:""},getters:{},mutations:{SET_USERS_TO_STORE:function(e,t){e.users=t},LOGIN_USER:function(e,t){e.activeUserId=t.id,e.activeUserName=t.name+" "+t.second_name},FETCH_DIALOGS:function(e,t){e.dialogs=t},LOGOUT_USER:function(e){({users:[],messages:[],activeUserId:0,activeUserName:"",receiverName:""})},ADD_MESSAGES_TO_STATE:function(e,t){e.messages=t,console.log(t)},ADD_RECEIVER_NAME:function(e,t){e.receiverName=t},initialiseStore:function(e){localStorage.getItem("store")&&this.replaceState(Object.assign(e,JSON.parse(localStorage.getItem("store"))))}},actions:{FETCH_USERS:function(e){var t=e.commit;return S().get("http://localhost:3000/users").then((function(e){t("SET_USERS_TO_STORE",e.data)}))},REGISTER_USER:function(e,t){var s=e.dispatch;e.commit;S().post("http://localhost:3000/users/",t),s("FETCH_USERS")},LOGIN_USER:function(e,t){var s=e.commit;s("LOGIN_USER",t)},LOGOUT_USER:function(e){var t=e.commit;t("LOGOUT_USER"),localStorage.clear()},FETCH_MESSAGES:function(e,t){var s=this,n=e.commit;S().get("http://localhost:3000/messages/").then((function(e){n("ADD_MESSAGES_TO_STATE",e.data.filter((function(e){return e.sender_id===s.state.activeUserId&&e.recipient_id===t||e.sender_id===t&&e.recipient_id===s.state.activeUserId})))}))},FETCH_RECEIVER_NAME:function(e,t){var s=e.commit;s("ADD_RECEIVER_NAME",t)},SEND_MESSAGE_TO_CHAT:function(e,t){var s=this;e.dispatch,e.commit;S().get("http://localhost:3000/messages/").then((function(e){var n=e.data.length+1,r={id:n,text:t.text,sender_id:s.state.activeUserId,recipient_id:Number(t.id),message_time:(new Date).toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"})};return s.state.messages.push(r),S().post("http://localhost:3000/messages/",r)}))}}});C.subscribe((function(e,t){localStorage.setItem("store",JSON.stringify(t))}));var N=C,U=s(2809),T=function(){var e=this,t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"v-users-list"},[n("v-users-list-header",{attrs:{current_user:this.activeUserName}}),n("ul",{staticClass:"v-users"},t._l(t.users.filter((function(t){return t.id!==e.activeUserId})),(function(e){return n("p",{key:e.id,staticClass:"v-user",on:{click:function(s){return t.toChat(e)}}},[t._v(t._s(e.name+" "+e.second_name))])})),0),n("v-users-footer")],1)},w=[],O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-users-list-header"},[s("p",{staticClass:"header__name"},[e._v(e._s(e.current_user))]),s("button",{staticClass:"header__exit-button",on:{click:this.logout}},[s("i",{staticClass:"material-icons",staticStyle:{color:"white"}},[e._v("logout")])])])},R=[],x={name:"v-users-list-header",props:{current_user:{type:String,default:function(){return""}}},data:function(){return{}},computed:{},methods:(0,u.Z)((0,u.Z)({},(0,c.nv)(["LOGOUT_USER"])),{},{logout:function(){this.LOGOUT_USER(),this.$router.push({name:"login"})}})},b=x,Z=(0,d.Z)(b,O,R,!1,null,"2ad19ee6",null),y=Z.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-users-footer"},[s("ul",{staticClass:"pages"},[s("li",{staticClass:"active"},[e._v("1")]),s("li",[e._v("2")])])])}],A={name:"v-users-footer",props:{},data:function(){return{}},computed:{}},P=A,k=(0,d.Z)(P,I,L,!1,null,"36685ce2",null),G=k.exports,M={name:"v-users-list",components:{VUsersFooter:G,VUsersListHeader:y},props:{},data:function(){return{}},computed:(0,u.Z)({},(0,c.rn)(["dialogs","users","activeUserId","activeUserName"])),methods:(0,u.Z)((0,u.Z)({},(0,c.nv)(["FETCH_MESSAGES","FETCH_RECEIVER_NAME"])),{},{toChat:function(e){this.$router.push({name:"chat",query:{user_id:e.id},params:{id:e.id}}),this.FETCH_MESSAGES(e.id),this.FETCH_RECEIVER_NAME(e.name+" "+e.second_name)}}),mounted:function(){}},$=M,H=(0,d.Z)($,T,w,!1,null,"08b7296a",null),D=H.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"v-auth",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[s("h5",{staticClass:"v-auth__title"},[e._v("Тут могла быть ваша реклама")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userLogin,expression:"userLogin"}],staticClass:"v-auth__input",attrs:{type:"text",placeholder:"Логин"},domProps:{value:e.userLogin},on:{input:function(t){t.target.composing||(e.userLogin=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"v-auth__input",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),s("router-link",{staticClass:"v-auth__link",attrs:{to:{name:"registration"}}},[e._v("Регистрация")]),s("button",{staticClass:"v-auth__button"},[e._v("Войти")])],1)},V=[],j=(s(9826),{name:"v-login",props:{},data:function(){return{userLogin:"",userPassword:""}},computed:(0,u.Z)({},(0,c.rn)(["users"])),methods:(0,u.Z)((0,u.Z)({},(0,c.nv)(["LOGIN_USER"])),{},{login:function(){var e=this;this.users.find((function(t){t.login===e.userLogin&&t.password===e.userPassword&&(e.$router.push({name:"users"}),e.LOGIN_USER(t))}))}})}),q=j,B=(0,d.Z)(q,F,V,!1,null,null,null),J=B.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"v-auth",on:{submit:function(t){return t.preventDefault(),e.registerUser.apply(null,arguments)}}},[s("h5",{staticClass:"v-auth__title"},[e._v("Тут могла быть ваша реклама")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userLogin,expression:"userLogin"}],staticClass:"v-auth__input",attrs:{type:"text",placeholder:"Придумайте логин"},domProps:{value:e.userLogin},on:{input:function(t){t.target.composing||(e.userLogin=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"v-auth__input",attrs:{type:"text",placeholder:"Введите ваше имя"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSecondName,expression:"userSecondName"}],staticClass:"v-auth__input",attrs:{type:"text",placeholder:"Введите вашу фамилию"},domProps:{value:e.userSecondName},on:{input:function(t){t.target.composing||(e.userSecondName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"v-auth__input",attrs:{type:"password",placeholder:"Придумайте пароль"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),s("button",{staticClass:"v-auth__button"},[e._v("Регистрация")])])},z=[],K={name:"v-registration",props:{},data:function(){return{userLogin:"",userName:"",userSecondName:"",userPassword:""}},computed:(0,u.Z)({},(0,c.rn)(["users"])),methods:(0,u.Z)((0,u.Z)({},(0,c.nv)(["REGISTER_USER","FETCH_USERS"])),{},{registerUser:function(){var e=this,t={id:this.users.length+1,login:this.userLogin,name:this.userName,second_name:this.userSecondName,password:this.userPassword};this.REGISTER_USER(t).then((function(){e.$router.push({name:"login"}),e.FETCH_USERS()}))}})},Q=K,X=(0,d.Z)(Q,W,z,!1,null,"6cc8b7a6",null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-chat"},[s("div",{staticClass:"top"},[s("i",{staticClass:"material-icons",on:{click:this.goBack}},[e._v("arrow_back")]),s("p",[e._v(e._s(this.receiverName))])]),s("div",{staticClass:"chat"},e._l(this.messages,(function(e){return s("v-message",{key:e.id,attrs:{message_data:e}})})),1),s("form",{staticClass:"bottom",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._m(0)])])},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",[s("i",{staticClass:"material-icons"},[e._v("send")])])}],se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-message"},[s("p",{class:e.className},[e._v(" "+e._s(this.message_data.text)+" ")])])},ne=[],re={name:"v-message",props:{message_data:{type:Object,default:function(){}}},data:function(){return{}},computed:(0,u.Z)((0,u.Z)({},(0,c.rn)(["activeUserId"])),{},{className:function(){return{from:this.message_data.sender_id!==this.activeUserId}}})},ae=re,ie=(0,d.Z)(ae,se,ne,!1,null,"57be52f6",null),oe=ie.exports,ue={name:"v-chat",components:{VMessage:oe},props:{id:{type:Number,default:function(){}}},data:function(){return{user_id:this.$route.query.user_id,text:""}},computed:(0,u.Z)({},(0,c.rn)(["messages","receiverName"])),methods:(0,u.Z)((0,u.Z)({},(0,c.nv)(["SEND_MESSAGE_TO_CHAT"])),{},{goBack:function(){this.$router.go(-1)},sendMessage:function(){this.SEND_MESSAGE_TO_CHAT({text:this.text,id:this.user_id}),this.text=""}})},ce=ue,le=(0,d.Z)(ce,ee,te,!1,null,"9beccaea",null),me=le.exports;n.Z.use(U.Z);var de=new U.Z({mode:"history",routes:[{path:"/",name:"login",component:J},{path:"/users/",name:"users",component:D},{path:"/registration/",name:"registration",component:Y},{path:"/chat/",name:"chat",component:me,props:!0}]}),pe=de;n.Z.config.productionTip=!1,new n.Z({render:function(e){return e(g)},store:N,router:pe,beforeCreate:function(){this.$store.commit("initialiseStore")}}).$mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,a){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],a=e[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(o=!1,a<i&&(i=a));if(o){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],o=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(u)var l=u(s)}for(t&&t(n);c<i.length;c++)a=i[c],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(l)},n=self["webpackChunkchat_ks"]=self["webpackChunkchat_ks"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1905)}));n=s.O(n)})();
//# sourceMappingURL=app-legacy.9de683d8.js.map