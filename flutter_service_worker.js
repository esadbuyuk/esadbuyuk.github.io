'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "007afa876a93c97f49b9df5587330b6b",
"assets/AssetManifest.bin.json": "204259d29dce8fb25134283a79a78c97",
"assets/AssetManifest.json": "89b68cbc71910ee6c960cb09500fd6b4",
"assets/assets/fonts/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/fonts/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/InriaSans-Bold.ttf": "a26dc752ecbb48174f89704389173dd8",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/icons/back_icon.svg": "f34bbe0ce42103e4ca5c3bd3e43a60ec",
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
"assets/assets/images/charts_animation.mp4": "58dd0c1155ff0ed77148344e6c7b528e",
"assets/assets/images/charts_gif.gif": "dca69753d1c22079960c86b68a2d88fa",
"assets/assets/images/chart_animation.webm": "d6bdab2726008eaed32f4ac79077750e",
"assets/assets/images/dark_logo_hd.png": "8bae2bf69bb2ab85561d747e56031046",
"assets/assets/images/light_logo.png": "510d2c21d873bfec5b7228ceeff6a22c",
"assets/assets/images/light_logo_hd.jpg": "a24e6c6616294972d83c8335d0a7e62a",
"assets/assets/images/logo.svg": "ef30d9f4e07c5c923ec7350ea47cf75b",
"assets/assets/images/stark-mobile-square-intro.png": "dc4a0b683652e1a3cfdd110c5059b67f",
"assets/assets/images/stark-pc-intro.png": "94b6dc0b18439c995df9851dbfcca7be",
"assets/assets/images/test-analyze-gif.gif": "c3df9dc86381691695200ef8ff31a635",
"assets/assets/images/vooptik_logo_text.png": "db7c2f5527c61de16d462edc240bcc1c",
"assets/assets/sounds/camera-click.ogg": "bd9b00b86fb3fca11952c122bb69d939",
"assets/assets/sounds/missedShotSound.mp3": "bf0b13ac1cd1319548d8de5d4020ceaa",
"assets/assets/sounds/successfulShotSound.mp3": "55b7421c09371f2d2e3cddb2a16683b5",
"assets/FontManifest.json": "2009670c2c6b5a3a58e207ab6f76aae5",
"assets/fonts/MaterialIcons-Regular.otf": "cebcadb339be7b6f1a47b45e25170c28",
"assets/NOTICES": "bc9938cd118581b647bcb64613625743",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e3fe639bcbacf9279353148e1c212d04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2c3424e0678a720c3fe00b3b27997bb",
"/": "b2c3424e0678a720c3fe00b3b27997bb",
"main.dart.js": "8fb3315094bf432e79bea9fca82fb4d7",
"manifest.json": "ad767fee01bc3bc541d3dd66022a2530",
"version.json": "a5c15c3298c547e01ee1b75a83da5b1d"};
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
