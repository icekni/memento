const display = {
  init: function() {
    // Pour debug, on affiche en console
    console.log('Création de la grille');

    // Il faut appeler ajax pour generer un tableau contenant X paires de caracters
    // Mais pour l'instant on va partir sur du 4x4, donc 8 paires de cartes
    // TODO faire ca avec un select qui permet de choisir la taille du plateau
    const maxCard = 16;

    // Une boucle va nous permettre de generer maxCard fois un div, dont le dataset indiquera la coordonnée
    for (let i = 0; i < maxCard; i++) {
      // Creation d'une div
      const divElement = document.createElement('div');

      // On met un dataset a cette div
      divElement.dataset.card = i;

      // On va en profiter pour ajouter un event listener sur cette div créée, comme ca pas besoin de la reselectionner ailleurs
      divElement.addEventListener('click', card.handleClicOnCard);

      // Puis on rajoute au DOM
      document.querySelector('.wrapper').appendChild(divElement);

    }
  },
}
