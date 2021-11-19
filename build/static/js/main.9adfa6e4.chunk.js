(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},310:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){},316:function(e,t){},325:function(e,t){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(54),c=n.n(r),i=(n(213),n(214),n(13)),s=n(22),o=(n(215),n(3)),l=n.n(o),u=n(19),d=n(18),j=n(21),b=n(24),p=n(361),h=n(362),m=n(77),f=n(359),O=n(335);function x(){var e=localStorage.getItem("token");e&&(JSON.parse(window.atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var g={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:x,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=x();return e?JSON.parse(atob(e.split(".")[1])).user:null}},v="/api/users/";var w={signup:function(e){return fetch(v+"signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw 401==e.status?new Error("Invalid Access Token"):455==e.status?new Error("Employee ID Already Taken"):new Error("Email Already Taken")})).then((function(e){var t=e.token;return g.setToken(t)}))},logout:function(){g.removeToken()},login:function(e){return fetch(v+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return g.setToken(t)}))},getUser:function(){return g.getUserFromToken()}},y=(n(217),n(137)),k=n.n(y),C=(n(218),n(2));function T(e){return Object(C.jsx)("span",{className:"error",children:e.error})}function S(e){console.log(e.handleSignUpOrLogin());var t=Object(s.g)(),n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],x=Object(a.useState)({employeeId:"",password:"",confirmPassword:"",email:"",accessToken:""}),g=Object(i.a)(x,2),v=g[0],y=g[1];function S(e){y(Object(j.a)(Object(j.a)({},v),{},Object(d.a)({},e.target.name,e.target.value)))}function I(){var e=!0;if("undefined"!==typeof v.employeeId&&(k.a.isNumeric(v.employeeId)||(e=!1,o("ID must be numbers only"))),"undefined"!==typeof v.email){var t=v.email.lastIndexOf("@"),n=v.email.lastIndexOf(".");t<n&&t>0&&-1==v.email.indexOf("@@")&&n>2&&v.email.length-n>2||(e=!1,o("Please enter a vaild email"))}return"undefined"!==typeof v.password&&(k.a.isStrongPassword(v.password,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:0,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10})||(e=!1,o("Password must be 8 characters\n                and must contain at least 1: uppercase, lowercase, and number"))),"undefined"!==typeof v.confirmPassword&&(k.a.equals(v.confirmPassword,v.password)||(e=!1,o("Passwords do not match"))),e}function N(){return(N=Object(u.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!I()){n.next=13;break}return n.prev=2,n.next=5,w.signup(v);case 5:return n.next=7,e.handleSignUpOrLogin;case 7:t.push("/profile"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),o(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=setTimeout((function(){o(null)}),3e3);return function(){return clearTimeout(e)}}),[c]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"1em"},verticalAlign:"middle",children:Object(C.jsxs)(p.a.Column,{style:{maxWidth:700},className:"signupForm",children:[Object(C.jsxs)(h.a,{as:"h2",color:"blue",textAlign:"center",children:[Object(C.jsx)("span",{className:"signupText",children:"Register "}),Object(C.jsx)("i",{children:Object(C.jsx)("u",{children:Object(C.jsxs)(b.b,{to:"/login",style:{color:"black"},children:[Object(C.jsx)("span",{className:"loginText",children:"Login"}),Object(C.jsx)("span",{className:"loginTextIcon",children:Object(C.jsx)(m.a,{id:"loginIcon",className:"long arrow alternate right"})})]})})})]}),Object(C.jsx)("br",{}),Object(C.jsxs)(f.a,{autoComplete:"off",onSubmit:function(e){return N.apply(this,arguments)},children:[Object(C.jsx)("label",{className:"formLabel",children:"Employee ID "}),Object(C.jsx)(f.a.Input,{name:"employeeId",placeholder:"Employee ID",value:v.employeeId,onChange:S,required:!0}),Object(C.jsx)("label",{className:"formLabel",children:"Company Email"}),Object(C.jsx)(f.a.Input,{type:"email",name:"email",placeholder:"Email",value:v.email,onChange:S,required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",{className:"formLabel",children:"Access Token"}),Object(C.jsx)(f.a.Input,{type:"accessToken",name:"accessToken",placeholder:"Access Token",value:v.accessToken,onChange:S,required:!0}),Object(C.jsx)("br",{}),Object(C.jsxs)("label",{className:"formLabel",children:["Password ",Object(C.jsx)("br",{})," ",Object(C.jsx)("span",{style:{fontSize:"8px"},children:"must contain at least 1: uppercase, lowercase, number"})]}),Object(C.jsx)(f.a.Input,{name:"password",type:"password",placeholder:"Password",value:v.password,onChange:S,required:!0}),Object(C.jsx)(f.a.Input,{name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:v.confirmPassword,onChange:S,required:!0}),Object(C.jsx)(T,{error:c}),Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{type:"submit",className:"btn",id:"signupButton",children:"Register"})]})]})})})}n(310);function I(){return Object(C.jsx)("img",{src:"/navbarImage.png",alt:"doctor healthcare image",style:{width:"100vw"}})}function N(e){var t=Object(s.g)(),n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],x=Object(a.useState)({password:"",email:""}),g=Object(i.a)(x,2),v=g[0],y=g[1];function k(e){y(Object(j.a)(Object(j.a)({},v),{},Object(d.a)({},e.target.name,e.target.value)))}function S(){return(S=Object(u.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,w.login(v);case 4:e.handleSignUpOrLogin(),t.push("/index"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),o(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=setTimeout((function(){o(null)}),3e3);return function(){return clearTimeout(e)}}),[c]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"1em"},verticalAlign:"middle",children:Object(C.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(C.jsxs)(h.a,{as:"h2",color:"blue",textAlign:"center",children:[Object(C.jsx)("span",{className:"signupText",children:"Login "}),Object(C.jsx)("i",{children:Object(C.jsxs)(b.b,{to:"/register",style:{color:"black"},children:[Object(C.jsxs)("span",{className:"loginText",children:["or ",Object(C.jsx)("u",{children:"Register"})]}),Object(C.jsx)("span",{className:"loginTextIcon",children:Object(C.jsx)(m.a,{id:"loginIcon",className:"long arrow alternate right"})})]})})]}),Object(C.jsxs)(f.a,{autoComplete:"off",onSubmit:function(e){return S.apply(this,arguments)},children:[Object(C.jsx)("label",{className:"formLabel",children:"Email"}),Object(C.jsx)(f.a.Input,{type:"email",name:"email",placeholder:"email",value:v.email,onChange:k,required:!0}),Object(C.jsx)("label",{className:"formLabel",children:"Password"}),Object(C.jsx)(f.a.Input,{name:"password",type:"password",placeholder:"password",value:v.password,onChange:k,required:!0}),Object(C.jsx)(O.a,{type:"submit",className:"btn",id:"signupButton",children:"Login"})]}),c?Object(C.jsx)(T,{error:c}):null]})})})}n(311);var A=n(185);function E(e){var t=e.setShow,n=e.handleLogout;function a(){t(!1)}return E.handleClickOutside=function(){return t(!1)},Object(C.jsxs)("div",{id:"dropdown",children:[Object(C.jsx)(b.b,{id:"addClientButton",className:"dropdownItem",to:"/addclient",onClick:a,children:"Add Client"}),Object(C.jsx)(b.b,{id:"addClientButton",className:"dropdownItem",to:"/addtrial",onClick:a,children:"Add Trial"}),Object(C.jsx)(b.b,{id:"addClientButton",className:"dropdownItem",to:"/find",onClick:a,children:"Client per Trial"}),Object(C.jsx)(b.b,{id:"logoutButton",className:"dropdownItem",to:"/index",onClick:n,children:"Logout"})]})}var F={handleClickOutside:function(){return E.handleClickOutside}},L=Object(A.a)(E,F);function P(){return Object(C.jsx)("img",{src:"/landingHeader.png",alt:"doctor healthcare image",style:{width:"100vw"}})}n(312);function z(e){var t=e.wallet,n=e.connect,a=window.ethereum;function r(){return(r=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.requestPermissions;case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t?Object(C.jsx)("div",{id:"walletMessage",style:{height:"fit-content",color:"red",position:"absolute",left:"45%"},children:Object(C.jsxs)(O.a,{onClick:function(){return r.apply(this,arguments)},style:{textAlign:"left",fontSize:"1em",padding:".5em 1em",position:"relative",top:".5em",backgroundColor:"#00000020"},children:["Connected",Object(C.jsx)("img",{src:"metamask.png",style:{height:"2vh",position:"relative",top:".18em",left:".3em"},alt:"MetaMask Icon"})]})}):Object(C.jsx)("div",{id:"walletMessage",style:{height:"fit-content",color:"red",position:"absolute",left:"45%"},children:Object(C.jsxs)(O.a,{onClick:n,style:{textAlign:"left",fontSize:"1em",padding:".5em 1em",position:"relative",top:".5em",backgroundColor:"#00000020"},children:["Connect Wallet",Object(C.jsx)("img",{src:"metamask.png",style:{height:"2vh",position:"relative",top:".18em",left:".3em"},alt:"MetaMask Icon"})]})})}function M(e){var t=e.wallet,n=e.user,r=e.handleLogout,c=e.setShow,o=e.show,l=e.connect,u=Object(s.h)(),d=Object(a.useState)(!1),j=Object(i.a)(d,2),p=j[0],h=j[1];function f(e){e.preventDefault(),h(!p)}return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"navCont",children:[Object(C.jsx)(b.b,{to:"/index",id:"homeNavButton",onClick:function(){c(!1)},children:"Home"}),Object(C.jsx)(z,{wallet:t,connect:l}),n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"dropdownCont",style:p?{color:"blue"}:{color:"black"},onMouseOver:f,onMouseOut:f,onClick:function(e){e.preventDefault(),c(!0)},children:[Object(C.jsx)(m.a,{id:"profileIcon",size:"large",className:"user outline"}),Object(C.jsx)(m.a,{id:"downArrowIcon",size:"small",className:"setting"})]}),o?Object(C.jsx)(L,{setShow:c,handleLogout:r}):null]}):Object(C.jsx)(b.b,{to:"/login",id:"loggedUserNavButton",onClick:r,children:"Login/Register"})]}),"/index"==u.pathname?Object(C.jsx)(P,{}):Object(C.jsx)(I,{})]})}n(313);var B=n(357),D=n(365),J=n(355);n(314),n(315);function W(e){return Object(C.jsx)("span",{style:{color:"green"},className:"error",children:e.success})}function R(){return(R=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/clients/addclient",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json",Authorization:"Bearer "+g.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error Adding Client - Possible duplicate wallet address")})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={addClient:function(e){return R.apply(this,arguments)}},q=n(358);function Z(){return(Z=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/trials/addtrial",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json",Authorization:"Bearer "+g.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error Adding Trial ")})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/trials/gettrials",{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer "+g.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error Getting Trials")})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/trials/findclients/"+t,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer "+g.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error Getting Client Data")})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V={addTrial:function(e){return Z.apply(this,arguments)},getTrials:function(){return Q.apply(this,arguments)},findClients:function(e){return Y.apply(this,arguments)}},G=n(148),H=n(153);function X(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(i.a)(c,2),o=s[0],b=s[1],m=Object(a.useState)(!0),x=Object(i.a)(m,2),g=x[0],v=x[1],w=Object(a.useState)(),y=Object(i.a)(w,2),k=y[0],S=y[1],I=Object(a.useState)(!0),N=Object(i.a)(I,2),A=N[0],E=N[1],F=Object(a.useState)({name:"",walletAddress:"",percentageParticipated:50,trialIdentification:""}),L=Object(i.a)(F,2),P=L[0],z=L[1];function M(e){z(Object(j.a)(Object(j.a)({},P),{},Object(d.a)({},e.target.name,e.target.value)))}function R(){return Z.apply(this,arguments)}function Z(){return(Z=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!0,P.trialIdentification&&""!=P.trialIdentification||(t=!1,r("Select a trial")),1==A&&P.name.length<4&&(t=!1,r("Check input of name")),!P.walletAddress){e.next=15;break}return e.prev=4,e.next=7,G.a.utils.getAddress(P.walletAddress);case 7:e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),t=!1,e.t0.argument?r("Invalid Wallet Address"):r(e.t0.argument+" has returned the following error: "+e.t0.code);case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function Q(){return(Q=Object(u.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:if(e.t0=e.sent,!0!==e.t0){e.next=27;break}return e.prev=4,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE4NkU1OTlmZmY1MjA4MTZBYTQ1M2Y3OTg1OWQzNDZmQTFmN2VmNTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzEwMjA2MDkzMiwibmFtZSI6IkZpcnN0QVBJS2V5In0.mPCR2jq5fCcRdUbKEGXfdxY8I9b3NuAxx9i6Y0EyhCE",t=new H.b({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE4NkU1OTlmZmY1MjA4MTZBYTQ1M2Y3OTg1OWQzNDZmQTFmN2VmNTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzEwMjA2MDkzMiwibmFtZSI6IkZpcnN0QVBJS2V5In0.mPCR2jq5fCcRdUbKEGXfdxY8I9b3NuAxx9i6Y0EyhCE"}),e.next=9,t.store({name:"CliNFT",description:"".concat(P.percentageParticipated," ").concat(P.trialIdentification),image:new H.a([],"metamask.png",{type:"image/png"})});case 9:if(n=e.sent,console.log(n.url),0!=A){e.next=18;break}return e.next=14,U.addClient({name:"CliNFT",percentageParticipated:P.percentageParticipated.toString(),walletAddress:P.walletAddress.toString(),trialIdentification:P.trialIdentification.toString()});case 14:a=e.sent,S(a.msg),e.next=22;break;case 18:return e.next=20,U.addClient(P);case 20:c=e.sent,S(c.msg);case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(4),r(e.t1.message);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,V.getTrials();case 3:return t=e.sent,e.next=6,b(t.trials);case 6:v(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){r(null)}),3e3);return function(){return clearTimeout(e)}}),[n]),Object(a.useEffect)((function(){var e=setTimeout((function(){S(null)}),3e3);return function(){return clearTimeout(e)}}),[k]),g?Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"10em"},verticalAlign:"middle",children:Object(C.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(C.jsx)(B.a,{size:"large",active:!0,children:"Loading"})})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"1em"},verticalAlign:"middle",children:Object(C.jsxs)(p.a.Column,{style:{maxWidth:425},children:[Object(C.jsx)(h.a,{as:"h2",color:"blue",textAlign:"center",children:Object(C.jsx)("span",{className:"signupText",children:"Add Client Form"})}),Object(C.jsx)("br",{}),Object(C.jsxs)(f.a,{autoComplete:"off",children:[Object(C.jsxs)("div",{id:"inputCont",children:[Object(C.jsx)("label",{id:"nameLabelClient",className:"formLabel",style:A?{color:"black"}:{color:"lightgray"},children:"Name"}),Object(C.jsxs)("div",{id:"checkboxCont",children:[Object(C.jsxs)("label",{id:"checkboxLabel",style:{fontSize:"10px",marginRight:"-1em"},children:[" ",Object(C.jsx)("i",{children:"Client Prefers to be Anonymous: "})]}),Object(C.jsx)("div",{id:"boxCont",style:{backgroundColor:"#00000030",padding:"0em .15em 0em .0em",borderRadius:"3px",height:"1.3em"},children:Object(C.jsx)(D.a,{id:"checkBoxClient",onClick:function(){E(!A)}})})]})]}),Object(C.jsx)(f.a.Field,{children:Object(C.jsx)(J.a,{type:"text",name:"name",placeholder:"Name of Client or Select Anon.",value:P.name,onChange:M,disabled:!A})}),Object(C.jsx)("label",{className:"formLabel",children:"Wallet Address"}),Object(C.jsx)(f.a.Input,{name:"walletAddress",placeholder:"Wallet Address",value:P.walletAddress,onChange:M,required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",{className:"formLabel",children:"Trial Identification"}),Object(C.jsx)(f.a.Select,{placeholder:"Select Associated Trial",options:o.map((function(e){return{key:e.name,value:e._id,text:e.name}})),onChange:function(e,t){var n=t.value;return z(Object(j.a)(Object(j.a)({},P),{},Object(d.a)({},"trialIdentification",n)))},required:!0}),Object(C.jsx)("br",{}),Object(C.jsx)("label",{className:"formLabel",children:"Percentage Completed"}),Object(C.jsx)("br",{}),Object(C.jsx)(q.a,{size:"small",defaultValue:50,step:5,marks:!0,min:0,max:100,onChange:function(e,t){return z(Object(j.a)(Object(j.a)({},P),{},Object(d.a)({},"percentageParticipated",t)))},valueLabelDisplay:"auto",style:{color:"rosybrown"},color:"secondary"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(O.a,{onClick:function(){return Q.apply(this,arguments)},type:"submit",className:"btn",id:"signupButton",children:"Submit"})]}),n?Object(C.jsx)(T,{error:n}):null,k?Object(C.jsx)(W,{success:k}):null]})})})}n(329);function _(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(i.a)(c,2),o=s[0],b=s[1],m=Object(a.useState)({name:""}),x=Object(i.a)(m,2),g=x[0],v=x[1];function w(){var e=!0;return""!=g.trialIdentification&&"undefined"!=g.trialIdentification||(e=!1,r("Select a trial")),e}function y(){return(y=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w()){e.next=11;break}return e.prev=1,e.next=4,V.addTrial(g);case 4:t=e.sent,b(t.msg),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=setTimeout((function(){r(null)}),3e3);return function(){return clearTimeout(e)}}),[n]),Object(a.useEffect)((function(){var e=setTimeout((function(){b(null)}),3e3);return function(){return clearTimeout(e)}}),[o]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"1em"},verticalAlign:"middle",children:Object(C.jsxs)(p.a.Column,{style:{maxWidth:425},children:[Object(C.jsx)(h.a,{as:"h2",color:"blue",textAlign:"center",children:Object(C.jsx)("span",{className:"signupText",children:"Add Trial"})}),Object(C.jsx)("br",{}),Object(C.jsxs)(f.a,{autoComplete:"off",onSubmit:function(){return y.apply(this,arguments)},children:[Object(C.jsx)("label",{id:"nameLabelClient",className:"formLabel",children:"Name Of Trial"}),Object(C.jsx)(f.a.Field,{children:Object(C.jsx)(J.a,{type:"text",name:"name",placeholder:"Name of Trial",value:g.name,onChange:function(e){v(Object(j.a)(Object(j.a)({},g),{},Object(d.a)({},e.target.name,e.target.value)))}})}),Object(C.jsx)(O.a,{type:"submit",className:"btn",id:"signupButton",children:"Submit"})]}),n?Object(C.jsx)(T,{error:n}):null,o?Object(C.jsx)(W,{success:o}):null]})})})}var K=n(364),$=(n(330),n(331),n(360));function ee(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),o=Object(i.a)(s,2),b=o[0],h=o[1],m=Object(a.useState)(),x=Object(i.a)(m,2),g=x[0],v=x[1],w=Object(a.useState)(),y=Object(i.a)(w,2),k=y[0],S=y[1],I=Object(a.useState)({trial:""}),N=Object(i.a)(I,2),A=N[0],E=N[1],F=Object(a.useState)(),L=Object(i.a)(F,2),P=L[0],z=L[1];function M(e,t){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={trialId:n,participants:t},console.log(a);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){for(var t=e.trials,n=0;n<t.length;n++){if(t[n].trialIdentification===A.trial)return t[n].percentageCompleted;console.log(!1)}}function W(){return(W=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(!0),e.next=4,V.findClients(A.trial);case 4:n=e.sent,z(n.clients),h(!1),c(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],P.forEach((function(e){e.trials.forEach((function(e,n){e.trialIdentification===k&&t.push(e)}))}));try{M(t,k)}catch(n){v(n)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=setTimeout((function(){v(null)}),3e3);return function(){return clearTimeout(e)}}),[g]),r?Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"10em"},verticalAlign:"middle",children:Object(C.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(C.jsx)(B.a,{size:"large",active:!0,children:"Loading"})})}):1==b?Object(C.jsxs)(f.a,{children:[Object(C.jsx)("label",{children:"Find clients of trial"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(f.a.Select,{placeholder:"Select Associated Trial",id:"TrialFindSelect",options:e.trials.map((function(e){return{key:e.name,value:e._id,text:e.name}})),onChange:function(e,t){var n=t.value;E(Object(j.a)(Object(j.a)({},A),{},Object(d.a)({},"trial",n))),S(n)},required:!0})," ",Object(C.jsx)(f.a.Button,{id:"TrialFindButtonForm",size:"mini",onClick:function(e){return W.apply(this,arguments)},children:"Search"})]}):b?void 0:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)($.a,{unstackable:!0,celled:!0,compact:"very",children:[Object(C.jsx)($.a.Header,{children:Object(C.jsxs)($.a.Row,{children:[Object(C.jsx)($.a.HeaderCell,{width:8,children:"ETH Wallet Address"}),Object(C.jsx)($.a.HeaderCell,{width:1,children:"% Completed"})]})}),Object(C.jsx)($.a.Body,{children:P.map((function(e,t){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)($.a.Row,{children:[Object(C.jsx)($.a.Cell,{style:{fontSize:"10px"},children:e.walletAddress},0),Object(C.jsx)($.a.Cell,{children:J(e)},1)]},t)})}))}),Object(C.jsx)($.a.Footer,{})]}),Object(C.jsx)(O.a,{style:{marginRight:"2em"},onClick:function(e){e.preventDefault(),h(!0)},children:"Select Another Trial"}),Object(C.jsx)(O.a,{onClick:function(){return R.apply(this,arguments)},children:"Send Dividends"}),Object(C.jsx)(T,{error:g})]})}function te(e){Object(s.g)();var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!0),d=Object(i.a)(o,2),j=d[0],b=d[1],m=Object(a.useState)(),f=Object(i.a)(m,2),O=f[0],x=f[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,V.getTrials();case 3:return t=e.sent,e.next=6,c(t.trials);case 6:b(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){x(null)}),3e3);return function(){return clearTimeout(e)}}),[O]),j?Object(C.jsx)(p.a,{textAlign:"center",style:{margin:"10em"},verticalAlign:"middle",children:Object(C.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(C.jsx)(B.a,{size:"large",active:!0,children:"Loading"})})}):Object(C.jsxs)(K.a,{style:{maxWidth:450,margin:"auto",marginTop:"1em",border:"none"},children:[Object(C.jsx)(h.a,{children:"Find"}),Object(C.jsx)(ee,{trials:r})]})}n(332);function ne(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(K.a,{style:{maxWidth:425,margin:"auto",marginTop:"2em"},children:[Object(C.jsx)("h2",{children:"Welcome to C.T.S."}),Object(C.jsx)("br",{}),Object(C.jsx)("p",{children:"C.T.S. is an NFT(Non-fungible Token) minting and payment service designed to support both manufacturing companies and trial participants alike. "}),Object(C.jsx)("p",{children:"Through this one of a kind DApp (Decentralized Application), Doctors/Clinicians can add their clients unique Etherium wallet addresses, and issue an NFT for participation in a particular Clinical Trial."}),Object(C.jsx)("p",{children:"Participants are minted an NFT based upon their participation in each trial, and that NFT provides both validity of participation, as well as the amount of the study they completed."}),Object(C.jsx)("p",{children:"At the end of a study, should the drug become FDA approved and go to market, C.T.S. (through smart contracts on the block-chain) will dispurse a percentage of the total revenue of that medication, and share earnings to those who participated in the original clinical study, via verification of the previously minted NFT."})]}),Object(C.jsxs)("div",{style:{marginTop:"1em",marginBottom:"6em"},children:[Object(C.jsx)(b.b,{to:"/login",children:Object(C.jsx)(O.a,{style:{marginRight:"10em"},children:"Login"})}),Object(C.jsx)(b.b,{to:"register",children:Object(C.jsx)(O.a,{children:"Register"})})]}),"\xa0"]})}n(333);var ae=function(){var e=window.ethereum,t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1],o=null;function l(e){0===e.length?console.log("Please connect to MetaMask."):e[0]!==o&&(o=e[0],c(o))}e.request({method:"eth_accounts"}).then(l).catch((function(e){console.error(e,"here")})),Object(s.g)();var u=Object(a.useState)(!1),d=Object(i.a)(u,2),j=d[0],b=d[1],p=Object(a.useState)(w.getUser()),h=Object(i.a)(p,2),m=h[0],f=h[1];function O(){f(w.getUser())}return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(M,{wallet:r,connect:function(){e.request({method:"eth_requestAccounts"}).then(l).catch((function(e){4001===e.code?console.log("Please connect to MetaMask."):console.error(e)}))},user:w.getUser(),handleLogout:function(){w.logout(),f({user:null})},setShow:b,show:j}),Object(C.jsxs)(s.d,{children:[Object(C.jsx)(s.b,{exact:!0,path:"/login",children:Object(C.jsx)(N,{handleSignUpOrLogin:O})}),Object(C.jsx)(s.b,{exact:!0,path:"/register",children:Object(C.jsx)(S,{handleSignUpOrLogin:O})}),Object(C.jsx)(s.b,{path:"/index",children:Object(C.jsx)(ne,{})}),m?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(s.d,{children:[Object(C.jsx)(s.b,{exact:!0,path:"/profile",children:"profile page here!"}),Object(C.jsx)(s.b,{exact:!0,path:"/addclient",children:Object(C.jsx)(X,{})}),Object(C.jsx)(s.b,{exact:!0,path:"/addtrial",children:Object(C.jsx)(_,{})}),Object(C.jsx)(s.b,{exact:!0,path:"/find",children:Object(C.jsx)(te,{user:m})})]})}):Object(C.jsx)(s.a,{to:"/index"})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(C.jsx)(b.a,{children:Object(C.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[334,1,2]]]);
//# sourceMappingURL=main.9adfa6e4.chunk.js.map