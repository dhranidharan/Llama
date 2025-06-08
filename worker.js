const filesToCache = [
	"Llama.htm",
	"Llama.js",
	"Llama.json",
	"LlamaFavIcon_16x16.png",
	"LlamaFavIcon_192x192.png",
	"LlamaFavIcon_512x512.png",
	"LlamaShare.png"
];

const staticCacheName = "llama-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});