Sory didn't figured out :D ho to do it with CCMM
solved with Tempermonkey script
```
// ==UserScript==
// @name Mute Cookie
// @namespace MCookie
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

(function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.playCookieClickSound=function(){return};
            clearInterval(checkReady);
        }
    }, 1000);
})();
```
