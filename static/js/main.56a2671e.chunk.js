(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){e.exports={preloader__image:"PreLoader_preloader__image__3Aq2Y"}},102:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(28),n=a(30),o=a(29),i=a(0),c=a.n(i),s=a(10),u=a(12),l=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(n.a)(i,t);var a=Object(o.a)(i);function i(){var t;Object(r.a)(this,i);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return(t=a.call.apply(a,[this].concat(o))).render=function(){return t.props.isAuth?c.a.createElement(e,t.props):c.a.createElement(s.a,{to:"login"})},t}return i}(c.a.Component);return Object(u.b)(l)(t)}},103:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(42),n=a.n(r),o=a(8),i=n.a.create({withCredentials:!0,baseURL:o.c}),c={getUserAuth:function(){return i.get("auth/me").then((function(e){return e.data}))},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=\n         ".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}}},11:function(e,t,a){e.exports={navigate__lists:"Navigate_navigate__lists__2QnkY",navigate__link:"Navigate_navigate__link__3Ww6J",navigate__item:"Navigate_navigate__item__32xv5",navigate__active:"Navigate_navigate__active__3bw__",navigate:"Navigate_navigate__cR8Do"}},134:function(e,t,a){e.exports=a.p+"static/media/user-photo.02723a8b.png"},141:function(e,t,a){e.exports=a.p+"static/media/newspaper.b27c2af2.svg"},142:function(e,t,a){e.exports=a.p+"static/media/song.9072b6a0.svg"},145:function(e,t,a){e.exports={profile__wrapper:"Profile_profile__wrapper__2y8B_",profile:"Profile_profile__1r61I"}},146:function(e,t,a){e.exports={form__input:"FormTextaria_form__input__1vmbi",form__input_error:"FormTextaria_form__input_error__1akk4",form__error:"FormTextaria_form__error__2rv8h"}},147:function(e,t,a){e.exports=a.p+"static/media/spinner.12128e4a.svg"},148:function(e,t){e.exports="data:image/png;base64,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"},149:function(e,t,a){e.exports=a.p+"static/media/telegram.6c4e8b34.svg"},150:function(e,t,a){e.exports=a.p+"static/media/github-image.192a6620.svg"},177:function(e,t,a){e.exports=a(315)},20:function(e,t,a){e.exports={header:"Header_header__fFjad",header__logo:"Header_header__logo__1z4Xw",header__wrapper:"Header_header__wrapper__18vqE",header__title:"Header_header__title__yEjvq",header__author:"Header_header__author__ukU30",header__link:"Header_header__link__2PXSA",header__login:"Header_header__login__17EhH",header__social:"Header_header__social__3rMPf",header__loginName:"Header_header__loginName__3pET3"}},260:function(e,t,a){},261:function(e,t,a){e.exports=a.p+"static/media/user.5f6eb7ca.svg"},262:function(e,t,a){e.exports=a.p+"static/media/email.e41f997a.svg"},314:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a(74),o=a.n(n),i=a(94),c=a.n(i),s={dialog:[{id:1,name:"\u0421\u0430\u0448\u0430",image:o.a},{id:2,name:"\u0414\u0438\u043c\u0430",image:o.a},{id:3,name:"\u041b\u0435\u0440\u0430",image:c.a},{id:4,name:"\u0416\u0435\u043d\u044f",image:o.a},{id:5,name:"\u041c\u0430\u0440\u0438\u043d\u0430",image:c.a}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DIALOG":var a={id:5,message:e.messageTextInput,count:2};return e.push(a),e;default:return e}},l=a(38),m=a(5),p=a(8),_={post:[{id:1,message:"\u0412\u044b\u0448\u0435\u043b \u043d\u043e\u0432\u044b\u0439 \u0430\u043b\u044c\u0431\u043e\u043c \u0425\u0430\u0441\u043a\u0438!",count:"10"}],profileUser:null,status:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.b:return Object(m.a)(Object(m.a)({},e),{},{post:[{id:5,message:t.value,count:2}].concat(Object(l.a)(e.post))});case p.j:return Object(m.a)(Object(m.a)({},e),{},{profileUser:t.profile});case p.e:return Object(m.a)(Object(m.a)({},e),{},{status:t.status});default:return e}},d={message:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041d\u0443\u0436\u043d\u043e \u0441\u0440\u043e\u0447\u043d\u043e \u043f\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c!"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a:return Object(m.a)(Object(m.a)({},e),{},{message:[].concat(Object(l.a)(e.message),[{id:5,message:t.message,count:2}])});default:return e}},v={users:[],totalCount:0,pageSize:20,currentPage:1,portionSize:5,currentState:!1,followingProgress:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.m:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case p.n:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case p.k:return Object(m.a)(Object(m.a)({},e),{},{users:Object(l.a)(t.users)});case p.i:return Object(m.a)(Object(m.a)({},e),{},{totalCount:t.count});case p.h:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case p.f:return Object(m.a)(Object(m.a)({},e),{},{currentState:t.currentState});case p.d:return Object(m.a)(Object(m.a)({},e),{},{followingProgress:t.state?[].concat(Object(l.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},b={login:null,userId:null,email:null,isAuth:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.l:return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},A=a(138),O=a(137),j=function(e,t,a,r){return{type:p.l,payload:{login:e,userId:t,email:a,isAuth:r}}},w=a(13),N=a.n(w),x=a(21),S=a(103),U=function(){return function(){var e=Object(x.a)(N.a.mark((function e(t){var a,r,n,o,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.getUserAuth();case 2:0===(a=e.sent).resultCode&&(r=a.data,n=r.login,o=r.id,i=r.email,t(j(n,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C={initialized:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INIT":return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},I=Object(r.c)({profile:f,dialogs:g,user:u,users:h,auth:E,form:O.a,app:k}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,y=Object(r.e)(I,P(Object(r.a)(A.a)));window.store=y;var B=y,Q=a(0),D=a.n(Q),H=a(62),R=a.n(H),T=a(28),z=a(30),F=a(29),G=a(10),K=(a(260),a(11)),q=a.n(K),L=a(17),M=a(141),X=a.n(M),J=a(142),W=a.n(J),Z=(a(261),a(262),a(96)),Y=a.n(Z),V=a(92),$=a(143),ee=a(144),te=function(){return D.a.createElement("nav",{className:q.a.navigate},D.a.createElement("div",{className:"container"},D.a.createElement("ul",{className:q.a.navigate__lists},D.a.createElement("li",{className:q.a.navigate__item},D.a.createElement(L.b,{to:"/profile",activeClassName:q.a.navigate__active,className:q.a.navigate__link},D.a.createElement(V.Icon,{icon:$.home,size:64}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),D.a.createElement("li",{className:q.a.navigate__item},D.a.createElement(L.b,{to:"/users",activeClassName:q.a.navigate__active,className:q.a.navigate__link},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",D.a.createElement("img",{src:Y.a,width:"20px",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}))),D.a.createElement("li",{className:q.a.navigate__item},D.a.createElement(L.b,{to:"/dialogs",activeClassName:q.a.navigate__active,className:q.a.navigate__link},D.a.createElement(V.Icon,{icon:ee.ic_textsms,size:32}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),D.a.createElement("li",{className:q.a.navigate__item},D.a.createElement(L.b,{to:"/news",activeClassName:q.a.navigate__active,className:q.a.navigate__link},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 ",D.a.createElement("img",{src:X.a,width:"20px",alt:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}))),D.a.createElement("li",{className:q.a.navigate__item},D.a.createElement(L.b,{to:"/music",activeClassName:q.a.navigate__active,className:q.a.navigate__link},"\u041c\u0443\u0437\u044b\u043a\u0430",D.a.createElement("img",{src:W.a,width:"20px",alt:"\u041c\u0443\u0437\u044b\u043a\u0430"}))),D.a.createElement("li",{"aria-disabled":!0,className:q.a.navigate__item},D.a.createElement(L.b,{to:"/settings",activeClassName:q.a.navigate__active,className:q.a.navigate__link},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",D.a.createElement("img",{src:Y.a,width:"20px",alt:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}))))))},ae=a(145),re=a.n(ae),ne=a(135),oe=a(136),ie=a(45),ce=a(46),se=a(33),ue=a.n(se),le=a(39),me=a.n(le),pe=function(e){var t=e.message,a=e.like;return D.a.createElement("div",{className:me.a.message},D.a.createElement("img",{className:me.a.message__image,src:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"}),D.a.createElement("p",{className:me.a.message__text},t),D.a.createElement("div",{className:me.a.message__wrapperActiveBlock},D.a.createElement("span",{className:me.a.message__state},a),D.a.createElement("button",{className:me.a.message__buttonLike})))},_e=Object(ie.a)(10),fe=Object(oe.a)({form:"profileForm"})((function(e){var t=e.handleSubmit;return D.a.createElement("form",{onSubmit:t,className:ue.a.form__field},D.a.createElement(ne.a,{component:ce.a,className:ue.a.form__input,name:"message",typeField:"textarea",validate:[ie.b,_e],placeholder:"\u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),D.a.createElement("button",{className:ue.a.form__button,type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}));console.log("Render");var de=function(e){var t=e.data,a=e.addPost,r=t.map((function(e,t){return D.a.createElement(pe,{key:t,message:e.message,like:e.count})}));return D.a.createElement("div",{className:ue.a.wrapper},D.a.createElement("div",{id:"message-form"},D.a.createElement("div",{className:"container"},D.a.createElement("div",{className:ue.a.form__wrapper},D.a.createElement("h2",{className:ue.a.form__title},"My post"),D.a.createElement(fe,{onSubmit:function(e){console.log(e),a(e.message)}})))),D.a.createElement("div",{className:ue.a.postContainer},r))},ge=function(e){return{type:p.e,status:e}},ve=a(12),he=Object(ve.b)((function(e){return{data:e.profile.post}}),(function(e){return{addPost:function(t){e(function(e){return{type:p.b,value:e}}(t))}}}))(de),be=a(61),Ee=a.n(be),Ae=a(44),Oe=a(134),je=a.n(Oe),we=a(93),Ne=a(34),xe=a.n(Ne),Se=function(e){var t=e.status,a=(e.data,e.setStatus),r=Object(Q.useState)(!1),n=Object(we.a)(r,2),o=n[0],i=n[1],c=Object(Q.useState)(t),s=Object(we.a)(c,2),u=s[0],l=s[1];Object(Q.useEffect)((function(){l(t)}),[t]);var m=function(){i(!1)};return D.a.createElement("div",null,o?null:D.a.createElement("p",{className:xe.a.profileStatus__text,onDoubleClick:function(){i(!0)}},t),o?D.a.createElement("form",{className:xe.a.profileStatus__inputWrapper},D.a.createElement("input",{autoFocus:!0,maxLength:30,className:xe.a.profileStatus__input,value:u,onChange:function(e){return l(e.target.value)}}),D.a.createElement("button",{className:xe.a.profileStatus__button+" "+xe.a.profileStatus__buttonOn,onClick:function(e){e.preventDefault(),a(u),m()}}),D.a.createElement("button",{className:xe.a.profileStatus__button+" "+xe.a.profileStatus__buttonDel,onClick:m})):null)},Ue=function(e){var t=e.data,a=e.status,r=e.setStatus;return t?D.a.createElement("div",{className:"container"},D.a.createElement("div",{className:Ee.a.profile__wrapper},D.a.createElement("img",{alt:"profile photo",className:Ee.a.profile__image,src:t.photos.large?t.photos.large:je.a}),D.a.createElement("div",{className:Ee.a.profile__dataWrapper},D.a.createElement("h2",{className:Ee.a.profile__text},t.fullName),D.a.createElement(Se,{status:a,data:t,setStatus:r})))):D.a.createElement(Ae.a,null)},Ce=function(e){return console.log("render"),D.a.createElement("div",{className:re.a.profile},D.a.createElement(Ue,{status:e.status,data:e.data,setStatus:e.setNewUserStatusCreator}),D.a.createElement(he,null))},ke=a(42),Ie=a.n(ke),Pe=Ie.a.create({withCredentials:!0,baseURL:p.c,headers:{"API-KEY":"c7396936-96da-47b7-b8e8-a78259e1e0e5"}}),ye=function(e){return Pe.get("profile/".concat(e)).then((function(e){return e.data}))},Be=function(e){return Pe.get("profile/status/".concat(e)).then((function(e){return e.data}))},Qe=function(e){return console.log(e),Pe.put("profile/status",{status:e}).then((function(e){return e}))},De=a(102),He=function(e){Object(z.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){var t=e.props.match.params.userId;t||(t=e.props.loginId),e.props.getUserProfileCreator(t),e.props.getCurrentUserStatusCreator(t)},e.render=function(){return D.a.createElement(Ce,Object.assign({},e.props,{data:e.props.data}))},e}return a}(D.a.Component),Re=Object(r.d)(Object(ve.b)((function(e){return{data:e.profile.profileUser,status:e.profile.status,loginId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfileCreator:function(e){return function(){var t=Object(x.a)(N.a.mark((function t(a){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye(e);case 2:r=t.sent,a((n=r,{type:p.j,profile:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},getCurrentUserStatusCreator:function(e){return function(){var t=Object(x.a)(N.a.mark((function t(a){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Be(e);case 3:r=t.sent,a(ge(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430: "+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setNewUserStatusCreator:function(e){return function(){var t=Object(x.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Qe(e);case 3:0===t.sent.data.resultCode&&a(ge(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430: "+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}),G.f,De.a)(He),Te=a(58),ze=Ie.a.create({withCredentials:!0,baseURL:p.c,headers:{"API-KEY":"c7396936-96da-47b7-b8e8-a78259e1e0e5"}}),Fe=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ze.post("/auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e}))},Ge=function(){return ze.delete("/auth/login").then((function(e){return e}))},Ke=a(52),qe=a(40),Le=a.n(qe),Me=Object(oe.a)({form:"enterForm"})((function(e){var t;return D.a.createElement("div",null,D.a.createElement("form",{onSubmit:e.handleSubmit,className:Le.a.formWrapper},D.a.createElement(ne.a,{component:ce.a,validate:[ie.b],typeField:"input",name:"email",type:"name",className:Le.a.input,placeholder:"Email"}),D.a.createElement(ne.a,{component:ce.a,validate:[ie.b],typeField:"input",name:"password",type:"password",className:Le.a.input,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),D.a.createElement("div",null,D.a.createElement(ne.a,(t={component:ce.a,typeField:"input",name:"remember",type:"checkbox"},Object(Te.a)(t,"name","rememberMe"),Object(Te.a)(t,"id","remember"),t)),D.a.createElement("label",{style:{color:"#ffffff",fontSize:18},htmlFor:"remember"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c")),D.a.createElement("button",{className:Le.a.button},"\u0412\u043e\u0439\u0442\u0438"),D.a.createElement("span",{className:Le.a.error},e.error?e.error:"")))})),Xe=Object(ve.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginCreator:function(e,t,a){return function(){var r=Object(x.a)(N.a.mark((function r(n){var o,i;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Fe(e,t,a);case 2:0===(o=r.sent).data.resultCode?n(U()):(i=Object(Ke.a)("enterForm",{_error:o.data.messages[0]}),n(i));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.loginCreator;return!0===e.isAuth?D.a.createElement(G.a,{to:"/profile"}):D.a.createElement("div",null,D.a.createElement("h2",{className:Le.a.formTitle},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"),D.a.createElement(Me,{onSubmit:function(e){t(e.email,e.password,e.remeberMe)}}))})),Je=a(20),We=a.n(Je),Ze=a(148),Ye=a.n(Ze),Ve=a(149),$e=a.n(Ve),et=a(150),tt=a.n(et),at=function(e){return D.a.createElement("header",{className:We.a.header},D.a.createElement("div",{className:We.a.header__wrapper},D.a.createElement("img",{alt:"logo",className:We.a.header__logo,src:Ye.a}),D.a.createElement("h1",{className:We.a.header__title},"React Social Club ",D.a.createElement("span",{className:We.a.header__author},"by Origin56")),D.a.createElement("div",{className:We.a.header__social},e.isAuth?D.a.createElement("button",{className:We.a.header__login,onClick:e.logoutCreator},"\u0412\u044b\u0439\u0442\u0438"):D.a.createElement("button",{className:We.a.header__login},"\u0412\u043e\u0439\u0442\u0438"),D.a.createElement("a",{className:We.a.header__link,href:"https://t.me/origin56",target:"blank"},D.a.createElement("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0441\u0435\u0434\u0436\u0435\u0440\u0430 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c. \u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430",className:We.a.header__logo,src:$e.a})),D.a.createElement("a",{className:We.a.header__link,href:"https://github.com/Origin5665",target:"blank"},D.a.createElement("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0413\u0438\u0442\u0445\u0430\u0431. \u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430",className:We.a.header__logo,src:tt.a})))))},rt=function(e){Object(z.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).render=function(){return D.a.createElement(at,e.props)},e}return a}(D.a.Component),nt=Object(ve.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutCreator:function(){return function(){var e=Object(x.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\u0421\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0432\u044b\u0445\u043e\u0434?")){e.next=6;break}return e.next=4,Ge();case 4:0===e.sent.data.resultCode&&t(j(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(rt),ot=function(e){return function(t){return D.a.createElement(Q.Suspense,{fallback:D.a.createElement(Ae.a,null)},D.a.createElement(e,t)," ")}},it=Object(Q.lazy)((function(){return a.e(4).then(a.bind(null,350))})),ct=Object(Q.lazy)((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,349))})),st=function(e){Object(z.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){e.props.appInitCreator()},e.render=function(){return e.props.initialized?D.a.createElement("div",{className:"wrapper"},D.a.createElement(nt,null),D.a.createElement("div",{className:"wrapper-block"},D.a.createElement(te,null),D.a.createElement(G.b,{path:"/profile/:userId?",render:function(){return D.a.createElement(Re,null)}}),D.a.createElement(G.b,{path:"/users",render:ot(ct)}),D.a.createElement(G.b,{path:"/dialogs",render:ot(it)}),D.a.createElement(G.b,{path:"/login",render:function(){return D.a.createElement(Xe,null)}}))):D.a.createElement(Ae.a,null)},e}return a}(D.a.Component),ut=Object(r.d)(G.f,Object(ve.b)((function(e){return{initialized:e.app.initialized}}),{appInitCreator:function(){return function(e){e(U()).then((function(){e({type:"SET_INIT"})}))}}}))(st);a(314);R.a.render(D.a.createElement(D.a.StrictMode,null,D.a.createElement(L.a,null,D.a.createElement(ve.a,{store:B},D.a.createElement(ut,{state:B})))),document.getElementById("root"))},33:function(e,t,a){e.exports={form__title:"ProfileBlock_form__title__1sJ28",form__field:"ProfileBlock_form__field__2cEAl",form__wrapper:"ProfileBlock_form__wrapper__18QZI",form__input:"ProfileBlock_form__input__37wA4",form__button:"ProfileBlock_form__button__1iQp2",postContainer:"ProfileBlock_postContainer__2hDOM"}},34:function(e,t,a){e.exports={profileStatus__text:"ProfileStatus_profileStatus__text__1ncKk",profileStatus__inputWrapper:"ProfileStatus_profileStatus__inputWrapper__2MdFO",profileStatus__input:"ProfileStatus_profileStatus__input__1do3c",profileStatus__button:"ProfileStatus_profileStatus__button__3890G",profileStatus__buttonDel:"ProfileStatus_profileStatus__buttonDel__tHn3Q",profileStatus__buttonOn:"ProfileStatus_profileStatus__buttonOn__TNciV"}},39:function(e,t,a){e.exports={message__image:"ProfilePost_message__image__3Ussl",message:"ProfilePost_message__2lzUB",message__text:"ProfilePost_message__text__16AWt",message__buttonLike:"ProfilePost_message__buttonLike__2aae6",message__wrapperActiveBlock:"ProfilePost_message__wrapperActiveBlock__1WU1L",message__state:"ProfilePost_message__state__jn1n-"}},40:function(e,t,a){e.exports={formWrapper:"EnterForm_formWrapper__3m0OI",button:"EnterForm_button__1SDMD",input:"EnterForm_input__3N2zb",formTitle:"EnterForm_formTitle__23lLW",error:"EnterForm_error__28TdK"}},44:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(147),i=a.n(o),c=a(101),s=a.n(c);t.a=function(){return n.a.createElement("div",{className:s.a.preloader__wrapper},n.a.createElement("img",{className:s.a.preloader__image,src:i.a,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u043a\u0438"}))}},45:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"},n=function(e){return function(t){return t.length>=e?"\u041f\u043e\u043b\u0435 \u0432\u044b\u0448\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u043d\u044b":void 0}}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(151),n=a(0),o=a.n(n),i=a(146),c=a.n(i),s=function(e){var t=e.meta,a=t.error,r=t.touched,n=e.children;return o.a.createElement("div",null,n,o.a.createElement("span",{className:c.a.form__error},a&&r?a:""))},u=function(e){var t=e.input,a=(e.meta,e.typeField),n=Object(r.a)(e,["input","meta","typeField"]);return o.a.createElement(s,e,"input"===a?o.a.createElement("input",Object.assign({},n,t)):o.a.createElement("textarea",Object.assign({},n,t)))}},61:function(e,t,a){e.exports={profile__dataWrapper:"ProfileInfo_profile__dataWrapper__3L0g4",profile_wrapperInfo:"ProfileInfo_profile_wrapperInfo__1Qpna",profile__image:"ProfileInfo_profile__image__1aX9j",profile__text:"ProfileInfo_profile__text__nWv6_",profile__wrapper:"ProfileInfo_profile__wrapper__RtD6X"}},74:function(e,t,a){e.exports=a.p+"static/media/man.2369d24d.svg"},8:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"j",(function(){return o})),a.d(t,"n",(function(){return i})),a.d(t,"k",(function(){return c})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"m",(function(){return l})),a.d(t,"h",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"d",(function(){return _})),a.d(t,"a",(function(){return f})),a.d(t,"l",(function(){return d})),a.d(t,"e",(function(){return g}));var r="ADD_POST",n="https://social-network.samuraijs.com/api/1.0/",o="SET_USER",i="UNSUBSCRIBE",c="SET_USERS",s="SET_TOTAL_COUNT",u="PAGE_SIZE",l="SUBSCRIBE",m="SET_CURRENT_PAGE",p="IS_LOADING",_="FOLLOWING_PROGRESS",f="ADD_MESSAGE",d="SET_USER_AUTH",g="GET_CURRENT_STATUS"},94:function(e,t,a){e.exports=a.p+"static/media/girl.dbe3845e.svg"},96:function(e,t,a){e.exports=a.p+"static/media/settings.82207771.svg"}},[[177,1,2]]]);
//# sourceMappingURL=main.56a2671e.chunk.js.map