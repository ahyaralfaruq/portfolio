// dark mode
const darkMode = () => {
   let el = document.documentElement;
   let attrEl = el.getAttribute("data-color-mode");
   let moon = document.querySelector(".fa-moon");
   let sun = document.querySelector(".fa-sun");
   let textMode = document.querySelector(".titleMode");

   if (attrEl === `light`) {
      el.setAttribute("data-color-mode", "dark");
      moon.style.display = "none";
      sun.style.display = "inline";
      textMode.innerText = "Dark Mode";
   } else {
      el.setAttribute("data-color-mode", "light");
      moon.style.display = "inline";
      sun.style.display = "none";
      textMode.innerText = "Light Mode";
   }
};

(function () {
   $(".parallax").waypoint(
      function (direction) {
         if (
            direction === "down" &&
            !$(this.element).hasClass("animate__slow")
         ) {
            $(this.element).addClass("active");

            setTimeout(function () {
               $("body .parallax.active").each(function (i) {
                  var el = $(this);

                  setTimeout(function () {
                     var effect = el.data("effect");

                     if (effect == "fadeInLeft") {
                        el.addClass(
                           "animate__animated animate__slow animate__fadeInLeft"
                        );
                     } else if (effect == "fadeInRight") {
                        el.addClass(
                           "animate__animated animate__slow animate__fadeInRight"
                        );
                     } else if (effect == "fadeInDown") {
                        el.addClass(
                           "animate__animated animate__slow animate__fadeInDown"
                        );
                     } else {
                        el.addClass(
                           "animate__animated animate__slow animate__fadeInUp"
                        );
                     }

                     el.removeClass("active");
                  }, i * 200);
               });
            }, 100);
         }
      },
      { offset: "95%" }
   );
})();
