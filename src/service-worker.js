importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox) console.log("Workbox Loaded");
else console.log("Workbox Failed to Load");

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
    new RegExp(".(png|svg|jpg|jpeg)$"),
    workbox.strategies.cacheFirst({
        cacheName: "cache-image",
        plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 24 * 7,
            maxEntries: 50,
            purgeOnQuotaError: true
        })]
    })
);

workbox.routing.registerRoute(
    new RegExp("/pages/"),
    workbox.strategies.cacheFirst({
        cacheName: "cache-pages",
        plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 24 * 7,
            maxEntries: 50,
            purgeOnQuotaError: true
        })]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-url',
        cacheExpiration: {
        maxAgeSeconds: 60 * 30 
        }
    })
);

workbox.routing.registerRoute(
    /^https:\/\/upload\.wikimedia\.org/,
    workbox.strategies.cacheFirst({
        cacheName: "logo-team",
        plugins: [
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
            maxAgeSeconds: 60 * 60 * 24 * 30,
            maxEntries: 30
        })]
    })
);

self.addEventListener('push', function(event) {
	var body;
	if (event.data) {
		body = event.data.text();
	} else {
		body = 'Push message no payload';
	}
	var options = {
		body: body,
		icon: 'assets/images/icons/cup.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
	  	}
	};
	event.waitUntil(
		self.registration.showNotification('Push Notification', options)
	);
});