(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(5),c=a.n(r),s=(a(18),a(10)),l=a(6),m=a(7),o=a(11),d=a(8),u=a(12),p=(a(19),a(20),a(21),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,r=e.imgUrl,c=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(p,Object.assign({key:e.imdbId},e))})))},v=a(1),b=a.n(v),g=a(3),f=a(2),w=(a(23),"https://www.omdbapi.com/?apikey=2f56ed46&t="),E=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.addMovie,a=e.movies,r=Object(i.useState)(""),c=Object(f.a)(r,2),s=c[0],l=c[1],m=Object(i.useState)(null),o=Object(f.a)(m,2),d=o[0],u=o[1],h=Object(i.useState)(!1),v=Object(f.a)(h,2),M=v[0],N=v[1],j=Object(i.useState)(!1),y=Object(f.a)(j,2),O=y[0],T=y[1],k=function(){var e=Object(g.a)(b.a.mark((function e(){var t,a,i,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){return E("".concat(w).concat(s))},e.next=3,t();case 3:a=e.sent,i=a.Title,n=a.Plot,r=a.Poster,c=a.imdbID,"True"===a.Response?(u({title:i,description:n,imgUrl:r,imdbId:c,imdbUrl:w+c}),N(!1)):N(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie",onSubmit:function(e){if(e.preventDefault(),null!==d){var i=d.imdbId,n=a.some((function(e){return e.imdbId===i}));T(n),!n&&t(d),l("")}}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",value:s,className:"input ".concat(M?"is-danger":""),onChange:function(e){var t=e.target.value;l(t.replace(/^\s/,"")),N(!1),T(!1)}})),M&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:k},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),O&&n.a.createElement("p",{className:"help is-danger"},"This movie is already in the list."),d&&n.a.createElement(p,d)))},N=a(9),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={movies:N},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(s.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(M,{addMovie:this.addMovie,movies:e})))}}]),t}(i.Component);c.a.render(n.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.311abcff.chunk.js.map