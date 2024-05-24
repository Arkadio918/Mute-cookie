const readyCheck = setInterval(() => {
  const Game = unsafeWindow.Game;

  if (typeof Game !== 'undefined' && typeof Game.ready !== 'undefined' && Game.ready) {
    Game.LoadMod('https://github.com/Arkadio918/Mute-cookie/blob/main/Mute_cookie.js');
    clearInterval(readyCheck);
  }
}, 1000);
