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

      let redirectTo = document.createElement("meta");

      redirectTo.setAttribute("http-equiv", "refresh");
      redirectTo.setAttribute(
         "content",
         "0; url=https://ahyaralfaruq.github.io/portfolio/MobileVersion/index.html"
      );
      // redirectTo.setAttribute(
      //    "url",
      //    "https://ahyaralfaruq.github.io/portfolio/mobileVersion/index.html"
      // );

      document.getElementsByTagName("head")[0].appendChild(redirectTo);

      // document.location = "MobileVersion/index.html";
   } else {
      // write code for your desktop clients here

      let redirectTo = document.createElement("meta");

      redirectTo.setAttribute("http-equiv", "refresh");
      redirectTo.setAttribute(
         "content",
         "0; url=https://ahyaralfaruq.github.io/portfolio/desktopVersion/index.html"
      );
      // redirectTo.setAttribute(
      //    "url",
      //    "https://ahyaralfaruq.github.io/portfolio/desktopVersion/index.html"
      // );

      document.getElementsByTagName("head")[0].appendChild(redirectTo);

      // document.location = "desktopVersion/index.html";
   }
})();
