
document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', (evt) => {
        if(evt.id){
            gtag('event', 'link-convert', {'rede-social': evt.id}); return true;
        }
    })
})