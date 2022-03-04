console.log("main.js carregado.");
if (navigator.serviceWorker){
    console.log("Navegador possui suporte a PWA.");
} else {
    console.log("Navegador não possui suporte a PWA.");
}