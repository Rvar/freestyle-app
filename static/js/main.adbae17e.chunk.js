(this["webpackJsonpfreestyle-app"]=this["webpackJsonpfreestyle-app"]||[]).push([[0],{116:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(61),u=a.n(r),s=(a(70),a(8)),l=a(9),o=a(11),c=a(10),m=(a(71),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null," LA MAISON DU FREESTYLE "),i.a.createElement("p",null," Toutes les apps sont dans le menu \xe0 gauche "))}}]),a}(n.Component)),d=(a(72),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e,r){var u;Object(s.a)(this,n),u=t.call(this,e,r);var l=a(73).map((function(e){return i.a.createElement("div",{className:"citation"},'"',e.citation,'"',i.a.createElement("div",{className:"auteurCitation"}," - ",e.auteur))}));return u.state={citation:"",listItems:l,indexCitation:0},u}return Object(l.a)(n,[{key:"pickACitation",value:function(){var e=this.state.listItems.length-1,t=0;do{t=Math.floor(Math.random()*Math.floor(e))}while(this.state.indexCitation===t);console.log("MAX : "+e),this.setState({indexCitation:t}),this.setState({citation:this.state.listItems[t]})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h2",null," GENERATEUR DE CITATION "),this.state.citation,i.a.createElement("a",{className:"generateBtn",href:"#",onClick:function(){return e.pickACitation()}},"G\xe9n\xe9rer"))}}]),n}(n.Component)),p=a(21),h=(a(74),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"Please write an essay about your favorite DOM element."},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null," Boite \xe0 id\xe9es "),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Essay:",i.a.createElement("br",null),i.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component)),f=a(63),v=a(26);function b(e){return i.a.createElement("li",{className:"todo stack-small"},i.a.createElement("div",{className:"c-cb"},i.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed}),i.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),i.a.createElement("div",{className:"btn-group"},i.a.createElement("button",{type:"button",className:"btn"},"Edit ",i.a.createElement("span",{className:"visually-hidden"},e.name)),i.a.createElement("button",{type:"button",className:"btn btn__danger"},"Delete ",i.a.createElement("span",{className:"visually-hidden"},e.name))))}var E=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],u=a[1];return i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTask(r),u("")}},i.a.createElement("h2",{className:"label-wrapper"},i.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),i.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:r,onChange:function(e){u(e.target.value)}}),i.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var g=function(e){return i.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":"true"},i.a.createElement("span",{className:"visually-hidden"},"Show "),i.a.createElement("span",null,"all "),i.a.createElement("span",{className:"visually-hidden"}," tasks"))},y=a(64);a(116);var j=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],u=a[1],s=r.map((function(e){return i.a.createElement(b,{id:e.id,name:e.name,completed:e.completed,key:e.id})})),l=1!==s.length?"tasks":"task",o="".concat(s.length," ").concat(l," remaining");return i.a.createElement("div",{className:"todoapp stack-large"},i.a.createElement("h1",null,"TodoMatic"),i.a.createElement(E,{addTask:function(e){var t={id:"todo-"+Object(y.a)(),name:e,completed:!1};u([].concat(Object(f.a)(r),[t]))}}),i.a.createElement("div",{className:"filters btn-group stack-exception"},i.a.createElement(g,null),i.a.createElement(g,null),i.a.createElement(g,null)),i.a.createElement("h2",{id:"list-heading"},o),i.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},s))},q=a(27),C=a.n(q),O=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={persons:[],fontaines:[],posts:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data;e.setState({persons:a})})),C.a.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=fontaines-a-boire&q=&facet=type_objet&facet=modele&facet=commune&facet=dispo").then((function(t){e.setState({fontaines:t.data.records})})),C.a.get("https://my-json-server.typicode.com/rvar/freestyle-app/posts").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null," Fetch data with axios from : jsonplaceholder.typicode.com/"),i.a.createElement("ul",null,this.state.persons.map((function(e){return i.a.createElement("li",null,e.name)}))),i.a.createElement("h3",null,"Fontaines de Paris"),i.a.createElement("ul",null,this.state.fontaines.map((function(e){return i.a.createElement("li",null,e.fields.voie)}))),i.a.createElement("h3",null,"Posts from jsonServer"),i.a.createElement("ul",null,this.state.posts.map((function(e){return i.a.createElement("li",null,e.title)}))))}}]),a}(n.Component),N=a(13),k=a(1),S=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N.a,null,i.a.createElement("div",{className:"menu"},i.a.createElement("div",null,i.a.createElement("header",{className:"App-header"},i.a.createElement("h5",null,i.a.createElement(N.b,{to:"/"},"FREESTYLE - APP"))),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(N.b,{to:"/generateurCitation"},"G\xe9n\xe9rateur de citation")),i.a.createElement("li",null,i.a.createElement(N.b,{to:"/boiteAIdee"},"Boite \xe0 id\xe9es")),i.a.createElement("li",null,i.a.createElement(N.b,{to:"/todoList"},"Todo list")),i.a.createElement("li",null,i.a.createElement(N.b,{to:"/fetchDataFromApi"},"Fetch Data From API")),i.a.createElement("li",null,i.a.createElement(N.b,{to:"/"},"autre"))))),i.a.createElement("div",{className:"body"},i.a.createElement(k.c,null,"//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //AJOUTER ROUTE ET LINK : Link to... (au dessus) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",i.a.createElement(k.a,{path:"/generateurCitation"},i.a.createElement(d,null)),i.a.createElement(k.a,{path:"/boiteAIdee"},i.a.createElement(h,null)),i.a.createElement(k.a,{path:"/todoList"},i.a.createElement(j,null)),i.a.createElement(k.a,{path:"/fetchDataFromApi"},i.a.createElement(O,null)),i.a.createElement(k.a,{path:"/"},i.a.createElement(m,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a(137)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e){e.exports=JSON.parse('[{"citation":"La plus grande gloire n\'est pas de ne jamais tomber, mais de se relever \xe0 chaque chute.","auteur":"Confucius"},{"citation":"La vie est un myst\xe8re qu\'il faut vivre, et non un probl\xe8me \xe0 r\xe9soudre.","auteur":"Gandhi"},{"citation":"Il est moins grave de perdre que de se perdre.","auteur":"Romain Gary"},{"citation":"Il n\'y a qu\'une r\xe9ponse \xe0 la d\xe9faite, et c\'est la victoire.","auteur":"Winston Churchill"},{"citation":"La strat\xe9gie c\'est l\'art de faire face \xe0 son destin.","auteur":"Peter Drucker"},{"citation":"Aucun de nous ne sait ce que nous savons tous, ensemble.","auteur":"Euripide"},{"citation":"La beaut\xe9 est dans les yeux de celui qui regarde.","auteur":"Oscar Wilde"},{"citation":"Le plus grave d\xe9faut est de ne pas conna\xeetre ses d\xe9fauts.","auteur":"Henri B\xe9raud"},{"citation":"Seuls ceux qui prennent le risque d\'\xe9chouer spectaculairement r\xe9ussiront brillamment.","auteur":"Robert Kennedy"},{"citation":"Pour gagner, il faut risquer de perdre.","auteur":"Jean-Claude Killy"},{"citation":"Si vous ne risquez rien, vous risquez encore plus.","auteur":"Faouzi Skali"},{"citation":"Ce qu\'on risque r\xe9v\xe8le ce qu\'on vaut.","auteur":"Jeanette Winterson"},{"citation":"Les dangers visibles nous causent moins d\'effroi que les dangers imaginaires.","auteur":"William Shakespeare"},{"citation":"Si vous n\'essayez jamais, vous ne r\xe9ussirez jamais, mais si vous essayez, vous risquez de vous \xe9tonner vous-m\xeame.","auteur":"Charles-Augustin Sainte-Beuve"},{"citation":"Les cons\xe9quences de ce qu\'on ne fait pas sont les plus graves.","auteur":"Marcel Mari\xebn"},{"citation":"La joie est dans le risque \xe0 faire du neuf.","auteur":"Denis Diderot"},{"citation":"Les sacrifices sont le prix de l\'ind\xe9pendance.","auteur":"Pierre Billon"},{"citation":"On peut aussi b\xe2tir quelque chose de beau avec les pierres qui entravent le chemin.","auteur":"Johan Wolfgang von Goethe"},{"citation":"Un pessimiste fait de ses occasions des difficult\xe9s, et un optimiste fait de ses difficult\xe9s des occasions.","auteur":"Antoine de Saint-Exup\xe9ry"},{"citation":"Survivre aux \xe9preuves est la meilleure fa\xe7on de faire ses preuves.","auteur":"Daniel Desbiens"},{"citation":"Tout le monde savait que c\'\xe9tait impossible \xe0 faire. Puis un jour quelqu\'un est arriv\xe9 qui ne le savait pas, et il l\'a fait.","auteur":"Winston Churchill"},{"citation":"Nous ne pouvons agir que sur l\'avenir.","auteur":"Bertrand de Jouvenel"},{"citation":"L\'imagination est plus importante que le savoir.","auteur":"Albert Einstein"},{"citation":"On ne subit pas l\'avenir, on le fait.","auteur":"Georges Bernanos"},{"citation":"Il ne faut pas chercher \xe0 rajouter des ann\xe9es \xe0 sa vie, mais plut\xf4t essayer de rajouter de la vie \xe0 ses ann\xe9es.","auteur":"Oscar Wilde"},{"citation":"Dire des idioties, de nos jours o\xf9 tout le monde r\xe9fl\xe9chit profond\xe9ment, c\'est le seul moyen de prouver qu\'on a une pens\xe9e libre et ind\xe9pendante.","auteur":"Boris Vian"},{"citation":"Si chacun ne conservait que ce dont il a besoin, nul ne manquerait de rien, et chacun se contenterait de ce qu\'il a.","auteur":"Gandhi"},{"citation":"Exige beaucoup de toi-m\xeame et attends peu des autres. Ainsi beaucoup d\'ennuis te seront \xe9pargn\xe9s.","auteur":"Confucius"},{"citation":"La nature fait les hommes semblables, la vie les rend diff\xe9rents.","auteur":"Confucius"},{"citation":"Notre plus grande gloire n\'est point de tomber, mais de savoir nous relever chaque fois que nous tombons.","auteur":"Confucius"},{"citation":"J\'entends et j\'oublie, je vois et je me souviens, je fais et je comprends.","auteur":"Confucius"},{"citation":"A ta naissance tout le monde rit, et tu es le seul \xe0 pleurer. Conduit ta vie de fa\xe7on \xe0 ce qu\'\xe0 ta mort tout le monde pleure et que tu sois le seul \xe0 sourire.","auteur":"Confucius"},{"citation":"Lorsque l\'on se cogne la t\xeate contre un pot et que cela sonne creux, \xe7a n\'est pas forc\xe9ment le pot qui est vide.","auteur":"Confucius"},{"citation":"Le contentement apporte le bonheur, m\xeame dans la pauvret\xe9. Le m\xe9contentement apporte la pauvret\xe9 m\xeame dans la richesse.","auteur":"Confucius"},{"citation":"Le plus grand voyageur est celui qui a su faire une fois le tour de lui-m\xeame.","auteur":"Confucius"},{"citation":"Nulle pierre ne peut \xeatre polie sans friction, nul homme ne peut parfaire son exp\xe9rience sans \xe9preuve.","auteur":"Confucius"},{"citation":"Agissez envers les autres comme vous aimeriez qu\'ils agissent envers vous.","auteur":"Confucius"},{"citation":"Ne vous souciez pas de n\'\xeatre pas remarqu\xe9 ; cherchez plut\xf4t \xe0 faire quelque chose de remarquable.","auteur":"Confucius"},{"citation":"Le contentement apporte le bonheur, m\xeame dans la pauvret\xe9. Le m\xe9contentement apporte la pauvret\xe9 m\xeame dans la richesse.","auteur":"Confucius"}]')},86:function(e,t){},88:function(e,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.adbae17e.chunk.js.map