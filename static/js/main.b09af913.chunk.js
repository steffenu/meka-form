(this["webpackJsonpmeka-form"]=this["webpackJsonpmeka-form"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a,r,i,o,l,c=t(0),m=t.n(c),d=t(8),s=t.n(d),b=t(9),g=t(2),p=t(3),f=(t(17),t(1));var u=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(j,{}),Object(f.jsxs)("div",{className:"form-wrapper",children:[Object(f.jsxs)(h,{className:"signupform",onSubmit:v,children:[Object(f.jsx)("label",{htmlFor:"name",children:"NAME"}),Object(f.jsx)(O,{id:"name",name:"name",type:"name"}),Object(f.jsx)("label",{id:"pass-label",children:"VORNAME"}),Object(f.jsx)(O,{id:"vorname",name:"vorname",type:"text"}),Object(f.jsx)("label",{id:"conf-pass",children:"GEBURTSDATUM"}),Object(f.jsx)(O,{id:"geburt",name:"geburt",type:"date"}),Object(f.jsx)("label",{id:"add-file",children:"DATEI ANHANG"}),Object(f.jsx)(O,{id:"datei",name:"datei",type:"file"}),Object(f.jsx)(x,{type:"submit",children:"Senden"})]}),Object(f.jsx)("p",{id:"mention",children:"MEKA FORM"})]})]})},j=Object(p.a)(a||(a=Object(g.a)(["\n\n\n.signupform{\n  padding-top:4rem !important;\n}\n\n.App{\n\n\nheight:100vh;\ndisplay:grid;\njustify-content: center;\nalign-content: center;\nfont-family: 'Play';\nbackground: rgb(17,9,37);\nbackground: radial-gradient(circle, rgba(17,9,37,1) 28%, rgba(42,8,16,1) 100%);\nborder-bottom: 4rem solid black;\nborder-top: 4rem solid black;\n\n}\ninput { border: none; }\n\n\n  \n  #mention {\n    color: #00ffff;\n    text-align: center;\n    margin-top: 1rem;\n  }\n"]))),h=p.b.form(r||(r=Object(g.a)(["\n  color: white;\n  background-color: rgba(43, 11, 95, 68%);\n  display: flex;\n  flex-direction: column;\n  width: 90vw;\n  max-width: 400px;\n  height: 70vh;\n  max-height: 453px;\n  justify-self: center;\n  align-self: center;\n  padding: 0 4rem;\n\n  outline: 1px solid rgba(112, 112, 112, 100%);\n  outline-offset: -7px;\n\n  .formlist > *:not(:last-child) {\n\n    margin-bottom: 0.5rem;\n  }\n\n  label {\n    font-size: 1.5rem;\n    margin-bottom: 0.4rem;\n  }\n  #pass-label {\n    margin-top: 2.5rem;\n  }\n\n  #conf-pass {\n    margin-top: 0.5rem;\n  }\n"]))),O=p.b.input(i||(i=Object(g.a)(["\n  background-color: #01a8ae;\n  padding: 0.5rem 0;\n  color: black;\n"]))),x=p.b.button(o||(o=Object(g.a)(["\n  flex-grow: 0;\n\n  background-color: #00f6ff;\n  border: none;\n  margin-top: 3rem;\n  padding: 1rem 0;\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 4rem;\n"])));p.b.ul(l||(l=Object(g.a)(['\n  list-style: none;\n  color: #00ffff;\n  font-family: "Play";\n  margin-top: 4rem;\n  margin-left: 3rem;\n  margin-bottom: 4rem;\n'])));function v(n){var e=new y(n.target[0].value,n.target[1].value,n.target[2].value,n.target[3].value);n.preventDefault(),function(n){var e=(new Date).getFullYear();console.log("yyyy:",e);var t=/\d/g,a=/.png|.jpg/g;console.log(n.name.match(t)),n.name.match(t)&&alert("ERROR - ZAHL IM NAMEN");n.vorname.match(t)&&alert("ERROR - ZAHL IM VORNAMEN");n.dateipfad.match(a)||alert("ERROR - Dateityp .jpg oder .png ben\xf6tigt");n.geburtsdatum.split("-")[0]>e&&alert("ERROR - GEBURTSDATUM in der Zukunft")}(e),alert(e.name+"\n"+e.vorname+"\n"+e.geburtsdatum+"\n"+e.dateipfad)}var y=function n(e,t,a,r){Object(b.a)(this,n),this.name=e,this.vorname=t,this.geburtsdatum=a,this.dateipfad=r};s.a.render(Object(f.jsx)(m.a.StrictMode,{children:Object(f.jsx)(u,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b09af913.chunk.js.map