var cacheName = 'Recipe';

const staticAssets = [
  './*.css',
  './*.js'
];

self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    console.log("enable internet");
  }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}
