(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{912:function(e,t,v){"use strict";v.r(t);var _=v(3),n=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("cdn 原理")]),e._v(" "),v("p",[e._v("CDN 的工作原理是将源站的资源缓存到位于全球各地的 CDN 节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验。")])]),e._v(" "),v("p",[e._v("这个估计大家都明白，因为打包后的产物本身也是上传到 CDN 的。但是我们要做的是将体积较大的第三方依赖单独拆出来放到 "),v("code",[e._v("CDN")]),e._v(" 上，这样这个依赖既不会占用打包资源，也不会影响最终包体积。")]),e._v(" "),v("p",[e._v("如果一个依赖有直接打包压缩好的单文件 CDN 资源，就可以直接使用。")]),e._v(" "),v("p",[e._v("按照官方文档的解释，如果我们想引用一个库，但是又不想让 "),v("code",[e._v("webpack")]),e._v(" 打包，并且又不影响我们在程序中以 "),v("code",[e._v("import")]),e._v("、"),v("code",[e._v("require")]),e._v(" 或者 "),v("code",[e._v("window/global")]),e._v(" 全局等方式进行使用，那就可以通过配置 "),v("code",[e._v("externals")]),e._v("。")]),e._v(" "),v("p",[v("code",[e._v("externals")]),e._v(" 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。")]),e._v(" "),v("p",[e._v("首先将 CDN 引入的依赖加入到 "),v("code",[e._v("externals")]),e._v(" 中。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/alvin0216/cdn/raw/master/images/cdn1.png",alt:""}})]),e._v(" "),v("p",[e._v("然后借助 html-webpack-plugin 将 CDN 文件打入 html:")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/alvin0216/cdn/raw/master/images/cdn2.png",alt:""}})]),e._v(" "),v("p",[e._v("这里有一点需要注意，在 html 中配置的 CDN 引入脚本一定要在 body 内的最底部，因为：")]),e._v(" "),v("ul",[v("li",[e._v("如果放在 body 上面或 header 内，则加载会阻塞整个页面渲染。")]),e._v(" "),v("li",[e._v("如果放在 body 外，则会在业务代码被加载之后加载，模块中使用了该模块将会报错。")])]),e._v(" "),v("p",[e._v("参考 "),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/7q5pgC5mBmjgGJ0wlBIqww",target:"_blank",rel:"noopener noreferrer"}},[e._v("动动手，将网页加载速度提升 5 倍"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);