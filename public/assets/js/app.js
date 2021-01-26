const app = {
  apiUrl: "http://cedric-josso.vpnuser.lan:8800/",

  init: function() {
    // Pour debug, on affiche en console
    console.log('app.init() Chargée');

    // Au lancement de la page, il faut generer la grille
    display.init();
  },


}

document.addEventListener('DOMContentLoaded', app.init);
