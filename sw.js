// ============================================================
// sw.js — LeoEnglish Service Worker v1.0
// Estrategia: Cache-first para assets estáticos
//             Network-first para Firebase (datos dinámicos)
// ============================================================

const CACHE_NAME   = 'leoenglish-v10';
const CACHE_STATIC = 'leoenglish-static-v10';

// Archivos que se cachean en instalación (shell de la app)
const STATIC_ASSETS = [
  '/LeoEnglish/',
  '/LeoEnglish/index.html',
  '/LeoEnglish/style.css',
  '/LeoEnglish/app.js',
  '/LeoEnglish/data-grammar.js',
  '/LeoEnglish/data-grammar-b1.js',
  '/LeoEnglish/data-grammar-b2.js',
  '/LeoEnglish/data-grammar-c1.js',
  '/LeoEnglish/data-grammar-expanded.js',
  '/LeoEnglish/data-reading-writing.js',
  '/LeoEnglish/data-reading-writing-b1.js',
  '/LeoEnglish/data-reading-writing-b2.js',
  '/LeoEnglish/data-reading-writing-c1.js',
  '/LeoEnglish/data-vocab.js',
  '/LeoEnglish/data-vocab-b1.js',
  '/LeoEnglish/data-vocab-b2.js',
  '/LeoEnglish/data-vocab-c1.js',
  '/LeoEnglish/data-vocab-expanded.js',
  '/LeoEnglish/data-cefr-framework.js',
  '/LeoEnglish/data-business-english.js',
  '/LeoEnglish/data-diagnostic-enhanced.js',
  '/LeoEnglish/data-listening-spaced.js',
  '/LeoEnglish/data-exercises-expanded.js',
  '/LeoEnglish/data-adaptive-portfolio.js',
  '/LeoEnglish/manifest.json',
  // CDN assets
  'https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js',
  'https://unpkg.com/lucide@0.427.0/dist/umd/lucide.min.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@700;800;900&display=swap',
];

// ── INSTALL: pre-cache shell ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        // Cache individually — don't fail if one CDN asset fails
        return Promise.allSettled(
          STATIC_ASSETS.map(url =>
            cache.add(url).catch(e => console.warn('[SW] Failed to cache:', url, e))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first for static, network-first for Firebase ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET and Chrome extensions
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // Firebase / Firestore — always network-first
  if (url.hostname.includes('firebase') ||
      url.hostname.includes('firestore') ||
      url.hostname.includes('googleapis.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static assets — cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          // Cache successful responses
          const clone = response.clone();
          caches.open(CACHE_STATIC).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Offline fallback for HTML requests
          if (event.request.destination === 'document') {
            return caches.match('/LeoEnglish/index.html');
          }
        });
    })
  );
});

// ── PUSH NOTIFICATIONS ────────────────────────────────────
self.addEventListener('push', event => {
  const data = event.data?.json() || {
    title: 'LeoEnglish',
    body: '¡Tu racha te espera! 🔥 Practica 5 minutos hoy.',
    icon: '/LeoEnglish/manifest.json'
  };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/LeoEnglish/icon-192.png',
      badge: '/LeoEnglish/icon-192.png',
      vibrate: [200, 100, 200],
      tag: 'leoenglish-daily',
      renotify: true,
      actions: [
        { action: 'open',   title: '📚 Estudiar ahora' },
        { action: 'later',  title: '⏰ Más tarde' }
      ],
      data: { url: '/LeoEnglish/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clientList => {
          if (clientList.length > 0) {
            return clientList[0].focus();
          }
          return clients.openWindow('/LeoEnglish/');
        })
    );
  }
});
