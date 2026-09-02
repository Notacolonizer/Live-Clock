const CACHE_NAME = "live-clock-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./script.js",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.resquest).then(response => {
            return response || fetch(event.resquest);
        })
    );
});