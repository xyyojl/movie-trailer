(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-daedfcaa"],{"1bcb":function(t,e,i){"use strict";i("9efe")},"426e":function(t,e,i){"use strict";i("f474")},4802:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("Scroll",{attrs:{data:t.movies}},[i("ListBlock",{attrs:{movies:t.playingMovies,title:"正在热映("+t.playingCount+")",loading:t.loading},on:{more:function(e){return t.goMore(1)},select:t.selectItem}}),i("Spacing"),i("ListBlock",{attrs:{movies:t.commingMovies,title:"即将上映("+t.commingCount+")",loading:t.loading},on:{more:function(e){return t.goMore(0)},select:t.selectItem}})],1)],1)},o=[],s=(i("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"list-block"},[n("div",{staticClass:"info"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),n("i",{staticClass:"iconfont icon-right",on:{click:function(e){return t.$emit("more")}}})]),t.movies.length&&!t.loading?n("div",{staticClass:"list"},[t._l(t.movies,(function(e){return n("div",{key:e.id,staticClass:"item",on:{click:function(i){return t.$emit("select",e.id)}}},[n("div",{staticClass:"image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.poster,expression:"item.poster"}]}),"1"===e.isPlay?n("em",{staticClass:"rate"},[t._v(" "+t._s(e.rate)+" ")]):t._e()]),n("p",{staticClass:"title"},[t._v(t._s(e.title))])])})),t._l(8-t.movies.length,(function(t){return n("div",{key:t,staticClass:"item placeholder"})}))],2):t._e(),t.movies.length||t.loading?t._e():n("div",[n("img",{attrs:{src:i("8738"),width:"100",height:"100",alt:""}})]),t.loading?n("Loading",{attrs:{height:"200px"}}):t._e()],1)}),a=[],c={name:"ListBlock",props:{movies:{type:Array,required:!0},title:{type:String,required:!0},loading:{type:Boolean,default:!1}}},r=c,l=(i("426e"),i("2877")),u=Object(l["a"])(r,s,a,!1,null,"8e496330",null),m=u.exports,d={components:{ListBlock:m},data:function(){return{commingMovies:[],commingCount:0,playingMovies:[],playingCount:0,loading:!0}},computed:{movies:function(){return this.commingMovies.concat(this.playingMovies)}},created:function(){this.getMovie()},methods:{getMovie:function(){var t=this;this.$request("api/movie/hot").then((function(e){var i=e.comming,n=e.playing;t.commingMovies=i.movies,t.commingCount=i.count,t.playingMovies=n.movies,t.playingCount=n.count,t.loading=!1}))},goMore:function(t){this.$router.push("/list/".concat(t))},selectItem:function(t){this.$router.push("/movie/".concat(t))}}},g=d,v=(i("1bcb"),Object(l["a"])(g,n,o,!1,null,"ea4070a2",null));e["default"]=v.exports},"99af":function(t,e,i){"use strict";var n=i("23e7"),o=i("d039"),s=i("e8b5"),a=i("861d"),c=i("7b0b"),r=i("50c4"),l=i("8418"),u=i("65f0"),m=i("1dde"),d=i("b622"),g=i("2d00"),v=d("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",h=g>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=m("concat"),C=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},_=!h||!y;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,i,n,o,s,a=c(this),m=u(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?a:arguments[e],C(s)){if(o=r(s.length),d+o>f)throw TypeError(p);for(i=0;i<o;i++,d++)i in s&&l(m,d,s[i])}else{if(d>=f)throw TypeError(p);l(m,d++,s)}return m.length=d,m}})},"9efe":function(t,e,i){},f474:function(t,e,i){}}]);
//# sourceMappingURL=chunk-daedfcaa.4695cb50.js.map