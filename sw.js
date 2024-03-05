/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c2e870e60f297ad71e1ef2f40f351410"],["/NWPUscenery/index.html","7f892391e0e6cc2202b3d72c5fcd3d2e"],["/SchooLife/index.html","d2afc15da20dcf9a357897fe55815afe"],["/about/index.html","0bd388c9bc58a99ab9e838967294ba81"],["/air-conditioner/index.html","04c66eb48869185466b298c7562c1a84"],["/album/index.html","e6756c8557dee7d2be04d4459f08a41f"],["/anzhiyu/random.js","e8c102360c761e08a519820f0782505c"],["/archives/2023/06/index.html","59e3fa46ba3df553c63472314f6c249a"],["/archives/2023/07/index.html","5c2ecae28b4927b03a1346a08293114b"],["/archives/2023/08/index.html","51cd7c2d5b738861570ff05f2b593fa5"],["/archives/2023/09/index.html","00251f0b614ef5a896351485ce243af8"],["/archives/2023/10/index.html","1accda33f579790c0cb84901afe7520c"],["/archives/2023/11/index.html","a7bc375a0429b0d95de6ec051f048d57"],["/archives/2023/12/index.html","d6b9ff651b35dbf36617c9a013f03a2a"],["/archives/2023/index.html","2b37e8ecff397297aa4c1810eca3619f"],["/archives/2023/page/2/index.html","2b5c717b318198b7f680dca12bb1ee84"],["/archives/2023/page/3/index.html","12c24e130c5f0f5f903feba09f25655e"],["/archives/2024/01/index.html","a43fc6ab43c64ed86229d8848ebd0bd3"],["/archives/2024/02/index.html","0bf1ab0eac83e87b666265eeecd36373"],["/archives/2024/03/index.html","2ad01e382a246bb02fcdfced57deebd3"],["/archives/2024/index.html","cf4297bf64b42c31d89dbd70fb6659f6"],["/archives/2024/page/2/index.html","59ed9d9781b7e43d5bb404ea04d21b1e"],["/archives/index.html","59274444ace5b192e581b945b69ce424"],["/archives/page/2/index.html","6ee9173b49f491c6141a26084cc1d093"],["/archives/page/3/index.html","d2fc3e92056ee9a2ca2a5caa01435d70"],["/archives/page/4/index.html","515e6a234ef1042dd2b2b4bbeda8cd20"],["/baidu_verify_codeva-RzL329nU12.html","ab1a95911bbb13056dc9ab68bdc090a9"],["/bangumis/index.html","3487d10c436e6ea2d3064a2efbc51cfe"],["/categories/index.html","16369a2a67821db0c42714bcf7b1f334"],["/categories/博客/index.html","ccda170f53d38e3417faf40f1f4a1e04"],["/categories/大学生涯/index.html","21d0db0df615f9d225a63967461c9442"],["/categories/夺旗赛/index.html","1a2068fad724b6ccf2ad18812651e553"],["/categories/技术分享/index.html","0ef99c3ed85e7f81d07b3b7b987c8902"],["/categories/技术分享/page/2/index.html","4cbbe8c2c0618111b165b2f171006d87"],["/categories/技术分享/page/3/index.html","921b719cf262db7a483b03968ce53761"],["/categories/日常生活/index.html","3325220b2825fd53011e48c6c9e290be"],["/census/index.html","78eac1c6f71b0ebd713424e5bdbe59fc"],["/charts/index.html","06ea588259158c0db3855afeb462e7a6"],["/collections/index.html","df0d33d9beafe486ce0e1983a46c6915"],["/comments/index.html","b405191412fe11c814000cc508e3d10c"],["/cookies/index.html","e057eb5eef748f21c966aba2204c38f9"],["/copyright/index.html","f2d629906eabe953dd6d0983e38d946c"],["/css/custom.css","a5962a5e907fee374cdb83fc89952ee1"],["/css/hfengche.css","c5fb95e947bb333ed6caa177f9517de4"],["/css/index.css","632f43b1040cd7fb703d55f766567ebd"],["/css/title.css","a1b15f613c05c519484e264cdb056951"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/version-check.css","903fa3eaa4f8bdb1681489371081d78a"],["/css/welcome.css","cd80171defe96ae12b132391c18037f3"],["/dailyPhoto/index.html","b960d7b60b340fee217ddc615fdda52d"],["/electronfish/index.html","4044436149e2bec0f3757507917e15db"],["/envelope/index.html","ea70b24dade68d84073a6aac30618aed"],["/equipment/index.html","d245cc243ee72266c7ec4bc942aa6ca3"],["/essay/index.html","5bcdcf4f93c6cd0daaaf2291c1a47f2e"],["/fcircle/index.html","e4184f2487d4ce2515ddf93805905c39"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","946a56895876e5980588f0b811b686fa"],["/img/INFJ-A.png","c88819df7a2d4822cc97ef902cd145d8"],["/img/INFJ-A.svg","19491cb7e1556ddf958c26af80c5e0ab"],["/img/SQL_Injection_Fundamentals/2.png","c349d5b6cfee50a5c65253a7f55a614e"],["/img/SQL_Injection_Fundamentals/目标1.png","c5e9b067c12a357ba62f5932321e03bc"],["/img/SQL_Injection_Fundamentals/目标10.png","545e5c6e79a447a2ef360bc97f1be636"],["/img/SQL_Injection_Fundamentals/目标11.png","41c4195068491ee8f00fc021e0fa4ca7"],["/img/SQL_Injection_Fundamentals/目标12.png","9b563f4efcfedceecaab9df51c5cf5a2"],["/img/SQL_Injection_Fundamentals/目标13.png","4714a06726c969e5cefeebe52785a558"],["/img/SQL_Injection_Fundamentals/目标14.png","cbe52e02b60a5422c345f72a047b9f1f"],["/img/SQL_Injection_Fundamentals/目标15.png","22fc613a313d55383be05bff3585d436"],["/img/SQL_Injection_Fundamentals/目标16.png","4ac59b7ad70dffb5ec5a64b3658a2a2f"],["/img/SQL_Injection_Fundamentals/目标2.png","4d84f0cc565e16657d70901cec89d9f6"],["/img/SQL_Injection_Fundamentals/目标3.png","b8361f9a5e05ac6c44db7761fa0482f7"],["/img/SQL_Injection_Fundamentals/目标4.png","a8668fcf9665a1f94051f851765fdc77"],["/img/SQL_Injection_Fundamentals/目标5.png","56729cbe7f7e2c6773944f6b14518381"],["/img/SQL_Injection_Fundamentals/目标6.png","ecbaef9af4096c169231cbe21b66cbfc"],["/img/SQL_Injection_Fundamentals/目标7.png","f42e65ea6b45f7bf9890869aa06bc48e"],["/img/SQL_Injection_Fundamentals/目标8.png","003b403b26da78949c749f6a8200be6c"],["/img/SQL_Injection_Fundamentals/目标9.png","ae4969767f37bf2d15892d5e29d95e76"],["/img/SQL_Injection_Fundamentals/答案.png","18a8bb8981ec15ee0ad524d6fd473346"],["/img/SQL_Injection_Fundamentals/题干1.png","d30e7b9cf81185c8eabd297b6afff763"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/biji-round.png","cde6f6ff179438c63ab4775578d6b605"],["/img/boji.jpg","a08451cbe1b85541a6160b740eb64e21"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/darkgithubsnake.svg","7b286fbd89829627418c915d015354c2"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/fighting.svg","c1dcc2e52ffd4b4f1d21edd5c4ae838f"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/github-contribution-grid-snake.svg","6b7afa01466e5b6625a8d1c436f955c5"],["/img/learning.svg","47cc701af7ea1c78d416f34fd3237aba"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","02c930a47634de2b5d8d0418a3c9ef4b"],["/img/siteicon/144.png","0e2029005df706542daf828be6d246cd"],["/img/siteicon/16.png","67c6eaeefed984d03f085506462c9c35"],["/img/siteicon/32.png","a22bd9a12c5a3776719b0f4c8a1c1ed6"],["/img/siteicon/48.png","a098f0ca5e6eef2af54d4113693cd541"],["/img/siteicon/512.png","946a56895876e5980588f0b811b686fa"],["/img/siteicon/64.png","81d63de7004c7fa316cc4e7cc534e457"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/img/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/img/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","ff47f5bceb1dc2d319608f9492334f5c"],["/img/信安基础能力训练/猪圈密码.png","b44ac1d9963f20b1a3595a779dcfffe5"],["/img/信安基础能力训练/猪圈密码表.png","530cd9f268205d10fc4998a71c000bee"],["/img/信安基础能力训练/福尔摩斯.png","723594a5d5813dea83c288289e790544"],["/img/第三届网计-Misc/clip_image001.jpg","0c1d452732974aaf9a7b38b70a39c6e3"],["/img/第三届网计-Misc/clip_image002.jpg","564a4726bff7cd4e1d1350d2b2404de6"],["/img/第三届网计-Misc/docx隐写.png","42613659aa84b7d98898dff170318ca1"],["/img/第三届网计-Misc/纯黑的噩梦.png","fcb86862f03766b0815aacb18b5a3893"],["/img/第三届网计-Misc/踩2.png","ed7d13dfb8438098326c9de162193d5c"],["/img/第三届网计-Misc/踩踩我的图.png","10744567bb7b8072b818ea8c4d8f4082"],["/img/第三届网计-Web/Ez_PHP.jpg","ed0a53c5fecf620dd567a3dc4f6324a7"],["/img/第三届网计-Web/NormalShell.jpg","3f3979cf524895e55b88dceb5560f636"],["/img/第三届网计-Web/NormalShell_code.jpg","f3100a76d4cc8b6c88d6fad8b062e4c8"],["/img/第三届网计-Web/Normal_Shell.jpg","a798886faeb8fcf4884d822bdb5315d9"],["/img/第三届网计-Web/checkin.png","b629ddac4143d1b088db2ba9e9898d39"],["/img/计操实验一/实验一.png","c7b87003f96c069418bea292d0454a7b"],["/img/计操实验一/规范性1.png","521fa25da9e25b4fb6134388833fdb8d"],["/img/计操实验一/运行结果.png","5df4deecd99c4891f2d47d00d1625b7e"],["/img/计操实验三/3-1.png","b76d83dada19400aa249de81a8f58468"],["/img/计操实验三/3-2.1.png","5bfdb20ae80c719f7d1f5c05563edd51"],["/img/计操实验三/3-2.png","f02188ffbd43185d621340cdb13dbb62"],["/img/计操实验三/3-3.png","ebe2c448b3676ed60d87497fac6aa75a"],["/img/计操实验三/3-4.png","b8b7156b746f893dd4cf7357b618a66b"],["/img/计操实验三/3-5.png","364cc2219e821812640d205fcd04abe1"],["/img/计操实验三/3-6.png","716c082f44a649dc22fd7c7f71762e5e"],["/img/计操实验三/3初始化.png","3260d1e7733495c7ed183661091a9cf4"],["/img/计操实验三/3溢出.png","1284d331451bd509165253002a4a0222"],["/img/计操实验三/3规范化1.png","0dd0632030c88255a591eee0c8a15bf4"],["/img/计操实验三/3规范化3.png","5ea23c78b5564c0a1673b48668ea080d"],["/img/计操实验三/3规范化4.png","5cd0b69afd155d6584d475521002e7cf"],["/img/计操实验三/3规范性2.png","3e622d7deae8439380982b53831db06a"],["/img/计操实验三/实验三.png","335bbb2bd29f76443b77186958c9dfb1"],["/img/计操实验二/2规范1.png","34a7e2ff91cbe56544683f1c59708004"],["/img/计操实验二/2规范2.png","ca94b0a58099dc5c39af27d902784da2"],["/img/计操实验二/2运行结果.png","ee0ae215068296b7638e541de298c058"],["/img/计操实验二/2运行结果2.png","90f14b286cc215430adaaac42cb102fd"],["/img/计操实验二/2运行结果3.png","130b03c98db6e16a9d03390dc323c739"],["/img/计操实验二/2运行结果4.png","40d59166b1f9c6353c2b47ab85ab91c9"],["/img/计操实验二/实验二.png","0f7008c2454e028568d909ae58bb7b79"],["/index.html","79d1814de97b4a8a4f4f4f04a618a016"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/baidutongji.js","d49d7c587322bed68eedd185ee9f74f9"],["/js/cursor.js","f0821240ac3951a5a335fe155c6c3ccb"],["/js/danmu.js","1fdce53d2861ab34b47d25845d1cf4f8"],["/js/easy-Danmaku.js","b246c9b76d753826c4da361095893d57"],["/js/main.js","b3f8666f288b82654e769428a91a34f0"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","01a785be85937ac55f2f4d28d2502159"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","bb645e244d302eecb116df7cfc2859e4"],["/js/version-check.js","80c047dd636602f6a1358ebb5d95bcce"],["/js/welcome.js","bec684f122e654907c0a1ad4291e75d9"],["/link/index.html","bce62167000ed01aeebee96f63c5c105"],["/music/index.html","64e8d7ddafb038277ef11d99e21a9308"],["/page/2/index.html","315c29352ce686c2801f06738c5554e5"],["/page/3/index.html","60e42cec2b8443a9fc81541cd93542a4"],["/page/4/index.html","853dc3623f400b37bfc9f2553475e6ba"],["/posts/105a31a4.html","45b7b4d8851172e6124e501b0104f040"],["/posts/19c408c.html","fb8af2fc51bd7973e4dbb1d75e48188a"],["/posts/3405.html","89e5179c8aff20a11d6e028016b4072f"],["/posts/35e49d5e.html","86ab3725a835dfc52dd1629079b10869"],["/posts/3980e700.html","f65969e22fa313f0de37602f284d8b0f"],["/posts/3bfd1783.html","715233613eefa1bf777c4af6524abeac"],["/posts/3c96c005.html","f46f9cd4d6aaff1cd65c5f076123eede"],["/posts/3d879cfb.html","d0c04e4653d895ec1701d9bcd5201139"],["/posts/3f3de275.html","08c6f2d34cfd61480ab42adf263a3b88"],["/posts/41e39f2b.html","9b014be594c2917aeb8a453d5991a64c"],["/posts/422b.html","96473eb9b96d9bc8daad125220f8fbde"],["/posts/49fa10ba.html","7167c059e7d3b18ed49720e4ec1a44b6"],["/posts/4c41eeca.html","6cb66836dadb16991095c48ade338d3e"],["/posts/518ec1ac.html","180c9ff459af6d95e7a0ed9c3c9d0f57"],["/posts/61ac759f.html","fb3cac9b9981898c5da82f9c50f2eae9"],["/posts/6a3f672a.html","c8674d3c453db27514ed724631033f95"],["/posts/797d.html","9bec366a02530266d8bdd47a0c06dac9"],["/posts/79f9b780.html","7db532a95fed9e4dc01a1635ad10fab0"],["/posts/7c372084.html","36a11e199eab80bd2feca9ae7a2f7332"],["/posts/7dca2e02.html","b4795759a29a5751685856dafd3f2afd"],["/posts/8127414b.html","ed8600060e11cf8545610111bba1331d"],["/posts/86bbdefa.html","06becb1bf1c4cf522de7553b84c64574"],["/posts/8c84e76e.html","ec200e3453b7666f341d5a132aa00f3f"],["/posts/92211228.html","7d6050dcf14f7e6d9217c7fd031086c7"],["/posts/992dd5ba.html","55604b313ca504cb365cf6058a1fb2f8"],["/posts/9a2a157c.html","6c376a7d9b40b57feb0ec60d7173e011"],["/posts/9a5ae3b8.html","f1b1090509815846b770cdef962f941f"],["/posts/a008ab16.html","1b36b4ca3f7d6e7de5a997530b789307"],["/posts/a450d722.html","e5dd36819cb06a1c77a4fc84ff53bd18"],["/posts/b10237dc.html","39f8cd45d31783c643aba9f475893ecb"],["/posts/b2d12a7e.html","870bfeacff0e859f57b08ad64d5192b8"],["/posts/b4bc7df4.html","e306b2b96eadb371c1a395b44318095f"],["/posts/ba5c4fea.html","2b03d012c46e6f50cc60104cb860aba8"],["/posts/c3ec.html","101261d5e06d7e1adf26f2be9cd01e3f"],["/posts/c98645fd.html","374bb16ae09ff846029153d69c8b6f29"],["/posts/d98373ae.html","a81156a19a0587476b8739da8c1c1add"],["/posts/e26dd8b5.html","3b177a5b785ccc059b992124cb6f6447"],["/posts/f73e6dd5.html","974e55900c2787a7bdf8cf75e13d4a35"],["/privacy/index.html","f96948e102270c8a12155ca42113cb78"],["/sw-dom.js","bf6ea6ae328e030a094ca18e01e43498"],["/sw-register.js","9d75016a51e53554b2f3d50862d2f07b"],["/tags/2024/index.html","4dbd0d3f058eb4cfe5f479876fcbe040"],["/tags/API/index.html","3b83af819e1774ead83c671197754ae7"],["/tags/A星算法/index.html","00d9ea757f903de0dffe0c64d317b442"],["/tags/C/index.html","2b7a59dcbe21fc4b70e26e754c52e2fc"],["/tags/CDN/index.html","2c33e061d4040348d7c1d9f5b960d64b"],["/tags/CI-CD/index.html","8216595af438dad6a417d3bf6ac42bae"],["/tags/CTF/index.html","7c89d73490701f19446c41a487ad8ae3"],["/tags/Cookie/index.html","cdeb5c648e5a3960c0aa085c81338590"],["/tags/DIY/index.html","e1717af7e6c2a59f57b5b10ac68eb26f"],["/tags/DNS/index.html","2c26736ca16cac35c9fd7f8273f8c9da"],["/tags/Docker/index.html","65f1e2b1905d35be64f67986d6c18cba"],["/tags/ECS/index.html","3ccffb4b33197e97c2a7e8025f643fef"],["/tags/Git/index.html","3dde5122718c30948320d3caf0e5e3db"],["/tags/GitHub/index.html","a28abd0536b8195421b0186d15061834"],["/tags/Github/index.html","19b82f898e5ee96bf987fd2844ba9f82"],["/tags/Misc/index.html","2ca3bc3f385d752d5153f7ae90d9ebf9"],["/tags/QT/index.html","5929c7e393ae0b0ba99ddd71f529ba7d"],["/tags/SQL/index.html","a8708f3ffa1c3ef5b324ec7fe2b7a5df"],["/tags/Session/index.html","fd696a86e50dc2f7e3a87bc690a50b52"],["/tags/Token/index.html","825308ef9d2565f749f17a6b9bb9557e"],["/tags/VPN/index.html","8f68b390b8f74c9e80d95615754d6f5d"],["/tags/VPS/index.html","5b9c2aaae29782f41811a213e9ec9e8d"],["/tags/Web/index.html","b67b7158ad8c246bba08b65cd5d28a39"],["/tags/docker/index.html","78232a0091a5cb2d154659d23298dc0b"],["/tags/index.html","aded9907e6c0b15636a7c581b19ca5a3"],["/tags/jsDelivr/index.html","9c20f3858178432a8b490f2e527d9579"],["/tags/npm/index.html","ebddb919c21e40765a80c906c00be66d"],["/tags/waf/index.html","7163629ef21ea04cf1902bfafab74391"],["/tags/个人主页/index.html","6dedce8d47753337420805cf94fc27e0"],["/tags/代理/index.html","69d1c50b53002062c46f08c0223c762c"],["/tags/内存管理/index.html","dbdd9c66bc436d8f8524d6adbe23cfc0"],["/tags/北京欢迎你/index.html","899f88927d1d525e8f45c64083ed437b"],["/tags/博客/index.html","09c1b1c681b50e87ffc13e5c2a555eed"],["/tags/后端/index.html","c9d9f6a4d5f83ed4ff1fc451884bb874"],["/tags/图床/index.html","5e9236a439f2866ef01665496a6a2ef6"],["/tags/密码学/index.html","a71e4fa157c846f321b65cde1408d89d"],["/tags/工作流/index.html","8f5f794a9f2171211801ad223eebc2c4"],["/tags/年终总结/index.html","28bafb0c7a7415243fd69776146c9e1c"],["/tags/建站/index.html","e2c7f4d0dcc435c6cac6d45a19a1915a"],["/tags/栈帧/index.html","17783669494c733d801dce2ae09aca68"],["/tags/死锁/index.html","94d9d1711cf5b8347b47ff4c9f6f73b6"],["/tags/玩梗/index.html","81b3e1b0311f6fb9336c67b74262b7e6"],["/tags/网络安全/index.html","6ae12bf4173e0ffafe7a0312d9086590"],["/tags/网络安全/page/2/index.html","de3a0cb29b63dad550c9bc9c7ef71dda"],["/tags/自主开发/index.html","c85a455c82b56d22b69b9dbbb737b4e1"],["/tags/自建应用项目/index.html","bdb5ecf5dfe42ab4dec30c9ef894eb63"],["/tags/计操/index.html","321ee1e2ca51f4195c1e8b223b03626f"],["/tags/计算机网络/index.html","4748f6b8547e07ace4137323f128e715"],["/tags/进程调度/index.html","b780027fa8c7007b00b3953893eac462"],["/tags/阿里云/index.html","8b8a719e459e77a25e175c73b63fbcc4"],["/update/index.html","c5cb19007c4f0c6ee9ad9b7a1bb63790"],["/updatebrowser/browser-icon.svg","90bfee292370715771faf4d684294a86"],["/updatebrowser/font_1454899_pqhvobved2o.eot","045c03488f7b7a5c54160ba6ab9f15de"],["/updatebrowser/font_1454899_pqhvobved2o.ttf","ec4a443f94c260cdd15ad69ae2f0a6ea"],["/updatebrowser/font_1454899_pqhvobved2o.woff","e42c0aaf21a3500c72b5606ca7bd4dbe"],["/updatebrowser/index.html","9c1360f50ab770e95a05a3958bcd30f4"],["/updatebrowser/main.css","18e3f9f7ae56b1d1c54f8bd051c9ea16"],["/updatebrowser/updatebrowser.html","16ab16469084d5daca537110bcb73114"],["/wordScenery/index.html","a872f557c583e21ca44dbed5da117670"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
