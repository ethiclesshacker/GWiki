# GWiki

#### Setup
Make sure your bookmarks bar(Chrome), or Favourites bar(Edge) is set to visible on all pages.
Drag the link at the end of the line to your bookamrks bar. Drag this: [GWiki](javascript: (function () { content = document.getElementsByClassName("mw-parser-output")[0]; divs = content.getElementsByTagName("div"); for (i = divs.length - 1; i >= 0; i--) { divs[i].remove(); } sups = content.getElementsByTagName("sup"); for (i = sups.length - 1; i >= 0; i--) { sups[i].remove(); } ats = content.getElementsByTagName("a"); for (i = ats.length - 1; i >= 0; i--) { ats[i].replaceWith(ats[i].textContent); } document.body.innerHTML = content.innerHTML; document.body.style.padding = "10px"; })();)

#### Use
Open any page in [Wikipedia](www.wikipedia.com), and press the bookmarklet on your bookmarks bar. _Voila!_ Done.