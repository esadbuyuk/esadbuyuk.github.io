'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d0ede9f8fb8ac3dbf6ce598839593088",
"assets/AssetManifest.bin.json": "2b1e326463dd0068a85467d8d0382c4e",
"assets/AssetManifest.json": "30cb6956f0a819ef454f30c82c41a1ad",
"assets/assets/fonts/digital-7.ttf": "1e670d88b23c7ab956f1829e3828a210",
"assets/assets/fonts/HindSiliguri-SemiBold.ttf": "c75e4224905a200c868801e66480b7d3",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/InriaSans-Bold.ttf": "a26dc752ecbb48174f89704389173dd8",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/icons/back_icon.svg": "f34bbe0ce42103e4ca5c3bd3e43a60ec",
"assets/assets/icons/KAIHL_LOGO_MAV%25C4%25B0.png": "bd65fbed3c3c18aa0258e3dbd12f7264",
"assets/assets/icons/KAIHL_LOGO_YAZILI.png": "fc70cdd7badf7e23fa8147729bb0ce60",
"assets/assets/icons/kings_crown.png": "46d046f0fa3c4485e2f7c47985c6f4bc",
"assets/assets/icons/next_icon.svg": "7fe125fad5647b766404289d9c217bd8",
"assets/assets/icons/pitball_logo_hd.jpeg": "9de45c251a0841a39a9d003f8714a65a",
"assets/assets/icons/previous_icon.svg": "89f8c4928f44564e4e2f862e802280b4",
"assets/assets/icons/throne_front_view.webp": "67ce70d34cde4f5ad169e24460dff4a0",
"assets/assets/icons/throne_front_view_2.webp": "a836fadd013eed96a49b2422f8745478",
"assets/assets/icons/throne_front_view_3.webp": "cc8dc389c8f139a5e7a964eeb4d87950",
"assets/assets/icons/throne_front_view_4.webp": "65a7c01dfa2c3e248ab1c237c2151e4e",
"assets/assets/icons/throne_front_view_5.webp": "602efa6f54c50468eb22f19d79a33e6b",
"assets/assets/icons/throne_room_1.webp": "42466dedd1c739be3db13c24020cf963",
"assets/assets/icons/throne_room_2.webp": "2497109d7afc91b66c83fcd845ec2799",
"assets/assets/icons/throne_room_3.webp": "2a85cc11f45f35f6af6fcfea2b5e5984",
"assets/assets/icons/throne_room_4.avif": "6fad0147654990377e6315d0e9785240",
"assets/assets/icons/throne_room_5.webp": "784203fcda7a9a3624be179738f11107",
"assets/assets/icons/throne_side_view.webp": "ec73076713190c109ef0816497e2e1e7",
"assets/assets/icons/trophy_1.svg": "a8b2a06d5ee5782459596525ce1a075d",
"assets/assets/icons/trophy_3.png": "ae370c0c09aad9c656452ef7871672f4",
"assets/assets/icons/trophy_4.png": "bccd9b2f3699f2375c009102ba39d257",
"assets/assets/icons/trophy_5.png": "b69b82d6a1614164594e679093a1cd01",
"assets/assets/icons/trophy_6.png": "fc6e3e127cdbe4dc56dbb0add35197eb",
"assets/assets/icons/trophy_7.png": "f76197e3af0df15530bd127c626d46e0",
"assets/assets/icons/trophy_7_fixed.png": "f811f41014934558b6eefe89458a5797",
"assets/assets/images/thrones/islamic_throne_1.png": "9293352370654d6cc638eb26c1c484b9",
"assets/assets/images/thrones/islamic_throne_10.png": "e86db9183737e936c32f165f36e56c36",
"assets/assets/images/thrones/islamic_throne_10_clipped.png": "7a0525d74f850f71184c1be1626d67a2",
"assets/assets/images/thrones/islamic_throne_1_clipped.png": "c084b1db341bf254f086a93f301c768d",
"assets/assets/images/thrones/islamic_throne_2.png": "3524e9f2dcf4b8a59f9f26ec9385c4a5",
"assets/assets/images/thrones/islamic_throne_3.png": "b09492570b5a2bc14e2c8b4fc1e3fa0e",
"assets/assets/images/thrones/islamic_throne_4.png": "660edc0ac199606b366c258c4daf8c3b",
"assets/assets/images/thrones/islamic_throne_5.png": "b6a536a4868ccd0acc126505902e1426",
"assets/assets/images/thrones/islamic_throne_5_clipped.png": "303a72dd3fbf1119cfc86a2388e58331",
"assets/assets/images/thrones/islamic_throne_6.png": "d63a97b823bf808206dc8564622639b0",
"assets/assets/images/thrones/islamic_throne_6_clipped.png": "c5602319afd60c65b3db76e83d6ecf75",
"assets/assets/images/thrones/islamic_throne_7.png": "1badae29c719e0304a6ac57b98f47fe4",
"assets/assets/images/thrones/islamic_throne_8.png": "a3c90ea662fb5e7bf003edf9eee1b533",
"assets/assets/images/thrones/islamic_throne_8_clipped.png": "06e4bbc63755dab88ada4a1e08f78a56",
"assets/assets/images/thrones/islamic_throne_9.png": "f86543774d245bc5e9e9375a90a7bad6",
"assets/assets/sounds/missedShotSound.mp3": "bf0b13ac1cd1319548d8de5d4020ceaa",
"assets/assets/sounds/successfulShotSound.mp3": "55b7421c09371f2d2e3cddb2a16683b5",
"assets/FontManifest.json": "19891bf495eb874b713f01a6bafbac40",
"assets/fonts/MaterialIcons-Regular.otf": "41bb9042007736098be4aefaf4c7ea35",
"assets/NOTICES": "c90f508d9fdfbf7e70948db568cd5312",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bff8531e7cb2e5a7fa1297af06f26b49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2d43b32064695ea878c8f8c0c939158",
"/": "f2d43b32064695ea878c8f8c0c939158",
"main.dart.js": "aa488c718c79ae56ce3885eb7d0e62b6",
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
