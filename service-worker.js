// service-worker.js

self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
    };

    event.waitUntil(
        self.registration.showNotification('abo Reda llsafar we elsyahah', options)
    );
});
