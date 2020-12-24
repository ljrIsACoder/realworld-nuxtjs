(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return m})),r.d(e,"g",(function(){return f})),r.d(e,"i",(function(){return d})),r.d(e,"b",(function(){return v})),r.d(e,"e",(function(){return O})),r.d(e,"a",(function(){return h})),r.d(e,"k",(function(){return j})),r.d(e,"d",(function(){return w}));var n=r(59),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},O=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},h=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},j=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},w=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})}},200:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var n=r(59),c=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},o=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},l=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},271:function(t,e,r){"use strict";r.r(e);r(30);var n=r(3),c=r(192),o=r(215),l=r.n(o),m=(r(77),r(31),r(32),r(13),r(60),r(44)),f=r(200),d=r(33);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={name:"ArticleMeta",props:{article:{type:Object,required:!0}},data:function(){return{followingDisabled:!1,favoriteDisabled:!1,isDeleting:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),mounted:function(){},methods:{onFollowing:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.followingDisabled=!0,!(r=t.article.author).following){e.next=8;break}return e.next=5,Object(f.b)(r.username);case 5:r.following=!1,e.next=11;break;case 8:return e.next=10,Object(f.a)(r.username);case 10:r.following=!0;case 11:t.followingDisabled=!1;case 12:case"end":return e.stop()}}),e)})))()},onFavorite:function(article){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.favoriteDisabled=!0,!article.favorited){e.next=8;break}return e.next=4,Object(c.f)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,e.next=12;break;case 8:return e.next=10,Object(c.c)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:t.favoriteDisabled=!1;case 13:case"end":return e.stop()}}),e)})))()},deleteArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isDeleting=!0,e.next=3,Object(c.d)(t.article.slug);case 3:t.isDeleting=!1,t.$router.push({name:"home"});case 5:case"end":return e.stop()}}),e)})))()}}},h=r(23),j=Object(h.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),t.user.username!==t.article.author.username?[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.followingDisabled},on:{click:t.onFollowing}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            "+t._s(t.article.author.following?"Unfollow":"Follow")+" "+t._s(t.article.author.username)+"\n        ")]),t._v("\n          \n        "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.favoriteDisabled},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n             \n            Favorite Article "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])]:[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"editor",params:{slug:t.article.slug}}}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n        ")]),t._v("\n          \n        "),r("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{disabled:t.isDeleting},on:{click:t.deleteArticle}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n        ")])]],2)}),[],!1,null,null,null).exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"ArticleComments",props:{article:{type:Object,requires:!0}},data:function(){return{comments:[],commentValue:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.i)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},methods:{onAddComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.b)(t.article.slug,{comment:{body:t.commentValue}});case 3:r=e.sent,data=r.data,t.comments.unshift(data.comment),t.commentValue="",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onDeleteComment:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.e)(r.article.slug,t.id);case 2:r.comments.splice(e,1);case 3:case"end":return n.stop()}}),n)})))()}}},C={name:"ArticleIndex",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.g)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:j,ArticleComments:Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form",on:{submit:function(e){return e.preventDefault(),t.onAddComment(e)}}},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentValue,expression:"commentValue"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.commentValue},on:{input:function(e){e.target.composing||(t.commentValue=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n                Post Comment\n            ")])])]),t._v(" "),t._l(t.comments,(function(e,n){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n             \n            "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))]),t._v(" "),t.user.username===e.author.username?r("span",{staticClass:"mod-options"},[r("i",{staticClass:"ion-trash-a",on:{click:function(r){return t.onDeleteComment(e,n)}}})]):t._e()],1)])}))],2)}),[],!1,null,null,null).exports},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},y=Object(h.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=y.exports}}]);