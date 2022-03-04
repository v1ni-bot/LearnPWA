console.log("main.js carregado.");
if (navigator.serviceWorker){
    console.log("Navegador possui suporte a PWA.");
    navigator.serviceWorker.register('/service-worker-minimum-to-intall-pwa.js')
    .then(function(){})
    .catch(function(err){});
} else {
    console.log("Navegador não possui suporte a PWA.");
}