(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70e285ad"],{"0e7c":function(t,e,a){},"0e9e":function(t,e,a){"use strict";a("bc88")},"3e96":function(t,e,a){"use strict";a("bf53")},4886:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"sizer-tabs"},t._l(t.cats,(function(e,s){return a("div",{key:s,staticClass:"sizer-tab-item",class:t.getTabClass(s),on:{click:function(e){return t.switchTab(s)}}},[a("span",{staticClass:"text"},[t._v(t._s(e))]),a("i",{staticClass:"iconfont icon-drop-down",class:{"icon-drop-up":s===t.activeTabIdx}})])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:-1!==t.activeTabIdx,expression:"activeTabIdx !== -1"}],staticClass:"sizer-tab-content"},[a("SizerCategory",{directives:[{name:"show",rawName:"v-show",value:0===t.activeTabIdx,expression:"activeTabIdx === 0"}],on:{change:t.getMovies},model:{value:t.params.categories,callback:function(e){t.$set(t.params,"categories",e)},expression:"params.categories"}}),a("SizerStatus",{directives:[{name:"show",rawName:"v-show",value:1===t.activeTabIdx,expression:"activeTabIdx === 1"}],attrs:{status:t.params.status},on:{change:t.changeStatus}}),2===t.activeTabIdx?a("SizerRate",{ref:"sizerRate",on:{change:t.getMovies},model:{value:t.params.rate,callback:function(e){t.$set(t.params,"rate",e)},expression:"params.rate"}}):t._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:-1!==t.activeTabIdx,expression:"activeTabIdx !== -1"}],staticClass:"sizer-mask",on:{click:t.closeTab}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"movie-list"},[a("Scroll",{directives:[{name:"show",rawName:"v-show",value:t.movieList.length,expression:"movieList.length"}],attrs:{data:t.movieList}},t._l(t.movieList,(function(e){return a("Card",{key:e.id,attrs:{movie:e},on:{select:t.selectItem}})})),1)],1),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{height:"80%"}})],1)},i=[],n=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sizer-category"},[a("div",{staticClass:"category-list"},t._l(t.categoryList,(function(e){return a("span",{key:e.id,staticClass:"item",class:{active:t.selectedKeys.includes(e.id)},on:{click:function(a){return t.selectItem(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),0),a("button",{staticClass:"confirm-btn",on:{click:t.confirm}},[t._v("完成")])])}),r=[],c=(a("fb6a"),a("a434"),{model:{prop:"categories",event:"change"},props:{categories:{type:Array,required:!0}},data:function(){return{categoryList:[],selectedKeys:[]}},created:function(){this.getCategories()},methods:{getCategories:function(){var t=this;this.$request.get("/api/category").then((function(e){t.categoryList=e}))},confirm:function(){this.$emit("change",this.selectedKeys)},selectItem:function(t){var e=this.selectedKeys.slice(),a=e.indexOf(t);a>-1?e.splice(a,1):e.push(t),this.selectedKeys=e}}}),o=c,u=(a("fae2"),a("2877")),l=Object(u["a"])(o,n,r,!1,null,"f838afde",null),d=l.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sizer-status"},t._l(t.statusList,(function(e){return a("div",{key:e.value,staticClass:"item",class:{active:t.status===e.value},on:{click:function(a){return t.selectItem(e)}}},[a("i",{staticClass:"iconfont icon-dui"}),a("span",[t._v(t._s(e.name))])])})),0)},v=[],f=(a("a9e3"),{props:{status:{type:[String,Number],required:!0}},data:function(){return{statusList:[{name:"全部",value:""},{name:"已上映",value:"1"},{name:"未上映",value:"0"}]}},methods:{selectItem:function(t){this.$emit("change",t)}}}),m=f,p=(a("a5b4"),Object(u["a"])(m,h,v,!1,null,"74ca6b59",null)),b=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sizer-rate"},[a("div",{ref:"bar",staticClass:"bar"},[a("div",{staticClass:"mask",style:t.style}),a("div",{ref:"barBtn1",staticClass:"bar-btn",on:{touchstart:function(e){return e.preventDefault(),t.touchStart(e)},touchmove:function(e){return e.preventDefault(),t.touchMove(e)},touchend:t.touchEnd}}),a("div",{ref:"barBtn2",staticClass:"bar-btn",on:{touchstart:function(e){return e.preventDefault(),t.touchStart(e)},touchmove:function(e){return e.preventDefault(),t.touchMove(e)},touchend:t.touchEnd}})]),a("div",{staticClass:"bottom"},[a("button",{staticClass:"confirm-btn",on:{click:t.confirm}},[t._v("完成")]),a("span",{staticClass:"rate-show-text"},[t._v(" "+t._s(t.innerRate[0])+" ~ "+t._s(t.innerRate[1])+" ")])])])},y=[],x=a("2909");function w(t){if(Array.isArray(t))return t}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function C(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],s=!0,i=!1,n=void 0;try{for(var r,c=t[Symbol.iterator]();!(s=(r=c.next()).done);s=!0)if(a.push(r.value),e&&a.length===e)break}catch(o){i=!0,n=o}finally{try{s||null==c["return"]||c["return"]()}finally{if(i)throw n}}return a}}var I=a("06c5");function T(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t,e){return w(t)||C(t,e)||Object(I["a"])(t,e)||T()}a("d81d"),a("c740");var _={model:{prop:"rate",event:"change"},props:{rate:{type:Array,required:!0}},data:function(){return{innerRate:[],style:{}}},created:function(){this.touch={}},mounted:function(){var t=this;setTimeout((function(){t.dots||t.generateDots(),t.innerRate=t.rate;var e=S(t.innerRate,2),a=e[0],s=e[1];t.$refs.barBtn1.style.left=t.dots[a]+"px",t.$refs.barBtn2.style.left=t.dots[s]+"px",t.setStyle()}),20)},methods:{generateDots:function(){this.dots=[0],this.width=this.$refs.bar.getBoundingClientRect().width;for(var t=1;t<10;t++){var e=document.createElement("div");e.className="bar-dot";var a=.1*t*this.width;this.dots.push(parseInt(a)-7),e.style.left=parseInt(a)+"px",this.$refs.bar.appendChild(e)}this.dots.push(this.width-7)},setStyle:function(){var t=parseInt(this.$refs.barBtn1.style.left),e=parseInt(this.$refs.barBtn2.style.left),a=[t,e].sort((function(t,e){return t-e}));this.style={width:a[1]-a[0]+"px",left:a[0]+"px"}},confirm:function(){this.$emit("change",this.innerRate)},touchStart:function(t){this.touch.initiated=!0,t.target.style.transform="scale(1.3)"},touchMove:function(t){if(this.touch.initiated){var e=this.dots.indexOf(parseInt(t.target.style.left)),a=this.innerRate[1-this.innerRate.indexOf(e)],s=Math.min(Math.max(0,t.touches[0].pageX-30),this.width),i=this.dots.map((function(t){return Math.abs(parseInt(t-s))})),n=Math.min.apply(Math,Object(x["a"])(i)),r=i.findIndex((function(t){return t===n}));t.target.style.left=this.dots[r]+"px",this.innerRate=[a,r].sort((function(t,e){return t-e})),this.setStyle()}},touchEnd:function(t){this.touch.initiated=!1,t.target.style.transform="scale(1.0)"}}},k=_,$=(a("efcb"),a("3e96"),Object(u["a"])(k,g,y,!1,null,"7b66c7cd",null)),z=$.exports,M={components:{SizerCategory:d,SizerStatus:b,SizerRate:z},data:function(){return{cats:["分类","已上映","评分"],loading:!0,movieList:[],params:{categories:[],status:"1",rate:[0,10]},activeTabIdx:-1}},created:function(){this.getMovies()},methods:{getMovies:function(){var t=this;this.activeTabIdx=-1;var e=this.params,a=e.categories,s=e.rate,i=e.status,n={categories:a.length?JSON.stringify(a):void 0,status:i,rate:"0"!==i?JSON.stringify(s):void 0};this.$request.get("/api/movie",{params:n}).then((function(e){t.movieList=e,t.loading=!1}))},getTabClass:function(t){return{active:t===this.activeTabIdx,disable:2===t&&"0"===this.params.status}},switchTab:function(t){t!==this.activeTabIdx?"0"===this.params.status&&2===t||(this.activeTabIdx=t):this.activeTabIdx=-1},closeTab:function(){this.activeTabIdx=-1},changeStatus:function(t){var e=t.name,a=t.value;this.cats[1]=e,this.params.status=a,this.getMovies()},selectItem:function(t){this.$router.push("/movie/".concat(t))}}},R=M,L=(a("0e9e"),Object(u["a"])(R,s,i,!1,null,"9c630422",null));e["default"]=L.exports},9724:function(t,e,a){},a5b4:function(t,e,a){"use strict";a("b688")},b688:function(t,e,a){},bc88:function(t,e,a){},bf53:function(t,e,a){},efcb:function(t,e,a){"use strict";a("0e7c")},fae2:function(t,e,a){"use strict";a("9724")}}]);
//# sourceMappingURL=chunk-70e285ad.5dda02bb.js.map