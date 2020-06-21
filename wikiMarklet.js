// Console like operation

// Selecting main div.
content = document.getElementsByClassName("mw-parser-output")[0]
divs = content.getElementsByTagName("div")
for (i = divs.length - 1; i >= 0; i--) {
    divs[i].remove()
}

// Remove []annotations from the page
sups = content.getElementsByTagName("sup")
for (i = sups.length - 1; i >= 0; i--) {
    sups[i].remove()
}

// Replace a tags with plain words.
ats = content.getElementsByTagName("a")
for (i = ats.length - 1; i >= 0; i--) {
    ats[i].replaceWith(ats[i].textContent)
}


// Set body to only main content
document.body.innerHTML = content.innerHTML
// Set basic css padding
document.body.style.padding = "10px";

// TODO Maybe change colors later on?

// Code in the form to be entered in Address Bar.
(function () {
    content = document.getElementsByClassName("mw-parser-output")[0];
    divs = content.getElementsByTagName("div");
    for (i = divs.length - 1; i >= 0; i--) {
        divs[i].remove();
    }
    sups = content.getElementsByTagName("sup");
    for (i = sups.length - 1; i >= 0; i--) {
        sups[i].remove();
    }
    ats = content.getElementsByTagName("a");
    for (i = ats.length - 1; i >= 0; i--) {
        ats[i].replaceWith(ats[i].textContent);
    }
    document.body.innerHTML = content.innerHTML;
    document.body.style.padding = "10px";

})();

// EXACT code to be entered in the Address bar.
javascript: (function () { content = document.getElementsByClassName("mw-parser-output")[0]; divs = content.getElementsByTagName("div"); for (i = divs.length - 1; i >= 0; i--) { divs[i].remove(); } sups = content.getElementsByTagName("sup"); for (i = sups.length - 1; i >= 0; i--) { sups[i].remove(); } ats = content.getElementsByTagName("a"); for (i = ats.length - 1; i >= 0; i--) { ats[i].replaceWith(ats[i].textContent); } document.body.innerHTML = content.innerHTML; document.body.style.padding = "10px"; })();

