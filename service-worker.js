// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

const cacheName = "web-dev";
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Install");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll([
        "index.html",
        "app.js",
        "assets/style.css",
        "assets/theme.css",
        "assets/offline.html",
      ]);
    })
  );
});
