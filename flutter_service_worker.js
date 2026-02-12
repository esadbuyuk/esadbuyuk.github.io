'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c3bbe7922e9a94d0e5f85ff88ec259c1",
"assets/AssetManifest.bin.json": "961e12b305f91318e2ed6a582a274a26",
"assets/AssetManifest.json": "883c2e74f7d2e9a202c0b5f0ee48e891",
"assets/assets/fonts/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/fonts/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/InriaSans-Bold.ttf": "a26dc752ecbb48174f89704389173dd8",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/icons/badge_1.svg": "0566cbdf15dc8bc7b4ef490e7c19e218",
"assets/assets/icons/badge_2.svg": "d1a8d04eb75c7cf2ec65bdfacc78a9a1",
"assets/assets/icons/google_icon_logo.svg": "d677415d7c9c5baea125e867d6d78c2f",
"assets/assets/icons/kings_crown.png": "46d046f0fa3c4485e2f7c47985c6f4bc",
"assets/assets/icons/next_icon.svg": "7fe125fad5647b766404289d9c217bd8",
"assets/assets/icons/previous_icon.svg": "89f8c4928f44564e4e2f862e802280b4",
"assets/assets/icons/trophy_1.svg": "9bbef18e0b101e2100cb7d6021777850",
"assets/assets/icons/trophy_2.svg": "19cffacf0f9bc8f6896892883ad085a7",
"assets/assets/icons/trophy_3.svg": "9b57a29649a729eb3741009918cfbd54",
"assets/assets/icons/trophy_4.svg": "333036b83e1f648d6a210a12c1227c75",
"assets/assets/images/logo.svg": "ef30d9f4e07c5c923ec7350ea47cf75b",
"assets/assets/images/stark-mobile-square-intro.png": "dc4a0b683652e1a3cfdd110c5059b67f",
"assets/assets/images/stark-pc-intro.png": "94b6dc0b18439c995df9851dbfcca7be",
"assets/assets/sounds/camera-click.ogg": "bd9b00b86fb3fca11952c122bb69d939",
"assets/assets/sounds/missedShotSound.mp3": "bf0b13ac1cd1319548d8de5d4020ceaa",
"assets/assets/sounds/successfulShotSound.mp3": "55b7421c09371f2d2e3cddb2a16683b5",
"assets/FontManifest.json": "c814fa768c95626a2f811f34fd5d259b",
"assets/fonts/MaterialIcons-Regular.otf": "bbfc6e00d2edea3e4c411524fb233830",
"assets/NOTICES": "e97e425bfb4b94f1724e78889f19fc3c",
"assets/optik.js": "4c21a52a96ad3479749d3ecce90c0a79",
"assets/optik.wasm": "433d5ecbed48cc85004d10cc6fbcba4e",
"assets/optik_detector.js": "bf51e0b20f14efe7d32bbd4374d93e36",
"assets/optik_detector.wasm": "0b2a089699ed39db8e0f797565dc4547",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/assets/AssetManifest.bin": "c3bbe7922e9a94d0e5f85ff88ec259c1",
"canvaskit/assets/AssetManifest.bin.json": "961e12b305f91318e2ed6a582a274a26",
"canvaskit/assets/AssetManifest.json": "883c2e74f7d2e9a202c0b5f0ee48e891",
"canvaskit/assets/assets/fonts/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"canvaskit/assets/assets/fonts/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"canvaskit/assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"canvaskit/assets/assets/fonts/InriaSans-Bold.ttf": "a26dc752ecbb48174f89704389173dd8",
"canvaskit/assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"canvaskit/assets/assets/icons/badge_1.svg": "0566cbdf15dc8bc7b4ef490e7c19e218",
"canvaskit/assets/assets/icons/badge_2.svg": "d1a8d04eb75c7cf2ec65bdfacc78a9a1",
"canvaskit/assets/assets/icons/google_icon_logo.svg": "d677415d7c9c5baea125e867d6d78c2f",
"canvaskit/assets/assets/icons/kings_crown.png": "46d046f0fa3c4485e2f7c47985c6f4bc",
"canvaskit/assets/assets/icons/next_icon.svg": "7fe125fad5647b766404289d9c217bd8",
"canvaskit/assets/assets/icons/previous_icon.svg": "89f8c4928f44564e4e2f862e802280b4",
"canvaskit/assets/assets/icons/trophy_1.svg": "9bbef18e0b101e2100cb7d6021777850",
"canvaskit/assets/assets/icons/trophy_2.svg": "19cffacf0f9bc8f6896892883ad085a7",
"canvaskit/assets/assets/icons/trophy_3.svg": "9b57a29649a729eb3741009918cfbd54",
"canvaskit/assets/assets/icons/trophy_4.svg": "333036b83e1f648d6a210a12c1227c75",
"canvaskit/assets/assets/images/logo.svg": "ef30d9f4e07c5c923ec7350ea47cf75b",
"canvaskit/assets/assets/images/stark-mobile-square-intro.png": "dc4a0b683652e1a3cfdd110c5059b67f",
"canvaskit/assets/assets/images/stark-pc-intro.png": "94b6dc0b18439c995df9851dbfcca7be",
"canvaskit/assets/assets/sounds/camera-click.ogg": "bd9b00b86fb3fca11952c122bb69d939",
"canvaskit/assets/assets/sounds/missedShotSound.mp3": "bf0b13ac1cd1319548d8de5d4020ceaa",
"canvaskit/assets/assets/sounds/successfulShotSound.mp3": "55b7421c09371f2d2e3cddb2a16683b5",
"canvaskit/assets/FontManifest.json": "c814fa768c95626a2f811f34fd5d259b",
"canvaskit/assets/fonts/MaterialIcons-Regular.otf": "bbfc6e00d2edea3e4c411524fb233830",
"canvaskit/assets/NOTICES": "e97e425bfb4b94f1724e78889f19fc3c",
"canvaskit/assets/optik.js": "4c21a52a96ad3479749d3ecce90c0a79",
"canvaskit/assets/optik.wasm": "433d5ecbed48cc85004d10cc6fbcba4e",
"canvaskit/assets/optik_detector.js": "bf51e0b20f14efe7d32bbd4374d93e36",
"canvaskit/assets/optik_detector.wasm": "0b2a089699ed39db8e0f797565dc4547",
"canvaskit/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"canvaskit/assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/favicon.png": "2632f36f550ca8dfa5e76d7d26e7c215",
"canvaskit/flutter.js": "888483df48293866f9f41d3d9274a779",
"canvaskit/flutter_bootstrap.js": "e74a2b7c4a705ea8698a7ba5889cc3ad",
"canvaskit/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/icons/logo_192.png": "783e4c6ab85a2a6c8e5936a46ea0e916",
"canvaskit/icons/logo_48.png": "2632f36f550ca8dfa5e76d7d26e7c215",
"canvaskit/icons/logo_512.png": "d2d1b914af6f7230f72836fe3ce3f7a6",
"canvaskit/index.html": "203e5f79f268fc8fbba9b5e1a6b4e9c6",
"canvaskit/main.dart.js": "2625dc8e2172504fb7cd57fcc25ff3e8",
"canvaskit/manifest.json": "3313baab8f958a46ef03e20bb9950e4c",
"canvaskit/robots.txt": "e23c0d81bcb41129c3940761670d58ba",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/version.json": "a5c15c3298c547e01ee1b75a83da5b1d",
"canvaskit/_redirects": "2850381ae04204d7e647f8effb35d13e",
"favicon.png": "2632f36f550ca8dfa5e76d7d26e7c215",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "4f59038d616aa0c2f7bb3d8ca6f2115e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo_192.png": "783e4c6ab85a2a6c8e5936a46ea0e916",
"icons/logo_48.png": "2632f36f550ca8dfa5e76d7d26e7c215",
"icons/logo_512.png": "d2d1b914af6f7230f72836fe3ce3f7a6",
"index.html": "203e5f79f268fc8fbba9b5e1a6b4e9c6",
"/": "203e5f79f268fc8fbba9b5e1a6b4e9c6",
"main.dart.js": "1f75522ec31ec35b93bd2882d3fd547a",
"manifest.json": "3313baab8f958a46ef03e20bb9950e4c",
"robots.txt": "e23c0d81bcb41129c3940761670d58ba",
"version.json": "a5c15c3298c547e01ee1b75a83da5b1d",
"_redirects": "2850381ae04204d7e647f8effb35d13e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
