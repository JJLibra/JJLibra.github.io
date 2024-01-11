var posts=["posts/c3ec.html","posts/19c408c.html","posts/41e39f2b.html","posts/3bfd1783.html","posts/8c84e76e.html","posts/7dca2e02.html","posts/b4bc7df4.html","posts/3405.html","posts/422b.html","posts/797d.html","posts/e26dd8b5.html","posts/49fa10ba.html","posts/8127414b.html","posts/9a5ae3b8.html","posts/992dd5ba.html","posts/35e49d5e.html","posts/105a31a4.html","posts/518ec1ac.html","posts/3c96c005.html","posts/86bbdefa.html","posts/f73e6dd5.html","posts/b2d12a7e.html","posts/b3d4d39f.html","posts/ba5c4fea.html","posts/3d879cfb.html","posts/9a2a157c.html","posts/7c372084.html","posts/3f3de275.html","posts/c98645fd.html","posts/6a3f672a.html","posts/7f4bd536.html","posts/92211228.html","posts/a008ab16.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://p.zhheo.com/2022d8aaa85e003815b7274b4d135adf1b9f283510.png!cover_siteshot","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://p.zhheo.com/2023409e2dee361faf95c9e405125e2d4358070001.png!cover_siteshot","color":"vip","tag":"生活"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://p.zhheo.com/OWwtql25990281613802479556.png!cover_siteshot","color":"green","tag":"生活"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff42df52e.webp!linkavatar","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip","tag":"技术"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","recommend":true},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1736191951&spec=640","descr":"寒蝉黎明之时，便是重生之日","recommend":true},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/gh/LJJbyZJU/pic_bed/img/badge/山库岳博.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈","recommend":false},{"name":"小橙子","link":"https://anorange.icu","avatar":"https://anorange.icu/upload/headjpg.jpg","descr":"日落归山海，山海藏深意","recommend":false},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事虽难做则必成！","recommend":false},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://bu.dusays.com/2023/06/30/649e9ec88cf47.png","descr":"人有悲欢离合 月有阴晴圆缺","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };