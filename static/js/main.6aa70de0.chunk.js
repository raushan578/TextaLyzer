(this.webpackJsonphelio11=this.webpackJsonphelio11||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(14),l=t.n(s),o=(t(22),t(9)),r=(t(23),t(0));function i(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("h4",{className:"navbar-brand",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}var d=t(17);function b(e){var a=Object(c.useState)(""),t=Object(d.a)(a,2),n=t[0],s=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container mb-3",children:[Object(r.jsx)("h3",{from:"exampleInputEmail1",className:"form-label",children:e.heading}),Object(r.jsx)("textarea",{value:n,onChange:function(e){console.log("On Change"),s(e.target.value)},className:"form-control",id:"exampleInputEmail1",rows:"6"}),Object(r.jsx)("button",{className:"btn btn-success mx-3 my-3",onClick:function(){console.log("Uppercase was clicked");var e=n.toUpperCase();s(e),document.title="TextaLyzer - Uppercase"},children:"Convert to UpperCase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-3 my-3",onClick:function(){console.log("Lowercase was clicked");var e=n.toLowerCase();s(e),document.title="TextaLyzer - Lowercase"},children:"Convert to LowerCase"}),Object(r.jsx)("button",{className:"btn btn-warning mx-3 my-3",onClick:function(){var e=document.getElementById("exampleInputEmail1");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-info mx-3 my-3",onClick:function(){s("")},children:"Clear Text"})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:"Text Summary"}),Object(r.jsxs)("p",{children:[n.split(" ").filter((function(e){return 0!==e.length})).length," Words and ",n.length," Alphabets."]}),Object(r.jsxs)("p",{children:[.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Minutes to Reading "]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Nothing to preview"})]})]})}t(30);function j(){return Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h2",{children:"About TextaLyzer"}),Object(r.jsxs)("div",{class:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{class:"accordion-item",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Convert to Uppercase"})}),Object(r.jsx)("div",{id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{class:"accordion-body",children:Object(r.jsx)("p",{children:"This app is made to analyze the text. Here You can change your text to Upper case also you can see how much time require to read the text. We offer alots of text analyzer facilities to our Users."})})})]}),Object(r.jsxs)("div",{class:"accordion-item",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Convert to Lowercase"})}),Object(r.jsx)("div",{id:"collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{class:"accordion-body",children:Object(r.jsx)("p",{children:"This app is made to analyze the text. Here You can change your text to Lower case also you can see how much time require to read the text. We offer alots of text analyzer facilities to our Users."})})})]}),Object(r.jsxs)("div",{class:"accordion-item",children:[Object(r.jsx)("h2",{class:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Copy Text"})}),Object(r.jsx)("div",{id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{class:"accordion-body",children:Object(r.jsx)("p",{children:"On our app, You can Copy the whole Text and use this app in Freelancing works like Copy Pasting ."})})})]})]})]})}var h=function(e){return Object(r.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:e.alert}),Object(r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})},x=t(2);var p=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(i,{title:"TextaLyzer"}),Object(r.jsx)(h,{alert:"Your time is limited, so don't waste it living someone else's life. -Raushan Raj"}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{exact:!0,path:"/about",children:Object(r.jsx)(j,{})}),Object(r.jsx)(x.a,{exact:!0,path:"/",children:Object(r.jsx)(b,{heading:"Enter text to Analyze"})})]})})]})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.6aa70de0.chunk.js.map