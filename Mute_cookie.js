console.log('[==Starting==]');
Game.playCookieClickSound=function(){return};
console.log('[==ending==]');
var autoClickButton = document.createElement("button");
autoClickButton.innerText = "Autoclicker: " + buttonStateText[doLoop];
autoClickButton.setAttribute("style", buttonCSS);
 
autoClickButton.onclick = function(){
  doLoop = !doLoop;
  autoClickButton.innerText = "Autoclicker: " + buttonStateText[doLoop];
  clickLoop();
  shimmerLoop();
}
console.log('[==ending PT 2==]');
