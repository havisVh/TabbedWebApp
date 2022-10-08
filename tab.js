async function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = "0%"
        await setTimeout(tabhide(tabcontent[i]), 20)

    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "rgb(255 255 255 / 79%)";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";
    await setTimeout(tabShow(pageName), 200)




    elmnt.style.backgroundColor = "#5656f6a3";
    elmnt.style.color = "rgb(255 255 255/200%)";
    elmnt.style.borderRadius = "4px"
    if (document.documentElement.clientWidth < 750) {
        document.getElementById("mySidenav").style.opacity = "0";

        document.getElementById("mySidenav").style.width = "0";
    }
}
function tabhide(tj) {
    tj.style.display = "none";
}
function tabShow(jj) {
    document.getElementById(jj).style.opacity = "100%";
}
function hide(pg) {
    elmt.style.opacity = "0%"
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function openNav() {
    document.getElementById("mySidenav").style.width = "70vw";
    document.getElementById("mySidenav").style.opacity = "1";


}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.opacity = "0";

    document.getElementById("mySidenav").style.width = "0";
}
function resetbody() {


    document.body.style.opacity = "100%"

}
async function checkSize() {
    if (document.documentElement.clientWidth > 900) {
        document.body.style.opacity = "0%"


        document.getElementById("mySidenav").style.width = "22vw";
        document.getElementById("mySidenav").style.opacity = "1";
        await setTimeout(resetbody, 200)


    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.opacity = "0";

    }
}

addEventListener('resize', checkSize);
function registerService() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("serviceworker.js");
    }
}
onload = (event) => {

    registerService()
    if (!navigator.onLine) {
        document.getElementById("offlineA").style.display = "flex"

    }
};
function updateOnlineStatus() {
    document.getElementById("offlineA").style.display = "none"
    if (!navigator.onLine) {
        document.getElementById("offlineA").style.display = "flex"
    }

}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

let deferredPrompt;
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
window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.getElementById("installMobile").style.display = "none"
    }
});

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