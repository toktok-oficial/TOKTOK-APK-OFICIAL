const CACHE_NAME = 'toktok-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/invitar.html',
  '/manifest.json',
  '/css/style.css',
  '/js/auth.js',
  '/icons/ico.png',
  '/icons/ico2.png'
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