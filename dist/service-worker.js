!function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox?console.log("Workbox Loaded"):console.log("Workbox Failed to Load"),workbox.precaching.precacheAndRoute([{'revision':'d7e60f9d1433a45ed71817f6d23abeca','url':'6467d9a24f234e8e8e07c3309e520b7a.woff2'},{'revision':'4020219c1eb851338f76707ee9ed74f3','url':'assets/android-chrome-144x144.png'},{'revision':'e8a06bd64119dc31169ea4d21625358d','url':'assets/android-chrome-192x192.png'},{'revision':'15053ab810815bf0a7f79596e059108f','url':'assets/android-chrome-256x256.png'},{'revision':'3d9dd026f44fe7f27c4c2a156732a0ad','url':'assets/android-chrome-36x36.png'},{'revision':'e6f7671d505d705bd99b0010bf1c779e','url':'assets/android-chrome-384x384.png'},{'revision':'712181c0fbc44a48eb9cf1fa9b6a5b2c','url':'assets/android-chrome-48x48.png'},{'revision':'3b474d9ae19e035249f565863dd5e9f7','url':'assets/android-chrome-512x512.png'},{'revision':'5fa9bb5849bc2b6f3e9c8897328c25b9','url':'assets/android-chrome-72x72.png'},{'revision':'d01848fced4aadcbad5710855da2e654','url':'assets/android-chrome-96x96.png'},{'revision':'6b5f84d246a15c9405a944a0d0485cec','url':'assets/apple-touch-icon-1024x1024.png'},{'revision':'af466408be153f5901a487bc67203aa6','url':'assets/apple-touch-icon-114x114.png'},{'revision':'1bc7c2cfb026cdf31a9fbd86ee8dc9d2','url':'assets/apple-touch-icon-120x120.png'},{'revision':'295af8073b7016a80b094f34cf30dcfb','url':'assets/apple-touch-icon-144x144.png'},{'revision':'fb779931c1d9850dad53e7e1cfc4730c','url':'assets/apple-touch-icon-152x152.png'},{'revision':'3556bc844c9c50043a2d8748da2e091f','url':'assets/apple-touch-icon-167x167.png'},{'revision':'b8b59ab3b618aadeb7d957458f1ba218','url':'assets/apple-touch-icon-180x180.png'},{'revision':'d3a539f1370f6396a895908fe0bc35b8','url':'assets/apple-touch-icon-57x57.png'},{'revision':'5d014f167ce0dda08061e59e2c7bba2f','url':'assets/apple-touch-icon-60x60.png'},{'revision':'379b504aa0b47e07d0417495ab2a0ea2','url':'assets/apple-touch-icon-72x72.png'},{'revision':'af38dde0e8fc98c374b50ebaca0c479a','url':'assets/apple-touch-icon-76x76.png'},{'revision':'b8b59ab3b618aadeb7d957458f1ba218','url':'assets/apple-touch-icon-precomposed.png'},{'revision':'b8b59ab3b618aadeb7d957458f1ba218','url':'assets/apple-touch-icon.png'},{'revision':'b5109f9f71bcbe9ed69d49c5ad8e13fe','url':'assets/apple-touch-startup-image-1125x2436.png'},{'revision':'bf0af83fd4adc24e9b7f5e235473fbb8','url':'assets/apple-touch-startup-image-1136x640.png'},{'revision':'09abff41f2d527cba6acc836f4a704e4','url':'assets/apple-touch-startup-image-1242x2208.png'},{'revision':'4ec3482e5ab4a405eb93ab29d8520363','url':'assets/apple-touch-startup-image-1242x2688.png'},{'revision':'73a6f8e37cab1fbf8f01b5a2ef72d611','url':'assets/apple-touch-startup-image-1334x750.png'},{'revision':'fb18c18eac667da9792a5ec5e0954070','url':'assets/apple-touch-startup-image-1536x2048.png'},{'revision':'b0d2b5ca8f2a89a646bb3ad5e661bc4b','url':'assets/apple-touch-startup-image-1620x2160.png'},{'revision':'5a91708f211d1d9260539ec4f82a09bc','url':'assets/apple-touch-startup-image-1668x2224.png'},{'revision':'3362149b8fb4c9e66c419f33c28f7b3b','url':'assets/apple-touch-startup-image-1668x2388.png'},{'revision':'1b0bddeb9872f18f774b6df3e0e1b173','url':'assets/apple-touch-startup-image-1792x828.png'},{'revision':'a19b0f64d0c062ab7071b3453205594c','url':'assets/apple-touch-startup-image-2048x1536.png'},{'revision':'6dfb15a764fd2f7a3bb9b2c9b19bf365','url':'assets/apple-touch-startup-image-2048x2732.png'},{'revision':'94447f601380b452dcc34c93aba60ca6','url':'assets/apple-touch-startup-image-2160x1620.png'},{'revision':'f4e621b2fd0e1f59d5fdffe709e2de6d','url':'assets/apple-touch-startup-image-2208x1242.png'},{'revision':'7294b0803dac649e3f15e3c4e585a7b0','url':'assets/apple-touch-startup-image-2224x1668.png'},{'revision':'209fe991a6bf1a22a16cacb500170b30','url':'assets/apple-touch-startup-image-2388x1668.png'},{'revision':'b8f99dba4521bfb8ec6cd5be33d425cc','url':'assets/apple-touch-startup-image-2436x1125.png'},{'revision':'0f4a56392ff61d8a2eaf1e210028312b','url':'assets/apple-touch-startup-image-2688x1242.png'},{'revision':'8e044c36bc2e939c532ff0cff2acaa69','url':'assets/apple-touch-startup-image-2732x2048.png'},{'revision':'394b7aa0e18fa5e57544662860531aaf','url':'assets/apple-touch-startup-image-640x1136.png'},{'revision':'ab4a83ed5fecc1f816f6a7db2cf728be','url':'assets/apple-touch-startup-image-750x1334.png'},{'revision':'6908a7d16e5313c99c85ba9d7c9f6461','url':'assets/apple-touch-startup-image-828x1792.png'},{'revision':'1a0cb11489931ba8794020c6ae510b48','url':'assets/browserconfig.xml'},{'revision':'dea141435412d06869a1c8ea98babf84','url':'assets/coast-228x228.png'},{'revision':'b6a6e346f169ca1b19a7279c5a902e54','url':'assets/favicon-16x16.png'},{'revision':'44b1d85373e9233cd28d91af29780d02','url':'assets/favicon-32x32.png'},{'revision':'712181c0fbc44a48eb9cf1fa9b6a5b2c','url':'assets/favicon-48x48.png'},{'revision':'5cb4293c1e5708ba812d6c0234f996ff','url':'assets/favicon.ico'},{'revision':'60c91470ba329b7c7577b5c2a82ccc65','url':'assets/firefox_app_128x128.png'},{'revision':'607e97ce9abfaa5759d254217ffaef75','url':'assets/firefox_app_512x512.png'},{'revision':'44cf4467fa2ce02c8062d19e450f067c','url':'assets/firefox_app_60x60.png'},{'revision':'948309f3e201c6cbb43b21a663cfca2c','url':'assets/manifest.json'},{'revision':'fc9fa5d081129406e6cf6e30277f4f93','url':'assets/manifest.webapp'},{'revision':'4020219c1eb851338f76707ee9ed74f3','url':'assets/mstile-144x144.png'},{'revision':'8fe48e8f1718e87955bd2c56d72ae738','url':'assets/mstile-150x150.png'},{'revision':'e39844c6ae3c57044bdb49da87ee5257','url':'assets/mstile-310x150.png'},{'revision':'4437a5f6cf35ab9567aa9d4faa7447e6','url':'assets/mstile-310x310.png'},{'revision':'ec0126a6e311a2d2c70b52195c3c908a','url':'assets/mstile-70x70.png'},{'revision':'31bdae5efcc992c4b32311b23794053e','url':'assets/yandex-browser-50x50.png'},{'revision':'ebdf34d081d62d271a81177e6c736e7b','url':'assets/yandex-browser-manifest.json'},{'revision':'c68c755933bb401939dee611fe8700da','url':'bundle.js'},{'revision':'06d0d9295e28ece380c16a47be3a2756','url':'index.html'}]),workbox.routing.registerRoute(new RegExp(".(png|svg|jpg|jpeg)$"),workbox.strategies.cacheFirst({cacheName:"cache-image",plugins:[new workbox.expiration.Plugin({maxAgeSeconds:604800,maxEntries:50,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("/pages/"),workbox.strategies.cacheFirst({cacheName:"cache-pages",plugins:[new workbox.expiration.Plugin({maxAgeSeconds:604800,maxEntries:50,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("https://api.football-data.org/v2/"),workbox.strategies.staleWhileRevalidate({cacheName:"cache-url",cacheExpiration:{maxAgeSeconds:1800}})),workbox.routing.registerRoute(/^https:\/\/upload\.wikimedia\.org/,workbox.strategies.cacheFirst({cacheName:"logo-team",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:2592e3,maxEntries:30})]})),self.addEventListener("push",(function(e){var o={body:e.data?e.data.text():"Push message no payload",icon:"assets/images/icons/cup.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push Notification",o))}))}]);