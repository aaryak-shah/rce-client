(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),s=n(51),a=n.n(s),r=(n(58),n(3)),l=n(17),d=n.n(l),h=n(18),j=n.n(h),u=n(52),b=n.n(u),m=(n(112),n(113),n(114),n(115),n(116),function(e,t){var n="na-rce-"+e,c=Object(i.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),o=Object(r.a)(c,2),s=o[0],a=o[1];return Object(i.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,a]}),O=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),o=n[0],s=n[1],a=e.userCode,l=e.setJoinedSessionCode;return Object(c.jsxs)("div",{className:"modal-box",children:[Object(c.jsx)("button",{className:"nav-btn",onClick:function(){document.getElementsByClassName("modal-bg")[0].id="hidden"},children:Object(c.jsx)("h2",{children:"CLOSE"})}),Object(c.jsx)("h2",{className:"modal-title",children:"YOUR SESSION:"}),Object(c.jsxs)("div",{className:"modal-current-session",children:[Object(c.jsxs)("h3",{children:["Current session id is ",a]}),Object(c.jsx)("button",{className:"nav-btn",onClick:function(){navigator.clipboard.writeText(a)},children:Object(c.jsx)("h3",{children:"(COPY)"})})]}),Object(c.jsx)("h2",{className:"modal-new-session",children:"JOIN A SESSION?"}),Object(c.jsxs)("div",{className:"modal-current-session",children:[Object(c.jsx)("input",{id:"modal-session-input",placeholder:"Enter a session id",onChange:function(e){s(e.target.value)}}),Object(c.jsx)("button",{className:"nav-btn",onClick:function(){l(o)},children:Object(c.jsx)("h3",{children:"(JOIN)"})})]})]})},g=(n.p,n(117),["python","c_cpp","javascript"]),x=b()("http://13.126.57.93"),p={javascript:"js",c_cpp:"cpp",python:"py"},f={javascript:"console.log('hello rce')",c_cpp:'#include <iostream>\n\nint main() {\n\tstd::cout << "hello rce";\n\treturn 0;\n}',python:"print('hello rce')"},v=function(){var e=m("userCode",""),t=Object(r.a)(e,2),n=t[0],o=t[1],s=m("mode","python"),a=Object(r.a)(s,2),l=a[0],h=a[1],u=m("code",f[l]),b=Object(r.a)(u,2),v=b[0],N=b[1],S=m("input",""),C=Object(r.a)(S,2),w=C[0],y=C[1],I=m("joinedSessionCode",""),E=Object(r.a)(I,2),k=E[0],J=E[1],D=Object(i.useState)(""),F=Object(r.a)(D,2),L=F[0],A=F[1];Object(i.useEffect)((function(){var e=new Date,t=JSON.parse(localStorage.getItem("na-rce-storeTime"));Math.ceil(Math.abs(e-t)/864e5)>1&&(o(""),J(""),j.a.get("/code").then((function(e){var t=e.data;o(t),x.emit("hostSession",{channelID:t})})).catch((function(e){return console.log("error",e)})),localStorage.setItem("na-rce-storeTime",JSON.stringify((new Date).getTime()))),""===n&&j.a.get("/code").then((function(e){var t=e.data;o(t),x.emit("hostSession",{channelID:t})})).catch((function(e){return console.log("error",e)}))}),[]),Object(i.useEffect)((function(){console.log(k),x.emit("joinSession",{channelID:k})}),[k]),Object(i.useEffect)((function(){k||(x.emit("realtime",{channelID:n,mode:l,code:v,input:w,output:L}),x.on("initialLoad",(function(){x.emit("realtime",{channelID:n,mode:l,code:v,input:w,output:L})})))}),[v,L,l,w,n,k]),Object(i.useEffect)((function(){k&&x.on("realReceive",(function(e){h(e.mode),y(e.input),A(e.output),N(e.code)}))}),[k]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"modal-bg",id:"hidden",children:Object(c.jsx)(O,{userCode:n,setJoinedSessionCode:J})}),Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsxs)("h1",{id:"brand",children:[" ",">codeBox"," ",""!==k?"joined: "+k:""]}),Object(c.jsxs)("div",{id:"navigation",children:[""!==k?Object(c.jsx)("button",{className:"nav-btn",onClick:function(){x.close(),J(""),y(""),A(""),N(f[l]),window.location.reload()},children:Object(c.jsx)("h2",{children:"disconnect"})}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("button",{className:"nav-btn",onClick:function(){document.getElementsByClassName("modal-bg")[0].id=""},children:Object(c.jsx)("h2",{children:"session"})}),Object(c.jsx)("button",{className:"nav-btn",onClick:function(){return window.open("https://github.com/nafees87n/remote-code-executor/blob/main/docs/DOCS.md")},children:Object(c.jsx)("h2",{children:"docs"})}),Object(c.jsx)("button",{className:"nav-btn",onClick:function(){return window.open("https://github.com/nafees87n/remote-code-executor")},children:Object(c.jsx)("h2",{children:"github"})})]})]}),Object(c.jsxs)("div",{className:"code-region",children:[Object(c.jsxs)("div",{id:"code-header",children:[Object(c.jsx)("h2",{className:"region-title",children:"code"}),Object(c.jsx)("h2",{className:"region-title-divider",children:"|"}),""===k?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("select",{id:"language-select",defaultValue:l,value:l,onChange:function(e){N(f[e.target.value]),h(e.target.value)},children:g.map((function(e){return Object(c.jsx)("option",{value:e,children:e.toUpperCase()},e)}))}),Object(c.jsx)("h2",{className:"region-title-divider",children:"|"}),Object(c.jsx)("button",{id:"run-btn",onClick:function(){j.a.post("/code",{key:n,language:p[l],input:w,code:v}).then((function(e){var t=e.data;A(t.toString())}))},children:"RUN"})," "]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h2",{className:"region-title",children:l})})]}),Object(c.jsx)("div",{className:"general-editor",children:Object(c.jsx)(d.a,{mode:l,theme:"cobalt",height:"100%",width:"2fr",value:v,fontSize:18,showPrintMargin:!1,onChange:function(e){return N(e)},name:"code_editor",setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},highlightActiveLine:""===k,readOnly:""!==k})})]}),Object(c.jsxs)("div",{className:"input-region",children:[Object(c.jsx)("div",{id:"code-header",children:Object(c.jsx)("h2",{className:"region-title",children:"input"})}),Object(c.jsx)("div",{className:"general-editor",children:Object(c.jsx)(d.a,{mode:"text",theme:"cobalt",height:"100%",width:"1fr",value:w,name:"input_editor",onChange:function(e){return y(e)},fontSize:18,showPrintMargin:!1,showGutter:!1,highlightActiveLine:""===k,readOnly:""!==k})})]}),Object(c.jsxs)("div",{className:"output-region",children:[Object(c.jsx)("div",{id:"code-header",children:Object(c.jsx)("h2",{className:"region-title",children:"output"})}),Object(c.jsx)("div",{className:"general-editor",children:Object(c.jsx)(d.a,{mode:"text",theme:"cobalt",height:"100%",width:"1fr",value:L,name:"output_editor",fontSize:18,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,readOnly:!0})})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),N()},58:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.a09ad719.chunk.js.map