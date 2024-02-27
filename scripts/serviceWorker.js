// serviceWorker.js

// Cache name
const CACHE_NAME = 'playfast-cache-v1';

// Files to cache
const urlsToCache = [
    '/',
    '/index.html',
    '/Aboutus.html',
    '/Contactus.html',
    '/Term.html',
    '/styles/styles.css',
    '/scripts/index.js',
    // Add other files to cache here
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate service worker and remove old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('playfast-cache') && cacheName !== CACHE_NAME;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// Fetch resources from cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
