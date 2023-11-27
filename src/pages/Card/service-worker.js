self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('vcard').then(function (cache) {
        return cache.addAll(['./']);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'download-vcard') {
      const vCardData = event.data.vCardData;
      const blob = new Blob([vCardData], { type: 'text/vcard' });
      const blobUrl = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'contact.vcf';
      a.click();
    }
  });