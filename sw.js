const CACHE_NAME = 'canteen-v1';
const urlsToCache = [
  '/college-canteen-ux-demo/',
  '/college-canteen-ux-demo/index.html',
  '/college-canteen-ux-demo/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
