'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f5477d7026008cc3093e3bb7e779822d",
"assets/AssetManifest.bin.json": "c5ea7be6bf19ce045cfa1e90a327b35d",
"assets/AssetManifest.json": "69968622d531586dead4f9dffeb9833a",
"assets/assets/auth_bg.jpg": "bc241672d1d853c1469b3b30f4fa4ace",
"assets/assets/auth_bg_light.png": "0bc56cd6f2aa66a969cb74526b498e3b",
"assets/assets/icons/categories/all-music.png": "c490b4dca27753d38f9e151be6fdcf6c",
"assets/assets/icons/categories/drum.png": "7365dcf1db7dabafcfdb9d6ac591974f",
"assets/assets/icons/categories/hip-hop.png": "4dc33915045401b3f07b8d66b26cbef5",
"assets/assets/icons/categories/musical.png": "3216787fa4705288e4af045f8c7fca80",
"assets/assets/icons/categories/piano.png": "6c094a863a526c52dacdbe5e62ab0623",
"assets/assets/icons/categories/string-instrument.png": "2d7006e63ad3b4bf4fb8c44857f6aa75",
"assets/assets/icons/categories/trumpet.png": "efb67130193b51e700287db0795d295c",
"assets/assets/images/logos/logo1.png": "b91f5fd103bf3f509087e10614fa5c1e",
"assets/assets/images/logos/logo2.png": "f2bdc6e1f3118cb27dc7826ee7078b9d",
"assets/assets/images/logos/logo_with_text.png": "34609618154a7bc5a9992bd7ff61a3e7",
"assets/assets/images/logos/text_logo.png": "43b2dca8869d8a041295d130777f01e4",
"assets/assets/images/logos/text_logo_light.png": "792262b4653aff1e4af2f4e5345326d4",
"assets/assets/images/profile_image.png": "14b897f4bc1ce0436880f1c66b1545b8",
"assets/assets/images/thumbnails/alan-walker-alone.jpg": "08054cbe04a92c9ee4e2173a4d232ce7",
"assets/assets/images/thumbnails/alan-walker-faded.jfif": "69f35f4a9195fcf7cbd40198a091ba42",
"assets/assets/images/thumbnails/alan-walker-lily.jfif": "1f3a598256d859bb7e781dea6b8b5b30",
"assets/assets/images/thumbnails/ariana-grande-the-way.png": "16e67e2d37304d67a3a77f6f1a8c8078",
"assets/assets/images/thumbnails/bb-love-me.jfif": "b8912eecc45adafd08cb5b6c5b9f5eb1",
"assets/assets/images/thumbnails/bb-show-me.jfif": "6eb19cfe5a1d194643d004f009b1fd92",
"assets/assets/images/thumbnails/bb-want-it.jfif": "4a74aec25f781aac1295bea5c6e9b6eb",
"assets/assets/images/thumbnails/scene-who-says.jpg": "f08820a4daa96c6a3392cde0efd202f2",
"assets/assets/images/thumbnails/welcome-to-newyork.jpg": "aae42bb219639ad225159b9dcddf49ee",
"assets/assets/musics/01%2520Welcome%2520To%2520New%2520York.mp3": "85b963da3c0de7cc69e375765a82e981",
"assets/assets/musics/078%2520Selena%2520Gomez%2520&%2520The%2520Scene%2520-%2520Who%2520Says.mp3": "9b1ef2fc3e373729462e2cca62a49380",
"assets/assets/musics/Alan%2520Walker%2520_%2520Ava%2520Max%2520-%2520Alone_%2520Pt.%2520II(MP3_160K).mp3": "6453b691762cf5f1a18d347760476051",
"assets/assets/musics/Alan%2520Walker_%2520K-391%2520_%2520Emelie%2520Hollow%2520-%2520Lily%2520(Lyrics)(MP3_160K).mp3": "2882865ef89678c34e23bf55039b118c",
"assets/assets/musics/Alan_Walker_-_Faded_128_16842960.mp3": "e323424ff117642a5cb8dc2320830f99",
"assets/assets/musics/Ariana_Grande_ft._Mac_Miller-The_Way_(www.mp3.vet).mp3": "37daec58e85c8da80e270cb4d11a2665",
"assets/assets/musics/As%2520Long%2520as%2520You%2520Love%2520Me.mp3": "150a68b50520e470f808cfc5e4ac2c5a",
"assets/assets/musics/Backstreet%2520Boys%2520-%2520I%2520Want%2520It%2520That%2520Way.mp3": "8e0940599811014409258f8dc8e6e617",
"assets/assets/musics/Backstreet%2520Boys%2520-%2520show%2520me%2520the%2520meaning%2520of%2520being%2520lonely.mp3": "2f528fc7bf8455e46516096f9c475696",
"assets/assets/musics/Backstreet_Boys_-_Snow_Me_The_Meaning_Of_Bein_Lonely_(Premium)%2520-%2520Copy.mp3": "2f1342fbc81a94ca07f6ebab98337e5e",
"assets/assets/musics.json": "6e2563336aa35ba5489ae99cdaba4063",
"assets/FontManifest.json": "b67a39dc77d36f1d266230e70bbdc8cf",
"assets/fonts/MaterialIcons-Regular.otf": "8a8d04ad06b858fecd2b5944cc29e5e6",
"assets/NOTICES": "6ef89dac9035c9f13c9d21f21a4d4e59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_neumorphic_plus/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "26d301ad1a52392a8b5508d6664e92e8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "0816d48368c89b66d8478b49899c255a",
"icons/Icon-512.png": "2d54351c8592ef1e1838f45cf013c36c",
"icons/Icon-maskable-192.png": "0816d48368c89b66d8478b49899c255a",
"icons/Icon-maskable-512.png": "2d54351c8592ef1e1838f45cf013c36c",
"index.html": "8097a9ff86284e48fb1ee6b688cfe25d",
"/": "8097a9ff86284e48fb1ee6b688cfe25d",
"main.dart.js": "65800c42db7a1a469741bf5726531374",
"manifest.json": "dc2309b323fa2de181d4fb39bf9599a0",
"version.json": "bde3e0589ca843d1f6d994262542c30b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
