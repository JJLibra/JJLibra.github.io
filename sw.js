/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","44faa86fc3b41f2a6eb4063c80fe7be3"],["/NWPUscenery/index.html","04114d2e57dda8104e323d3beb1449b0"],["/SchooLife/index.html","78c6cd3fbe56dbc9a869a279628d2d17"],["/about/index.html","d55047d626f4845810ee5481304a9779"],["/air-conditioner/index.html","e702a2cc44b24fcb17822fbd6e07e18d"],["/album/index.html","02cfa8599d365c5847efe997b833e7f2"],["/anzhiyu/random.js","6d0d9bd1ef84acddc4d01c13bd3c249c"],["/archives/2023/06/index.html","aec143846bfd40ff12dbe121ef78b287"],["/archives/2023/07/index.html","0c0d70fd57bc78ecc599856a1871199a"],["/archives/2023/08/index.html","cea73149b88ab13ab30d8951e5146f92"],["/archives/2023/09/index.html","39ff2f56ace6fef98b52a12a7ccd8685"],["/archives/2023/10/index.html","ec32a3fa440312f3df6970e61068ef46"],["/archives/2023/11/index.html","991d7964cb568fc10050541b84bbae3b"],["/archives/2023/12/index.html","3233cb340791ee9cc9f741b1bbf27751"],["/archives/2023/index.html","2f7791f322a3310d67f2f59c313882c5"],["/archives/2023/page/2/index.html","7be6c2574cace0c1166bae9d883f552c"],["/archives/2023/page/3/index.html","0504395d5c2b3aed8eb0e7beefd1e5da"],["/archives/2024/01/index.html","d03514ff01bd53486018aab066768a69"],["/archives/2024/02/index.html","57f4f48b760ff5620dcfd01464fe4b49"],["/archives/2024/03/index.html","25c5487879df73e03343262077a08713"],["/archives/2024/index.html","007516964209f3bfe66984a426ef4611"],["/archives/2024/page/2/index.html","9e944e435ae622145ecc2682b399841a"],["/archives/index.html","5402f21654d3553fca33eb409310519f"],["/archives/page/2/index.html","75a0796c4e79ba800db752c24f3fd3b9"],["/archives/page/3/index.html","54ed6d11e05d084fe13f135382092b7a"],["/archives/page/4/index.html","5831e24f966fb1e0962fa23ea68084a2"],["/baidu_verify_codeva-RzL329nU12.html","8b568038c9751d6bbe4022d69f55e6ba"],["/bangumis/index.html","99b67894e710a8d6c49faeaec85cc932"],["/categories/index.html","06a6c3c1ca1a0bb716fb31632123cdfb"],["/categories/博客/index.html","8ba1e0df6413091142f05ee2948fa176"],["/categories/大学生涯/index.html","964c8412755ecfb7fdebf9feb565284b"],["/categories/夺旗赛/index.html","f19a844699c9de3c3e6bfd62026cbda9"],["/categories/技术分享/index.html","bd7cc9e970441264b7bcec85c3488dfa"],["/categories/技术分享/page/2/index.html","a376c9c429d87a27c1dfd7ef97aab611"],["/categories/技术分享/page/3/index.html","742da556a0924e29ef0958bcf9471a44"],["/categories/日常生活/index.html","16bfcecf187b918b94f5882c081da682"],["/census/index.html","a51933bbb599b837db64c92fb8893886"],["/charts/index.html","ad127b21d0c47c3c4d39950f994beee7"],["/collections/index.html","2868ca7d7a24f325119d7a9fee304647"],["/comments/index.html","7e9f66b265b1d09282b69742833a6b23"],["/cookies/index.html","cb6917e6047fca2a34c00cfcffa4899e"],["/copyright/index.html","5171690fcfb1302c7a3d264d058e8f93"],["/css/custom.css","a5962a5e907fee374cdb83fc89952ee1"],["/css/hfengche.css","c5fb95e947bb333ed6caa177f9517de4"],["/css/index.css","632f43b1040cd7fb703d55f766567ebd"],["/css/title.css","a1b15f613c05c519484e264cdb056951"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/version-check.css","903fa3eaa4f8bdb1681489371081d78a"],["/css/welcome.css","cd80171defe96ae12b132391c18037f3"],["/dailyPhoto/index.html","d086776ef76a5fe57156e484413f2c4f"],["/electronfish/index.html","bd2a190d068ba8411d5b9673a2a6e175"],["/envelope/index.html","21259e018849fb11cfd6dd38b582a6e1"],["/equipment/index.html","0ae25ac3817e0d5b7be8c348380638a5"],["/essay/index.html","820950ae4c52558fcee1313e3803e222"],["/fcircle/index.html","d35fd16d309c8b180efa80a6fc452dd4"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","946a56895876e5980588f0b811b686fa"],["/img/INFJ-A.png","c88819df7a2d4822cc97ef902cd145d8"],["/img/INFJ-A.svg","19491cb7e1556ddf958c26af80c5e0ab"],["/img/SQL_Injection_Fundamentals/2.png","c349d5b6cfee50a5c65253a7f55a614e"],["/img/SQL_Injection_Fundamentals/目标1.png","c5e9b067c12a357ba62f5932321e03bc"],["/img/SQL_Injection_Fundamentals/目标10.png","545e5c6e79a447a2ef360bc97f1be636"],["/img/SQL_Injection_Fundamentals/目标11.png","41c4195068491ee8f00fc021e0fa4ca7"],["/img/SQL_Injection_Fundamentals/目标12.png","9b563f4efcfedceecaab9df51c5cf5a2"],["/img/SQL_Injection_Fundamentals/目标13.png","4714a06726c969e5cefeebe52785a558"],["/img/SQL_Injection_Fundamentals/目标14.png","cbe52e02b60a5422c345f72a047b9f1f"],["/img/SQL_Injection_Fundamentals/目标15.png","22fc613a313d55383be05bff3585d436"],["/img/SQL_Injection_Fundamentals/目标16.png","4ac59b7ad70dffb5ec5a64b3658a2a2f"],["/img/SQL_Injection_Fundamentals/目标2.png","4d84f0cc565e16657d70901cec89d9f6"],["/img/SQL_Injection_Fundamentals/目标3.png","b8361f9a5e05ac6c44db7761fa0482f7"],["/img/SQL_Injection_Fundamentals/目标4.png","a8668fcf9665a1f94051f851765fdc77"],["/img/SQL_Injection_Fundamentals/目标5.png","56729cbe7f7e2c6773944f6b14518381"],["/img/SQL_Injection_Fundamentals/目标6.png","ecbaef9af4096c169231cbe21b66cbfc"],["/img/SQL_Injection_Fundamentals/目标7.png","f42e65ea6b45f7bf9890869aa06bc48e"],["/img/SQL_Injection_Fundamentals/目标8.png","003b403b26da78949c749f6a8200be6c"],["/img/SQL_Injection_Fundamentals/目标9.png","ae4969767f37bf2d15892d5e29d95e76"],["/img/SQL_Injection_Fundamentals/答案.png","18a8bb8981ec15ee0ad524d6fd473346"],["/img/SQL_Injection_Fundamentals/题干1.png","d30e7b9cf81185c8eabd297b6afff763"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/biji-round.png","cde6f6ff179438c63ab4775578d6b605"],["/img/boji.jpg","a08451cbe1b85541a6160b740eb64e21"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/darkgithubsnake.svg","7b286fbd89829627418c915d015354c2"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/fighting.svg","c1dcc2e52ffd4b4f1d21edd5c4ae838f"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/github-contribution-grid-snake.svg","6b7afa01466e5b6625a8d1c436f955c5"],["/img/learning.svg","47cc701af7ea1c78d416f34fd3237aba"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","02c930a47634de2b5d8d0418a3c9ef4b"],["/img/siteicon/144.png","0e2029005df706542daf828be6d246cd"],["/img/siteicon/16.png","67c6eaeefed984d03f085506462c9c35"],["/img/siteicon/32.png","a22bd9a12c5a3776719b0f4c8a1c1ed6"],["/img/siteicon/48.png","a098f0ca5e6eef2af54d4113693cd541"],["/img/siteicon/512.png","946a56895876e5980588f0b811b686fa"],["/img/siteicon/64.png","81d63de7004c7fa316cc4e7cc534e457"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/img/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/img/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","ff47f5bceb1dc2d319608f9492334f5c"],["/img/信安基础能力训练/猪圈密码.png","b44ac1d9963f20b1a3595a779dcfffe5"],["/img/信安基础能力训练/猪圈密码表.png","530cd9f268205d10fc4998a71c000bee"],["/img/信安基础能力训练/福尔摩斯.png","723594a5d5813dea83c288289e790544"],["/img/第三届网计-Misc/clip_image001.jpg","0c1d452732974aaf9a7b38b70a39c6e3"],["/img/第三届网计-Misc/clip_image002.jpg","564a4726bff7cd4e1d1350d2b2404de6"],["/img/第三届网计-Misc/docx隐写.png","42613659aa84b7d98898dff170318ca1"],["/img/第三届网计-Misc/纯黑的噩梦.png","fcb86862f03766b0815aacb18b5a3893"],["/img/第三届网计-Misc/踩2.png","ed7d13dfb8438098326c9de162193d5c"],["/img/第三届网计-Misc/踩踩我的图.png","10744567bb7b8072b818ea8c4d8f4082"],["/img/第三届网计-Web/Ez_PHP.jpg","ed0a53c5fecf620dd567a3dc4f6324a7"],["/img/第三届网计-Web/NormalShell.jpg","3f3979cf524895e55b88dceb5560f636"],["/img/第三届网计-Web/NormalShell_code.jpg","f3100a76d4cc8b6c88d6fad8b062e4c8"],["/img/第三届网计-Web/Normal_Shell.jpg","a798886faeb8fcf4884d822bdb5315d9"],["/img/第三届网计-Web/checkin.png","b629ddac4143d1b088db2ba9e9898d39"],["/img/计操实验一/实验一.png","c7b87003f96c069418bea292d0454a7b"],["/img/计操实验一/规范性1.png","521fa25da9e25b4fb6134388833fdb8d"],["/img/计操实验一/运行结果.png","5df4deecd99c4891f2d47d00d1625b7e"],["/img/计操实验三/3-1.png","b76d83dada19400aa249de81a8f58468"],["/img/计操实验三/3-2.1.png","5bfdb20ae80c719f7d1f5c05563edd51"],["/img/计操实验三/3-2.png","f02188ffbd43185d621340cdb13dbb62"],["/img/计操实验三/3-3.png","ebe2c448b3676ed60d87497fac6aa75a"],["/img/计操实验三/3-4.png","b8b7156b746f893dd4cf7357b618a66b"],["/img/计操实验三/3-5.png","364cc2219e821812640d205fcd04abe1"],["/img/计操实验三/3-6.png","716c082f44a649dc22fd7c7f71762e5e"],["/img/计操实验三/3初始化.png","3260d1e7733495c7ed183661091a9cf4"],["/img/计操实验三/3溢出.png","1284d331451bd509165253002a4a0222"],["/img/计操实验三/3规范化1.png","0dd0632030c88255a591eee0c8a15bf4"],["/img/计操实验三/3规范化3.png","5ea23c78b5564c0a1673b48668ea080d"],["/img/计操实验三/3规范化4.png","5cd0b69afd155d6584d475521002e7cf"],["/img/计操实验三/3规范性2.png","3e622d7deae8439380982b53831db06a"],["/img/计操实验三/实验三.png","335bbb2bd29f76443b77186958c9dfb1"],["/img/计操实验二/2规范1.png","34a7e2ff91cbe56544683f1c59708004"],["/img/计操实验二/2规范2.png","ca94b0a58099dc5c39af27d902784da2"],["/img/计操实验二/2运行结果.png","ee0ae215068296b7638e541de298c058"],["/img/计操实验二/2运行结果2.png","90f14b286cc215430adaaac42cb102fd"],["/img/计操实验二/2运行结果3.png","130b03c98db6e16a9d03390dc323c739"],["/img/计操实验二/2运行结果4.png","40d59166b1f9c6353c2b47ab85ab91c9"],["/img/计操实验二/实验二.png","0f7008c2454e028568d909ae58bb7b79"],["/index.html","b73c322dc84fc757d80384377bc60daf"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/baidutongji.js","d49d7c587322bed68eedd185ee9f74f9"],["/js/cursor.js","f0821240ac3951a5a335fe155c6c3ccb"],["/js/danmu.js","1fdce53d2861ab34b47d25845d1cf4f8"],["/js/easy-Danmaku.js","b246c9b76d753826c4da361095893d57"],["/js/main.js","b3f8666f288b82654e769428a91a34f0"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","01a785be85937ac55f2f4d28d2502159"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","bb645e244d302eecb116df7cfc2859e4"],["/js/version-check.js","80c047dd636602f6a1358ebb5d95bcce"],["/js/welcome.js","bec684f122e654907c0a1ad4291e75d9"],["/link/index.html","32ea05163a9df8c4855196d6dfee94d2"],["/music/index.html","bbcc1aa2035d78a69a412b990a88cf72"],["/page/2/index.html","4046669cfb017808b54b9d4053bb5665"],["/page/3/index.html","0bcbe255ad7989f04deab28aa1df469f"],["/page/4/index.html","61073b8eb2b34fb0b4d2679349d36b32"],["/posts/105a31a4.html","2623b8a415f274c55b32b12433a6d3e7"],["/posts/19c408c.html","3f7476327a7675fd3d8412f118752a36"],["/posts/3405.html","73b5ef471e27ac7a8a18e188915b7bd8"],["/posts/35e49d5e.html","425941751f7cbd93c2482ac7779b51df"],["/posts/3980e700.html","cf28f143f4baf77047a5c77a40ac7c58"],["/posts/3bfd1783.html","3827ae5d7c9738d401f23606ffffb6bd"],["/posts/3c96c005.html","be029b3f3924a9aa1c1669658b3e23a4"],["/posts/3d879cfb.html","5da9542908c85716379c75368738f41a"],["/posts/3f3de275.html","29d680e12b85cd95edb5bf1f31e7942c"],["/posts/41e39f2b.html","b3d2b99c66eeefff56d9d49e903f13b3"],["/posts/422b.html","00f664027e816852285889b312cbadf8"],["/posts/49fa10ba.html","a5422ef25998ae668b3f0cc4a0ed3f7a"],["/posts/4c41eeca.html","63e59f710e0ab171be46b61164d4a54b"],["/posts/518ec1ac.html","266cd4de3a1417184b547f948798d47d"],["/posts/61ac759f.html","3546afee23a635416d33082c678ee695"],["/posts/6a3f672a.html","bf81218a145359f0bbc5e04306ca39e0"],["/posts/797d.html","274bc0ca9c0f9451c01442a6f78baeae"],["/posts/79f9b780.html","c31a937b2c92639bb64148699cdaf22e"],["/posts/7c372084.html","5515187df87274d2a2f56a09f0bea2a0"],["/posts/7dca2e02.html","77b520ca9f44ebb1e2f8588066f8bb75"],["/posts/8127414b.html","93017f804e4a594fb456570b31ea6a9f"],["/posts/86bbdefa.html","0f36bf5542cf20b62d61faa7ade552dd"],["/posts/8c84e76e.html","dd37643cd5d6730c114ee674c72a2126"],["/posts/92211228.html","81c2932b4ce8767eee80c69e357e2233"],["/posts/992dd5ba.html","8ced1980cbf27f91ad61491deaf8620b"],["/posts/9a2a157c.html","b6b2e33435ff3b3ca89d679d12c7dc70"],["/posts/9a5ae3b8.html","0fa4b94321b4f783be7c0439412cba3a"],["/posts/a008ab16.html","24d31c8c96812b67633b2e775c8c6435"],["/posts/a450d722.html","91b2637599310f284d6ac1f940022cc5"],["/posts/b10237dc.html","24720654d9c626c1abdc5603c4cf8794"],["/posts/b2d12a7e.html","902b4eb7eacbc4e80e7327c0a55643e0"],["/posts/b4bc7df4.html","6e9bf65fc17be59aa51f0ce1f07cd60a"],["/posts/ba5c4fea.html","2b6a03e032879a64348154f099619278"],["/posts/c3ec.html","3297a594a32bcd2efea2945b4f83a274"],["/posts/c98645fd.html","3f13155ce01a2dce63e7c57c91915fa0"],["/posts/d98373ae.html","85f0e2ec739f350fde36bf95912bb3d0"],["/posts/e26dd8b5.html","2a02ae91827a851bd24b6265899ec96b"],["/posts/f73e6dd5.html","2f0b0426b927a312eb9130d8b2f37503"],["/privacy/index.html","8b49b06ca427a59594e2bc58a3f8f932"],["/sw-register.js","5f3a2925a3896a8e1a319c521f3a0d6b"],["/tags/2024/index.html","5399bc6a320e705be26e7b429ceaff87"],["/tags/API/index.html","2901f7f7da74e7e026dfe96a363497fd"],["/tags/A星算法/index.html","1ba74233406cbec9ce6d239ae5ac7390"],["/tags/C/index.html","5c4afafa5b0152abb60282aa80d3cae7"],["/tags/CDN/index.html","bd80b1a4d735025ea32ee48d64504788"],["/tags/CI-CD/index.html","1e28244e70bc036af1b16172224118c5"],["/tags/CTF/index.html","a4f8ab4eeb72b6ee84188e44f92ff574"],["/tags/Cookie/index.html","b1ac51a5b1b9f79e942ec64949f7ce65"],["/tags/DIY/index.html","ee03073f9dc0a063c0af7c7360c135bf"],["/tags/DNS/index.html","d3e35de193daf7e4ef2f3f5b0d03d266"],["/tags/Docker/index.html","3ca4ec0f0ff3cabb914f1b2e273beac4"],["/tags/ECS/index.html","aad846da68ae2e72f92982f35532d65d"],["/tags/Git/index.html","014d5d022fff6ab71355964c2f5ebdbf"],["/tags/GitHub/index.html","839ed7c2533fc2007eccdd4b51914cf6"],["/tags/Github/index.html","dc65e7a4e726164f01cbeb0fd32b2def"],["/tags/Misc/index.html","00700c0af1b7c0e80bd5a0eb71cee2cb"],["/tags/QT/index.html","50bc5a7648f39b12cc9ecbbd1a8d62f2"],["/tags/SQL/index.html","e451702b32b7f718780ace0e1bd5a6a7"],["/tags/Session/index.html","791b33352b377400ec45214ca2a3719a"],["/tags/Token/index.html","36a77f2b00bd8deefabf3c6701e20616"],["/tags/VPN/index.html","d1e5134835b1d39a7687b95953d5df4b"],["/tags/VPS/index.html","c9436dd30ccb31dda4265c7b14abb284"],["/tags/Web/index.html","60016da5fa25f978fc870992bb85fb54"],["/tags/docker/index.html","0718b3504a8719fa48f5b9b801ced269"],["/tags/index.html","c09faa8b77a8944aa430b0b4286059c3"],["/tags/jsDelivr/index.html","3a0e067e86766029a4141347ff579cb3"],["/tags/npm/index.html","eb87438b5feaf1c157b7ca8b70681df9"],["/tags/waf/index.html","fe99019d0d74a451418e99443c682a27"],["/tags/个人主页/index.html","b3fb61c2a7f8f9fed3189c4074ff1d75"],["/tags/代理/index.html","c2592603b988bdf155ddaf236190b13d"],["/tags/内存管理/index.html","e178287875e919e17b0c5c97aad3df22"],["/tags/北京欢迎你/index.html","ec2b2b0ffb93be724cffe4ad1ac7110e"],["/tags/博客/index.html","c55d22efc9efb8f0227b46b23713eae1"],["/tags/后端/index.html","fce3867db3961f89acabea21def9e00b"],["/tags/图床/index.html","6d0a3d3b4190d0bdb0cc8666e60e5cbd"],["/tags/密码学/index.html","49731075866c6e75e6ce75b56e7d4b3c"],["/tags/工作流/index.html","178328d2fb66e2f3312398e85d928888"],["/tags/年终总结/index.html","e3cb9e64e5eb85f97ac1068eba612598"],["/tags/建站/index.html","cb6b804e438359b02c6fa5bcaa277360"],["/tags/栈帧/index.html","bca679fa178e0e3f464d86735baa9cfe"],["/tags/死锁/index.html","62391fc911d519c8a0ffb803b599a38c"],["/tags/玩梗/index.html","a71e2ad07617a6a0c2a01a58f667545c"],["/tags/网络安全/index.html","9d4ea49afc0071a04b5638515b336979"],["/tags/网络安全/page/2/index.html","e31bcc17ce490539fdd4d86ce316f131"],["/tags/自主开发/index.html","43239e4abb61de3fba33ebc742cd677a"],["/tags/自建应用项目/index.html","9c7161bc166af34f8f2e33d436f590ca"],["/tags/计操/index.html","bd637300670688d03cc63f1d66525877"],["/tags/计算机网络/index.html","69c449995f002c90e0e9d028b6d23289"],["/tags/进程调度/index.html","4867acbdd313a0a66c3c45f5813bb482"],["/tags/阿里云/index.html","68d5275e30ad3a589ccb5ee6df8defbd"],["/update/index.html","f0906d26ce805b41b1d066f6e30b07b9"],["/updatebrowser/browser-icon.svg","90bfee292370715771faf4d684294a86"],["/updatebrowser/font_1454899_pqhvobved2o.eot","045c03488f7b7a5c54160ba6ab9f15de"],["/updatebrowser/font_1454899_pqhvobved2o.ttf","ec4a443f94c260cdd15ad69ae2f0a6ea"],["/updatebrowser/font_1454899_pqhvobved2o.woff","e42c0aaf21a3500c72b5606ca7bd4dbe"],["/updatebrowser/index.html","bd18592c0bc785dbff9c0357bd6ec3bf"],["/updatebrowser/main.css","18e3f9f7ae56b1d1c54f8bd051c9ea16"],["/updatebrowser/updatebrowser.html","b9b2b719885832cd94b760885b7400e6"],["/wordScenery/index.html","ffdc5411743a8621d3d71953ddc37c50"]];
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
