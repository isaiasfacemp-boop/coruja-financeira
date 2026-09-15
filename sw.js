var CACHE = "coruja-financeira-v1";
var ARQUIVOS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function(ev){
  self.skipWaiting();
  ev.waitUntil(
    caches.open(CACHE).then(function(cache){ return cache.addAll(ARQUIVOS); })
  );
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(chaves){
      return Promise.all(chaves.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(ev){
  if(ev.request.method !== "GET") return;
  ev.respondWith(
    caches.match(ev.request).then(function(resposta){
      if(resposta) return resposta;
      return fetch(ev.request).then(function(rede){
        var copia = rede.clone();
        caches.open(CACHE).then(function(cache){ cache.put(ev.request, copia); });
        return rede;
      }).catch(function(){
        if(ev.request.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
