var posts=["20240529154400/","20240527153500/","20240524154400/","20240525141200/","20240525154500/","20240524182500/","20240525130000/","20240610062200/","20240607123500/","20240519182100/","20240525154400/","20240525154400/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };