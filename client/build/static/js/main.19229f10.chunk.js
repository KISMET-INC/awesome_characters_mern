(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(7),r=c.n(s),i=(c(69),c(38)),o=c(19),j=c(3),l=(c(10),c(5)),b=Object(a.createContext)(),O=c(1),u=function(e){var t=e.label,c=e.character,n=e.vote,s=(e.votedOn,Object(a.useContext)(b)),r=Object(a.useState)(s.signature),i=Object(j.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){l(s.signature)}),[s.signature]),Object(O.jsx)("form",{onSubmit:function(e){return n(e,o,c)},children:1==s.votedList.hasOwnProperty(c.charName)&&"vote"===t.toLowerCase()?Object(O.jsx)("button",{className:"voted",children:t}):Object(O.jsx)("button",{type:"submit",children:t})})},d=function(e){var t=Object(a.useState)(e.type),c=Object(j.a)(t,1)[0],n=function(){Object(l.c)("/")};return Object(O.jsxs)(O.Fragment,{children:["button"===c?Object(O.jsx)("button",{onClick:n,children:"Return Home"}):Object(O.jsx)(O.Fragment,{}),"icon"===c?Object(O.jsx)("i",{onClick:n,className:"fas fa-home"}):Object(O.jsx)(O.Fragment,{}),"link"===c?Object(O.jsx)("p",{onClick:n,children:" Home "}):Object(O.jsx)(O.Fragment,{}),"link_icon"===c?Object(O.jsxs)("div",{className:"link_icon",onClick:n,children:[Object(O.jsx)("p",{children:" Home "})," ",Object(O.jsx)("i",{className:"fas fa-home"})]}):Object(O.jsx)(O.Fragment,{})]})},h=(c(76),function(e){var t=e.voted,c=e.pkg,n=e.voteLabel,s=e.reset_votes,r=e.resetLabel,i=e.update_character,o=Object(a.useState)(c.rank),l=Object(j.a)(o,1)[0],b=Object(a.useState)(c.character),h=Object(j.a)(b,1)[0],x=Object(a.useState)(c.location),m=Object(j.a)(x,1)[0];return Object(O.jsxs)("div",{id:"Feature_Options",className:"feature_btns flex",children:[Object(O.jsxs)("h3",{children:["Rank ",l," "]}),Object(O.jsxs)("section",{className:"feature_links",children:[Object(O.jsx)("h3",{children:h.charName}),"view"!==m?Object(O.jsx)("h4",{className:"view",onClick:c.goto_view,children:"Click to View"}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h4",{onClick:c.goto_edit,children:"Click to Edit"})]}),Object(O.jsxs)("section",{className:"feature_buttons",children:[Object(O.jsx)(u,{votedOn:t,label:n,character:h,vote:i}),Object(O.jsx)(u,{label:r,character:h,vote:s}),"carousel"!==m?Object(O.jsx)(d,{}):Object(O.jsx)(O.Fragment,{})]})]})}),x=(c(77),function(e){var t=e.pkg,c=e.reset_votes,a=e.update_character;return Object(O.jsxs)("section",{id:"Feature_Image",children:[Object(O.jsx)("img",{onClick:t.goto_view,src:t.character.url,alt:t.character.charNam}),Object(O.jsx)("div",{className:"image_info",children:Object(O.jsx)("div",{className:"background",children:Object(O.jsx)(h,{voteLabel:"VOTE",resetLabel:"RESET VOTES",reset_votes:c,update_character:a,pkg:t})})})]})}),m=(c(47),c(78),function(e){var t=e.votes,c=e.resultNum;return Object(O.jsxs)("div",{id:"Votes_Mapper",children:[Object(O.jsxs)("h4",{children:["Votes:  ",t.length," "]}),Object(O.jsxs)("ul",{className:"votes flex",children:[t.map((function(e,t){return t<c?Object(O.jsxs)("li",{children:[e," "]},t):Object(O.jsx)("div",{},t)})),t.length>c?Object(O.jsxs)("li",{className:"plus_votes",children:["Plus ",t.length-c," More ..."]}):Object(O.jsx)(O.Fragment,{})]})]})}),p=function(e){var t=e.character;return Object(O.jsxs)("section",{id:"Quote",children:[Object(O.jsx)("h5",{children:"Quote:"}),Object(O.jsx)("p",{children:t.quote})]})},g=function(e){var t=e.character;return Object(O.jsxs)("section",{id:"Basic_Info",children:[Object(O.jsxs)("div",{className:"movie_details",children:[Object(O.jsxs)("div",{className:"actor",children:[Object(O.jsx)("h5",{children:"Actor:"}),Object(O.jsx)("p",{children:t.actor})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Movie:"}),Object(O.jsx)("p",{children:t.title})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Year:"}),Object(O.jsx)("p",{children:t.year})]})]}),Object(O.jsx)(p,{character:t})]})},v=(c(79),function(e){var t=e.character,c=e.location,n=e.rank,s=e.update_character,r=e.reset_votes,i=e.resultNum,u=Object(a.useContext)(b),d=Object(a.useState)(t.votes),p=Object(j.a)(d,2),v=p[0],f=p[1],A=Object(a.useState)(!1),N=Object(j.a)(A,2),S=N[0],I=N[1],w={rank:n,character:t,votes:t.votes,location:c,goto_view:function(){Object(l.c)("/view/".concat(t._id,"/").concat(n))},goto_edit:function(){Object(l.c)("/edit/".concat(t._id,"/").concat(n))}};return Object(O.jsxs)("div",{id:"Feature",className:"feature_post flex",children:[Object(O.jsx)(x,{reset_votes:r,update_character:s,pkg:w}),Object(O.jsxs)("div",{id:"info",children:[Object(O.jsxs)("div",{className:"flex",children:[Object(O.jsx)(g,{character:t}),Object(O.jsx)(h,{voted:S,voteLabel:"Vote",resetLabel:"Reset Votes",reset_votes:function(e){e.preventDefault(),"Anonymous"===u.signature?(f([u.signature]),u.setStartPositionF(n-1),u.goto_vote(e,t,[],u.signature)):alert("Sorry, guests are not allowed to reset votes!")},update_character:function(e,t,c){e.preventDefault(),u.votedList.hasOwnProperty(c.charName)?alert("You've already voted for ".concat(c.charName)):(f([u.signature].concat(Object(o.a)(c.votes))),u.goto_vote(e,c,c.votes),I(!0),u.setStartPositionF(n-1))},pkg:w})]}),Object(O.jsx)(m,{votes:v,resultNum:i})]})]})}),f=c(41),A=c.n(f),N=c(16),S=c.n(N),I=function(e){var t=e.characterList,c=Object(a.useState)("carousel"),n=Object(j.a)(c,1)[0],s=Object(a.useState)(6),r=Object(j.a)(s,1)[0],i=(Object(a.useContext)(b),Object(a.useRef)(0));return Object(O.jsx)("div",{id:"feature_carousel",children:Object(O.jsx)(S.a,{animatePreScroll:!0,animateOnce:!0,duration:1,initiallyVisible:!1,animateIn:"fadeIn",children:Object(O.jsx)(A.a,{className:"owl-theme",margin:100,items:1,autoplay:!0,autoplaySpeed:1500,autoplayHoverPause:!0,startPosition:i.current,dots:!1,center:!0,onChanged:function(e){console.log(e.item.index),i.current=e.item.index},children:t.map((function(e,t){return t<5&&Object(O.jsx)(v,{location:n,resultNum:r,character:e,rank:t+1,update_character:"",reset_votes:""},t)}))})})})},w=(c(83),c(84),function(e){return Object(O.jsx)("button",{onClick:function(){Object(l.c)("/view/".concat(e.character_id,"/").concat(e.rank))},children:" View "})}),C=function(e){var t=Object(a.useContext)(b),c=Object(a.useState)(e.char),n=Object(j.a)(c,1)[0],s=Object(a.useState)(e.char.votes),r=Object(j.a)(s,2),i=r[0],l=r[1],d=Object(a.useState)(e.i+1),h=Object(j.a)(d,1)[0],x=Object(a.useState)(!1),m=Object(j.a)(x,2),p=m[0],g=m[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"character_wrapper",className:"flex",children:[Object(O.jsx)("img",{src:n.url,alt:n.charName}),Object(O.jsx)(u,{votedOn:p,label:"Vote",character:n,vote:function(e,c,a){e.preventDefault(),t.votedList.hasOwnProperty(a.charName)?alert("You already voted for ".concat(a.charName)):(l([c].concat(Object(o.a)(i))),g(!0),t.goto_vote(e,a,i,c))}}),Object(O.jsx)(w,{rank:h,character_id:n._id}),Object(O.jsx)("h4",{children:n.charName}),Object(O.jsxs)("p",{children:["Rank ",h," | Votes: ",i.length," "]}),Object(O.jsx)("h5",{children:n.title})]})})},y=(c(85),function(e){Object(a.useContext)(b);var t=Object(a.useRef)(0),c=Object(a.useState)({0:{items:1,margin:-100},405:{items:2,margin:50},600:{items:3,margin:70},771:{items:4,margin:150},1200:{items:4,margin:10}}),n=Object(j.a)(c,1)[0];return Object(O.jsx)("div",{id:"honorable",children:Object(O.jsx)(A.a,{className:"owl-theme",responsiveClass:!0,touchDrag:!0,startPosition:t.current,responsive:n,dots:!1,onChanged:function(e){console.log(e.item.index),t.current=e.item.index},children:e.characterList.map((function(e,t){return t>4&&t<16&&Object(O.jsx)(C,{i:t,char:e},t)}))})})}),F=(c(86),c(15)),L=c.n(F),V=(c(105),function(e){var t=e.type,c=function(){Object(l.c)("/add")};return Object(O.jsxs)("div",{id:"Add_Btn",children:["button"===t?Object(O.jsx)("button",{onClick:c,children:"Add"}):Object(O.jsx)(O.Fragment,{}),"icon"===t?Object(O.jsx)("i",{onClick:c,className:"fas fa-plus-square"}):Object(O.jsx)(O.Fragment,{}),"link"===t?Object(O.jsx)("p",{onClick:c,children:" Add "}):Object(O.jsx)(O.Fragment,{}),"link_icon"===t?Object(O.jsxs)("div",{className:"link_icon",onClick:c,children:[Object(O.jsx)("p",{children:" Add  "})," ",Object(O.jsx)("i",{className:"fas fa-plus-square"})]}):Object(O.jsx)(O.Fragment,{})]})}),k=function(e){var t=e.type,c=function(){Object(l.c)("/search")};return Object(O.jsxs)("div",{id:"Search_Btn",children:["button"===t?Object(O.jsx)("button",{onClick:c,children:"Search"}):Object(O.jsx)(O.Fragment,{}),"icon"===t?Object(O.jsx)("i",{onClick:c,className:"fas fa-search"}):Object(O.jsx)(O.Fragment,{}),"link"===t?Object(O.jsx)("p",{onClick:c,children:" Search "}):Object(O.jsx)(O.Fragment,{}),"link_icon"===t?Object(O.jsxs)("div",{className:"link_icon",onClick:c,children:[Object(O.jsx)("p",{children:" Search  "})," ",Object(O.jsx)("i",{className:"fas fa-search"})]}):Object(O.jsx)(O.Fragment,{})]})},R=c(147),W=c(146),D=(c(106),c(142)),E=c(148),B=c(145),X=c(115),G=function(e,t){var c=Object(a.useContext)(b),n=Object(a.useState)(c.signature),s=Object(j.a)(n,2),r=(s[0],s[1],Object(a.useState)("")),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(a.useRef)(null),d=function(t){t.preventDefault(),e.handleClose(),""==o?c.setSignature("Anonymous"):c.setSignature(o)};return Object(a.useEffect)((function(){u.current.focus()}),[]),Object(O.jsxs)("form",{id:"Signature",onSubmit:d,children:[Object(O.jsx)("input",{ref:u,style:{color:"black",flexDirection:"column",marginTop:"10px",width:"100%",paddingLeft:"10px"},type:"text",onChange:function(e){l(e.target.value)},name:"signature",value:o,placeholder:"Anonymous"}),Object(O.jsxs)("div",{style:{marginTop:"20px"},className:"signature_buttons",children:[Object(O.jsx)("button",{style:{marginRight:"20px"},onClick:d,children:"Set Name"}),Object(O.jsx)("button",{onClick:e.handleClose,children:"Stay Anonymous"})]})]})},Q=n.a.forwardRef(G),Y=Object(D.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),H={color:"black"},K={marginLeft:"10px",textAlign:"right"};function P(e){var t=Object(a.useState)(e.location),c=Object(j.a)(t,1)[0],s=Y(),r=n.a.useState(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],b=function(){l(!0)},u=function(){l(!1)};return Object(O.jsxs)("div",{id:"Modal",children:["dropdown"!==c?Object(O.jsx)("button",{type:"button",onClick:b,children:" Set your vote name"}):Object(O.jsxs)("div",{onClick:b,children:["Set Name ",Object(O.jsx)("i",{style:K,className:"fas fa-signature"})]}),Object(O.jsx)(E.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:o,onClose:u,closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500},children:Object(O.jsx)(X.a,{in:o,children:Object(O.jsxs)("div",{className:s.paper,children:[Object(O.jsx)("h2",{style:H,id:"transition-modal-title",children:"Set Your Voter Name"}),Object(O.jsx)("p",{style:H,id:"transition-modal-description",children:"Set your voter name, or stay anonymous"}),Object(O.jsx)(Q,{handleClose:u})]})})})]})}function T(){var e=n.a.useState(null),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("dropdown"),i=Object(j.a)(r,1)[0],o=function(){s(null)},l={fontSize:"12px",fontFamily:"var(--comforta)",margin:"0px",minHeight:"unset",backgroundColor:"black",textAlign:"right"};return Object(O.jsxs)("div",{id:"Dropdown_Menu",children:[Object(O.jsx)("i",{onClick:function(e){s(e.currentTarget),console.log(c)},className:"fas fa-ellipsis-v"}),Object(O.jsxs)(R.a,{id:"Menu_Items",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:o,children:[Object(O.jsx)(W.a,{style:l,onClick:o,children:Object(O.jsx)(d,{type:"link_icon"})}),Object(O.jsxs)(W.a,{style:l,onClick:o,children:[Object(O.jsx)(k,{type:"link_icon"})," "]}),Object(O.jsx)(W.a,{style:l,onClick:o,children:Object(O.jsx)(V,{type:"link_icon"})}),Object(O.jsx)(W.a,{style:l,onClick:o,children:Object(O.jsx)(P,{location:i})})]})]})}var U=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S.a,{animateOnce:!0,offset:0,initiallyVisible:!0,animateIn:"slideInDown",children:Object(O.jsx)("nav",{id:"Nav",className:"bar flex",children:Object(O.jsxs)("div",{className:"wrapper flex",children:[Object(O.jsxs)("section",{className:"left logo flex",children:[Object(O.jsx)("img",{onClick:function(){Object(l.c)("/")},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAAFoCAYAAADpQRYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTI0VDE5OjA0OjQ4LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTI0VDE5OjA0OjQ4LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0yNFQxOTowNDo0OC0wNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2ZGY1MDU5OC00NzBjLTM2NGMtYjAxZi04ODQ4YjgzM2JmNWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmNhMDc0YS1hZDg4LWNkNGItYjQ0YS1jMjU3YjQyYjY1YmUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMmI1NTVjNi1kMWZkLWE5NDQtYjRlOC01Y2MyOTU3NDA0ZWEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIyYjU1NWM2LWQxZmQtYTk0NC1iNGU4LTVjYzI5NTc0MDRlYSIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0yNFQxOTowNDo0OC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZGY1MDU5OC00NzBjLTM2NGMtYjAxZi04ODQ4YjgzM2JmNWIiIHN0RXZ0OndoZW49IjIwMjEtMDMtMjRUMTk6MDQ6NDgtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6F4S/nAAATLUlEQVR4nO3dsYodRxbG8U9GsTax844kULQIBGOhJ5jITheBrMAYlAin8wBKhRKDI63AuTM/gdEaBMaRwTexcitZv8Bs0NM7V62+93Z3napTp/r/A2NZO5q5K+79OOdUddWNy8tLAahCJ+nPI//7PyT9Xeal1O0T7xcAQOeSfpT09sTXvZX0StJZ9ldUuRtUXICbTtILSQ8lfbrgz+0kvZT0XYbXFALBBfi4kPStlgXWvp2kN5KemL2iQGgVgbLOJf2ltNCSpNuSHkh6avGioqHi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",alt:"movie clapper icon"}),Object(O.jsxs)("div",{className:"titles",children:[Object(O.jsx)("p",{children:"Rate your favorite movie characters"}),Object(O.jsx)("h1",{children:"Epic Movie Characters"})]})]}),Object(O.jsxs)("section",{className:"right links flex",children:[Object(O.jsxs)("div",{className:"buttons flex",children:[Object(O.jsx)(d,{type:"icon"}),Object(O.jsx)(k,{type:"icon"}),Object(O.jsx)(V,{type:"icon"})]}),Object(O.jsx)(P,{})]}),Object(O.jsx)(T,{})]})})})})},M=function(e){var t=Object(a.useState)(),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],u=i[1],d=Object(a.useContext)(b),h=Object(a.useState)({}),x=Object(j.a)(h,2),m=x[0],p=x[1];return Object(a.useEffect)((function(){L.a.get("http://api/characters/").then((function(e){s(e.data.characters.sort((function(e,t){return e.votes.length>t.votes.length?-1:1}))),d.setTotalCharacters(e.data.characters.length),u(!0),console.log("main")})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsxs)("div",{id:"Main",children:[Object(O.jsx)(U,{}),Object(O.jsxs)("div",{id:"main_body",className:"wrapper",children:[Object(O.jsx)("h3",{className:"main_title",children:"\u2605 FEATURED  \u2605 Top 5"},"2"),Object(O.jsx)("div",{className:"featured film_strip carousel",children:o&&Object(O.jsx)(I,{voteList:m,setVoteList:p,characterList:n})},"3"),Object(O.jsx)("h3",{className:"main_title",children:" \u2605 Honorable Mentions \u2605"},"4")," ",Object(O.jsx)(l.a,{to:"/search",children:Object(O.jsx)("h3",{className:"link",children:"Click to see all"})}),Object(O.jsx)("div",{className:"honorable carousel",children:o&&Object(O.jsx)(y,{characterList:n})},"5")]})]})},Z=(c(110),function(e){var t=Object(a.useState)(e.pkg.character),c=Object(j.a)(t,1)[0],n=Object(a.useState)(c.charName),s=Object(j.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(c.title),b=Object(j.a)(o,2),u=b[0],h=b[1],x=Object(a.useState)(c.year),m=Object(j.a)(x,2),p=m[0],g=m[1],v=Object(a.useState)(c.actor),f=Object(j.a)(v,2),A=f[0],N=f[1],S=Object(a.useState)(c.votes),I=Object(j.a)(S,1)[0],C=Object(a.useState)(c.url),y=Object(j.a)(C,2),F=y[0],L=y[1],V=Object(a.useState)(c.quote),k=Object(j.a)(V,2),R=k[0],W=k[1],D=Object(a.useState)(e.pkg.rank),E=Object(j.a)(D,1)[0];return Object(O.jsxs)("div",{id:"add_form_wrapper",className:"flex",children:[Object(O.jsx)("h5",{children:"Intergration with The Movie Database API coming soon.."}),Object(O.jsxs)("div",{className:"film_strip flex",children:[Object(O.jsx)("div",{className:"form_left",children:void 0!==F?Object(O.jsx)("img",{style:{opacity:1},onClick:function(){Object(l.c)("/view/".concat(c._id))},src:F,alt:r}):Object(O.jsx)("img",{src:"https://aatfweb.files.wordpress.com/2017/06/film.jpg",alt:"film"})}),Object(O.jsxs)("form",{className:"flex",onSubmit:function(t){return e.pkg.submitHandler(t,{charName:r,title:u,year:p,actor:A,url:F,votes:I,quote:R,rank:E})},children:[Object(O.jsxs)("div",{className:"col_1",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"charName",children:"Character Name:"}),Object(O.jsx)("input",{name:"charName",value:r,type:"text",onChange:function(e){i(e.target.value)}}),e.errors.hasOwnProperty("actor")&&Object(O.jsx)("h6",{className:"error",children:e.errors.actor.message})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"title",children:"Movie Title:"}),Object(O.jsx)("input",{name:"title",value:u,type:"text",onChange:function(e){h(e.target.value)}}),e.errors.hasOwnProperty("title")&&Object(O.jsx)("h6",{className:"error",children:e.errors.title.message})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"year",children:"Release Year:"}),Object(O.jsx)("input",{name:"year",value:p,type:"text",onChange:function(e){g(e.target.value)}}),e.errors.hasOwnProperty("year")&&Object(O.jsx)("h6",{className:"error",children:e.errors.year.message})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"actor",children:"Actor / Actress:"}),Object(O.jsx)("input",{name:"actor",value:A,type:"text",onChange:function(e){N(e.target.value)}}),e.errors.hasOwnProperty("actor")&&Object(O.jsx)("h6",{className:"error",children:e.errors.actor.message})]})]}),Object(O.jsxs)("div",{className:"col_2",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"url",children:"Image Url:"}),Object(O.jsx)("input",{name:"url",type:"text",value:F,onChange:function(e){L(e.target.value)}}),e.errors.hasOwnProperty("url")&&Object(O.jsx)("h6",{className:"error",children:e.errors.url.message})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"quote",children:"Quote:"}),Object(O.jsx)("textarea",{name:"quote",value:R,type:"text",onChange:function(e){W(e.target.value)}})]}),e.errors.hasOwnProperty("quote")&&Object(O.jsx)("h6",{className:"error",children:e.errors.quote.message}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{name:"rank",type:"hidden",value:E})}),Object(O.jsx)("button",{type:"submit",children:"Submit"}),Object(O.jsx)("button",{onClick:function(){Object(l.c)("/")},children:"Cancel"}),Object(O.jsx)(d,{}),void 0!==r?Object(O.jsx)(w,{rank:E,character_id:c._id}):Object(O.jsx)(O.Fragment,{})]})]})]})]})}),q=c(48),z=c.n(q),J=function(e){var t=Object(a.useState)(e.title),c=Object(j.a)(t,1)[0],n=Object(a.useState)(e.subtitle),s=Object(j.a)(n,1)[0];return Object(O.jsxs)("div",{id:"Title",children:[Object(O.jsx)("h2",{style:z.a.h2,children:c}),Object(O.jsx)("p",{style:z.a.p,children:s})]})},_=function(e){var t=Object(a.useState)("Add to the Epic..."),c=Object(j.a)(t,1)[0],n=Object(a.useState)("Who do you think is an epic movie character?"),s=Object(j.a)(n,1)[0],r=Object(a.useState)({}),o=Object(j.a)(r,2),u=o[0],d=o[1],h=Object(a.useContext)(b),x={rank:"",type:"",character:{rank:"0"},signature:"Anonymous",submitHandler:function(e,t){e.preventDefault(),L.a.post("http://api/characters/new",Object(i.a)(Object(i.a)({},t),{},{votes:[h.signature]})).then((function(e){e.data.hasOwnProperty("error")?(console.log(e.data),d(e.data.error.errors),Object(l.c)("/add")):Object(l.c)("/view/".concat(e.data.character._id,"/").concat(h.totalCharacters+1)),console.log(e)})).catch((function(e){console.log(e)}))}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(J,{title:c,subtitle:s}),Object(O.jsx)(Z,{pkg:x,errors:u})]})},$=function(e){var t=Object(a.useState)("Edit the EPIC..."),c=Object(j.a)(t,1)[0],n=Object(a.useState)({}),s=Object(j.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(!1),b=Object(j.a)(o,2),u=b[0],d=b[1],h=Object(a.useState)("edit"),x=Object(j.a)(h,1)[0],m=Object(a.useState)(e.rank),p=Object(j.a)(m,1)[0],g=Object(a.useState)({}),v=Object(j.a)(g,2),f=v[0],A=v[1];Object(a.useEffect)((function(){L.a.get("http://api/characters/".concat(e.id)).then((function(e){i(e.data),d(!0)})).catch((function(e){console.log(e)}))}),[e.id]);var N={rank:p,type:x,character:r,submitHandler:function(t,c){t.preventDefault(),console.log("SUBMIT"),L.a.put("http://api/characters/edit/".concat(e.id),c).then((function(t){console.log(t),t.data.hasOwnProperty("error")?(console.log(t.data),A(t.data.error.errors),Object(l.c)("/edit/".concat(r._id,"/").concat(p))):Object(l.c)("/view/".concat(e.id,"/").concat(p)),console.log(t)})).catch((function(e){console.log(e)}))}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsxs)("div",{className:"edit_body wrapper",children:[u&&Object(O.jsx)(J,{subtitle:r.charName,title:c}),u&&Object(O.jsx)(Z,{errors:f,pkg:N})]})]})},ee=(c(111),function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],b=Object(a.useState)(""),u=Object(j.a)(b,2),d=u[0],h=u[1],x=Object(a.useState)({}),m=Object(j.a)(x,2),p=m[0],g=m[1];return Object(a.useEffect)((function(){console.log("useEffect"),l(!1),L.a.get("http://api/characters").then((function(e){var t={},c=[];e.data.characters.sort((function(e,t){return e.votes.length>t.votes.length?-1:1})).forEach((function(e,a){t[e.charName]=a,c[a]=e})),g(t),s(c),l(!0)})).catch((function(e){console.log(e)}))}),[d]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsxs)("div",{id:"Search",className:"wrapper flex",children:[Object(O.jsxs)("div",{className:"search_grp flex",children:[Object(O.jsx)("p",{children:"Search by: name, year, movie title"}),Object(O.jsx)("input",{value:d,type:"text",onChange:function(e){h(e.target.value)}})]}),Object(O.jsxs)("section",{className:"results flex",children:[o&&""!==d&&n.filter((function(e){return e.charName.toLowerCase().includes(d.toLowerCase())||e.year===d||e.title===d})).map((function(e,t){return Object(O.jsx)(S.a,{animatePreScroll:!1,initiallyVisible:!0,offset:1,animateIn:"fadeIn",children:Object(O.jsx)(C,{i:p[e.charName],char:e},t)},t)})),o&&""===d&&n.map((function(e,t){return Object(O.jsx)(S.a,{animatePreScroll:!0,animateOnce:!0,offset:1,animateIn:"slideInLeft",animateOut:"",children:Object(O.jsx)(C,{i:p[e.charName],char:e},t)})}))]})]})]})}),te=(c(112),function(e){var t=Object(a.useContext)(b),c=Object(a.useState)({}),n=Object(j.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(j.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(e.rank),x=Object(j.a)(h,1)[0],p=Object(a.useState)("view"),f=Object(j.a)(p,1)[0],A=Object(a.useState)("Fantastic Performance!"),N=Object(j.a)(A,1)[0],I=Object(a.useState)(8),w=Object(j.a)(I,1)[0],C=Object(a.useState)(""),y=Object(j.a)(C,2),F=y[0],V=y[1],k=Object(a.useState)(!1),R=Object(j.a)(k,2),W=(R[0],R[1]);Object(a.useEffect)((function(){L.a.get("http://api/characters/".concat(e.id)).then((function(e){r(e.data),V(e.data.votes),d(!0)})).catch((function(e){console.log(e)}))}),[e.id]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(S.a,{animatePreScroll:!0,animateOnce:!0,duration:2,initiallyVisible:!1,animateIn:"fadeIn",children:Object(O.jsxs)("div",{id:"View",className:"wrapper",children:[u&&Object(O.jsx)(J,{title:N,subtitle:s.actor}),Object(O.jsx)("div",{className:"film_strip",children:u&&Object(O.jsx)(v,{resultNum:w,character:s,location:f,rank:x,update_character:function(e,c,a){e.preventDefault(),t.votedList.hasOwnProperty(a.charName)?alert("You've already voted for ".concat(a.charName)):(V([t.signature].concat(Object(o.a)(a.votes))),t.goto_vote(e,a,a.votes),W(!0),t.setStartPositionF(x-1))},reset_votes:function(e){e.preventDefault(),V(["Anonymous"]),t.goto_vote(e,s,[],"Anonymous")}})}),Object(O.jsxs)("section",{className:"bottom flex",children:[u&&Object(O.jsx)(g,{character:s}),u&&Object(O.jsx)(m,{resultNum:w,votes:F}),Object(O.jsxs)("h5",{className:"visitDB",children:['Visit "',s.title,'" on The Movie Database...']})]})]})})]})});var ce=function(){var e=Object(a.useState)("Anonymous"),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),r=Object(j.a)(s,2),u=r[0],d=r[1],h=Object(a.useState)(0),x=Object(j.a)(h,2),m=x[0],p=x[1],g=Object(a.useState)(0),v=Object(j.a)(g,2),f=v[0],A=v[1],N=Object(a.useState)(""),S=Object(j.a)(N,2),I=S[0],w=S[1],C=Object(a.useState)(0),y=Object(j.a)(C,2),F=y[0],V=y[1],k=Object(a.useState)(0),R=Object(j.a)(k,2),W=R[0],D=R[1],E=Object(a.useState)(0),B=Object(j.a)(E,2),X=B[0],G=B[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(b.Provider,{value:{carouselIndex:X,setCarouselIndex:G,startPosition:F,setStartPosition:V,startPositionF:W,setStartPositionF:D,votedList:I,totalCharacters:f,setTotalCharacters:A,reloadedLocal:u,setReloadedLocal:d,reloadedBase:m,setReloadedBase:p,signature:c,setSignature:n,goto_vote:function(e,t,a){e.preventDefault(),console.log("votes ".concat(a)),L.a.put("http://api/characters/edit/".concat(t._id),{votes:[c].concat(Object(o.a)(a))}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var n=t.charName,s=t._id,r=Object(i.a)({},I);r[n]=s,w(r)}},children:Object(O.jsxs)(l.b,{children:[Object(O.jsx)(M,{path:"/"}),Object(O.jsx)(_,{path:"/add"}),Object(O.jsx)($,{path:"/edit/:id/:rank"}),Object(O.jsx)(ee,{path:"/search"}),Object(O.jsx)(te,{path:"/view/:id/:rank"})]})})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,149)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},ne=(c(113),c.p+"static/media/MERN-logo.39d4f786.png"),se=function(e){return Object(O.jsx)(S.a,{animateOnce:!0,animateIn:"slideInUp",children:Object(O.jsxs)("footer",{children:[Object(O.jsxs)("aside",{className:"footer_aside",children:[Object(O.jsx)("p",{children:"ksanmartin909@gmail.com"}),Object(O.jsx)("p",{children:"\xa9 2021 Kristen San Martin"})]}),Object(O.jsxs)("div",{id:"footer_wrapper",className:"flex",children:[Object(O.jsxs)("section",{className:"footer_tech",children:[Object(O.jsx)("h5",{children:"Technologies"}),Object(O.jsxs)("div",{className:"tech_list flex",children:[Object(O.jsx)("p",{children:"MongoDB"}),Object(O.jsx)("p",{children:"Express"}),Object(O.jsx)("p",{children:"React.js"}),Object(O.jsx)("p",{children:"Node.js"}),Object(O.jsx)("p",{children:"AdobeXD"}),Object(O.jsx)("p",{children:"Postman"}),Object(O.jsx)("p",{children:"Github"})]})]}),Object(O.jsx)("img",{className:"footer_image",src:ne,alt:"mern logo"}),Object(O.jsxs)("section",{className:"footer_icons",children:[Object(O.jsx)("i",{className:"fab fa-github"}),Object(O.jsx)("i",{className:"fab fa-linkedin"})]})]})]})})};r.a.render(Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{minHeight:"800px"},children:Object(O.jsx)(ce,{})},"1"),Object(O.jsx)("div",{children:Object(O.jsx)(se,{})},"2")]}),document.getElementById("root")),ae()},47:function(e,t,c){},48:function(e,t,c){},69:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},86:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.19229f10.chunk.js.map