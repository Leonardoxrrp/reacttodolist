(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(7),c=n.n(r),l=(n(16),n(17),n(5)),i=n(2);n(18);var u=function(e){var t=Object(a.useState)(e.editTodo?e.editTodo.value:""),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(a.useRef)(null);Object(a.useEffect)((function(){l.current.focus()}));var u=function(e){c(e.target.value)};return o.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault(),c(""),e.onSubmit({id:Math.floor(1e4*Math.random()),text:r})}},e.editTodo?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{ref:l,className:"form-control",maxLength:"25",placeholder:r,value:r,onChange:u,required:!0}),o.a.createElement("button",{className:"btn btn-dark"},"Update")):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{ref:l,className:"form-control",maxLength:"25",placeholder:"Here your text",value:r,onChange:u,required:!0}),o.a.createElement("button",{className:"btn btn-dark"},"Send")))},s=(n(19),n(20),n(8)),d=n(9);var m=function(e){var t=e.todos,n=e.deleteTodo,r=e.updateTodo,c=Object(a.useState)({id:null,value:""}),l=Object(i.a)(c,2),m=l[0],f=l[1];return m.id?o.a.createElement(u,{editTodo:m,onSubmit:function(e){r(m.id,e),f({id:null,value:""})}}):t.map((function(e){return o.a.createElement("div",{className:"todoContainer",key:e.id},o.a.createElement("div",{className:"singleTodo"},e.text),o.a.createElement("div",{className:"buttons"},o.a.createElement(s.a,{className:"littleButton",onClick:function(){return n(e.id)},size:"20px"}),o.a.createElement(d.a,{className:"littleButton",onClick:function(){return f({id:e.id,value:e.text})},size:"20px"})))}))};var f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"listContainer"},o.a.createElement(u,{onSubmit:function(e){var t=[e].concat(Object(l.a)(n));r(t)}}),o.a.createElement(m,{todos:n,deleteTodo:function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e}));r(t)},updateTodo:function(e,t){r((function(n){return n.map((function(n){return n.id===e?t:n}))}))}}))},v=(n(21),n(10));n(22);var E=function(){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/leonardo-rojas-personal/"},o.a.createElement(v.a,{className:"bottomLeft"}))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement("h1",{className:"title"},"To-do Application"),o.a.createElement("h6",null,"Add, update, and delete"),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ed738b66.chunk.js.map