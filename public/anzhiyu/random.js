var posts=["C_23_中的_GCHandle/","Cinemachine_源码解析/","Hexo_Anzhiyu_主题配置_giscus_评论系统/","Knuth_Shuffle_洗牌算法/","Logseq_hierarchy/","Logseq_查询不在特定命名空间下的页面/","Markdown_实现_Callout/","SVN_提交所有修改/","关于/","多个_Unity_进程使用一个_Unity_工程/","跳笔表达/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };