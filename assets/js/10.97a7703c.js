(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12],{171:function(t,e,n){},176:function(t,e,n){"use strict";var i=n(171);n.n(i).a},9:function(t,e,n){"use strict";n.r(e);var i={props:{url:{type:String,required:!0},caption:{type:String,required:!0},indicator:String}},r=n(0),s=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.caption)+"\n  "),"true"===this.indicator?e("OutboundLink"):this._e()],1)},[],!1,null,null,null);e.default=s.exports},95:function(t,e,n){"use strict";n.r(e);var i={components:{ExternalLink:n(9).default},computed:{price:function(){var t=this.$page.frontmatter.price;return t&&0!==t?(t+=" €",t):"Free"}}},r=(n(176),n(0)),s=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ticket--container"},[e("span",{staticClass:"ticket--price"},[this._v("\n    Cost: "+this._s(this.price)+"\n  ")]),this._v(" "),this.$page.frontmatter.tickets?e("span",{staticClass:"button"},[e("ExternalLink",{attrs:{url:this.$page.frontmatter.tickets,caption:"Website",indicator:"true"}})],1):this._e()])},[],!1,null,null,null);e.default=s.exports}}]);