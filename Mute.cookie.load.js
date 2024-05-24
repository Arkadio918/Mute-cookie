javascript:(function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://github.com/Arkadio918/Mute-cookie/blob/main/Mute_cookie.js');
            clearInterval(checkReady);
        }
    }, 1000);
}());
