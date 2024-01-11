var posts=["posts/c3ec.html","posts/19c408c.html","posts/41e39f2b.html","posts/3bfd1783.html","posts/8c84e76e.html","posts/7dca2e02.html","posts/b4bc7df4.html","posts/3405.html","posts/422b.html","posts/797d.html","posts/e26dd8b5.html","posts/49fa10ba.html","posts/8127414b.html","posts/9a5ae3b8.html","posts/992dd5ba.html","posts/35e49d5e.html","posts/105a31a4.html","posts/518ec1ac.html","posts/3c96c005.html","posts/86bbdefa.html","posts/f73e6dd5.html","posts/b2d12a7e.html","posts/b3d4d39f.html","posts/ba5c4fea.html","posts/3d879cfb.html","posts/9a2a157c.html","posts/7c372084.html","posts/3f3de275.html","posts/c98645fd.html","posts/6a3f672a.html","posts/7f4bd536.html","posts/92211228.html","posts/a008ab16.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp","color":"vip","tag":"生活"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc3959f82.webp","color":"green","tag":"生活"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff42df52e.webp!linkavatar","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip","tag":"技术"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/gh/LJJbyZJU/pic_bed/img/badge/山库岳博.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈","color":"vip","tag":"技术"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事虽难做则必成！","siteshot":"https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0d149b0b3.webp","color":"vip","tag":"生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":true},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","recommend":true},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","recommend":true},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","recommend":true},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/gh/LJJbyZJU/pic_bed/img/badge/山库岳博.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈","recommend":false},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事虽难做则必成！","recommend":false}];
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