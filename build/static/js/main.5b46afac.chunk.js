(this["webpackJsonpgame-of-elements"]=this["webpackJsonpgame-of-elements"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=a(14),o=(a(31),a(25)),s=a(6),u=a(7),m=a(9),h=a(8),b=a(2),v=a(10),d=(a(20),a(11));a(32);function p(e,t){return e+(t-e)*Math.random()}var f=["brown","blue","green","purple"],E={H:[1,0,-1],He:[0],Li:[1,-1],Be:[2],B:[3,2,1],C:[4,3,2,1,-1,-2,-4],N:[5,4,3,2,1,0,-1,-2,-3],O:[2,1,0,-1,-2],F:[0,-1],Ne:[0],Na:[1,-1],Mg:[2],Al:[3,1],Si:[4,3,2,1,-1,-2,-4],P:[5,4,3,2,1,0,-1,-2,-3],S:[6,5,4,3,2,1,0,-1,-2],Cl:[6,5,4,3,2,1,0,-1,-2],Ar:[0],K:[1,-1],Ca:[2],Sc:[3,2,1],Ti:[4,3,2,0,-1,-2],V:[5,4,3,2,1,0,-1,-2],Cr:[6,5,4,3,2,1,0,-1,-2,-3,-4],Mn:[7,6,5,4,3,2,1,0,-1,-2,-3],Fe:[6,5,4,3,2,1,0,-1,-2],Co:[5,4,3,2,1,0,-1],Ni:[6,4,3,2,1,0,-1],Cu:[4,3,2,1,0],Zn:[2,1,0],Ga:[3,2,1],Ge:[4,3,2,1],As:[5,3,2,-3],Se:[6,4,2,1,-2],Br:[7,5,4,3,1,0,-1],Kr:[2,0],Rb:[1,-1],Sr:[2],Y:[3,2],Zr:[4,3,2,1,0,-2],Nb:[5,4,3,2,1,0,-1,-3],Mo:[6,5,4,3,2,1,0,-1,-2],Tc:[7,6,5,4,3,2,1,0,-1,-3],Ru:[8,7,6,5,4,3,2,1,0,-2],Rh:[6,5,4,3,2,1,0,-1],Pd:[4,2,0],Ag:[3,2,1,0],Cd:[2,1],In:[3,2,1],Sn:[4,2,-4],Sb:[5,3,-3],Te:[6,5,4,2,1,-2],I:[7,5,3,1,0,-1],Xe:[8,6,4,3,2,0],Cs:[1,-1],Ba:[2],La:[3,2],Ce:[4,3,2],Pr:[4,3,2],Nd:[4,3,2],Pm:[3],Sm:[3,2],Eu:[3,2],Gd:[3,2,1],Tb:[4,3,1],Dy:[4,3,2],Ho:[3,2],Er:[3],Tm:[3,2],Yb:[3,2],Lu:[3],Hf:[4,3,2,1],Ta:[5,4,3,2,1,-1,-3],W:[6,5,4,3,2,1,0,-1,-2,-4],Re:[7,6,5,4,3,2,1,0,-1,-3],Os:[8,7,6,5,4,3,2,1,0,-2],Ir:[6,5,4,3,2,1,0,-1],Pt:[6,5,4,2,0],Au:[7,5,3,2,1,0,-1],Hg:[2,1],Tl:[3,1],Pb:[4,2],Bi:[5,3,1,-3],Po:[6,4,2,-2],At:[7,5,3,1,-1],Rn:[2,0],Fr:[1],Ra:[2],Ac:[3],Th:[4,3,2],Pa:[5,4,3],U:[6,5,4,3,2],Np:[7,6,5,4,3,2],Pu:[7,6,5,4,3,2],Am:[7,6,5,4,3,2],Cm:[6,5,4,3,2],Bk:[4,3,2],Cf:[5,4,3,2],Es:[4,3,2],Fm:[4,3,2],Md:[3,2,1],No:[3,2],Lr:[3,2],Rf:[4,3],Db:[5,4],Sg:[6,5,4],Bh:[7,6,5,4,3],Hs:[8,7,4,3,2],Mt:[6,5,4,3,2,1],Ds:[6,5,4,3,2,1],Rg:[3,-1],Cn:[2,1],Nh:[1],Fl:[2],Mc:[3,1],Lv:[4,2],Og:[8,6,4,2]};function g(e){return e>0?"+"+e:String(e)}var S,y=function(e){var t={position:"absolute",left:p(10,90)+"%",top:p(10,90)+"%",height:50,width:50,fontSize:20,fontWeight:"bold",borderRadius:15,color:"white",backgroundColor:e.color};return r.a.createElement("button",{style:t,onClick:e.onClick},e.element)},O=function(e){var t=e.disabled?"start-button-disabled":"start-button-enabled";return console.log("button class name: "+t),r.a.createElement("button",{className:"top-bar start-button "+t,disabled:e.disabled,onClick:e.onClick},"Start Game")},k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{class:"btn btn-primary",type:"button",onClick:this.props.onSaveScore},"Save Sore")}}]),t}(r.a.Component),C=function(e){var t=["playerName","score","finishTime"],a={playerName:{display:"Player Name",dbName:"player_name"},score:{display:"Score",dbName:"score"},finishTime:{display:"Finish Time",dbName:"finish_time"}},n=t.map((function(e){return r.a.createElement("div",{class:"col score-rank-header"},a[e].display)})),c=function(c){var l=e.topPlayersTable[c];console.log("This row in top players reads like ".concat(l)),n.push(r.a.createElement("div",{class:"w-100"})),n=n.concat(t.map((function(e){return r.a.createElement("div",{class:"col"},"finishTime"===e?function(e){if(null===e)return e;var t=e.indexOf("T"),a=e.substring(0,t),n=e.indexOf(".");return a+" "+e.substring(t+1,n)}(l[a[e].dbName]):l[a[e].dbName])})))};for(var l in e.topPlayersTable)c(l);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},n))},j=a(15),N=a(20),P=5,T={SAVE_PLAYER:"SAVE_PLAYER",SAVE_SCORE:"SAVE_SCORE",GET_TOP_PLAYERS:"GET_TOP_PLAYERS"},A="http://".concat("18.217.126.170",":").concat(4001),G=(S={},Object(j.a)(S,"SAVE_PLAYER",{urlPath:"/savePlayer",httpVerb:"POST"}),Object(j.a)(S,"SAVE_SCORE",{urlPath:"/saveScore",httpVerb:"POST"}),Object(j.a)(S,"GET_TOP_PLAYERS",{urlPath:"/getTopPlayers",httpVerb:"GET"}),S);function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=G[e].httpVerb,r={method:n,headers:{"Content-Type":"application/json"}};"POST"===n&&(r.body=JSON.stringify(t));var c=A+G[e].urlPath;if(Object.keys(a).length){c+="?";var l=[];for(var i in a)l.push(i+"="+a[i]);c+=l.join("&")}return console.log("connecting ".concat(c)),console.log("fetch body is ".concat(r.body)),N(c,r).then((function(e){return e.json()}))}var _=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.onChange=a.onChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(e){!function(e){console.log("saving palyer "+e);var t={name:e};R(T.SAVE_PLAYER,t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(this.state.value),this.props.onSave(this.state.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"enter-user-name"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{class:"input-group-prepend"},r.a.createElement("button",{class:"btn btn-outline-secondary",type:"button",onClick:this.onSubmit},"Save Player Name")),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Player Name","aria-label":"Player Name","aria-describedby":"basic-addon1",onChange:this.onChange})))}}]),t}(r.a.Component),B=f.length,w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={targets:[],gameHasStarted:!1,gameHasEnded:!1,correctSelections:[],incorrectLastClick:"",playerName:"",finishTime:null},a.valence=Math.floor(p(-2,5.1)),a.intervals=null,a.startGame=a.startGame.bind(Object(b.a)(a)),a.endGame=a.endGame.bind(Object(b.a)(a)),a.onClickStartGameButton=a.onClickStartGameButton.bind(Object(b.a)(a)),a.onClickTarget=a.onClickTarget.bind(Object(b.a)(a)),a.onClickEnterPlayerNameButton=a.onClickEnterPlayerNameButton.bind(Object(b.a)(a)),a.onClickSaveScore=a.onClickSaveScore.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.intervals)}},{key:"startGame",value:function(){this.intervals=setInterval(function(){var e=this.generateTargets();this.setState({targets:e})}.bind(this),1e3),this.setState({gameHasStarted:!0})}},{key:"endGame",value:function(){var e=new Date;this.setState({gameHasEnded:!0,finishTime:e}),clearInterval(this.intervals),this.intervals=null}},{key:"generateTargets",value:function(){var e=this,t=[],a=function(e){for(var t=Object.keys(E).length,a={},n=0;n<e;n++){var r=Math.floor(p(0,t)),c=Object.keys(E)[r];c in a||(a[c]=E[c])}return a}(Math.floor(p(0,B))),n=0,c=function(c){t.push(r.a.createElement(y,{element:c,color:f[n],onClick:function(t){return e.onClickTarget(c,e.valence,a[c])},key:"target-"+n})),n++};for(var l in a)c(l);return t}},{key:"onClickEnterPlayerNameButton",value:function(e){this.setState({playerName:e}),console.log("user name:"+e)}},{key:"onClickStartGameButton",value:function(e){this.startGame()}},{key:"onClickTarget",value:function(e,t,a){if(t in a){var n=this.state.correctSelections;n.push(e),this.setState({correctSelections:n})}else this.endGame(),this.setState({incorrectLastClick:e,targets:[]})}},{key:"onClickSaveScore",value:function(e){var t=this;(function(e,t,a){console.log("saving score "+t+" for player "+e);var n={name:e,score:t,finish_time:a};return R(T.SAVE_SCORE,n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})(this.state.playerName,this.state.correctSelections.length,this.state.finishTime).then((function(e){return t.props.history.push("/rank")}))}},{key:"render",value:function(){var e=Object(o.a)(new Set(this.state.correctSelections)),t=this.state.gameHasStarted&&!this.state.gameHasEnded?r.a.createElement("div",null,r.a.createElement("h1",{className:"top-bar"},"Please select the elements that can have valence ",g(this.valence)),r.a.createElement("h1",{className:"result"},"You've selected: ",e.join(", ")),r.a.createElement("h2",null,"Your score: ",this.state.correctSelections.length)):this.state.gameHasEnded?r.a.createElement("div",null,r.a.createElement("h1",{className:"top-bar"},"Incorrect: ",this.state.incorrectLastClick," cannot have valence ",g(this.valence)),r.a.createElement("h2",null,"Your final score: ",this.state.correctSelections.length),r.a.createElement(k,{onSaveScore:this.onClickSaveScore})):r.a.createElement("div",null,r.a.createElement(_,{onSave:this.onClickEnterPlayerNameButton}),r.a.createElement("h1",{className:"top-bar"},"Chemical Elements Property Challenge"),r.a.createElement(O,{disabled:!this.state.playerName.length,onClick:this.onClickStartGameButton}));return r.a.createElement("div",{className:"GameApp"},r.a.createElement("header",{className:"GameApp-header"},t,this.state.targets))}}]),t}(r.a.Component),L=Object(d.f)(w),H=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/game",className:"nav-link"},"Play")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/rank",className:"nav-link"},"See Score Rank")))))}}]),t}(r.a.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},a.initialize=a.initialize.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"initialize",value:function(){var e=this;this.state.initialized||(console.log("getting top ".concat(P," players")),R(T.GET_TOP_PLAYERS,{},{top:P})).then((function(t){console.log("response is ".concat(t)),e.setState({topPlayersTable:t,initialized:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.initialize(),r.a.createElement("div",{className:"GameApp"},r.a.createElement("header",{className:"GameApp-header"},r.a.createElement(C,{topPlayersTable:this.state.topPlayersTable})))}}]),t}(r.a.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/game"},r.a.createElement(L,null)),r.a.createElement(d.a,{path:"/rank"},r.a.createElement(V,null))))}}]),t}(r.a.Component),M=Object(d.f)(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5b46afac.chunk.js.map