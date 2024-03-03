// window.addEventListener("load", () => {
//   let loadFlag = false;
//   let dataObj = [];
//   const $searchMask = document.getElementById("search-mask");

//   const openSearch = () => {
//     const bodyStyle = document.body.style;
//     bodyStyle.width = "100%";
//     bodyStyle.overflow = "hidden";
//     anzhiyu.animateIn($searchMask, "to_show 0.5s");
//     anzhiyu.animateIn(document.querySelector("#local-search .search-dialog"), "titleScale 0.5s");
//     setTimeout(() => {
//       document.querySelector("#local-search-input input").focus();
//     }, 100);
//     if (!loadFlag) {
//       search();
//       loadFlag = true;
//     }
//     // shortcut: ESC
//     document.addEventListener("keydown", function f(event) {
//       if (event.code === "Escape") {
//         closeSearch();
//         document.removeEventListener("keydown", f);
//       }
//     });
//   };

//   const closeSearch = () => {
//     const bodyStyle = document.body.style;
//     bodyStyle.width = "";
//     bodyStyle.overflow = "";
//     anzhiyu.animateOut(document.querySelector("#local-search .search-dialog"), "search_close .5s");
//     anzhiyu.animateOut($searchMask, "to_hide 0.5s");
//   };

//   const searchClickFn = () => {
//     document.querySelector("#search-button > .search").addEventListener("click", openSearch);
//     document.querySelector("#menu-search").addEventListener("click", openSearch);
//   };

//   const searchClickFnOnce = () => {
//     document.querySelector("#local-search .search-close-button").addEventListener("click", closeSearch);
//     $searchMask.addEventListener("click", closeSearch);
//     if (GLOBAL_CONFIG.localSearch.preload) dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
//   };

//   // check url is json or not
//   const isJson = url => {
//     const reg = /\.json$/;
//     return reg.test(url);
//   };

//   const fetchData = async path => {
//     let data = [];
//     const response = await fetch(path);
//     if (isJson(path)) {
//       data = await response.json();
//     } else {
//       const res = await response.text();
//       const t = await new window.DOMParser().parseFromString(res, "text/xml");
//       const a = await t;

//       data = [...a.querySelectorAll("entry")].map(item => {
//         let tagsArr = [];
//         if (item.querySelector("tags") && item.querySelector("tags").getElementsByTagName("tag")) {
//           Array.prototype.forEach.call(item.querySelector("tags").getElementsByTagName("tag"), function (item, index) {
//             tagsArr.push(item.textContent);
//           });
//         }
//         let content = item.querySelector("content") && item.querySelector("content").textContent;
//         let imgReg = /<img.*?(?:>|\/>)/gi; //匹配图片中的img标签
//         let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; // 匹配图片中的src
//         let arr = content.match(imgReg); //筛选出所有的img

//         let srcArr = [];
//         if (arr) {
//           for (let i = 0; i < arr.length; i++) {
//             let src = arr[i].match(srcReg);
//             // 获取图片地址
//             if (!src[1].indexOf("http")) srcArr.push(src[1]);
//           }
//         }

//         return {
//           title: item.querySelector("title").textContent,
//           content: content,
//           url: item.querySelector("url").textContent,
//           tags: tagsArr,
//           oneImage: srcArr && srcArr[0],
//         };
//       });
//     }
//     if (response.ok) {
//       const $loadDataItem = document.getElementById("loading-database");
//       $loadDataItem.nextElementSibling.style.display = "block";
//       $loadDataItem.remove();
//     }
//     return data;
//   };

//   const search = () => {
//     if (!GLOBAL_CONFIG.localSearch.preload) {
//       dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
//     }
//     const $input = document.querySelector("#local-search-input input");
//     const $resultContent = document.getElementById("local-search-results");
//     const $loadingStatus = document.getElementById("loading-status");

//     $input.addEventListener("input", function () {
//       const keywords = this.value.trim().toLowerCase().split(/[\s]+/);
//       if (keywords[0] !== "")
//         $loadingStatus.innerHTML = '<i class="anzhiyufont anzhiyu-icon-spinner anzhiyu-pulse-icon"></i>';

