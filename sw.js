/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","88a701b4af741fb92a1990eda8a9e11a"],["/NWPUscenery/index.html","23e9ae900e24461a6d9fe8f42b3dcf9e"],["/SchooLife/index.html","559f3c2d4cc0475da220c9d74e2230bb"],["/about/index.html","f9a3bf4c2c940483149fc8849d27d61a"],["/air-conditioner/index.html","86351122b53037a36b3da485451c5be1"],["/album/index.html","e75929b945bd470294345de5c2cd8db7"],["/anzhiyu/random.js","6d0d9bd1ef84acddc4d01c13bd3c249c"],["/archives/2023/06/index.html","0a068e457f5737f351eb8d72b8c06d74"],["/archives/2023/07/index.html","d5c74cf27a5eb4f4333f21c843e9a498"],["/archives/2023/08/index.html","60daba228b43fb32467542e18dfe434e"],["/archives/2023/09/index.html","f2d59e1764f9ae763329f0c375da87eb"],["/archives/2023/10/index.html","43fc210b8efcc443b78be5793af0c625"],["/archives/2023/11/index.html","28556780dd6b375f2ab2ac6984778ef6"],["/archives/2023/12/index.html","9033fd58af1ce82a3bc93edbd69918da"],["/archives/2023/index.html","65cc1ba5944414814fe6b78f6c8a1647"],["/archives/2023/page/2/index.html","783dd22f5bc23628a0bfcce211a7d9df"],["/archives/2023/page/3/index.html","cab895e5ca312d6e7cdd32b615c7cf72"],["/archives/2024/01/index.html","0815450afa0d1744bbf10cf0e3a70715"],["/archives/2024/02/index.html","70abf8277a10970989b32b24f426d5cc"],["/archives/2024/03/index.html","4f98a03af4c82ab73e91dff9e2e93e31"],["/archives/2024/index.html","d2e411c81e5b4eb7de2c10e5d6241ff0"],["/archives/2024/page/2/index.html","794ea8bdf899da9d6d52f801f62e8f65"],["/archives/index.html","41d76c8a81e6138d8d798e130ee2b51a"],["/archives/page/2/index.html","ee2c582b0e43ad20db8af3cf7d413637"],["/archives/page/3/index.html","5816feee138af02e9aa89fbc55cfcb5c"],["/archives/page/4/index.html","6040e7dba333d570e26205c27c412b52"],["/baidu_verify_codeva-RzL329nU12.html","b180d90ea19e9106e2c31c79aa05e431"],["/bangumis/index.html","61c33c8c266727e7c7c532b4dd0848f2"],["/categories/index.html","84e6262a31fc4d3e69f1d8c4a448a546"],["/categories/博客/index.html","a849ce555760fa404d9b0c3e31542807"],["/categories/大学生涯/index.html","42dfc9c7b0f4453d928a1103e23ad961"],["/categories/夺旗赛/index.html","628bb412cb53a6d91c16b710400efd0a"],["/categories/技术分享/index.html","e8addc0d5d2264f602195448372a96ad"],["/categories/技术分享/page/2/index.html","197b538345f3c6cc0cde6749d5314a71"],["/categories/技术分享/page/3/index.html","26aded7d412ab4e1ed8b2fd25d87866d"],["/categories/日常生活/index.html","95b54aefd230cc40e1cf76aa98ce3180"],["/census/index.html","be034ad6a84a4726df2718e09998a35f"],["/charts/index.html","322a742112abdecce158b28ebc017415"],["/collections/index.html","3a3b51ab8f2ffe4d168e99dfb3beef64"],["/comments/index.html","fd0b10ebd987ac969e4bc225c6843387"],["/cookies/index.html","0f30b334d6d50531acee16e3a90dba76"],["/copyright/index.html","330063d739b158a15d83b7fd95d8143a"],["/css/custom.css","a5962a5e907fee374cdb83fc89952ee1"],["/css/hfengche.css","c5fb95e947bb333ed6caa177f9517de4"],["/css/index.css","632f43b1040cd7fb703d55f766567ebd"],["/css/title.css","a1b15f613c05c519484e264cdb056951"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/version-check.css","903fa3eaa4f8bdb1681489371081d78a"],["/css/welcome.css","cd80171defe96ae12b132391c18037f3"],["/dailyPhoto/index.html","cfdaf9f40adf255a995d39f37659084a"],["/electronfish/index.html","301c1df239765e5ae63999c4118a469c"],["/envelope/index.html","f15f46a9f1c26882a681fe03ab2cc39a"],["/equipment/index.html","8e37bc03bc0fbf213236df711e161b4e"],["/essay/index.html","e9c61447e6a5ab7aa0293320eeaadcd8"],["/fcircle/index.html","f599fc3f152e6cead0deb6ef485bd90c"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","946a56895876e5980588f0b811b686fa"],["/img/INFJ-A.png","c88819df7a2d4822cc97ef902cd145d8"],["/img/INFJ-A.svg","19491cb7e1556ddf958c26af80c5e0ab"],["/img/SQL_Injection_Fundamentals/2.png","c349d5b6cfee50a5c65253a7f55a614e"],["/img/SQL_Injection_Fundamentals/目标1.png","c5e9b067c12a357ba62f5932321e03bc"],["/img/SQL_Injection_Fundamentals/目标10.png","545e5c6e79a447a2ef360bc97f1be636"],["/img/SQL_Injection_Fundamentals/目标11.png","41c4195068491ee8f00fc021e0fa4ca7"],["/img/SQL_Injection_Fundamentals/目标12.png","9b563f4efcfedceecaab9df51c5cf5a2"],["/img/SQL_Injection_Fundamentals/目标13.png","4714a06726c969e5cefeebe52785a558"],["/img/SQL_Injection_Fundamentals/目标14.png","cbe52e02b60a5422c345f72a047b9f1f"],["/img/SQL_Injection_Fundamentals/目标15.png","22fc613a313d55383be05bff3585d436"],["/img/SQL_Injection_Fundamentals/目标16.png","4ac59b7ad70dffb5ec5a64b3658a2a2f"],["/img/SQL_Injection_Fundamentals/目标2.png","4d84f0cc565e16657d70901cec89d9f6"],["/img/SQL_Injection_Fundamentals/目标3.png","b8361f9a5e05ac6c44db7761fa0482f7"],["/img/SQL_Injection_Fundamentals/目标4.png","a8668fcf9665a1f94051f851765fdc77"],["/img/SQL_Injection_Fundamentals/目标5.png","56729cbe7f7e2c6773944f6b14518381"],["/img/SQL_Injection_Fundamentals/目标6.png","ecbaef9af4096c169231cbe21b66cbfc"],["/img/SQL_Injection_Fundamentals/目标7.png","f42e65ea6b45f7bf9890869aa06bc48e"],["/img/SQL_Injection_Fundamentals/目标8.png","003b403b26da78949c749f6a8200be6c"],["/img/SQL_Injection_Fundamentals/目标9.png","ae4969767f37bf2d15892d5e29d95e76"],["/img/SQL_Injection_Fundamentals/答案.png","18a8bb8981ec15ee0ad524d6fd473346"],["/img/SQL_Injection_Fundamentals/题干1.png","d30e7b9cf81185c8eabd297b6afff763"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/biji-round.png","cde6f6ff179438c63ab4775578d6b605"],["/img/boji.jpg","a08451cbe1b85541a6160b740eb64e21"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/darkgithubsnake.svg","7b286fbd89829627418c915d015354c2"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/fighting.svg","c1dcc2e52ffd4b4f1d21edd5c4ae838f"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/github-contribution-grid-snake.svg","6b7afa01466e5b6625a8d1c436f955c5"],["/img/learning.svg","47cc701af7ea1c78d416f34fd3237aba"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","02c930a47634de2b5d8d0418a3c9ef4b"],["/img/siteicon/144.png","0e2029005df706542daf828be6d246cd"],["/img/siteicon/16.png","67c6eaeefed984d03f085506462c9c35"],["/img/siteicon/32.png","a22bd9a12c5a3776719b0f4c8a1c1ed6"],["/img/siteicon/48.png","a098f0ca5e6eef2af54d4113693cd541"],["/img/siteicon/512.png","946a56895876e5980588f0b811b686fa"],["/img/siteicon/64.png","81d63de7004c7fa316cc4e7cc534e457"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/img/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/img/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/wechat.jpg","ff47f5bceb1dc2d319608f9492334f5c"],["/img/信安基础能力训练/猪圈密码.png","b44ac1d9963f20b1a3595a779dcfffe5"],["/img/信安基础能力训练/猪圈密码表.png","530cd9f268205d10fc4998a71c000bee"],["/img/信安基础能力训练/福尔摩斯.png","723594a5d5813dea83c288289e790544"],["/img/第三届网计-Misc/clip_image001.jpg","0c1d452732974aaf9a7b38b70a39c6e3"],["/img/第三届网计-Misc/clip_image002.jpg","564a4726bff7cd4e1d1350d2b2404de6"],["/img/第三届网计-Misc/docx隐写.png","42613659aa84b7d98898dff170318ca1"],["/img/第三届网计-Misc/纯黑的噩梦.png","fcb86862f03766b0815aacb18b5a3893"],["/img/第三届网计-Misc/踩2.png","ed7d13dfb8438098326c9de162193d5c"],["/img/第三届网计-Misc/踩踩我的图.png","10744567bb7b8072b818ea8c4d8f4082"],["/img/第三届网计-Web/Ez_PHP.jpg","ed0a53c5fecf620dd567a3dc4f6324a7"],["/img/第三届网计-Web/NormalShell.jpg","3f3979cf524895e55b88dceb5560f636"],["/img/第三届网计-Web/NormalShell_code.jpg","f3100a76d4cc8b6c88d6fad8b062e4c8"],["/img/第三届网计-Web/Normal_Shell.jpg","a798886faeb8fcf4884d822bdb5315d9"],["/img/第三届网计-Web/checkin.png","b629ddac4143d1b088db2ba9e9898d39"],["/img/计操实验一/实验一.png","c7b87003f96c069418bea292d0454a7b"],["/img/计操实验一/规范性1.png","521fa25da9e25b4fb6134388833fdb8d"],["/img/计操实验一/运行结果.png","5df4deecd99c4891f2d47d00d1625b7e"],["/img/计操实验三/3-1.png","b76d83dada19400aa249de81a8f58468"],["/img/计操实验三/3-2.1.png","5bfdb20ae80c719f7d1f5c05563edd51"],["/img/计操实验三/3-2.png","f02188ffbd43185d621340cdb13dbb62"],["/img/计操实验三/3-3.png","ebe2c448b3676ed60d87497fac6aa75a"],["/img/计操实验三/3-4.png","b8b7156b746f893dd4cf7357b618a66b"],["/img/计操实验三/3-5.png","364cc2219e821812640d205fcd04abe1"],["/img/计操实验三/3-6.png","716c082f44a649dc22fd7c7f71762e5e"],["/img/计操实验三/3初始化.png","3260d1e7733495c7ed183661091a9cf4"],["/img/计操实验三/3溢出.png","1284d331451bd509165253002a4a0222"],["/img/计操实验三/3规范化1.png","0dd0632030c88255a591eee0c8a15bf4"],["/img/计操实验三/3规范化3.png","5ea23c78b5564c0a1673b48668ea080d"],["/img/计操实验三/3规范化4.png","5cd0b69afd155d6584d475521002e7cf"],["/img/计操实验三/3规范性2.png","3e622d7deae8439380982b53831db06a"],["/img/计操实验三/实验三.png","335bbb2bd29f76443b77186958c9dfb1"],["/img/计操实验二/2规范1.png","34a7e2ff91cbe56544683f1c59708004"],["/img/计操实验二/2规范2.png","ca94b0a58099dc5c39af27d902784da2"],["/img/计操实验二/2运行结果.png","ee0ae215068296b7638e541de298c058"],["/img/计操实验二/2运行结果2.png","90f14b286cc215430adaaac42cb102fd"],["/img/计操实验二/2运行结果3.png","130b03c98db6e16a9d03390dc323c739"],["/img/计操实验二/2运行结果4.png","40d59166b1f9c6353c2b47ab85ab91c9"],["/img/计操实验二/实验二.png","0f7008c2454e028568d909ae58bb7b79"],["/index.html","670eeb6477a5625617717e4523cd7478"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/baidutongji.js","d49d7c587322bed68eedd185ee9f74f9"],["/js/cursor.js","f0821240ac3951a5a335fe155c6c3ccb"],["/js/danmu.js","1fdce53d2861ab34b47d25845d1cf4f8"],["/js/easy-Danmaku.js","b246c9b76d753826c4da361095893d57"],["/js/main.js","b3f8666f288b82654e769428a91a34f0"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","01a785be85937ac55f2f4d28d2502159"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","1eabce35e38426cbf114b164563d8edd"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","bb645e244d302eecb116df7cfc2859e4"],["/js/version-check.js","80c047dd636602f6a1358ebb5d95bcce"],["/js/welcome.js","bec684f122e654907c0a1ad4291e75d9"],["/link/index.html","95292a4888e8822ce327891b2efaf786"],["/music/index.html","c571ab7e4a61a6ccafc99a9a711aec3c"],["/page/2/index.html","9ad1e2fa432e6c6de1e8b14f961d31a0"],["/page/3/index.html","f1c4e778ff72e3a22d6c534d743e9a00"],["/page/4/index.html","27c94e4c6b76ef0d3984c85e8a6b1b9a"],["/posts/105a31a4.html","ef8ef2fdf6f0beefa92b2c4d3e724181"],["/posts/19c408c.html","7b1bec3c9193da94404723d8f7bdcd0f"],["/posts/3405.html","c352a4085593a3199e29163569679dad"],["/posts/35e49d5e.html","15d27ad5c1d560b89889150dfd18d8fa"],["/posts/3980e700.html","534e53e231c002574426ad396a80c933"],["/posts/3bfd1783.html","a7fa5e717b4bd21d8246e47bf85b20ff"],["/posts/3c96c005.html","8545e94ec299e183786f0cbf59f7d58d"],["/posts/3d879cfb.html","795c89f6e8caaefd7354360b0b6c05a8"],["/posts/3f3de275.html","6b7f0e75e1e98eded815c4035d8e4767"],["/posts/41e39f2b.html","c6d464f4a1307eabe24736a50365ec91"],["/posts/422b.html","c749efa1b4d2f880e73e45020419ae07"],["/posts/49fa10ba.html","a94345545133632c7300e808dbe779c1"],["/posts/4c41eeca.html","69ef7b59edfe7561060ea7d95c8ef2ef"],["/posts/518ec1ac.html","a1388f6869fe8f3eb4073658143e7d24"],["/posts/61ac759f.html","53d95391f90e4ae8bbe8feb4fc71cbdc"],["/posts/6a3f672a.html","b4328404b805a117cfcdf9b5465e82df"],["/posts/797d.html","997309b6831f2655b9d0b4e6787e2d18"],["/posts/79f9b780.html","254100758fc4e4cd55109af9ea62c407"],["/posts/7c372084.html","e88bd9189b4df14b10a51844b278cede"],["/posts/7dca2e02.html","ca65924231b8002515ed804bc3c981bf"],["/posts/8127414b.html","77835d849013e8b0b9df0670e62ee59d"],["/posts/86bbdefa.html","3f2359bb272b026bc19a4bc5fe67ef2c"],["/posts/8c84e76e.html","6f620690e8498fffce429e178e3f2e36"],["/posts/92211228.html","7b340cb765f4b4924a1f6d90c9568e8e"],["/posts/992dd5ba.html","9b6c8442aca1c9ce2dd7b2a5210548b2"],["/posts/9a2a157c.html","8b9c03155df7a00d5204d2e1cc622d1f"],["/posts/9a5ae3b8.html","0cf44b85e7f54767aa4d074b8cb40638"],["/posts/a008ab16.html","7bb903c9c4d34f74560f30e3b4811f5c"],["/posts/a450d722.html","de05db00f91914a37c8f5eec6ac2fe28"],["/posts/b10237dc.html","170e3eee835b439f127ffc79527d9bc7"],["/posts/b2d12a7e.html","8bb57c16265ba3646c7ff0803d2a2f3d"],["/posts/b4bc7df4.html","4901163faca692e56efa805baae71b03"],["/posts/ba5c4fea.html","4e5f14041672663648ae0db2ef4c3e1f"],["/posts/c3ec.html","b87afbf3034a57bc14afeadd53f236a6"],["/posts/c98645fd.html","d5ecad4d7cee2265046b305f1cf4d423"],["/posts/d98373ae.html","da82d4e91bfe6bf099acec7e864e2a45"],["/posts/e26dd8b5.html","6ac76b8102a0c785b8258f2d4b87458f"],["/posts/f73e6dd5.html","ca4a2ca7155213daef40e7a413156651"],["/privacy/index.html","8d96b839906d1855723a121bc49e240b"],["/sw-register.js","3311115b687cc52d0d1f40b72c7011c1"],["/tags/2024/index.html","5d3f7572906e77e975d1b5cc7e15eee5"],["/tags/API/index.html","348b98fb9109f6d4e479f8ee3ded74da"],["/tags/A星算法/index.html","38398a833e54abefb43e96c749f67b6a"],["/tags/C/index.html","5a250467a63d6f79a08a58041e479786"],["/tags/CDN/index.html","fed6a56bb3fabe3590e7410acbf53a88"],["/tags/CI-CD/index.html","3486b6bae59a1b95c181720f41e90649"],["/tags/CTF/index.html","1d03cbca6639cb9a7d6226dade8a2602"],["/tags/Cookie/index.html","5de4ca2026b08f03b84cadddbb683c7b"],["/tags/DIY/index.html","b6007d681e835e94c6fc8954037f23cf"],["/tags/DNS/index.html","ba820b9add3b5d56e3f5fd86e8adc5e2"],["/tags/Docker/index.html","5910dd1bfed2cbc3ab09eb11383cb314"],["/tags/ECS/index.html","71fe478ca75bf12533a838dbf6927a44"],["/tags/Git/index.html","6ae4c9cf47b2a9b9a82b05fd2e772562"],["/tags/GitHub/index.html","8565d05a6287d5a3b6c6b074eb5b80a7"],["/tags/Github/index.html","34e2b25f582f13524b4ca5f46201765c"],["/tags/Misc/index.html","c7378d5110c876bbfd979d1de1557b78"],["/tags/QT/index.html","02e28d7c284e9bdfaf0cc2a5a5ee3b5c"],["/tags/SQL/index.html","5b45228bd9ae0ef283fa9c8fc5b1c6a6"],["/tags/Session/index.html","eec5a03d00c202982abb7608a6cf399f"],["/tags/Token/index.html","d7c80fa7fb49a1acc316296bffd93d7d"],["/tags/VPN/index.html","289c0b8bc44524185d50d420a8700f5c"],["/tags/VPS/index.html","2d1ebadc0f835e0184c0d356d06ed20d"],["/tags/Web/index.html","58d9962ad3914127869e3728d30a419d"],["/tags/docker/index.html","59fc927abfa2f13c9d048c5867428b78"],["/tags/index.html","b8f990cd54c8d5285edd38332a4e1bc4"],["/tags/jsDelivr/index.html","2972ee6978059b217487baf628261059"],["/tags/npm/index.html","f4cb797b9772ecb9bc01a121c9be7873"],["/tags/waf/index.html","fdff5b44eb4839970b78e2ecbb5a0507"],["/tags/个人主页/index.html","f5c60686a3e24dced0414cc1542d588a"],["/tags/代理/index.html","d9e0a87d3f96e249612c5939d8c3b955"],["/tags/内存管理/index.html","c3acf7178f588b7cc914c5d2a9d47d3c"],["/tags/北京欢迎你/index.html","47ca413d619db574f403cbfd0f76f4ae"],["/tags/博客/index.html","6f2fd4cb208110cec572d3b83f5b8131"],["/tags/后端/index.html","eb7351fb67d33c1e3a0bc4851fdcaad8"],["/tags/图床/index.html","009bfe9d4dd6c9040c4e1f3dcb7333ce"],["/tags/密码学/index.html","3945a6731e4e7441a7ac887d8fad7676"],["/tags/工作流/index.html","b16243837c67a5e7c0f48e95fd82e246"],["/tags/年终总结/index.html","c9ad07376b4b095cb144d80a108adcf4"],["/tags/建站/index.html","ffe95175ca42bb7a98a7bc245c483904"],["/tags/栈帧/index.html","f683c584b0cb7dafdca5f803c23a7cba"],["/tags/死锁/index.html","db824ca5b3cf81bc3d73f2f88798df75"],["/tags/玩梗/index.html","6e74ada66e3f3579df98fd67362639d4"],["/tags/网络安全/index.html","dc7df4f06a82f9a749c86cc6602f49ff"],["/tags/网络安全/page/2/index.html","02a251bd6655aa37e79837fc5acb00f3"],["/tags/自主开发/index.html","2994b2c36182a590f5346f5af36e749f"],["/tags/自建应用项目/index.html","6008f8b9f2516d0a31a3d3330e841639"],["/tags/计操/index.html","550c8f97683c01c130da47cb8405567f"],["/tags/计算机网络/index.html","fb98439ca617699a3408360c7b24ad42"],["/tags/进程调度/index.html","00849b7411d02f51931763ba362619cc"],["/tags/阿里云/index.html","65cc541a5a0090e8960886ae5789fa41"],["/update/index.html","2e81808e7a753f0f83ac35b077c61383"],["/updatebrowser/browser-icon.svg","90bfee292370715771faf4d684294a86"],["/updatebrowser/font_1454899_pqhvobved2o.eot","045c03488f7b7a5c54160ba6ab9f15de"],["/updatebrowser/font_1454899_pqhvobved2o.ttf","ec4a443f94c260cdd15ad69ae2f0a6ea"],["/updatebrowser/font_1454899_pqhvobved2o.woff","e42c0aaf21a3500c72b5606ca7bd4dbe"],["/updatebrowser/index.html","242a34a0e0871c4a41a6bf39aa6059f2"],["/updatebrowser/main.css","18e3f9f7ae56b1d1c54f8bd051c9ea16"],["/updatebrowser/updatebrowser.html","8ad13aba6d3bba8625feb34f0c28ab26"],["/wordScenery/index.html","89af2b04b36d76a7a2c10cbf471943dc"]];
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
