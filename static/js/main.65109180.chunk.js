(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n(8),a=n.n(r),i=(n(14),n(7)),l=n(5),u=n(4),s={complete:{textDecoration:"line-through"},incomplete:{textDecoration:"none"}},d=function(e){var t=e.todo,n=e.handleToggle;return Object(c.jsx)("div",{id:t.id,name:"todo",value:t.id,onClick:function(e){e.preventDefault(),n(e.currentTarget.id)},style:t.complete?s.complete:s.incomplete,children:t.task},t.id+t.task)},j=function(e){var t=e.toDoList,n=e.handleToggle,o=e.handleFilter;return Object(c.jsxs)("div",{children:[t.map((function(e){return Object(c.jsx)(d,{todo:e,handleToggle:n,handleFilter:o})})),Object(c.jsx)("button",{style:{margin:"20px"},onClick:o,children:"Clear Completed"})]})},b=function(e){var t=e.addTask,n=Object(o.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),i("")},children:[Object(c.jsx)("input",{value:a,type:"text",onChange:function(e){i(e.currentTarget.value)},placeholder:"Enter task..."}),Object(c.jsx)("button",{children:"Submit"})]})};var p=function(){var e=Object(o.useState)([{id:1,task:"Eat icecream",complete:!1}]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)([]),s=Object(u.a)(a,2),d=s[0],p=s[1];return Object(o.useEffect)((function(){var e=n.filter((function(e){return e.complete}));p(e)}),[n]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{toDoList:n,handleToggle:function(e){var t=n.map((function(t){return t.id===Number(e)?Object(l.a)(Object(l.a)({},t),{},{complete:!t.complete}):Object(l.a)({},t)}));r(t)},handleFilter:function(){var e=n.filter((function(e){return!e.complete}));r(e)}}),Object(c.jsx)(b,{addTask:function(e){var t=Object(i.a)(n);t=[].concat(Object(i.a)(t),[{id:n.length+1,task:e,complete:!1}]),r(t)}}),Object(c.jsxs)("p",{children:[d.length," remaining out of ",n.length]})]})};a.a.render(Object(c.jsx)(p,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.65109180.chunk.js.map