// Console like operation

content = document.getElementsByClassName("mw-parser-output")[0]
divs = content.getElementsByTagName("div")
for (i = divs.length-1; i >= 0; i--) {
    divs[i].remove()
}

// Remove [] from content.innerHTML
sups = content.getElementsByTagName("sup")
for (i = sups.length - 1; i >= 0; i--) {
    sups[i].remove()
}

ats = content.getElementsByTagName("a")
for (i = ats.length - 1; i >= 0; i--) {
    ats[i].replaceWith(ats[i].textContent)
}

// Add some basic css to it.
// Maybe change colors?

document.body.innerHTML = content.innerHTML
document.body.style.padding = "10px";

// Add same lines to the bookmarklet too.
(function() {
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

javascript: (function () { content = document.getElementsByClassName("mw-parser-output")[0]; divs = content.getElementsByTagName("div"); for (i = divs.length - 1; i >= 0; i--) { divs[i].remove(); } sups = content.getElementsByTagName("sup"); for (i = sups.length - 1; i >= 0; i--) { sups[i].remove(); } ats = content.getElementsByTagName("a"); for (i = ats.length - 1; i >= 0; i--) { ats[i].replaceWith(ats[i].textContent); } document.body.innerHTML = content.innerHTML; document.body.style.padding = "10px"; })();