/* 3D Yılan service worker. Cache names are isolated per installed URL scope. */
const VERSION = '1.26.1';
const SCOPE = self.registration.scope;
const PREFIX = `3d-yilan:${SCOPE}:`;
const CACHE = PREFIX + VERSION;
const URLS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'].map(path => new URL(path, SCOPE).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URLS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(SCOPE)) return;
  const isAppNavigation = request.mode === 'navigate' && (url.pathname === new URL(SCOPE).pathname || url.pathname === new URL('index.html', SCOPE).pathname);
  if (isAppNavigation) {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE).then(cache => cache.put(new URL('index.html', SCOPE).href, copy)));
      }
      return response;
    }).catch(async () => (await caches.match(new URL('index.html', SCOPE).href)) || Response.error()));
    return;
  }
  if (!URLS.includes(url.href)) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy=response.clone();
      event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));
    }
    return response;
  }).catch(async () => (await caches.match(request)) || Response.error()));
});
