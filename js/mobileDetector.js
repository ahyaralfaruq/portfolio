(function (e) {
   if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
   ) {
      //write code for your mobile clients here.

      document.location = "mobileVersion/index.html";

      // var jsScript = document.createElement("script");
      // jsScript.setAttribute("type", "text/javascript");
      // jsScript.setAttribute("src", "js/alternate_js_file.js");
      // document.getElementsByTagName("head")[0].appendChild(jsScript);

      // var cssScript = document.createElement("link");
      // cssScript.setAttribute("rel", "stylesheet");
      // cssScript.setAttribute("type", "text/css");
      // cssScript.setAttribute("href", "css/alternate_css_file.css");
      // document.getElementsByTagName("head")[0].appendChild(cssScript);
   } else {
      // write code for your desktop clients here
      document.location = "desktopVersion/index.html";
   }
})();
