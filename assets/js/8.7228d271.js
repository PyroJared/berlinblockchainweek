(window.webpackJsonp=window.webpackJsonp||[]).push([[8,12],{170:function(t,e,n){},175:function(t,e,n){"use strict";var r=n(170);n.n(r).a},9:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},caption:{type:String,required:!0},indicator:String}},i=n(0),s=Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.caption)+"\n  "),"true"===this.indicator?e("OutboundLink"):this._e()],1)},[],!1,null,null,null);e.default=s.exports},97:function(t,e,n){"use strict";n.r(e);n(90);var r={components:{ExternalLink:n(9).default},methods:{removeProtocol:function(t){if(t)return(t=t.split(/https?:\/\//))[1]}}},i=(n(175),n(0)),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speakers--container"},t._l(t.$page.frontmatter.speakers,function(e){return n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),e.title||e.company?n("h5",[t._v("\n      "+t._s(e.title)+"\n\n      "),t._v(" "),e.company?n("span",[e.title&&e.company?n("span",[t._v("\n           • \n        ")]):t._e(),t._v(" "),e.companyURL?n("ExternalLink",{attrs:{url:e.companyURL,caption:e.company}}):n("span",[t._v("\n          "+t._s(e.company)+"\n        ")])],1):t._e()]):t._e(),t._v(" "),e.bio?n("p",[t._v("\n      "+t._s(e.bio)+"\n    ")]):t._e(),t._v(" "),e.twitter||e.website?n("div",[e.twitter?n("ExternalLink",{attrs:{url:"https://twitter.com/"+e.twitter,caption:"@"+e.twitter}}):t._e(),t._v(" "),e.twitter&&e.website?n("span",[t._v("\n         \n      ")]):t._e(),t._v(" "),e.website?n("ExternalLink",{attrs:{url:e.website,caption:t.removeProtocol(e.website)}}):t._e()],1):t._e()])}))},[],!1,null,null,null);e.default=s.exports}}]);