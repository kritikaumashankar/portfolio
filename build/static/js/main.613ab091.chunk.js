(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},110:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(22),l=n.n(i),c=n(197),o=(n(102),n(104),n(8)),s=n(9),m=n(12),u=n(10),h=n(11),v=n(199),d=n(198),f=n(3),g=n(4);function E(){var e=Object(f.a)(["\n  width: 50%; \n  text-align: center;\n  margin: 2vh auto;\n"]);return E=function(){return e},e}function p(){var e=Object(f.a)(["\n  height: 8vh;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  background: \thsl(0, 0%, 90%);\n"]);return p=function(){return e},e}function b(){var e=Object(f.a)(["\n&:hover {\n    background: black;  \n    opacity: 1;\n  }\n"]);return b=function(){return e},e}function w(){var e=Object(f.a)(["\n  font-size: 1vw;\n  float: right;\n  margin: 2vh 2vw;\n"]);return w=function(){return e},e}var y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={views:0},n.fetchViews=function(){fetch("/",{method:"get"}).then(function(e){return e.json()}).then(function(e){1!==e.ok&&e.error?alert("Error while fetching views from DB"):n.setState({views:e.document.length})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/",{method:"post",body:JSON.stringify({views:this.state.views+1}),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return e.json()}).then(function(t){1!==t.ok&&t.error?alert("Error while inserting the DB"):e.setState({views:t.views})})}},{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("div",null),r.a.createElement(O,null,r.a.createElement("a",{target:"blank",href:"https://www.facebook.com/kritikaumashankar",style:S},r.a.createElement(k,{style:S.svg,className:"fab fa-facebook"})),r.a.createElement("span",null,"|"),r.a.createElement("a",{target:"blank",href:"https://www.linkedin.com/in/kritikaumashankar/",style:S},r.a.createElement(k,{style:S.svg,className:"fab fa-linkedin"}))," |",r.a.createElement("a",{target:"blank",href:"https://github.com/kritikaumashankar",style:S},r.a.createElement(k,{style:S.svg,className:"fab fa-github-square"}))," |",r.a.createElement("a",{target:"blank",href:"https://twitter.com/kritikaASK",style:S},r.a.createElement(k,{style:S.svg,className:"fab fa-twitter"}))),r.a.createElement(x,null,"[ Visits : ",this.state.views," ]  "))}}]),t}(r.a.Component),x=g.a.div(w()),k=g.a.i(b()),j=g.a.div(p()),O=g.a.div(E()),S={svg:{color:"#999999",width:"1.5vw",height:"1.5vw",margin:"auto 2.5vw"}},I=y,C=(n(110),n(192));function z(){var e=Object(f.a)(["\nwidth: 100vw;\nheight: 92vh;\nbackground: url(",") no-repeat center center fixed;\n-webkit-background-size: cover;\n-moz-background-size: cover;\n-o-background-size: cover;\nbackground-size: 100vw 100vh;\n"]);return z=function(){return e},e}function M(){var e=Object(f.a)(["\n  top: 35vh;\n  left: 24vw;\n  position: fixed;\n  width: 50vw;\n  height: 50vh;\n  text-align: center;\n  margin: 5vh auto;\n"]);return M=function(){return e},e}function N(){var e=Object(f.a)(["\n  font-family: 'Montserrat', sans-serif;\n  font-size: 1.8vw;\n  font-weight: bold;\n  margin: 3vh 10vw;\n"]);return N=function(){return e},e}var R=g.a.p(N()),T=g.a.div(M()),A=g.a.div(z(),"/home.jpg"),B=function(){return r.a.createElement(A,null,r.a.createElement(T,null,r.a.createElement(R,null,"Hi there! Welcome to my website. "),r.a.createElement(R,null,"My Name is Kritika. "),r.a.createElement(R,null,"I am a Full Stack Web Developer from Salt Lake City."),r.a.createElement(R,null,r.a.createElement(C.a,{to:"/main"},"Come On In ->"))))},P=n(5);function D(){var e=Object(f.a)(["\n  color: black;\n  padding: 1%;\n  font-size: 3.5vw;\n  font-weight: bold;\n  font-style: italic;\n  font-family: 'Montserrat', sans-serif;\n  margin-right: 32vw;\n"]);return D=function(){return e},e}function L(){var e=Object(f.a)(["\n  &:hover {\n    background: transparent;\n    width: 100%;\n  }\n"]);return L=function(){return e},e}function U(){var e=Object(f.a)(["\n  \n  text-align: center;\n  margin: auto;\n  display: flex;\n  flex-direction :row;\n  justify-content: space-between;\n  width:100vw;\n  font-family: 'Montserrat', sans-serif;\n"]);return U=function(){return e},e}var X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.index!==this.props.index&&this.setState({index:this.props.index})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{color:"light",light:!0,expand:"md"},r.a.createElement(P.n,{href:"/",style:W.logoNav},r.a.createElement(H,{style:W.svgLogo,src:"ku-logo.svg"})),r.a.createElement(P.n,{href:"/",style:W.navBand},r.a.createElement(J,null,"Kritika Umashankar"))))}}]),t}(r.a.Component),F=g.a.nav(U()),H=g.a.img(L()),J=g.a.h1(D()),W={svgLogo:{width:"7vw",marginLeft:"4vw"},logoNav:{width:"15%",margin:"2vh 1vw"},navBand:{marginRight:"0"}},q=X,K=n(193);function Q(){var e=Object(f.a)(["\n  width: 25vw;\n  top: 8vh;\n  position: static;\n  display: flex;\n  flex-direction: column;\n"]);return Q=function(){return e},e}function G(){var e=Object(f.a)(["\n  text-decoration: none;\n  font-size: 4vw;\n  font-weight: bold;\n  padding: 0vh 2vw;\n  @media screen and (max-width:823px){\n    -webkit-transform: rotate(-50deg) translateX(0);\n    margin: 2.5vh 0;\n  }\n  @media screen and (max-width:1366px){\n    -webkit-transform: rotate(-45deg) translateX(0);\n    margin: 2.5vh 0;\n  }\n  @media screen and (min-width:1280px){\n    -webkit-transform: rotate(-25deg) translateX(0);\n   margin-top: 1vh;\n  }\n"]);return G=function(){return e},e}function V(){var e=Object(f.a)(["\n  position: fixed;\n  width:25vw !important;\n    @media screen and (max-width:667px){\n      &.active{ \n        -webkit-transform: rotate(-50deg) translateX(0);\n      } \n  \n      &:hover{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n      &.active h3, &:hover h3{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n    }\n\n    @media screen and (max-width:1366px){\n      &.active{ \n        -webkit-transform: rotate(-45deg) translateX(0);\n      } \n  \n      &:hover{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n      &.active h3, &:hover h3{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n      \n    }\n    @media screen and (min-width:1280px){\n      &.active{ \n        -webkit-transform: rotate(-25deg) translateX(0);\n      } \n  \n      &:hover, &:hover h3{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n      &.active h3, &:hover h3{\n        -webkit-transform: rotate(0deg) translateX(0);\n      }\n    }\n    \n"]);return V=function(){return e},e}function Y(){var e=Object(f.a)(["\n  position:relative;\n  width: 30vw;\n  height: 50vh;\n  border-radius:100%;\n  padding: 3%;\n"]);return Y=function(){return e},e}function $(){var e=Object(f.a)(["\n  position: absolute;\n  background: transparent;\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  text-align: center !important;\n  cursor: pointer;\n  font-family: 'Montserrat', sans-serif;\n"]);return $=function(){return e},e}var Z=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.index!==this.props.index&&this.setState({index:this.props.index})}},{key:"render",value:function(){var e=this;return r.a.createElement(_,null,r.a.createElement(ee,{src:"1.jpeg",circle:!0,alt:"Kritika Umashankar"}),r.a.createElement(ae,{defaultSelectedPath:this.state.index},r.a.createElement(te,{id:"0",style:{top:"22vh"},className:0===this.state.index?"active":"",onClick:function(){return e.props.onMouseOverParent(0)}},r.a.createElement(ne,null,"About")),r.a.createElement(te,{id:"1",style:{top:"33vh"},className:1===this.state.index?"active":"",onClick:function(){return e.props.onMouseOverParent(1)}},r.a.createElement(ne,null,"Skill")),r.a.createElement(te,{id:"2",style:{top:"44vh"},className:2===this.state.index?"active":"",onClick:function(){return e.props.onMouseOverParent(2)}},r.a.createElement(ne,null,"Projects")),r.a.createElement(te,{id:"3",style:{top:"55vh"},className:3===this.state.index?"active":"",onClick:function(){return e.props.onMouseOverParent(3)}},r.a.createElement(ne,null,"Contact"))))}}]),t}(r.a.Component),_=g.a.div($()),ee=Object(g.a)(K.a)(Y()),te=g.a.div(V()),ne=g.a.h3(G()),ae=g.a.div(Q()),re=Z;function ie(){var e=Object(f.a)(["\n  margin-left: 3vw;\n  height: 50vh;\n  top: 10vh;\n  padding: 3%;\n  font-family: 'Montserrat', sans-serif;\n"]);return ie=function(){return e},e}var le=g.a.div(ie()),ce=function(){return r.a.createElement(le,null,r.a.createElement("h1",{className:"display-3",style:{fontSize:"2.75vw",fontWeight:"bold"}},"A Little About Me.."),r.a.createElement("p",{style:{fontSize:"1vw"}},"I am originally from South India. I did my Electrical Engineering from Anna University, Chennai, TamilNadu, India."),r.a.createElement("p",{style:{fontSize:"1vw"}},"I have 3.5 years of IT experience working for Infosys Ltd., Chennai. After joining Infosys, I underwent 6 months of training in Java. I worked in a couple of Java projects mainly in financial domain."),r.a.createElement("p",{style:{fontSize:"1vw"}},"I try to learn about everything I come across as much as possible. I enjoy working on complex functionality which motivates me further to build it beautifully."),r.a.createElement("p",{style:{fontSize:"1vw"}}," Apart from coding, I love dancing, travelling, exploring different cuisines and spending time with family and friends. I have performed in many cultural events in California as well as Utah."))},oe=n(90),se=n(91),me=n.n(se),ue=n(24);function he(){var e=Object(f.a)(["\n  font-family: 'Montserrat', sans-serif;\n  width: 100%;\n  height:75vh;\n\n"]);return he=function(){return e},e}function ve(){var e=Object(f.a)(["\n  width: 85%;\n  margin-left: 5vw;\n  padding: 1% 0%;\n  position: relative;\n"]);return ve=function(){return e},e}var de=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",subject:"",message:""},n.handleChange=function(e){n.setState(Object(oe.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.email,i=t.subject,l=t.message;me.a.post("/api/form",{name:a,email:r,subject:i,message:l}).then(function(e){"success"===e.data.msg?alert("Message Sent."):"fail"===e.data.msg&&alert("Message failed to send."),n.setState({name:"",email:"",subject:"",message:""})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.subject,i=e.message;return r.a.createElement(Ee,null,r.a.createElement(ue.Column,{flexGrow:1},r.a.createElement(ue.Row,{vertical:"center"},r.a.createElement(ue.Column,{flexGrow:1},r.a.createElement("h1",{style:fe.h1},"Connect With Me!"))),r.a.createElement(ue.Row,{vertical:"center"},r.a.createElement(ue.Column,{flexGrow:2,style:fe.colPadding},r.a.createElement("h5",{style:{fontSize:"1vw"}},"To connect with me, Please leave your details below. ",r.a.createElement("br",null),"I look forward to hear from you! :)")),r.a.createElement(ue.Column,{style:fe.realign},r.a.createElement("h5",{style:{fontSize:"1vw"}},"Download ",r.a.createElement("br",null),"My Resume ",r.a.createElement("br",null),r.a.createElement("a",{href:"/KritikaUmashankar.pdf",download:!0},r.a.createElement("img",{style:fe.svg,src:"pdf.svg",alt:"pdf"})))))),r.a.createElement(ge,{onSubmit:this.handleSubmit},r.a.createElement(P.l,{row:!0},r.a.createElement(P.i,{sm:10},r.a.createElement(P.m,{type:"text",required:!0,name:"name",id:"name",value:t,placeholder:"Full Name",onChange:this.handleChange}))),r.a.createElement(P.l,{row:!0},r.a.createElement(P.i,{sm:10},r.a.createElement(P.m,{type:"email",required:!0,name:"email",id:"email",value:n,placeholder:"Email",onChange:this.handleChange}))),r.a.createElement(P.l,{row:!0},r.a.createElement(P.i,{sm:10},r.a.createElement(P.m,{type:"text",name:"subject",required:!0,id:"subject",value:a,placeholder:"Subject",onChange:this.handleChange}))),r.a.createElement(P.l,{row:!0},r.a.createElement(P.i,{sm:10},r.a.createElement("textarea",{name:"text",id:"message",required:!0,value:i,placeholder:"Enter your message..",style:{width:"100%",height:"150%"},onChange:this.handleChange}))),r.a.createElement(P.l,{check:!0,row:!0},r.a.createElement(P.i,{sm:{size:10,offset:2}},r.a.createElement(P.a,{style:fe.button},"Submit")))))}}]),t}(r.a.Component),fe={svg:{width:"100px",height:"45px"},h1:{textAlign:"left",margin:"5%",fonstSize:"4vw"},realign:{width:"50%"},colPadding:{margin:"1vh 3vw"},button:{width:"20vw",marginTop:"5vh",marginLeft:"-5vw",backgroundColor:"#ff0054"}},ge=Object(g.a)(P.k)(ve()),Ee=g.a.div(he()),pe=de,be=n(6),we=n(194),ye=n(195),xe=n(196);function ke(){var e=Object(f.a)(["\n  margin-top: -4%;\n  margin-left:0%;\n  width: 100%;\n  height: 70vh;\n  position: relative;\n  top:2vh;\n  text-align: center;\n"]);return ke=function(){return e},e}function je(){var e=Object(f.a)(["\n  &:hover "," {\n    opacity: 1;\n  }\n  &:hover "," {\n    opacity: 1;\n  }\n  &:hover "," {\n    opacity: 1;\n  }\n"]);return je=function(){return e},e}function Oe(){var e=Object(f.a)(["\n  position: absolute; \n  top: 63.5vh;  \n  color: #f1f1f1; \n  width: 3vw;\n  transition: .5s ease;\n  opacity:0;\n  color: black;\n  font-size: 0.75vw;\n  text-align: center;\n"]);return Oe=function(){return e},e}function Se(){var e=Object(f.a)(["\n  position: absolute; \n  top: 42.5vh; \n  color: #f1f1f1; \n  width: 3vw;\n  transition: .5s ease;\n  opacity:0;\n  color: black;\n  font-size: 0.75vw;\n  text-align: center;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(f.a)(["\n  position: fixed; \n  top: 23vh; \n  color: #f1f1f1; \n  width: 5vw;\n  transition: .5s ease;\n  opacity:0;\n  color: black;\n  font-size: 0.75vw;\n  text-align: center;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  width: 35vw;\n"]);return Ce=function(){return e},e}function ze(){var e=Object(f.a)(["\n  width: 5vw;\n  height: 5vh;\n  padding: 1% 2%;\n  margin: 0 7.5%;\n  transition: .5s ease;\n  backface-visibility: hidden;\n  \n"]);return ze=function(){return e},e}var Me=g.a.img(ze()),Ne=Object(g.a)(we.a)(Ce()),Re=g.a.div(Ie()),Te=g.a.div(Se()),Ae=g.a.div(Oe()),Be=g.a.div(je(),Re,Te,Ae),Pe=[{caption:"Front - End",src:r.a.createElement(ye.a,{style:{width:"25vw",left:"5vw",height:"50vh"}},r.a.createElement(xe.a,null,r.a.createElement(Ne,null,r.a.createElement(xe.a,{style:{textAlign:"left"}},r.a.createElement(we.a,null,r.a.createElement("h3",{style:{margin:"1vh 10vw",width:"100%",fontSize:"2vw"}}," Front - End"))),r.a.createElement(xe.a,{className:"show-grid",style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"html.png",alt:"HTML"}),r.a.createElement(Re,null,"HTML"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"css.png",alt:"CSS"}),r.a.createElement(Re,null,"CSS"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"bootstrap.png",alt:"Bootstrap"}),r.a.createElement(Re,null,"Bootstrap")))),r.a.createElement(xe.a,{className:"show-grid",style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"semantic.png",alt:"Semantic-ui"}),r.a.createElement(Re,null,"Semantic"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"js.png",alt:"Javascript"}),r.a.createElement(Re,null,"Javascript"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"jQuery.png",alt:"jQuery"}),r.a.createElement(Re,null,"jQuery")))),r.a.createElement(xe.a,{className:"show-grid",style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"react.png",alt:"React"}),r.a.createElement(Re,null,"React"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"react-router.png",alt:"React Router"}),r.a.createElement(Re,null,"Router"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"redux.png",alt:"Redux"}),r.a.createElement(Re,null,"Redux")))))))},{caption:"Back - End",src:r.a.createElement(ye.a,{style:{width:"25vw "}},r.a.createElement(xe.a,null,r.a.createElement(Ne,null,r.a.createElement(xe.a,{style:{textAlign:"left"}},r.a.createElement(we.a,null,r.a.createElement("h3",{style:{margin:"1vh 10vw",width:"100%",fontSize:"2vw"}}," Back - End"))),r.a.createElement(xe.a,{style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"java.png",alt:"JAVA"}),r.a.createElement(Te,null,"Java"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"express.jpeg",alt:"Node - Express"}),r.a.createElement(Te,null,"Express"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"ruby.jpeg",alt:"RUBY"}),r.a.createElement(Te,null,"Ruby")))),r.a.createElement(xe.a,{style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"rails.png",alt:"Rails"}),r.a.createElement(Te,null,"Rails"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"spring.png",alt:"Springs"}),r.a.createElement(Te,null,"Spring"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"rest.png",alt:"REST Api"}),r.a.createElement(Te,null,"REST")))))))},{caption:"Database",src:r.a.createElement(ye.a,{style:{width:"102%"}},r.a.createElement(xe.a,null,r.a.createElement(Ne,null,r.a.createElement(xe.a,{style:{textAlign:"left"}},r.a.createElement(we.a,null,r.a.createElement("h3",{style:{margin:"1vh 10vw",width:"100%",fontSize:"2vw"}},"Database"))),r.a.createElement(xe.a,{style:{margin:"0 3vw",width:"30vw"}},r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"sql.jpeg",alt:"SQL"}),r.a.createElement(Ae,null,"SQL"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"postgres.jpeg",alt:"Postgresql"}),r.a.createElement(Ae,null,"PostgreSQL"))),r.a.createElement(we.a,{style:{margin:"2%"}},r.a.createElement(Be,null,r.a.createElement(Me,{src:"mongo.png",alt:"MongoDB"}),r.a.createElement(Ae,null,"MongoDB")))))))}],De=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(be.a)(Object(be.a)(n))),n.previous=n.previous.bind(Object(be.a)(Object(be.a)(n))),n.goToIndex=n.goToIndex.bind(Object(be.a)(Object(be.a)(n))),n.onExiting=n.onExiting.bind(Object(be.a)(Object(be.a)(n))),n.onExited=n.onExited.bind(Object(be.a)(Object(be.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===Pe.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?Pe.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=Pe.map(function(t,n){return r.a.createElement(P.h,{style:{height:"50vh"},onExiting:e.onExiting,onExited:e.onExited,key:n},t.src)});return r.a.createElement(Le,null,r.a.createElement("h1",{className:"display-4",style:{fontSize:"3vw",fontWeight:"bold"}},"Skill Set"),r.a.createElement(P.f,{style:{height:"50vh"},activeIndex:t,next:this.next,previous:this.previous},n,r.a.createElement(P.g,{style:{color:"black",height:"50vh"},direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(P.g,{style:{color:"black",height:"50vh"},direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(a.Component),Le=Object(g.a)(P.j)(ke()),Ue=De;function Xe(){var e=Object(f.a)(["\n  height:10vh;\n  padding: 0.5rem;  \n  border: 0.2vh solid black;\n"]);return Xe=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  width: 12vw;\n  height: 15vh;\n  margin: 2% 3%;\n"]);return Fe=function(){return e},e}function He(){var e=Object(f.a)(["\n  width: 20vw;\n  height: 30vh; \n  margin: auto;\n  text-decoration: none;\n"]);return He=function(){return e},e}function Je(){var e=Object(f.a)(["\n  height:20vh;\n"]);return Je=function(){return e},e}function We(){var e=Object(f.a)(["\n  height: 80vh;\n  margin: auto;\n  margin-left:1vw;\n"]);return We=function(){return e},e}var qe=g.a.div(We()),Ke=Object(g.a)(P.d)(Je()),Qe=Object(g.a)(P.b)(He()),Ge=g.a.a(Fe()),Ve=Object(g.a)(P.c)(Xe()),Ye=[{src:r.a.createElement(Ge,{href:"https://github.com/kritikaumashankar/ruby-blackjack"},r.a.createElement(Qe,null,r.a.createElement(Ke,{top:!0,width:"50%",src:"https://i.pinimg.com/originals/b2/50/56/b250564f763fec02945a31e564c639b4.jpg",alt:"black jack"}),r.a.createElement(Ve,null,r.a.createElement(P.e,{style:{fontSize:"1vw",color:"black"}},"BlackJack - Ruby"))))},{src:r.a.createElement(Ge,{href:"https://bingoinjquery.netlify.com/game.html"},r.a.createElement(Qe,null,r.a.createElement(Ke,{top:!0,width:"50%",src:"https://media.gettyimages.com/photos/bingo-picture-id182149905",alt:"bingo"}),r.a.createElement(Ve,null,r.a.createElement(P.e,{style:{fontSize:"1vw",color:"black"}},"Bingo - HTML|CSS|JQuery"))))},{src:r.a.createElement(Ge,{href:"https://kritikaumashankar.herokuapp.com"},r.a.createElement(Qe,null,r.a.createElement(Ke,{top:!0,width:"50%",src:"portfolio.png",alt:"Kritika Umashankar"}),r.a.createElement(Ve,null,r.a.createElement(P.e,{style:{fontSize:"1vw",color:"black"}},"Portfolio - React|Bootstrap|Express"))))},{src:r.a.createElement(Ge,{href:"https://kitzspace.herokuapp.com"},r.a.createElement(Qe,null,r.a.createElement(Ke,{top:!0,width:"50%",src:"k-network.png",alt:"KitzSpace"}),r.a.createElement(Ve,null,r.a.createElement(P.e,{style:{fontSize:"1vw",color:"black"}},"KitzSpace - React|Rails"))))},{src:r.a.createElement(Ge,{href:"https://github.com/kritikaumashankar/FlashCardsFullStack"},r.a.createElement(Qe,null,r.a.createElement(Ke,{top:!0,width:"50%",src:"flashcards.png",alt:"Flash Cards"}),r.a.createElement(Ve,null,r.a.createElement(P.e,{style:{fontSize:"1vw",color:"black"}},"FlashCards - React|Spring Boot|REST "))))}],$e=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(be.a)(Object(be.a)(n))),n.previous=n.previous.bind(Object(be.a)(Object(be.a)(n))),n.goToIndex=n.goToIndex.bind(Object(be.a)(Object(be.a)(n))),n.onExiting=n.onExiting.bind(Object(be.a)(Object(be.a)(n))),n.onExited=n.onExited.bind(Object(be.a)(Object(be.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===Ye.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?Ye.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=Ye.map(function(t,n){return r.a.createElement(P.h,{style:{height:"50vh"},onExiting:e.onExiting,onExited:e.onExited,key:n},t.src)});return r.a.createElement(qe,null,r.a.createElement("h1",{className:"display-3",style:{fontSize:"4vw",margin:"0 7vw"}},"Projects"),r.a.createElement("p",{style:{fontSize:"1.5vw",margin:"1vw"}},"To see my work, ",r.a.createElement("a",{href:"https://github.com/kritikaumashankar",style:{color:"blue"}},"Go To My GitHub Page")),r.a.createElement(P.f,{style:{height:"50vh",width:"20vw"},activeIndex:t,next:this.next,previous:this.previous},n,r.a.createElement(P.g,{style:{color:"black",height:"50vh"},direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(P.g,{style:{color:"black",height:"50vh"},direction:"next",directionText:"Next",onClickHandler:this.next})))}}]),t}(r.a.Component),Ze=n(92),_e=n(93);function et(){var e=Object(f.a)(["\n  margin: auto;\n  position: relative;\n  top: 4vh;\n  width: 35vw;\n  height: 72vh;\n"]);return et=function(){return e},e}var tt=[r.a.createElement(ce,null),r.a.createElement(Ue,null),r.a.createElement($e,null),r.a.createElement(pe,null)],nt=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.index!==this.props.index&&this.setState({activeIndex:this.props.index})}},{key:"componentWillUnmount",value:function(){this.setState({activeIndex:0})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement(at,{key:t,className:Ze.fadeIn},tt.map(function(n,a){return a===t?r.a.createElement(_e.Animated,{key:a,animationIn:"slideInRight",animationOut:"pulse",isVisible:!e.state.visible},r.a.createElement(P.j,{key:a},n)):r.a.createElement("div",null)})))}}]),t}(r.a.Component),at=g.a.div(et()),rt=nt;function it(){var e=Object(f.a)(["\n  height: 92vh;\n  background: url(",");\n  background-size: 100vw 100vh;\n"]);return it=function(){return e},e}var lt=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,visible:!1},n.handleHover=function(e){parseInt(e)>0&&parseInt(e)<5?n.setState({index:parseInt(e)}):n.setState({index:0}),n.setState({visible:!n.state.visible})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({index:0,visible:!1})}},{key:"render",value:function(){var e=this.state,t=e.index;e.visible;return r.a.createElement(ct,null,r.a.createElement(q,null),r.a.createElement(re,{index:t,onMouseOverParent:this.handleHover}),r.a.createElement(rt,{index:t}))}}]),t}(a.Component),ct=g.a.div(it(),"/main.jpg"),ot=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:B}),r.a.createElement(d.a,{exact:!0,path:"/main",component:lt})),r.a.createElement(I,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,null,r.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,n){e.exports=n(191)}},[[97,2,1]]]);
//# sourceMappingURL=main.613ab091.chunk.js.map