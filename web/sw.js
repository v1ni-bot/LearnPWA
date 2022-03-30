console.log("service worker rodou");

self.addEventListener('install', function(event) {
    alert("install event detected");
});