async function getRoute(url){
    var markos = await fetch(url + ".html").then(function (response) {
    
        
        return response.text();
    }).then(function (html) {
        
        return html

    }).catch(function (err) {
    
        console.warn('Something went wrong.', err);
    });
    return markos

}

async function openRoute(Page,elmnt){

    

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "rgb(255 255 255 / 79%)";
    }
    elmnt.style.backgroundColor = "#5656f6a3";
    elmnt.style.color = "rgb(255 255 255/200%)";
    elmnt.style.borderRadius = "4px"
    if (document.documentElement.clientWidth < 750) {
        document.getElementById("mySidenav").style.opacity = "0";

        document.getElementById("mySidenav").style.width = "0";
    }
    var pageContent = await getRoute(Page)
    document.getElementById("view").innerHTML = pageContent
    

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
    console.warn("nav closed")
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
        await setTimeout(resetbody, 400)

    } else if (document.documentElement.clientWidth < 920) {
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

    }checkSize()
};
function updateOnlineStatus() {
    document.getElementById("offlineA").style.display = "none"
    if (!navigator.onLine) {
        document.getElementById("offlineA").style.display = "flex"
    }

}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.getElementById("installMobile").style.display = "none"
    }
});