//       $resultContent.innerHTML = "";
//       let str = '<div class="search-result-list">';
//       if (keywords.length <= 0) return;
//       let count = 0;
//       // perform local searching
//       dataObj.then(data => {
//         data.forEach(data => {
//           let isMatch = true;
//           let dataTitle = data.title ? data.title.trim().toLowerCase() : "";
//           let dataTags = data.tags;
//           let oneImage = data.oneImage ?? "";
//           const dataContent = data.content
//             ? data.content
//                 .trim()
//                 .replace(/<[^>]+>/g, "")
//                 .toLowerCase()
//             : "";
//           const dataUrl = data.url.startsWith("/") ? data.url : GLOBAL_CONFIG.root + data.url;
//           let indexTitle = -1;
//           let indexContent = -1;
//           let firstOccur = -1;
//           // only match articles with not empty titles and contents
//           if (dataTitle !== "" || dataContent !== "") {
//             keywords.forEach((keyword, i) => {
//               indexTitle = dataTitle.indexOf(keyword);
//               indexContent = dataContent.indexOf(keyword);
//               if (indexTitle < 0 && indexContent < 0) {
//                 isMatch = false;
//               } else {
//                 if (indexContent < 0) {
//                   indexContent = 0;
//                 }
//                 if (i === 0) {
//                   firstOccur = indexContent;
//                 }
//               }
//             });
//           } else {
//             isMatch = false;
//           }

//           // show search results
//           if (isMatch) {
//             if (firstOccur >= 0) {
//               // cut out 130 characters
//               // let start = firstOccur - 30 < 0 ? 0 : firstOccur - 30
//               // let end = firstOccur + 50 > dataContent.length ? dataContent.length : firstOccur + 50
//               let start = firstOccur - 30;
//               let end = firstOccur + 100;
//               let pre = "";
//               let post = "";

//               if (start < 0) {
//                 start = 0;
//               }

//               if (start === 0) {
//                 end = 100;
//               } else {
//                 pre = "...";
//               }

//               if (end > dataContent.length) {
//                 end = dataContent.length;
//               } else {
//                 post = "...";
//               }

//               let matchContent = dataContent.substring(start, end);

//               // highlight all keywords
//               keywords.forEach(keyword => {
//                 const regS = new RegExp(keyword, "gi");
//                 matchContent = matchContent.replace(regS, '<span class="search-keyword">' + keyword + "</span>");
//                 dataTitle = dataTitle.replace(regS, '<span class="search-keyword">' + keyword + "</span>");
//               });

//               str += '<div class="local-search__hit-item">';
//               if (oneImage) {
//                 str += `<div class="search-left"><img src=${oneImage} alt=${dataTitle} data-fancybox='gallery'>`;
//               } else {
//                 str += '<div class="search-left" style="width:0">';
//               }

//               str += "</div>";

//               if (oneImage) {
//                 str +=
//                   '<div class="search-right"><a href="' +
//                   dataUrl +
//                   '" class="search-result-title">' +
//                   dataTitle +
//                   "</a>";
//               } else {
//                 str +=
//                   '<div class="search-right" style="width: 100%"><a href="' +
//                   dataUrl +
//                   '" class="search-result-title">' +
//                   dataTitle +
//                   "</a>";
//               }

//               count += 1;

//               if (dataContent !== "") {
//                 str +=
//                   '<p class="search-result" onclick="pjax.loadUrl(`' +
//                   dataUrl +
//                   '`)">' +
//                   pre +
//                   matchContent +
//                   post +
//                   "</p>";
//               }
//               if (dataTags.length) {
//                 str += '<div class="search-result-tags">';

//                 for (let i = 0; i < dataTags.length; i++) {
//                   const element = dataTags[i].trim();

//                   str +=
//                     '<a class="tag-list" href="/tags/' +
//                     element +
//                     '/" data-pjax-state="" one-link-mark="yes">#' +
//                     element +
//                     "</a>";
//                 }

//                 str += "</div>";
//               }
//             }
//             str += "</div></div>";
//           }
//         });
//         if (count === 0) {
//           str +=
//             '<div id="local-search__hits-empty">' +
//             GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) +
//             "</div>";
//         }
//         str += "</div>";
//         $resultContent.innerHTML = str;
//         if (keywords[0] !== "") $loadingStatus.innerHTML = "";
//         window.pjax && window.pjax.refresh($resultContent);
//       });
//     });
//   };

//   searchClickFn();
//   searchClickFnOnce();

