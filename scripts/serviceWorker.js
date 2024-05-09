const staticDevCoffee = "sntt-portal-v1";
const assets = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/styles/swiper-bundle.min.css",
  "/scripts/main.min.js",
  "/scripts/events.js",
  "/scripts/router.js",  
  "/scripts/swiper-bundle.esm.browser.min.js",
  "/favicon.ico",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/logistiques-marchandises.html",
  "/pages/main.html",

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
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