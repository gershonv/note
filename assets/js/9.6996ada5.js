(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{579:function(t,e,n){n(67),n(24),n(227),n(21),n(226),n(28),n(580),t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD hh:mm:ss";try{var e,n=new Date,r={"Y+":n.getFullYear().toString(),"M+":(n.getMonth()+1).toString(),"D+":n.getDate().toString(),"h+":n.getHours().toString(),"m+":n.getMinutes().toString(),"s+":n.getSeconds().toString()};for(var o in r)(e=new RegExp("("+o+")").exec(t))&&(t=t.replace(e[1],1==e[1].length?r[o]:r[o].padStart(e[1].length,"0")));return t}catch(t){return""}}},580:function(t,e,n){"use strict";var r=n(1),o=n(234).start;r({target:"String",proto:!0,forced:n(581)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},581:function(t,e,n){var r=n(68);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},683:function(t,e,n){"use strict";n.r(e);var r=n(579),o=n.n(r),i={data:function(){return{current:""}},methods:{copy:function(){this.current=o()();var t=document.createElement("input");t.value=this.current,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)}}},c=n(3),s=Object(c.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{on:{click:this.copy}},[this._v("拷贝当前时间")]),this._v(" "),e("span",[this._v(this._s(this.current))])])}),[],!1,null,null,null);e.default=s.exports}}]);