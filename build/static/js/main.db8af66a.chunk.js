(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(26),a(7)),s=a.n(c),u=a(18),i=a(2),m=a(3),p=a(5),d=a(4),h=a(6),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.props.onSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"urlInput"},"Url do Formul\xe1rio"),r.a.createElement("input",{id:"urlInput",type:"text",className:"form-control",placeholder:"Url do Formul\xe1rio",name:"url"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userInput"},"Usu\xe1rio"),r.a.createElement("input",{id:"userInput",type:"text",className:"form-control",placeholder:"Usu\xe1rio",name:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passInput"},"Senha"),r.a.createElement("input",{id:"passInput",type:"text",className:"form-control",placeholder:"Senha",name:"password"})),r.a.createElement("button",{className:"btn btn-primary w-100"},"Autenticar"))}}]),t}(n.Component),f=a(19),b=a.n(f),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSubmit=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={url:t.target.url.value,username:t.target.username.value,password:t.target.password.value},console.log(a),n={method:"post",baseURL:"".concat(a.url,"login"),headers:{"Content-Type":"application/json","Cache-Control":"no-cache"},data:{username:a.username,password:a.password}},e.prev=4,e.next=7,b()(n);case 7:r=e.sent,console.log(r.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[4,11]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12 col-md-10 col-lg-8 col-xl-6 mt-3"},r.a.createElement("h1",null,"Creativex Form Data"),r.a.createElement(v,{onSubmit:this.handleSubmit})))))}}]),t}(n.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.db8af66a.chunk.js.map