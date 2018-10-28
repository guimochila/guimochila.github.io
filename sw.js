const CACHE_STATIC_VERSION = 'static-v0.2';
const CACHE_DYNAMIC_VERSION = 'dynamic-v0.2';

const STATIC_FILES = [
  '/',
  '/index.html',
  '/static/styles.css',
  '/static/img/avatar.jpeg',
  '/static/icons/sysadmin.svg',
  '/static/icons/security.svg',
  '/static/icons/javascript.svg',
  '/static/icons/project.svg',
  '/static/icons/chevron-thin-right.svg',
  'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
  'https://fonts.googleapis.com/css?family=Lato:300,400,90',
];

const cacheResources = async () => {
  const cache = await caches.open(CACHE_STATIC_VERSION);
  return cache.addAll(STATIC_FILES);
};

const activate = async () => {
  const keys = await caches.keys();

  return Promise.all(
    keys.map(key => {
      if (key !== CACHE_STATIC_VERSION) return caches.delete(key);
    }),
  );
};

const cacheFallBackToNetwork = async req => {
  const cache = await caches.match(req);

  if (cache) {
    return cache;
  }

  try {
    const response = await fetch(req);
    if (response.ok) {
      const staticCache = await caches.open(CACHE_DYNAMIC_VERSION);
      staticCache.put(req.url, response.clone());
    }
    return response;
  } catch (err) {
    console.error('🛑 An error has hapenned: ', err);
  }
};

self.addEventListener('install', event => {
  event.waitUntil(cacheResources());
});

self.addEventListener('activate', event => {
  event.waitUntil(activate());
});

self.addEventListener('fetch', event => {
  event.respondWith(cacheFallBackToNetwork(event.request));
});
