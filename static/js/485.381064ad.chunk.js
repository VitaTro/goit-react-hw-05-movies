"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{722:function(n,t,e){e.d(t,{HI:function(){return s},Me:function(){return l},jC:function(){return p},np:function(){return f},wr:function(){return o}});var r=e(861),a=e(757),c=e.n(a),i=e(340),u="e41d1e074713eb19259eb796492b59d1",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u),n.next=3,i.Z.get(t);case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,i,u,o=e(861),s=e(439),p=e(757),l=e.n(p),f=e(722),d=e(791),h=e(87),g=e(168),x=e(924),v=x.ZP.h1(r||(r=(0,g.Z)(["\n  font-size: 44px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 25px;\n  color: lightgrey;\n  text-shadow: 0 0 5px rgb(67, 182, 208);\n"]))),m=x.ZP.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  max-width: 1280px;\n"]))),w=x.ZP.li(c||(c=(0,g.Z)(["\n  width: 340px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),Z=x.ZP.img(i||(i=(0,g.Z)(["\n  max-height: 480px;\n  border-radius: 15px;\n"]))),b=x.ZP.div(u||(u=(0,g.Z)(["\n\n  font-size: 25px;\n  color: #F2EB9A;\n  font-weight: 600;\n  text-align: center;\n  padding-bottom: 10px;\n  margin-top: 15px;\n  }\n"]))),y=e(184),k=function(){var n=(0,d.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.wr)();case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,d.useEffect)((function(){a()}),[]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("section",{children:[(0,y.jsx)(v,{children:"Trending today"}),(0,y.jsx)(m,{children:e&&e.length>0&&e.map((function(n){return(0,y.jsx)(w,{children:(0,y.jsxs)(h.rU,{to:"movies/".concat(n.id),children:[(0,y.jsx)(Z,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg",alt:n.title}),(0,y.jsx)(b,{children:n.title})]})},n.id)}))})]})})}}}]);
//# sourceMappingURL=485.381064ad.chunk.js.map