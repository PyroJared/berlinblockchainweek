(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7,8,9,10,12],{170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){"use strict";var a=n(3),r=n(23),i=n(69);a(a.P+a.F*n(6)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},175:function(t,e,n){"use strict";var a=n(170);n.n(a).a},176:function(t,e,n){"use strict";var a=n(171);n.n(a).a},177:function(t,e,n){},182:function(t,e,n){"use strict";var a=n(177);n.n(a).a},186:function(t,e,n){"use strict";n.r(e);var a=n(36),r=n(96),i=n(97),s=n(98),o=n(95),u=n(1),c={components:{DateTime:a.default,MapLink:r.default,Speakers:i.default,Synopsis:s.default,TicketsLink:o.default},computed:{data:function(){return this.$page.frontmatter}},methods:{capitalizeWord:function(t){return Object(u.a)(t)}}},l=(n(182),n(0)),d=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"category"},[n("Badge",{attrs:{text:t.capitalizeWord(t.data.category)}})],1),t._v(" "),n("h1",{attrs:{id:"name"}},[t._v(t._s(t.data.name))]),t._v(" "),n("Synopsis"),t._v(" "),t.data.speakers&&t.data.speakers.length>0?n("div",{attrs:{id:"speakers"}},[n("h2",[t._v("Speakers")]),t._v(" "),n("Speakers")],1):t._e(),t._v(" "),t.data.date?n("div",{attrs:{id:"date"}},[n("h2",[t._v("Date")]),t._v(" "),n("DateTime")],1):t._e(),t._v(" "),t.data.venue||t.data.address?n("div",{attrs:{id:"address"}},[Array.isArray(t.data.address)?n("h2",[t._v("Venues")]):n("h2",[t._v("Venue")]),t._v(" "),n("MapLink")],1):t._e(),t._v(" "),t.data.tickets?n("div",{attrs:{id:"tickets"}},[n("h2",[t._v("More information")]),t._v(" "),n("TicketsLink")],1):t._e()],1)},[],!1,null,null,null);e.default=d.exports},36:function(t,e,n){"use strict";n.r(e);n(172);var a={props:["date","endDate","time","endTime"],data:function(){return{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:{datetime:function(){var t=this.date||this.$page.frontmatter.date;t=new Date(t);var e=this.dayNames[t.getUTCDay()],n=this.monthNames[t.getUTCMonth()],a="".concat(e,", ").concat(t.getUTCDate()," ").concat(n),r=this.endDate||this.$page.frontmatter.endDate;r&&(r=new Date(r)).toJSON()!==t.toJSON()&&(e=this.dayNames[r.getUTCDay()],a+=" - ".concat(e,", ").concat(r.getUTCDate()," ").concat(n));var i=this.time||this.$page.frontmatter.time;i&&(a+=" @ ".concat(i));var s=this.endTime||this.$page.frontmatter.endTime;return s&&i&&s!==i&&(a+="-".concat(s)),a}}},r=n(0),i=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"datetime"},[this._v("\n  "+this._s(this.datetime)+"\n  "),this._t("default")],2)},[],!1,null,null,null);e.default=i.exports},9:function(t,e,n){"use strict";n.r(e);var a={props:{url:{type:String,required:!0},caption:{type:String,required:!0},indicator:String}},r=n(0),i=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.caption)+"\n  "),"true"===this.indicator?e("OutboundLink"):this._e()],1)},[],!1,null,null,null);e.default=i.exports},95:function(t,e,n){"use strict";n.r(e);var a={components:{ExternalLink:n(9).default},computed:{price:function(){var t=this.$page.frontmatter.price;return t&&0!==t?(t+=" €",t):"Free"}}},r=(n(176),n(0)),i=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ticket--container"},[e("span",{staticClass:"ticket--price"},[this._v("\n    Cost: "+this._s(this.price)+"\n  ")]),this._v(" "),this.$page.frontmatter.tickets?e("span",{staticClass:"button"},[e("ExternalLink",{attrs:{url:this.$page.frontmatter.tickets,caption:"Website",indicator:"true"}})],1):this._e()])},[],!1,null,null,null);e.default=i.exports},96:function(t,e,n){"use strict";n.r(e);n(24),n(91);var a={components:{ExternalLink:n(9).default},computed:{venues:function(){var t=this.$page.frontmatter.address,e=this.$page.frontmatter.venue;if(Array.isArray(e)){var n=-1;return e.map(function(e){return{name:e,address:t[++n]||null}})}return[{name:e||null,address:t}]}}},r=n(0),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.venues,function(e){return n("p",[e.name?n("span",[t._v("\n      "+t._s(e.name)),n("br")]):t._e(),t._v(" "),e.address?n("ExternalLink",{attrs:{url:"https://www.google.com/maps/place/"+e.address,caption:e.address,indicator:"true"}}):t._e()],1)}))},[],!1,null,null,null);e.default=i.exports},97:function(t,e,n){"use strict";n.r(e);n(90);var a={components:{ExternalLink:n(9).default},methods:{removeProtocol:function(t){if(t)return(t=t.split(/https?:\/\//))[1]}}},r=(n(175),n(0)),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speakers--container"},t._l(t.$page.frontmatter.speakers,function(e){return n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),e.title||e.company?n("h5",[t._v("\n      "+t._s(e.title)+"\n\n      "),t._v(" "),e.company?n("span",[e.title&&e.company?n("span",[t._v("\n           • \n        ")]):t._e(),t._v(" "),e.companyURL?n("ExternalLink",{attrs:{url:e.companyURL,caption:e.company}}):n("span",[t._v("\n          "+t._s(e.company)+"\n        ")])],1):t._e()]):t._e(),t._v(" "),e.bio?n("p",[t._v("\n      "+t._s(e.bio)+"\n    ")]):t._e(),t._v(" "),e.twitter||e.website?n("div",[e.twitter?n("ExternalLink",{attrs:{url:"https://twitter.com/"+e.twitter,caption:"@"+e.twitter}}):t._e(),t._v(" "),e.twitter&&e.website?n("span",[t._v("\n         \n      ")]):t._e(),t._v(" "),e.website?n("ExternalLink",{attrs:{url:e.website,caption:t.removeProtocol(e.website)}}):t._e()],1):t._e()])}))},[],!1,null,null,null);e.default=i.exports},98:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.$page.frontmatter.synopsis,function(e){return n("p",[e.list?n("ul",t._l(e.list,function(e){return n("li",[t._v("\n        "+t._s(e)+"\n      ")])})):n("span",[t._v("\n      "+t._s(e)+"\n    ")])])}))},[],!1,null,null,null);e.default=r.exports}}]);