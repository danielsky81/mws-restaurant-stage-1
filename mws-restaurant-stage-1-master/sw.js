self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cacheRestP1').then(function(cache) {
     return cache.addAll([
       '/',
       '/css/styles.css',
       '/data/restaurants.json',
       '/img/',
       'index.html',
       '/js/',
       'restaurant.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});