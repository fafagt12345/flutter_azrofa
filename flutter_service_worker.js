'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "880080876aca7dd749c48b53b5408edc",
".git/config": "e092f240c13be3e60362c0e4e6878b91",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5f8b047a9d6862ff87ecae659104237c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b642a60de77b0648bf9e59e41c52575",
".git/logs/refs/heads/main": "10e3809a4aea5595d3347ed4b3811c7f",
".git/logs/refs/remotes/origin/main": "96a9f2dd8ad09052990a733dd522cc68",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/4181839e4550310142ea2e257888afc4680722": "8f1fbf39aff78eba96d24def73d6b63c",
".git/objects/18/3c62d616676aabc50260897c25245edc696486": "4cc24aa1df078c48d2d789f3d69a8804",
".git/objects/1c/e14bd73e787cda90a62e6b2c96db0ed9077944": "20b0418cd9e27d3f2bdd09f5e02a27e0",
".git/objects/1d/068482c5496fadc74984be49d36d04f8797d62": "320a7155664c4448f4560945c86fb9c5",
".git/objects/1e/c94fcbb1303c69c663f3e3d3d44b208e6156cf": "a83317998c6a9b640a2a62a6d66c58cb",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/33/0370cac6ddfacf76445275c06b53d8c2ebdf64": "45f3f179f8e36dcd1f73d3db34e879e6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/55/bb224f0febc3638c34774f4088dcf897764970": "e85be5b9eacb964eb8686f692d854a7f",
".git/objects/58/dbe32915f59a7a30fccd8ce32a8c21f89b6999": "2a4cc48b77eb0af9a47bd7b7492761d6",
".git/objects/5a/d08500a331ba62c72375fa0aaa3997df704748": "44e03cc0278611691219ae34109c7c72",
".git/objects/5c/d1701fc0368648d0f88b4714ccdc3eafe3db7a": "6d2830651206843bbdbd7d0d62399ef3",
".git/objects/64/59db734d9e67245651ba25e995226408e880ff": "0ba5872675b5baf46264b67916134cc8",
".git/objects/69/64946f72fc385ac8c97bf67ffcc94087ce25eb": "c0e66526204a474b4cc0226255318c1f",
".git/objects/6a/820802bf73ec13a552fe58acf6a37602c16f27": "a4e9f922c55215ac9273b02834218100",
".git/objects/6b/0bd9bf9c2ce72d8a81d40ec2c315b3950b3ad2": "a67c40904210b21bdf6cd88ac54d754c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/1e7ce658422220913f1709429a9ba3aa3a18e0": "3fda245546a34b53c8203392f34702a0",
".git/objects/73/bf62de255467cd936223849b335f5cd06a9996": "6e61c5cea2ad79aae050e8dfaade913b",
".git/objects/75/c1b300bfc79f4bbc37f4515b44cea608114036": "cee32ca91842e07e49736aa28f0387cb",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/87/e2e6ee1f09da56035fbab35e57a7e4dafb6ae9": "4987d02a15b6a72508386d9770b6e9ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/eebd752a13c39816e97a515b36a74c53397e33": "e9f4491818454dd4dd6f27ee6c0d1823",
".git/objects/8e/3692def4f98558869eede2c3bc488a0b4ba9b2": "7561d3c7e27c9978031ce9cca49b2860",
".git/objects/92/15873eb16b8597f660b5e471ede597432d98b6": "b04678f9cf8816dc4c3be9bedd854915",
".git/objects/97/03ff3e25e3ef6c6fe63aa3efb3b06dea0dce4a": "daa104e68b418dc4981df8380a469cf3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3138a7c7b4ff138d5fad23cf9346ce42ca4a26": "217a62da139e62f7c8a63f2c33d2d79d",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a7/e13b36d2efb7087f1d0e560a6c81c065c2d063": "650c83020fa02ef20432fe33d1b160c9",
".git/objects/a8/ede868dacfd9d298e2e59351539b60dca78652": "167fb1e24597f9392a6485250be9ca0b",
".git/objects/ac/8b791c20d737494d929195181a5a7cff9ed641": "0dfb6cf1029c95c199745e1bd9dcc02e",
".git/objects/b2/bec9f646ece9491cccee8f5c5b9f23747eac12": "5da9f8e258dba64ac54d3db64ca7ee75",
".git/objects/b6/70caea539d4a047c6c96bfa72c3c809517a6f0": "17d98c428e09edca4b381b320dcd876e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/584e87e8f3aff925da66071c929ebfad427f4f": "bbf227cc6dc2a56a57df8d02fa214c8e",
".git/objects/b9/9e774404c064802fb34257fb9ac7ffa8d471b5": "7e5f724a15a96980a20df39c89825b05",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/de/6b181a7b0c9d3b6c283f99502ffbe13297925b": "10d6ebd1450bcada04b1a48e66c08af4",
".git/objects/e2/834998a29bdd2d21a28a2ca6c15e7744610202": "75da7ea5b10bdb99bd00f1771b5c9cd8",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/bb3502887943ef2aa2ad603fb93b7c46662a51": "376e10854e1ba5572aecf0434f825fc1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/f206a6042681eeeb929fe23dfac9e8be3133c7": "f2f01b3d8d25935a52f30c8ae4496385",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/58fb7bacc258b2734030c33d8585785e52df65": "0e27b323cb764ab3c4ead266f541db2c",
".git/objects/ff/ee75f8b0d0fc3c9da0c9e5cef5a49e947e700f": "0db2e763368d341a4e1a240ffdd6655d",
".git/refs/heads/main": "322d2571c3e346ed4c791af224e849c8",
".git/refs/remotes/origin/main": "322d2571c3e346ed4c791af224e849c8",
"assets/AssetManifest.bin": "40d70aaf9cadc7a5fff1b854c2f02b4a",
"assets/AssetManifest.bin.json": "721819eaa9f21991bd362c93c683a733",
"assets/AssetManifest.json": "b34a7451099e8986dd879698afedc776",
"assets/assets/images/air_mineral.jpg": "75c3108b2a86cb15275d51fa96cb9e8f",
"assets/assets/images/air_mineral.png.png": "a3eed413feaacbdfef11a51cdb146dd9",
"assets/assets/images/coklat.jpg": "d124b13bdb95acc8dbdbfe41133685b9",
"assets/assets/images/coklat.png": "8fa2fd2e2961a4c41c24726a13a58de3",
"assets/assets/images/keripik.jpg": "e68b2d311163f823df136d5127452869",
"assets/assets/images/keripik.png": "0795d6e1d8bf0459c6c303c2fbb2d6e5",
"assets/assets/images/kopi.png.png": "aae1586bd70c61654d5063d273e2fec5",
"assets/assets/images/kopi1.jpg": "fa5b04579feb0b20e77390d88c83b4e5",
"assets/assets/images/minuman%2520eneergi.jpg": "ebb70c2c1bfb017e9e73000107495e41",
"assets/assets/images/minuman%2520eneergi.png": "aac9ac49fd29f842c9cd24b4a4d983cc",
"assets/assets/images/roti.jpg": "fa2187c5aa60d3b692d3e7e5e1678da9",
"assets/assets/images/roti.png.png": "8babc63e9a04fe5633744a166b465849",
"assets/assets/images/snack.jpg": "10cb6de709eb48cbb960e50727e3dc5b",
"assets/assets/images/snack.png": "d6bed3eb1167dc478adc09e19ed9f29a",
"assets/assets/images/susu.jpg": "8aa0057e5f67d4930b19b7afd6e76b50",
"assets/assets/images/susu.png": "4dbd7223f4bcee0e6e442b853a8de840",
"assets/assets/images/teh_botol.jpg": "4d104fcf5b30db8c006a5b007cefc10d",
"assets/assets/images/teh_botol.png.png": "6d30ae67fe28894336d4ce104d93b0a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0b456f48b29177b3f21b13b02bef66bd",
"assets/NOTICES": "8bbb76b95f196dc58049320240268061",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"flutter_bootstrap.js": "d776b6e893f37bc72dd964cde02bad57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8491d960efbdd3500fff080d1feb7280",
"/": "8491d960efbdd3500fff080d1feb7280",
"main.dart.js": "a506a3382dde14deb7385d6a61ebcdea",
"manifest.json": "582c401551e815d8d688653e2ed1d388",
"version.json": "11903ade1d7613aaf8ebf08531e2c4d9"};
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