//   // pjax
//   window.addEventListener("pjax:complete", () => {
//     !anzhiyu.isHidden($searchMask) && closeSearch();
//     searchClickFn();
//   });
// });
window.addEventListener("load", () => {
  let loadFlag = false;
  let dataObj = [];
  const $searchMask = document.getElementById("search-mask");

  const openSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    anzhiyu.animateIn($searchMask, "to_show 0.5s");
    anzhiyu.animateIn(document.querySelector("#local-search .search-dialog"), "titleScale 0.5s");
    setTimeout(() => {
      document.querySelector("#local-search-input input").focus();
    }, 100);
    if (!loadFlag) {
      search();
      loadFlag = true;
    }
    // shortcut: ESC
    document.addEventListener("keydown", function f(event) {
      if (event.code === "Escape") {
        closeSearch();
        document.removeEventListener("keydown", f);
      }
    });
  };

  const closeSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "";
    bodyStyle.overflow = "";
    anzhiyu.animateOut(document.querySelector("#local-search .search-dialog"), "search_close .5s");
    anzhiyu.animateOut($searchMask, "to_hide 0.5s");
  };

  const searchClickFn = () => {
    document.querySelector("#search-button > .search").addEventListener("click", openSearch);
    document.querySelector("#menu-search").addEventListener("click", openSearch);
  };

  const searchClickFnOnce = () => {
    document.querySelector("#local-search .search-close-button").addEventListener("click", closeSearch);
    $searchMask.addEventListener("click", closeSearch);
    if (GLOBAL_CONFIG.localSearch.preload) dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
  };

  // check url is json or not
  const isJson = url => {
    const reg = /\.json$/;
    return reg.test(url);
  };

  const fetchData = async path => {
    let data = [];
    const response = await fetch(path);
    if (isJson(path)) {
      data = await response.json();
    } else {
      const res = await response.text();
      const t = await new window.DOMParser().parseFromString(res, "text/xml");
      const a = await t;

      data = [...a.querySelectorAll("entry")].map(item => {
        let tagsArr = [];
        if (item.querySelector("tags") && item.querySelector("tags").getElementsByTagName("tag")) {
          Array.prototype.forEach.call(item.querySelector("tags").getElementsByTagName("tag"), function (item, index) {
            tagsArr.push(item.textContent);
          });
        }
        let content = item.querySelector("content") && item.querySelector("content").textContent;
        let imgUrl = item.querySelector("cover") && item.querySelector("cover").textContent;
        let dateText = item.querySelector("date") && item.querySelector("date").textContent;
        let postsUrl = item.querySelector("url") && item.querySelector("url").textContent;
        let dateMatch = null
        let dateUrl = null
        // 解码和匹配日期部分...
        const decodedDate = decodeURIComponent(dateText);
        const dateRegex = /^([a-zA-Z]{3})\s+([a-zA-Z]{3})\s+(\d{1,2})\s+(\d{4})/;
        const date_match = dateRegex.exec(decodedDate);
        const monthToNumber = {
          'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,
          'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8,
          'Sep': 9, 'Sept': 9, // 注意：有时候会使用全拼"September"
          'Oct': 10, 'Nov': 11, 'Dec': 12
        };
        if (date_match) {
          const day = parseInt(date_match[3], 10);
          const monthName = date_match[2];
          const year = parseInt(date_match[4], 10);
          // 映射英文月份到数字月份
          const monthNumber = monthToNumber[monthName];

          dateMatch = year + "-" + (monthNumber < 10 ? "0" + monthNumber : monthNumber) + "-" + (day < 10 ? "0" + day : day);
          dateUrl = "/archives/" + year + "/" + (monthNumber < 10 ? "0" + monthNumber : monthNumber) + "/";
        }

        // let postsregex = /(.*)\.html$/; // 匹配任何字符直到遇到".html"结尾
        // postsUrl = postsUrl.match(postsregex);
        // if (postsUrl) {
        //   postsUrl = postsUrl[1];
        // }
        return {
          title: item.querySelector("title").textContent,
          content: content,
          url: postsUrl,
          tags: tagsArr,
          oneImage: imgUrl,
          dateText: dateMatch,
          dateUrl: dateUrl,
        };
      });
    }
    if (response.ok) {
      const $loadDataItem = document.getElementById("loading-database");
      $loadDataItem.nextElementSibling.style.display = "block";
      $loadDataItem.remove();
    }
    return data;
  };

  const search = () => {
    if (!GLOBAL_CONFIG.localSearch.preload) {
      dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
    }
    const $input = document.querySelector("#local-search-input input");
    const $resultContent = document.getElementById("local-search-results");
    const $loadingStatus = document.getElementById("loading-status");

    $input.addEventListener("input", function () {
      const keywords = this.value.trim().toLowerCase().split(/[\s]+/);
      if (keywords[0] !== "")
        $loadingStatus.innerHTML = '<i class="naokuofont naokuo-icon-spinner anzhiyu-pulse-icon"></i>';

      $resultContent.innerHTML = "";
      let str = '<div class="search-result-list">';
      if (keywords.length <= 0) return;
      let count = 0;
      // perform local searching
      dataObj.then(data => {
        data.forEach(data => {
          let isMatch = true;
          let dataTitle = data.title ? data.title.trim().toLowerCase() : "";
          let dataTags = data.tags;
          let oneImage = data.oneImage ?? "";
          let dateText = data.dateText;
          let dateUrl = data.dateUrl;
          const dataContent = data.content
            ? data.content
              .trim()
              .replace(/<[^>]+>/g, "")
              .toLowerCase()
            : "";
          const dataUrl = data.url.startsWith("/") ? data.url : GLOBAL_CONFIG.root + data.url;
          let indexTitle = -1;
          let indexContent = -1;
          let firstOccur = -1;
          // only match articles with not empty titles and contents
          if (dataTitle !== "" || dataContent !== "") {
            keywords.forEach((keyword, i) => {
              indexTitle = dataTitle.indexOf(keyword);
              indexContent = dataContent.indexOf(keyword);
              if (indexTitle < 0 && indexContent < 0) {
                isMatch = false;
              } else {
                if (indexContent < 0) {
                  indexContent = 0;
                }
                if (i === 0) {
                  firstOccur = indexContent;
                }
              }
            });
          } else {
            isMatch = false;
          }

          // show search results
          if (isMatch) {
            if (firstOccur >= 0) {
              // cut out 130 characters
              // let start = firstOccur - 30 < 0 ? 0 : firstOccur - 30
              // let end = firstOccur + 50 > dataContent.length ? dataContent.length : firstOccur + 50
              let start = firstOccur - 30;
              let end = firstOccur + 100;
              let pre = "";
              let post = "";

              if (start < 0) {
                start = 0;
              }

              if (start === 0) {
                end = 100;
              } else {
                pre = "...";
              }

              if (end > dataContent.length) {
                end = dataContent.length;
              } else {
                post = "...";
              }

              let matchContent = dataContent.substring(start, end);

              // highlight all keywords
              keywords.forEach(keyword => {
                const regS = new RegExp(keyword, "gi");
                matchContent = matchContent.replace(regS, `<span class="search-keyword">${keyword}</span>`);
                dataTitle = dataTitle.replace(regS, `<span class="search-keyword">${keyword}</span>`);
              });

              str += '<div class="local-search__hit-item">';
              if (oneImage) {
                str += `<div class="search-left"><a href="javascript:;" onclick="pjax.loadUrl('${dataUrl}')" title="${data.title ? data.title.trim().toLowerCase() : ''}" data-pjax-state=""><img src="${oneImage}" alt="${data.title ? data.title.trim().toLowerCase() : ''}"></a>`;
              } else {
                str += '<div class="search-left" style="width:0">';
              }

              str += "</div>";

              if (oneImage) {
                str += `<div class="search-right"><a class="search-result-title" href="javascript:;" onclick="pjax.loadUrl('${dataUrl}')" title="${data.title ? data.title.trim().toLowerCase() : ''}" data-pjax-state="">${dataTitle}</a>`;
              } else {
                str += `<div class="search-right" style="width: 100%"><a class="search-result-title" href="javascript:;" onclick="pjax.loadUrl('${dataUrl}')" title="${data.title ? data.title.trim().toLowerCase() : ''}" data-pjax-state="">${dataTitle}</a>`;
              }

              count += 1;

              if (dataContent !== "") {
                str += `<p class="search-result" onclick="pjax.loadUrl('${dataUrl}')" data-pjax-state="">${pre}${matchContent}${post}</p>`;
              }
              if (dataTags.length) {
                str += '<div class="search-result-tags">';

                for (let i = 0; i < dataTags.length; i++) {
                  const element = dataTags[i].trim();

                  str += `<a class="tag-list" href="javascript:;" onclick="pjax.loadUrl('/tags/${element}/')" one-link-mark="yes" title="#${element}" data-pjax-state="">#${element}</a>`;
                }
              }
              if (dateText.length && dateUrl.length) {
                str += `<a class="tag-list" href="javascript:;" onclick="pjax.loadUrl('${dateUrl}')" title="发表于${dateText}" data-pjax-state=""><i class="naokuofont naokuo-icon-calendar-days" style="font-size: 15px;"></i><span> 发表于 ${dateText}</span></a></div>`;
              } else {
                str += `</div>`;
              }
            }
            str += "</div></div>";
          }
        });
        if (count === 0) {
          str +=
            '<div id="local-search__hits-empty">' +
            GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) +
            "</div>";
        }
        str += "</div>";
        $resultContent.innerHTML = str;
        if (keywords[0] !== "") $loadingStatus.innerHTML = "";
        window.pjax && window.pjax.refresh($resultContent);
      });
    });
  };

  searchClickFn();
  searchClickFnOnce();

  // pjax
  window.addEventListener("pjax:complete", () => {
    !anzhiyu.isHidden($searchMask) && closeSearch();
    searchClickFn();
  });
});