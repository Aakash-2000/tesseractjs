(this.webpackJsonptesseract=this.webpackJsonptesseract||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(3),i=n.n(s),a=n(20),r=n.n(a),o=(n(32),n.p,n(33),n(2)),l=n.n(o),d=n(21),j=n(22),u=n(23),p=n(26),h=n(25),m=(n(34),n(24)),b=n.p+"static/media/logo.b88917d3.png",g=n.p+"static/media/p1.d379c5f7.png",x=n.p+"static/media/p2.0c3c2dc1.png",v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).convert=function(){var e=Object(m.createWorker)({logger:function(e){return console.log(e)}});(function(){var t=Object(d.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:return t.next=4,e.loadLanguage("eng");case 4:return t.next=6,e.initialize("eng");case 6:return t.next=8,e.recognize(c.state.img);case 8:n=t.sent,s=n.data.text,c.setState({words:s});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),console.log(c.state.words)},c.copy=function(){var e=document.getElementById("converted_text");e.select(),e.setSelectionRange(0,9999),document.execCommand("copy")},c.upload=function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&c.setState({img:t.result})},t.readAsDataURL(e.target.files[0])},c.state={img:"",words:""},c}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.img?this.state.img:g,t=this.state.words?null:Object(c.jsx)("img",{className:"responsive-img",src:x});return Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{className:"nav-wrapper transparent",style:{boxShadow:"none"},children:Object(c.jsx)("div",{children:Object(c.jsx)("a",{className:"brand-logo center",children:Object(c.jsx)("img",{className:"responsive-img",src:b})})})}),Object(c.jsxs)("div",{className:"row",style:{marginTop:"80px"},children:[Object(c.jsxs)("div",{className:"col s12 m6",children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("img",{className:"responsive-img",src:e})}),Object(c.jsx)("div",{children:Object(c.jsx)("form",{action:"#",children:Object(c.jsx)("div",{class:"file-field input-field",children:Object(c.jsxs)("button",{id:"uploadbtn",style:{width:"70%",height:"50px"},children:["Upload Image",Object(c.jsx)("input",{type:"file",onChange:this.upload,accept:"image/*"})]})})})})]}),Object(c.jsxs)("div",{className:"col s12 m6",children:[Object(c.jsxs)("div",{className:"container",style:{overflow:"scroll"},children:[Object(c.jsx)("i",{className:"material-icons right",onClick:this.copy,style:{color:"#7b1fa2",marginRight:"5px",marginTop:"5px"},children:"content_copy"}),t,Object(c.jsx)("textarea",{type:"text",id:"converted_text",value:this.state.words})]}),Object(c.jsx)("div",{children:Object(c.jsx)("form",{action:"#",children:Object(c.jsx)("div",{class:"file-field input-field",children:Object(c.jsx)("button",{id:"uploadbtn",style:{width:"70%",height:"50px"},onClick:this.convert,children:"Convert"})})})})]})]})]})}}]),n}(i.a.Component);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(v,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[65,1,2]]]);
//# sourceMappingURL=main.224743a0.chunk.js.map