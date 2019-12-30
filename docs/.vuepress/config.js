module.exports = {
  port: "4040", // 开发端口
  title: "guodada-note",
  description: "郭大大的个人笔记",
  themeConfig: {
    smoothScroll: true,
    repo: "https://github.com/gershonv",
    // nav:
    sidebar: "auto",
    nav: require("./nav")
  },
  plugins: ["@vuepress/back-to-top"]
};
