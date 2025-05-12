
// Single page apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
  console.log("Redirect script executed with pathname:", l.pathname);
  console.log("Full location:", window.location.href);
}(window.location))
