(this.webpackJsonpmwd=this.webpackJsonpmwd||[]).push([[0],{157:function(e,t){e.exports={APPLICATION_ID:"0HUraeAEcQvv4cTFlOlIoAK4PFlMKWCArsetF5Vq",JAVASCRIPT_KEY:"ZStQjIGhuxOsThD302KvzuijiID6oJ0SDkmaHqIz",SERVER_URL:"https://parseapi.back4app.com/"}},586:function(e,t){},588:function(e,t){},599:function(e,t){},601:function(e,t){},628:function(e,t){},630:function(e,t){},631:function(e,t){},636:function(e,t){},638:function(e,t){},657:function(e,t){},669:function(e,t){},672:function(e,t){},728:function(e,t,n){},729:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(331),a=n.n(o),s=n(13),r=n(336),i=n(18),l=n(0),u=function(e){e.component;var t=e.flag,n=Object(r.a)(e,["component","flag"]);return console.log(n),console.log("Flag in protected route",t),Object(l.jsx)("div",{children:t?Object(l.jsx)(i.a,{to:"/home"}):Object(l.jsx)(i.a,{to:"/login"})})},j=n(9),b=n.n(j),h=function(){var e=b.a.Object.extend("Task");return new b.a.Query(e).find().then((function(e){return e}))},d=function(e){var t=b.a.Object.extend("Task");return new b.a.Query(t).get(e).then((function(e){e.destroy()}))},O=function(e){console.log("Creating: ",e);var t=new(b.a.Object.extend("Day"));return t.set("date",e),t.save().then((function(e){return e}))},f=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)([]),r=Object(s.a)(a,2),i=(r[0],r[1]);Object(c.useEffect)((function(){h().then((function(e){o(e)})),function(e){var t=b.a.Object.extend("Task");return new b.a.Query(t).get(e).then((function(e){return e}))}("NAaOiKBukL").then((function(e){console.log(e),i(e)}))}),[]);var u=Object(c.useState)(""),j=Object(s.a)(u,2),O=j[0],f=j[1];return Object(c.useEffect)((function(){if(O.length>0){var e=n.filter((function(e){return e.id!==O}));o(e),d(O).then((function(){console.log("Removed task with ID: ",O)})),f("")}}),[n,O]),Object(l.jsx)("div",{children:n.length>0&&Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsx)("div",{class:"align",children:Object(l.jsxs)("span",{children:[Object(l.jsx)("button",{class:"button",onClick:function(t){f(e.id)},children:Object(l.jsx)("span",{class:"checkmark"})}),Object(l.jsxs)("li",{class:"test",children:[e.get("name")," | ",e.get("location")," | ",e.get("time")]},e.id)," "]})})}))})})},x=n(335);function g(e){var t=e.data,n=e.onChildClick;return Object(l.jsx)("div",{class:"child",children:Object(l.jsx)("a",{href:"index.html",class:"button",onClick:n,children:t})})}var p=function(e){return console.log("the Form function works"),Object(l.jsx)("div",{className:"popup-box",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),e.content]})})};function v(e){var t=e.title,n=e.children;return Object(c.useEffect)((function(){document.title=t}),[t]),Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)("h3",{children:n})]})}var m=function(){var e=b.a.User.current();return null!==e&&e.getUsername()},k=function(){var e=b.a.User.current();if(null===e)return!1;console.log("Current",e),console.log("Current user:",e.getUsername());var t=e.authenticated();return console.log("User is authenticated:",t),e.authenticated()},C=n(333),y=n(334);new(function(){function e(){Object(C.a)(this,e),this.authenticated=!1}return Object(y.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}());function w(){var e=Object(i.g)(),t=Object(c.useState)(),n=Object(s.a)(t,2),o=n[0],a=n[1],r=Object(c.useState)(),u=Object(s.a)(r,2),j=u[0],h=u[1],d=Object(c.useState)(),O=Object(s.a)(d,2),f=O[0],x=O[1],g=Object(c.useState)(!1),m=Object(s.a)(g,2),k=m[0],C=m[1],y=function(){C(!k)},w=function(e){e.preventDefault(),a(e.target.value)},S=function(e){e.preventDefault(),h(e.target.value)};return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{class:"centered",children:[Object(l.jsx)("h1",{class:"login",children:"LOGIN"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",id:"username",name:"username",placeholder:"username",onChange:w}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"password",onChange:S}),Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),Object(l.jsx)("button",{class:"button2",onClick:function(t){var n,c;t.preventDefault(),(n=o,c=j,b.a.User.logIn(n,c).then((function(e){})).catch((function(e){console.error("Error while logging in user",e)}))).then((function(){console.log(b.a.User.current()),e.push("/home")}))},children:"LOGIN"})]}),Object(l.jsx)("button",{class:"button3",onClick:y,children:"CREATE ACCOUNT"})]}),k&&Object(l.jsx)(p,{content:Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{title:"New Account",children:"Please fill out the following:"}),Object(l.jsx)("input",{type:"text",id:"username",name:"username",placeholder:"username",onChange:w}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"password",onChange:S}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"email",onChange:function(e){e.preventDefault(),x(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsxs)("button",{class:"button2",onClick:function(){!function(e,t,n){var c=new b.a.User;c.set("username",e),c.set("email",n),c.set("password",t),c.signUp().then((function(e){console.log("User signed up",e)})).catch((function(e){console.error("Error while signing up user",e)}))}(o,j,f),alert("Account was created!")},children:["CREATE ACCOUNT",Object(l.jsx)("span",{class:"plusIcon"})]})]})}),handleClose:y})]})}n(728);var S=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],a=function(){o(!n)},r=Object(c.useState)(),i=Object(s.a)(r,2),u=i[0],j=i[1],f=Object(c.useState)(),k=Object(s.a)(f,2),C=k[0],y=k[1],w=Object(c.useState)(),S=Object(s.a)(w,2),U=S[0],D=S[1],E=Object(c.useState)(),T=Object(s.a)(E,2),A=T[0],I=T[1],L=Object(c.useState)(),N=Object(s.a)(L,2),R=N[0],H=N[1],F=Object(c.useState)(!1),P=Object(s.a)(F,2),q=P[0],V=P[1],K=Object(c.useState)([]),W=Object(s.a)(K,2),G=W[0],J=W[1],Q=Object(c.useState)([]),_=Object(s.a)(Q,2),M=(_[0],_[1],Object(c.useState)("")),z=Object(s.a)(M,2),B=z[0],Y=z[1];Object(c.useEffect)((function(){h().then((function(e){J(e)}))}),[]);var Z=(new Date).toLocaleDateString(),X=function(){var e=["Howdy","Hi","Welcome back","Hola","Bonjour","Hey","Yo","Hello","Nice to see you","Looking good","What's up","G'day","What's happening","Hey there","Ahoy","Hiya","Top of the mornin'","What's cracking","'Sup","What's good","Whaddup","Greetings","'Ello","Hello there","Aloha","Que pasa","Ciao","Konnichiwa","Long-time no see","Good to see you","Heyyy"];return e[Math.floor(Math.random()*e.length)]}();Object(c.useEffect)((function(){if(u&&q&&function(e,t,n,c,o){console.log("Creating: ",e),console.log(e,t,n,c,o);var a=new(b.a.Object.extend("Task")),s=O(n);return console.log("The day object",s),a.set("name",e),a.set("location",t),a.set("date",n),a.set("time",c),a.set("frequency",o),a.save().then((function(e){return e}))}(u,C,U,A,R).then((function(e){V(!1),J([].concat(Object(x.a)(G),[e]))})),B.length>0){var e=G.filter((function(e){return e.id!==B}));J(e),d(B).then((function(){console.log("Removed lesson with ID: ",B)})),Y("")}}),[u,G,q,B]);var $=Object(c.useState)(""),ee=Object(s.a)($,2),te=ee[0],ne=ee[1];return Object(c.useEffect)((function(){""===te&&ne(m)}),[te]),console.log("USERNAME IS: ",te),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[X,", ",te,"!"]}),Object(l.jsx)("h2",{children:Z})]}),Object(l.jsx)("div",{class:"topcorner",children:Object(l.jsx)("button",{class:"button",onClick:a,children:Object(l.jsx)("span",{class:"plusIcon"})})}),n&&Object(l.jsx)(p,{content:Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{title:"New task",children:"Please fill out the following:"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{for:"taskTitle",children:" Title: "}),Object(l.jsx)("input",{type:"text",id:"taskTitle",name:"taskTitle",placeholder:"Sign Declaration of Independence",required:"",onChange:function(e){e.preventDefault(),j(e.target.value)}}),Object(l.jsx)("label",{for:"taskLocation",children:" Location: "}),Object(l.jsx)("input",{type:"text",id:"taskLocation",name:"taskLocation",placeholder:"Philadelphia",onChange:function(e){e.preventDefault(),y(e.target.value)}}),Object(l.jsx)("label",{children:" Date: "}),Object(l.jsx)("input",{type:"text",id:"taskDate",name:"taskDate",placeholder:"July, 4th 1776",required:"",onChange:function(e){e.preventDefault(),D(e.target.value)}}),Object(l.jsx)("label",{children:" Time: "}),Object(l.jsx)("input",{type:"text",id:"taskTime",name:"taskTime",placeholder:"All Day",onChange:function(e){e.preventDefault(),I(e.target.value)}}),Object(l.jsx)("label",{children:" Frequency: "}),Object(l.jsx)("input",{type:"text",id:"taskFrequency",name:"taskFrequency",placeholder:"Once",onChange:function(e){e.preventDefault(),H(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(g,{data:"Submit",onChildClick:function(e){e.preventDefault(),V(!0),alert("Task Submitted")}})]})]})}),handleClose:a})]})},U=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsx)(f,{})]})},D=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],a=k();Object(c.useEffect)((function(){console.log("Verify User before",k()),console.log("Check in useEffect:",a),a?(console.log("User Verified!"),console.log(b.a.User.current()),o(a),console.log("flag should have just been set to be true, flag is actually:",n)):(console.log("User Not Verified!"),o(!1))}),[a]);var r=!1;return null===b.a.User.current()?(r=!1,console.log("User does not exist")):(r=!0,console.log(b.a.User.current().getUsername(),"user logged in")),b.a.User.logOut(),console.log("Logged Out!"),Object(l.jsx)("div",{children:Object(l.jsx)(u,{exact:!0,path:"/user",flag:r,component:U})})},E=n(155);function T(){return Object(l.jsx)(E.a,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/login",component:w}),Object(l.jsx)(i.b,{path:"/home",component:D}),Object(l.jsx)(i.b,{path:"/user/:username",componenet:D}),Object(l.jsx)(i.a,{to:"/login"})]})})}var A=n(157);b.a.initialize(A.APPLICATION_ID,A.JAVASCRIPT_KEY),b.a.serverURL=A.SERVER_URL;var I=function(){return Object(l.jsx)(T,{})},L=document.getElementById("root");a.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(I,{})}),L)}},[[729,1,2]]]);
//# sourceMappingURL=main.1fd27f81.chunk.js.map