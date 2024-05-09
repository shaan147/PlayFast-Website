import VanillaRouter from "./router.js";

const router = new VanillaRouter({
  type: "history",
  routes: {
    "/": "main",
    "/about": "about",
    "/contact": "contact",
    "/matches": "Matches",
    "/terms": "termsandconditions",
    "/sport": "Sport",
    "/signup": "Signup",
    "/signin": "Signin",
    "/matchdetails": "MatchDetails",
    "/games": "games",
    "/profile": "profile",
    "/settings": "settings",
    "/joinmatch": "joinmatch",
    "/details": "details",
    "/promoadded": "promoadded",
    "/promocreditadded": "promocreditadded",
    "/p1": "p1",
    "/p2": "p2",
    "/p3": "p3",
    "/p4": "p4",
    "/notify": "notify",
    "/page-404": "page-404",
    "/page-512": "page-512",
  },
});

window.router = router;

router.listen().on("route", async (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  fetch("pages/" + e.detail.route + ".html")
    .then((response) => response.text())
    .then((htmlData) => {
      // Use regex to extract the entire body tag
      const bodyRegex = /(<body[^>]*>((.|[\n\r])*)<\/body>)/im;
      const matchArray = bodyRegex.exec(htmlData);

      // get the title and update it
      const titleRegex = /<title>(.*?)<\/title>/gms;

      const titleArray = titleRegex.exec(htmlData);

      if (titleArray && titleArray[1]) {
        document.title = titleArray[1];
      }

      if (matchArray && matchArray[1]) {
        // Replace the old body with the new body
        document.body.outerHTML = matchArray[1];

        // get all scripts from body and reload them
        const scripts = document.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          newScript.src = script.src;
          newScript.type = "text/javascript";
          document.body.appendChild(newScript);
        });

        // if not index or /
        if (e.detail.route !== "main") {
          // get all inline css from htmlData and reload them
          const cssRegex = /<style>(.*?)<\/style>/gms;
          const cssArray = htmlData.match(cssRegex);
          if (cssArray) {
            cssArray.forEach((css) => {
              const newStyle = document.createElement("style");
              newStyle.innerHTML = css;
              document.head.appendChild(newStyle);
            });
          }
        }
      } else {
        console.error("No <body> tag found in the fetched HTML.");
      }

      document.querySelectorAll(".menu ul li a").forEach(function (elem) {
        if (
          elem.href.endsWith(e.detail.route) ||
          (elem.href.endsWith("/") && e.detail.route == "main")
        ) {
          elem.parentElement.classList.add("active");
        } else {
          elem.parentElement.classList.remove("active");
        }
      });
    })
    .catch((err) => {
      console.log();
    });
});
