(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/untuckit.ccb6cc53.jpg"},function(e,t,a){e.exports=a.p+"static/media/thrive.d3a8deee.jpg"},function(e,t,a){e.exports=a.p+"static/media/draper.977351dc.png"},function(e,t,a){e.exports=a.p+"static/media/lumee.69453b74.jpg"},function(e,t,a){e.exports=a.p+"static/media/roam.415beda0.jpg"},function(e,t,a){e.exports=a.p+"static/media/boll.0d1b3a81.jpg"},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Qardoos.18e9fc29.otf"},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(21),a(1)),l=a(2),s=a(5),u=a(3),m=a(4),d=a(6),b=(a(22),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("span",{className:"banner__letter","data-index":this.props.index},this.props.letter)}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).buildName=a.buildName.bind(Object(d.a)(a)),a.fadeText=a.fadeText.bind(Object(d.a)(a)),a.state={name:"Ian Springer",title:"Web Developer"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fadeText(".banner__letter")}},{key:"buildName",value:function(e){return e.split("").map(function(e,t){return c.a.createElement(b,{letter:e,index:t,key:t})})}},{key:"fadeText",value:function(e){Array.from(document.querySelectorAll(".banner__letter")).map(function(e,t){return setTimeout(function(){e.classList.add("is-active")},120*(t+1)),e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"banner__wrap"},c.a.createElement("h1",{className:"banner__title noto"},this.buildName(this.state.name)),c.a.createElement("h2",{className:"banner__subtitle noto"},this.buildName(this.state.title)))}}]),t}(n.Component),p=(a(23),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"noto arrow"},c.a.createElement("span",{className:"arrow-line"}))}}]),t}(n.Component)),f=(a(24),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"banner"},c.a.createElement(p,null),c.a.createElement(h,null))}}]),t}(n.Component)),j=(a(25),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:"",className:"my-work__tile",style:{backgroundImage:"url(".concat(this.props.background,")")}},c.a.createElement("label",{className:"my-work__label noto"},this.props.title),c.a.createElement("div",{className:"my-work__overlay"}))}}]),t}(n.Component)),k=(a(26),a(9)),g=a.n(k),O=a(10),v=a.n(O),w=a(11),y=a.n(w),_=a(12),E=a.n(_),N=a(13),x=a.n(N),C=a(14),B=a.n(C),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).buildBlocks=a.buildBlocks.bind(Object(d.a)(a)),a.state={workArray:[{title:"Untuckit",img:g.a,link:"https://www.untuckit.com/"},{title:"Thrive Causemetics",img:v.a,link:"https://thrivecausemetics.com"},{title:"Draper James",img:y.a,link:"https://draperjames.com/"},{title:"Lumee",img:E.a,link:"https://lumee.com/"},{title:"Roam Luggage",img:x.a,link:"https://roamluggage.com/"},{title:"Boll & Branch",img:B.a,link:"https://www.bollandbranch.com/"}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"buildBlocks",value:function(){return console.log("hello"),this.state.workArray.map(function(e,t){return c.a.createElement(j,{className:"my-work__block",key:t,title:e.title,background:e.img},e.title)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"my-work"},c.a.createElement("h2",{className:"my-work__header noto"},"My Recent Work"),c.a.createElement("div",{className:"my-work__wrapper"},this.buildBlocks()))}}]),t}(n.Component),I=(a(27),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"what-i-do"},c.a.createElement("h2",{className:"what-i-do__header noto"},"What I Do"),c.a.createElement("p",{className:"what-i-do__desc noto"},"Blobbing code together since 2015. I am a driven front end programmer and UI specialist, holding a breadth of knowledge in HTML, CSS, Javascipt, e-commerce, and web design. My skills are highlighted by my experience delivering high quality code to enterprise level e-commerce brands."),c.a.createElement("h4",{className:"what-i-do__cta noto"},"Like what you hear? ",c.a.createElement("a",{clasName:"noto",href:"mailto:ianspringer12@gmail.com"},"Shoot me an email")))}}]),t}(n.Component)),A=(a(28),a(29),a(30),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(T,null),c.a.createElement(I,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.1120d2fe.chunk.js.map