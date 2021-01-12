(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),u=n(1),c=n.n(u),s=n(3),i=n(4),d=n.n(i),m=null,f={getAll:function(){return d.a.get("/api/blogs").then((function(e){return e.data}))},create:function(e){var t,n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:m}},a.next=3,c.a.awrap(d.a.post("/api/blogs",e,t));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))},setToken:function(e){m="bearer ".concat(e)},update:function(e,t){var n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(d.a.put("".concat("/api/blogs","/").concat(e),t));case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}))},deleteBlog:function(e){var t,n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:m}},a.next=3,c.a.awrap(d.a.delete("".concat("/api/blogs","/").concat(e),t));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))}},g={login:function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(d.a.post("/api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))}},p=function(e){var t=e.blog,n=e.user,l=e.handleLikes,o=e.handleRemove,u=Object(a.useState)(!0),c=Object(s.a)(u,2),i=c[0],d=c[1],m={display:i?"none":""},f={display:i?"":"none"},g=function(){d(!i)},p=t.user.username===n.username;return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("div",{onClick:g,style:f,className:"togglableContent"},t.title," ",t.author),r.a.createElement("div",{style:m,className:"showAll"},r.a.createElement("div",{onClick:g,className:"togglableContent2"},t.title," ",t.author),r.a.createElement("br",null),r.a.createElement("a",{href:t.url},t.url),r.a.createElement("br",null),"likes: ",t.likes,r.a.createElement("button",{onClick:l},"like"),r.a.createElement("p",null,"Added by ",t.user.name),p?r.a.createElement("button",{onClick:o},"remove"):null))},b=function(e){var t=e.handleLogin,n=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"Username:",r.a.createElement("input",Object.assign({},n,{reset:""}))),r.a.createElement("div",null,"Password:",r.a.createElement("input",Object.assign({},a,{reset:""}))),r.a.createElement("button",{type:"submit"},"login")))},v=function(e){var t=e.handleAddBlog,n=e.title,a=e.author,l=e.url;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"Title:",r.a.createElement("input",Object.assign({},n,{reset:""}))),r.a.createElement("div",null,"Author:",r.a.createElement("input",Object.assign({},a,{reset:""}))),r.a.createElement("div",null,"Url:",r.a.createElement("input",Object.assign({},l,{reset:""}))),r.a.createElement("button",{type:"submit"},"Add"))},E=(n(39),function(e){var t=e.message,n=e.errorMessage;return""!==n?r.a.createElement("div",{className:"error"},n):""!==t?r.a.createElement("div",{className:"added"},t):null}),h=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(s.a)(n,2),o=l[0],u=l[1],c={display:o?"none":""},i={display:o?"":"none"},d=function(){u(!o)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:d}})),r.a.createElement("div",null,r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:d},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:d},"cancel")))}));h.displayName="Togglable";var w=h,y=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],l=n[1];return{reset:function(){l("")},type:e,value:r,onChange:function(e){l(e.target.value)}}};var k=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(null),u=Object(s.a)(o,2),i=u[0],d=u[1],m=y("text"),h=y("text"),k=y("url"),O=Object(a.useState)(""),j=Object(s.a)(O,2),x=j[0],A=j[1],S=Object(a.useState)(""),B=Object(s.a)(S,2),C=B[0],L=B[1],T=y("text"),N=y("password");Object(a.useEffect)((function(){f.getAll().then((function(e){console.log("promise fulfilled"),e.sort((function(e,t){return t.likes-e.likes})),l(e),console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);d(t),f.setToken(t.token)}}),[]);var U=function(e){var t,n,a;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),t=T.value,n=N.value,r.prev=3,r.next=6,c.a.awrap(g.login({username:t,password:n}));case 6:a=r.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),T.reset(),N.reset(),d(a),f.setToken(a.token),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(3),A("Wrong username or password"),setTimeout((function(){A("")}),5e3);case 18:case"end":return r.stop()}}),null,null,[[3,14]])},I=function(){setTimeout((function(){L(""),A("")}),5e3)},J=r.a.createRef(),R=function(e){var t,a,r,o,u,s;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=n.find((function(t){return t.id===e})),console.log(t),a=t.likes+1,r=t.user.id,console.log(a),console.log(e),o={user:r,likes:a,author:t.author,title:t.title,url:t.url},i.next=9,c.a.awrap(f.update(t.id,o));case 9:u=i.sent,(s=n.map((function(e){return e.id!==u.id?e:u}))).sort((function(e,t){return t.likes-e.likes})),l(s);case 13:case"end":return i.stop()}}))},D=function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Are you sure, you want to delete ".concat(t.title," by ").concat(t.author))&&(console.log("true"),f.deleteBlog(t.id),l(n.filter((function(t){return t.id!==e}))))},V=function(e){e.preventDefault(),J.current.toggleVisibility();var t={author:m.value,title:h.value,url:k.value};f.create(t).then((function(e){console.log(e),L("A new blog ".concat(h.value," by ").concat(m.value," has been added")),I(),l(n.concat(e)),m.reset(),h.reset(),k.reset()})).catch((function(e){A(e.message,"Validation error! Title and url required. Url must be at least 4 and title at least 1 character long"),I()}))};return r.a.createElement("div",null,r.a.createElement(E,{message:C,errorMessage:x}),null===i?r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(w,{buttonLabel:"sign in"},r.a.createElement(b,{handleLogin:U,username:T,password:N}))):r.a.createElement("div",null,r.a.createElement("p",null,i.name," logged in"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),d(null),L("You are succesfully logged out"),I()}},r.a.createElement("button",{type:"submit"},"logout")),r.a.createElement("h2",null,"Add new blog"),r.a.createElement(w,{buttonLabel:"Add a new Blog",ref:J},r.a.createElement(v,{handleAddBlog:V,title:h,author:m,url:k})),r.a.createElement("h1",null,"Blogs"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e,user:i,handleLikes:function(){return R(e.id)},handleRemove:function(){return D(e.id)}})})))))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2132b92e.chunk.js.map