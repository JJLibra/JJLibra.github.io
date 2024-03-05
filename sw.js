/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d4e89dcb14541bcf401ebb94ec5c315c"],["/NWPUscenery/index.html","ff928c68831f1b5c658234f65f31b1b2"],["/SchooLife/index.html","40d97065bbaadc77a49f4d5926a3638a"],["/about/index.html","d418c0de1abcdfd8385cad986cf3337c"],["/air-conditioner/index.html","8341bd23dab0e98602a072a5c1adf9f8"],["/album/index.html","6a98afaccf828648c27a396bc0198ada"],["/anzhiyu/random.js","6d0d9bd1ef84acddc4d01c13bd3c249c"],["/archives/2023/06/index.html","a74dcdc4071ad4445f17e9ff16a2ae4c"],["/archives/2023/07/index.html","b4cc173585645bca7850727bef67581b"],["/archives/2023/08/index.html","64809bf4de14d85e0e3cbb3ee93a4a24"],["/archives/2023/09/index.html","05b8195cc507d6baf66fec491125113c"],["/archives/2023/10/index.html","b865a096672bb66d1ca9b117c86c6139"],["/archives/2023/11/index.html","a727949c69af61ca3c8f8d41dd9811a4"],["/archives/2023/12/index.html","7e7e017f98895b607ab1b0a0efb87261"],["/archives/2023/index.html","aacc0090a0768ed3f091fc4e03a5f055"],["/archives/2023/page/2/index.html","ca513e1f9839cd4297eedf918f61640b"],["/archives/2023/page/3/index.html","e31eaca6c16a0d73f0ca79580a2c8afa"],["/archives/2024/01/index.html","e4b79358a773c1670197ce20479433e2"],["/archives/2024/02/index.html","600f10e116824a705b70b1393577a5eb"],["/archives/2024/03/index.html","b9efa53e65ab03e84bfa597ceca2aba0"],["/archives/2024/index.html","213419faf529280412e357b181013eb1"],["/archives/2024/page/2/index.html","c694f5a53e9a6ef1226a0bd9f4bc06d3"],["/archives/index.html","669679ef606191cb35803d8dfd76e271"],["/archives/page/2/index.html","a8203fe551ef4911699a053a7bb349dc"],["/archives/page/3/index.html","3d96564a67ee5bb7f35386a144c949d9"],["/archives/page/4/index.html","d89d2e8f43f7edd157d9d75324911757"],["/baidu_verify_codeva-RzL329nU12.html","a5a87a62e735e538b1f4f6dffc307f52"],["/bangumis/index.html","4a50486df486fd177e61a06284b2bcc1"],["/categories/index.html","8db5afcc00863ffdb82ac7723f5e75cb"],["/categories/博客/index.html","182f59615e903f111db31403a55e9628"],["/categories/大学生涯/index.html","c7c7d7e9aec7ff96c57bcfb8d96100fc"],["/categories/夺旗赛/index.html","67a37cf327512db079eb09d8ec58c57b"],["/categories/技术分享/index.html","d56d6dd1c9a7a9c277c14be6084c7d99"],["/categories/技术分享/page/2/index.html","17d47333a5c9b9634fd81a8024fd50df"],["/categories/技术分享/page/3/index.html","52539811294b1b326b64711ed7eb90bc"],["/categories/日常生活/index.html","f5b3046450cb968735b812ae98522ab0"],["/census/index.html","223c32ce0b83d478d97d3adf78ecc1de"],["/charts/index.html","ad104fe1e9b858bfb376f8da0daf978e"],["/collections/index.html","c82ea4dafa5ea72360537bc03e3e5229"],["/comments/index.html","54c8f8a71dad43d8ecc808091c7634be"],["/cookies/index.html","533c1c6189b2e1fb80f63dd4abf6f0ee"],["/copyright/index.html","2c41c9b09f7fcb288073e11fa3099bf0"],["/css/custom.css","a5962a5e907fee374cdb83fc89952ee1"],["/css/hfengche.css","c5fb95e947bb333ed6caa177f9517de4"],["/css/index.css","632f43b1040cd7fb703d55f766567ebd"],["/css/title.css","a1b15f613c05c519484e264cdb056951"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/version-check.css","903fa3eaa4f8bdb1681489371081d78a"],["/css/welcome.css","cd80171defe96ae12b132391c18037f3"],["/dailyPhoto/index.html","e92963112e111addb1f25d060d25b8b5"],["/electronfish/index.html","e93c6dea0dd942b1fb1ad96d8b83ce59"],["/envelope/index.html","32f47d2f5ffdc07a73e0caf24dcaa589"],["/equipment/index.html","d0b86fbf39f8e6da1bd1af1868a951f8"],["/essay/index.html","ff647a6b33f3816e7612be0c2160c96f"],["/fcircle/index.html","bfc0fdaad79085d34ea0a6a0d5047944"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","946a56895876e5980588f0b811b686fa"],["/img/INFJ-A.png","c88819df7a2d4822cc97ef902cd145d8"],["/img/INFJ-A.svg","19491cb7e1556ddf958c26af80c5e0ab"],["/img/SQL_Injection_Fundamentals/2.png","c349d5b6cfee50a5c65253a7f55a614e"],["/img/SQL_Injection_Fundamentals/目标1.png","c5e9b067c12a357ba62f5932321e03bc"],["/img/SQL_Injection_Fundamentals/目标10.png","545e5c6e79a447a2ef360bc97f1be636"],["/img/SQL_Injection_Fundamentals/目标11.png","41c4195068491ee8f00fc021e0fa4ca7"],["/img/SQL_Injection_Fundamentals/目标12.png","9b563f4efcfedceecaab9df51c5cf5a2"],["/img/SQL_Injection_Fundamentals/目标13.png","4714a06726c969e5cefeebe52785a558"],["/img/SQL_Injection_Fundamentals/目标14.png","cbe52e02b60a5422c345f72a047b9f1f"],["/img/SQL_Injection_Fundamentals/目标15.png","22fc613a313d55383be05bff3585d436"],["/img/SQL_Injection_Fundamentals/目标16.png","4ac59b7ad70dffb5ec5a64b3658a2a2f"],["/img/SQL_Injection_Fundamentals/目标2.png","4d84f0cc565e16657d70901cec89d9f6"],["/img/SQL_Injection_Fundamentals/目标3.png","b8361f9a5e05ac6c44db7761fa0482f7"],["/img/SQL_Injection_Fundamentals/目标4.png","a8668fcf9665a1f94051f851765fdc77"],["/img/SQL_Injection_Fundamentals/目标5.png","56729cbe7f7e2c6773944f6b14518381"],["/img/SQL_Injection_Fundamentals/目标6.png","ecbaef9af4096c169231cbe21b66cbfc"],["/img/SQL_Injection_Fundamentals/目标7.png","f42e65ea6b45f7bf9890869aa06bc48e"],["/img/SQL_Injection_Fundamentals/目标8.png","003b403b26da78949c749f6a8200be6c"],["/img/SQL_Injection_Fundamentals/目标9.png","ae4969767f37bf2d15892d5e29d95e76"],["/img/SQL_Injection_Fundamentals/答案.png","18a8bb8981ec15ee0ad524d6fd473346"],["/img/SQL_Injection_Fundamentals/题干1.png","d30e7b9cf81185c8eabd297b6afff763"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/biji-round.png","cde6f6ff179438c63ab4775578d6b605"],["/img/boji.jpg","a08451cbe1b85541a6160b740eb64e21"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/darkgithubsnake.svg","7b286fbd89829627418c915d015354c2"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/fighting.svg","c1dcc2e52ffd4b4f1d21edd5c4ae838f"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/github-contribution-grid-snake.svg","6b7afa01466e5b6625a8d1c436f955c5"],["/img/learning.svg","47cc701af7ea1c78d416f34fd3237aba"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","02c930a47634de2b5d8d0418a3c9ef4b"],["/img/siteicon/144.png","0e2029005df706542daf828be6d246cd"],["/img/siteicon/16.png","67c6eaeefed984d03f085506462c9c35"],["/img/siteicon/32.png","a22bd9a12c5a3776719b0f4c8a1c1ed6"],["/img/siteicon/48.png","a098f0ca5e6eef2af54d4113693cd541"],["/img/siteicon/512.png","946a56895876e5980588f0b811b686fa"],["/img/siteicon/64.png","81d63de7004c7fa316cc4e7cc534e457"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/img/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/img/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","ff47f5bceb1dc2d319608f9492334f5c"],["/img/信安基础能力训练/猪圈密码.png","b44ac1d9963f20b1a3595a779dcfffe5"],["/img/信安基础能力训练/猪圈密码表.png","530cd9f268205d10fc4998a71c000bee"],["/img/信安基础能力训练/福尔摩斯.png","723594a5d5813dea83c288289e790544"],["/img/第三届网计-Misc/clip_image001.jpg","0c1d452732974aaf9a7b38b70a39c6e3"],["/img/第三届网计-Misc/clip_image002.jpg","564a4726bff7cd4e1d1350d2b2404de6"],["/img/第三届网计-Misc/docx隐写.png","42613659aa84b7d98898dff170318ca1"],["/img/第三届网计-Misc/纯黑的噩梦.png","fcb86862f03766b0815aacb18b5a3893"],["/img/第三届网计-Misc/踩2.png","ed7d13dfb8438098326c9de162193d5c"],["/img/第三届网计-Misc/踩踩我的图.png","10744567bb7b8072b818ea8c4d8f4082"],["/img/第三届网计-Web/Ez_PHP.jpg","ed0a53c5fecf620dd567a3dc4f6324a7"],["/img/第三届网计-Web/NormalShell.jpg","3f3979cf524895e55b88dceb5560f636"],["/img/第三届网计-Web/NormalShell_code.jpg","f3100a76d4cc8b6c88d6fad8b062e4c8"],["/img/第三届网计-Web/Normal_Shell.jpg","a798886faeb8fcf4884d822bdb5315d9"],["/img/第三届网计-Web/checkin.png","b629ddac4143d1b088db2ba9e9898d39"],["/img/计操实验一/实验一.png","c7b87003f96c069418bea292d0454a7b"],["/img/计操实验一/规范性1.png","521fa25da9e25b4fb6134388833fdb8d"],["/img/计操实验一/运行结果.png","5df4deecd99c4891f2d47d00d1625b7e"],["/img/计操实验三/3-1.png","b76d83dada19400aa249de81a8f58468"],["/img/计操实验三/3-2.1.png","5bfdb20ae80c719f7d1f5c05563edd51"],["/img/计操实验三/3-2.png","f02188ffbd43185d621340cdb13dbb62"],["/img/计操实验三/3-3.png","ebe2c448b3676ed60d87497fac6aa75a"],["/img/计操实验三/3-4.png","b8b7156b746f893dd4cf7357b618a66b"],["/img/计操实验三/3-5.png","364cc2219e821812640d205fcd04abe1"],["/img/计操实验三/3-6.png","716c082f44a649dc22fd7c7f71762e5e"],["/img/计操实验三/3初始化.png","3260d1e7733495c7ed183661091a9cf4"],["/img/计操实验三/3溢出.png","1284d331451bd509165253002a4a0222"],["/img/计操实验三/3规范化1.png","0dd0632030c88255a591eee0c8a15bf4"],["/img/计操实验三/3规范化3.png","5ea23c78b5564c0a1673b48668ea080d"],["/img/计操实验三/3规范化4.png","5cd0b69afd155d6584d475521002e7cf"],["/img/计操实验三/3规范性2.png","3e622d7deae8439380982b53831db06a"],["/img/计操实验三/实验三.png","335bbb2bd29f76443b77186958c9dfb1"],["/img/计操实验二/2规范1.png","34a7e2ff91cbe56544683f1c59708004"],["/img/计操实验二/2规范2.png","ca94b0a58099dc5c39af27d902784da2"],["/img/计操实验二/2运行结果.png","ee0ae215068296b7638e541de298c058"],["/img/计操实验二/2运行结果2.png","90f14b286cc215430adaaac42cb102fd"],["/img/计操实验二/2运行结果3.png","130b03c98db6e16a9d03390dc323c739"],["/img/计操实验二/2运行结果4.png","40d59166b1f9c6353c2b47ab85ab91c9"],["/img/计操实验二/实验二.png","0f7008c2454e028568d909ae58bb7b79"],["/index.html","9f21049ccd108c5ac91662ff739f8e86"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/baidutongji.js","d49d7c587322bed68eedd185ee9f74f9"],["/js/cursor.js","f0821240ac3951a5a335fe155c6c3ccb"],["/js/danmu.js","1fdce53d2861ab34b47d25845d1cf4f8"],["/js/easy-Danmaku.js","b246c9b76d753826c4da361095893d57"],["/js/main.js","b3f8666f288b82654e769428a91a34f0"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","01a785be85937ac55f2f4d28d2502159"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","bb645e244d302eecb116df7cfc2859e4"],["/js/version-check.js","80c047dd636602f6a1358ebb5d95bcce"],["/js/welcome.js","bec684f122e654907c0a1ad4291e75d9"],["/link/index.html","176a1b256d3423d684e28772cd41a579"],["/music/index.html","8e07d883f7d5fc82197c81cb07368d8d"],["/page/2/index.html","7492a322647ea20c2dfe4d38c4c723da"],["/page/3/index.html","6253438bba80c3217fd133d744518397"],["/page/4/index.html","f85c112fe91694a36a6c5087cb18b8bc"],["/posts/105a31a4.html","b95d561439501df8cf2a4c87846847fe"],["/posts/19c408c.html","2a2186f3c4b7730497393f89a7a45c12"],["/posts/3405.html","742f8c166bbbd5fe696cce580c077985"],["/posts/35e49d5e.html","9f6e606219e911ca6700aac4e502895a"],["/posts/3980e700.html","ff616c20712de7c9e3ce3e4ec9a6c911"],["/posts/3bfd1783.html","00fd912063ddac7a7749efe925b77042"],["/posts/3c96c005.html","e7b7467c7127fd6a4bcde6fbb9c159f6"],["/posts/3d879cfb.html","2f541a9baadadcb0a51c372e4178c2d9"],["/posts/3f3de275.html","fea165071888b1b034f540366a13cb8d"],["/posts/41e39f2b.html","8b16fec8f929113711c5b49e7d7342cd"],["/posts/422b.html","9ed7b824255b63aa833387417127aea8"],["/posts/49fa10ba.html","318e676414b5f0e35294be8de0b79b70"],["/posts/4c41eeca.html","0e3e2259f8179e579c3543a768335ae5"],["/posts/518ec1ac.html","1ae16676c3431f8e8568985ca4b56d40"],["/posts/61ac759f.html","578490b78457faf2953148107a43b266"],["/posts/6a3f672a.html","e59121ca47c22240ef4773c7ca234520"],["/posts/797d.html","bfdb9344db22ed084ab938fdcdb53374"],["/posts/79f9b780.html","320bab336a017d4b17c24b85eca213bc"],["/posts/7c372084.html","8164aabeea044c72efee643b04c3fcdf"],["/posts/7dca2e02.html","91c92bd3983b82e5fc138eff54d2e061"],["/posts/8127414b.html","5eecebff00eddece101a8e72049f12a9"],["/posts/86bbdefa.html","ef681221b1b39d675ba667842c6003f1"],["/posts/8c84e76e.html","182314a2ec4fa6992b5754ef5f937162"],["/posts/92211228.html","562bc32d3e8b597111626f2930bce2c4"],["/posts/992dd5ba.html","98dfce84a2a94e6a4050e09b42c67d99"],["/posts/9a2a157c.html","b875d1700576bcd0cd75897db8117684"],["/posts/9a5ae3b8.html","6e9fade6183b22e9d566838dbf2d4a7d"],["/posts/a008ab16.html","0877f6bd00c40897c2b4c8703394874e"],["/posts/a450d722.html","a848ba5b8928d5891160d1f5b490c2af"],["/posts/b10237dc.html","db5fdf052d1f3abb62043dae88b89383"],["/posts/b2d12a7e.html","0017861d9bca2cd0a665202b4d35b2e0"],["/posts/b4bc7df4.html","88af930fd9ce817c6edab990a5a629cc"],["/posts/ba5c4fea.html","a6a49e10d05d16a86899ed41b21e524a"],["/posts/c3ec.html","23c92bd6b36bc11237a23c47cf8df34b"],["/posts/c98645fd.html","c09e915885350f6410f3e4be69904263"],["/posts/d98373ae.html","dcc24c19138473e2f21c9b4a11d75c2a"],["/posts/e26dd8b5.html","9c6e32bef6891cb132569fb5be930011"],["/posts/f73e6dd5.html","34b450b4d77366c765466c6458f60672"],["/privacy/index.html","9d8ed662dc4b7c91f6019238983a485b"],["/sw-register.js","303d136a85e140e6af108914fc8a31db"],["/tags/2024/index.html","de56dcf8c6240c6bed6decd5c08fbf61"],["/tags/API/index.html","e3272fb81685e184e648511b5441de2f"],["/tags/A星算法/index.html","b53e9b2ec4512cba32f626bcf3896161"],["/tags/C/index.html","5e16041b12abebeab2e055bcf69a84b6"],["/tags/CDN/index.html","e8402cf7e2e414166fb675e63aa8c759"],["/tags/CI-CD/index.html","16f8fb4070b657138a9a619130f1f196"],["/tags/CTF/index.html","2768e7063ed8a3052941abb5b994db81"],["/tags/Cookie/index.html","5ea632a6069cc040421de910461ec8ff"],["/tags/DIY/index.html","28af53822aafd9bab0d00ec4c91026ca"],["/tags/DNS/index.html","7569d78d75ae0d70155010acd798a864"],["/tags/Docker/index.html","fa4d1f7ab323b6da07a70798d91990a0"],["/tags/ECS/index.html","136d8f7ae13179ae60fee61c670573c1"],["/tags/Git/index.html","5f94fd8d029fceb8c0d5e7bd960666e9"],["/tags/GitHub/index.html","820cdd0288d737bae1390080423cdae3"],["/tags/Github/index.html","d62bd6d4915424634f3fe4e2cea3f10e"],["/tags/Misc/index.html","a88bdc2d2baa84911918f01c9dc80a7a"],["/tags/QT/index.html","413b48789c323a6cf9f6b216363a03ba"],["/tags/SQL/index.html","ec265dfa8a26e63c320544f07fda6621"],["/tags/Session/index.html","83958d196e7fad007d3c947754818f0d"],["/tags/Token/index.html","7869c18993bfb5dfecf1df4d4c013da8"],["/tags/VPN/index.html","2b46233426eca4c6eb91dc49e8b928d2"],["/tags/VPS/index.html","382a5c0d04f95ecf92b2fc4b514cfa5a"],["/tags/Web/index.html","673bdc32ed47da03f3af546340083561"],["/tags/docker/index.html","5172c2ce1e7b563a601f14216a3eb860"],["/tags/index.html","2484900a036410e79dfe6fff157c9292"],["/tags/jsDelivr/index.html","cc728c65c6d78e05ec99575c4db207da"],["/tags/npm/index.html","d51abdb128d6a922541a82fb37dff576"],["/tags/waf/index.html","4cfcbe447d273b0204558d3bd348781f"],["/tags/个人主页/index.html","0692fa48bf377aa2f7943a4fbb06ab70"],["/tags/代理/index.html","de81eaf1ee4bb753922fb6d549a804f7"],["/tags/内存管理/index.html","e4a32ff080be9ea7bea8331241e81469"],["/tags/北京欢迎你/index.html","cf753b8ebc81397ac3d1bbcaa4f425a8"],["/tags/博客/index.html","a18bad91fc85363c70a96338548b13aa"],["/tags/后端/index.html","6b2bbb40c293dd005273bcb8ce6a02e1"],["/tags/图床/index.html","d164f50439425e0e204071b4efdef0a5"],["/tags/密码学/index.html","4924ff5525dba6a2501a8b164158c0a2"],["/tags/工作流/index.html","1c512af26b0afc88cc279f251bf3ef92"],["/tags/年终总结/index.html","f3d77189eec404cf51fd7a69304298b3"],["/tags/建站/index.html","a12f755f0f6df0019cc5d2302ef403d1"],["/tags/栈帧/index.html","8086e0c70dc87a5af4ec2a6a6109d039"],["/tags/死锁/index.html","1dbf7f71bb315e2e713be7d363439bd4"],["/tags/玩梗/index.html","f1e5139936cc5c55ac4d64bb16641168"],["/tags/网络安全/index.html","df73b3e19f921b8ed7d85d4ffb6c2545"],["/tags/网络安全/page/2/index.html","a6164f3c1b4316a3070b3f55f8b7719c"],["/tags/自主开发/index.html","49ea917e84bcdce277cf224395c8e863"],["/tags/自建应用项目/index.html","25dae6bc4637874faaa88cd72911d99b"],["/tags/计操/index.html","4209b767b911853134d86c700a6a7fe2"],["/tags/计算机网络/index.html","111368eae301c5631c763b620a9fb564"],["/tags/进程调度/index.html","23761c429cdc3b3119bd95626f3d82f4"],["/tags/阿里云/index.html","12c39368d214e20eb25f9c5dca5b2d27"],["/update/index.html","35fd2b6b5cb44470ee1bd10bfb0ed34d"],["/updatebrowser/browser-icon.svg","90bfee292370715771faf4d684294a86"],["/updatebrowser/font_1454899_pqhvobved2o.eot","045c03488f7b7a5c54160ba6ab9f15de"],["/updatebrowser/font_1454899_pqhvobved2o.ttf","ec4a443f94c260cdd15ad69ae2f0a6ea"],["/updatebrowser/font_1454899_pqhvobved2o.woff","e42c0aaf21a3500c72b5606ca7bd4dbe"],["/updatebrowser/index.html","7a3c21e571a125ea0764738a9058b84f"],["/updatebrowser/main.css","18e3f9f7ae56b1d1c54f8bd051c9ea16"],["/updatebrowser/updatebrowser.html","b9e1cee29128098c79d0bd0a57d87135"],["/wordScenery/index.html","57df15c75e414eb1fa3a4b273c3f512d"]];
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
