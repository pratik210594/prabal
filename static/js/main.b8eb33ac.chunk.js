(window.webpackJsonpjio=window.webpackJsonpjio||[]).push([[0],{22:function(e,t,a){e.exports=a(54)},27:function(e,t,a){},28:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(27),a(2)),i=a(3),u=a(5),s=a(4),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.data.map((function(e){return r.a.createElement("h2",null,e.title)})))}}]),a}(r.a.Component),h=(a(28),a(7)),m=a(21),v=a.n(m),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:n.state,data:[""]},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.renderTable=n.renderTable.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=this;console.log(e.target.value),v.a.get("http://hn.algolia.com/api/v1/search?query="+e.target.value+"&tags=story&hitsPerPage=500").then((function(e){t.setState({data:e.data.hits})}))}},{key:"renderTable",value:function(e){return console.log("called"),r.a.createElement(d,{data:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"bar"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement(d,{id:"check",data:this.state.data}))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"React Search"),r.a.createElement("div",{className:"search"},r.a.createElement(b,{id:"outlined-basic",variant:"outlined",fullWidth:!0,label:"Search"})))}}]),a}(r.a.Component),p=(a(53),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedTab:"home"},n}return Object(i.a)(a,[{key:"renderBody",value:function(){return r.a.createElement(f,null)}},{key:"renderTable",value:function(){return r.a.createElement(d,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null),this.renderBody())}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b8eb33ac.chunk.js.map