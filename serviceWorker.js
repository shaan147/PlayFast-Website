const staticDevCoffee = "playfast";
const assets = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/styles/swiper-bundle.min.css",
  "/scripts/events.js",
  "/scripts/router.js",  
  "/scripts/routing.js",
  "/scripts/swiper-bundle.esm.browser.min.js",
  "/scripts/main.min.js",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/main.html",
  "/pages/p1.html",
  "/pages/p2.html",
  "/pages/p3.html",
  "/pages/p4.html",
  "/pages/sport.html",
  "/pages/signup.html",
  "/pages/signin.html",
  "/pages/matches.html",
  "/pages/matchdetails.html",
  "/pages/creditcard.html",
  "/pages/termsandconditions.html",
  "/pages/profile.html",
  "/pages/settings.html",
  "/pages/joinmatch.html",
  "/pages/games.html",
  "/pages/details.html",
  "/pages/promoadded.html",
  "/pages/promocreditadded.html",
  "/pages/page-404.html",
  "/pages/page-512.html",
  "/pages/404.html",
  "/pages/detailmatch.html",
  "/pages/notify.html",
  "/pages/purchasetotal.html",
  "/pages/pictures.html",
  "/images/icons/icon-80x80.png",
  "/images/icons/icon-96x96.png",
  "/images/icons/icon-120x120.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-167x167.png",
  "/images/icons/icon-180x180.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-196x196.png",
  "/images/icons/icon-228x228.png",
  "/images/icons/icon-256x256.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-1024x1024.png",
  "/images/abouthero.png",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
  "/images/apple-touch-icon.png",
  "/images/ball1.png",
  "/images/ball2.png",
  "/images/country1.png",
  "/images/country2.png",
  "/images/court.png",
  "/images/creator.png",
  "/images/exit.png",
  "/images/favicon-16x16.png",
  "/images/favicon-32x32.png",
  "/images/favicon.ico",
  "/images/Frame-1.png",
  "/images/Frame.png",
  "/images/herosection.png",
  "/images/map.png",
  "/images/mobilegame.png",
  "/images/mobileperson.png",
  "/images/playfast-logo.png",
  "/images/Profile.png",
  "/images/section1.png",
  "/images/section2.png",
  "/images/selectarrow.png",
  "/images/Sent-Message.svg",
  "/images/Sport-basket-ball-court.svg",
  "/scripts/jquery/popper.js",
  "/scripts/jquery/dist/jquery.min.js",
  "/scripts/bootstrap.bundle.min.js",
  "/scripts/swiperslider.js",
  "/styles/fonts.css",
  "/styles/bootstrap/css/bootstrap.min.css",
  "/styles/swiper.css",
];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets);
//     })
//   );
// });

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      return Promise.all(
        assets.map(asset => {
          return cache.add(asset).catch(err => console.error(`Failed to cache ${asset}: ${err}`));
        })
      );
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

