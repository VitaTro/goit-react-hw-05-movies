"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{722:function(t,e,n){n.d(e,{HI:function(){return s},Me:function(){return f},jC:function(){return p},np:function(){return h},wr:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i="e41d1e074713eb19259eb796492b59d1",o=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i),t.next=3,c.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/review/".concat(e,"?api_key=").concat(i),t.next=3,c.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},746:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),o=n(722),s=n(184),p=function(t){return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.query.value;t.onSubmit(n)},children:[(0,s.jsx)("input",{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},f=n(791),h=n(87),d=function(){var t=(0,f.useState)([]),e=(0,u.Z)(t,2),n=e[0],c=e[1],d=(0,h.lr)(),l=(0,u.Z)(d,2),v=l[0],m=l[1],g=(0,f.useState)(!1),x=(0,u.Z)(g,2),b=x[0],y=x[1],k=v.get("query"),w=function(){var t=(0,a.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,(0,o.HI)(e);case 4:n=t.sent,c((0,r.Z)(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,y(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();return(0,f.useEffect)((function(){c([]),k&&w(k)}),[k]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{onSubmit:function(t){return m({query:t})}}),b&&(0,s.jsx)("div",{children:"Loading..."}),n.length>0?(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(h.rU,{to:"".concat(t.id),state:{from:"/movies/?".concat(v)},children:t.title})},t.id)}))}):k&&!b&&(0,s.jsx)("div",{children:"Nothing found. Try again"})]})}}}]);
//# sourceMappingURL=746.042e660f.chunk.js.map