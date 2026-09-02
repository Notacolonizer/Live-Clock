const CACHE_NAME = "live-clock-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./script.js",
    "./manifest.json"
    "./icons/icon-192.png"
    "./icons/icon-512.png
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipwaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys 
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
        );
    })
};

self.clients.claim();
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.resquest).then(response => {
            return response || fetch(event.resquest);
        })
    );
});
