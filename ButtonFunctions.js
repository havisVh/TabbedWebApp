
function share() {
    shareOn('Tabbed Web App', 'Make your app awesome Automatically', 'https://tabbed.web.app')
}

function shareOn(title, alt, link) {
    {
        if (navigator.share) {
            navigator.share({
                title: alt,
                text: title,
                url: link
            }).then(() => {
                console.info("Shared")
            }).catch(err => {
                console.error(err)
            });
        } else {
            console.error("Canceled")
        }
    }
}


window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

async function pwainstall() {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (outcome === 'accepted') {
        console.log('User accepted the install prompt.');
    } else if (outcome === 'dismissed') {
        console.log('User dismissed the install prompt');
    }
}
var urls = {
    "TWA" : "https://tabbed.web.app"
}

function goTo(url){
    console.log([url,urls.url])
location.href = urls[url]
}