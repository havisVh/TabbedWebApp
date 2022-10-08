const cachea = "HVHCache-v1";
list = []
var appshellfiles = [
    '/index.html', '/tab.min.js', '/save.min.css', '/manifest.json', '/logo.png',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap',
    'https://fonts.gstatic.com/s/materialsymbolsrounded/v50/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190Fjzag.woff2',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'

]

self.addEventListener("install", e => {


    e.waitUntil((async () => {

        const cache = await caches.open(cachea);
        await cache.addAll(appshellfiles);
    })());


});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

const cacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    return fetch(request);
};

self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
});