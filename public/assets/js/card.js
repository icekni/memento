const card = {
  lastCard: null,
  lastCardElement: null,

  currentCard: null,

  active: false,

  handleClicOnCard: function(e) {
    // Recupération de la carte cliquée
    const cardElement = e.currentTarget;

    // Si card.active n'est pas deja a true, alors on peut reveler la carte
    if (!card.active) {
      // Je decouvre la carte cliquée
      card.unveil(cardElement);
    }
    // Sinon c'est qu'il clique trop vite
    else {
      document.querySelector('footer').style.display = 'block';
      setTimeout(function() {
        document.querySelector('footer').style.display = 'none';
      }, 500);
    }

  },

  unveil: function(cardElement) {
    // Pour m'assurer qu'un utilisateur ne clique pas trop vite et empeche donc le re-cachement de la carte, je passe card.active a true
    card.active = true;

    // A cette carte, on va ajouter la class .active qui va decouvrir la carte pendant 3s puis la recacher
    cardElement.classList.add('active');

    card.currentCard = cardElement;

    // Recuperation du dataset qui donne sa coordonnée
    const coord = card.currentCard.dataset.card;

    // Il va falloir un certain temps pour qu'elle se retourne, et on ne veut pas afficher trop vite la valeur
    setTimeout(function() {
      card.get(coord);
    }, 300);
  },

  get: function(coord) {
    // Il faut envoyer une requete ajax pour recuperer la valeur de la carte
    fetch(app.apiUrl + 'get/' + coord)
      .then(utils.handleResponse)
      // On ecrit dans la carte
      .then(card.write)
      // Et on verifie si on a une paire
      .then(card.checkCards);
  },

  checkCards: function(value) {
    // On attend que la carte soit totalement retournée car la recuperation de la valeur et affichage dans la div ne se fera qu'apres retournement de la carte, pour eviter qu'un malin regarde dans la source de la page pour voir la valeur
    setTimeout(function() {
      // On verifie si une carte est deja retournée
      if (card.lastCardElement !== null) {
        // Verification de la valeur de la nouvelle carte avec la valeur de la carte precedente
        if (card.lastCard === value) {
          // On ajoute la classe .win
          card.currentCard.classList.add('win');
          card.lastCardElement.classList.add('win');

          // On efface la classe .active
          card.currentCard.classList.remove('active');
          card.lastCardElement.classList.remove('active');

          // Puis on efface les ecouteurs d'evnement sur ces 2 cartes
          card.currentCard.removeEventListener('click', card.handleClicOnCard);
          card.lastCardElement.removeEventListener('click', card.handleClicOnCard);

          // On laisse l'utilisateur cliquer a nouveau
          card.active = false;
        }
        // Sinon s'il y a une carte retournée mais que c'est pas la meme
        else if (card.lastCardElement !== null) {
          // On efface la classe .active
          card.currentCard.classList.remove('active');
          card.lastCardElement.classList.remove('active');

          // On efface le textContent
          card.clean(card.currentCard);
          card.clean(card.lastCardElement);
        }

        // On reset les proprietes pour lui faire comprendre qu'aucune carte n'est retournée
        card.lastCard = null;
        card.lastCardElement = null;
      }
      // Sinon (= S'il n'y a plus de carte retournée)
      else {
        // On stocke dans lastCard et lastCardElement la valeur
        card.lastCard = value;
        card.lastCardElement = card.currentCard;

        // On laisse l'utilisateur cliquer a nouveau
        card.active = false;
      }

    }, 300);

  },

  write: function(value) {
    // On ecrit dans la carte sa valeur
    card.currentCard.textContent = value;
  },

  clean: function(cardElement) {
    // On recache la carte
    cardElement.classList.add('hide');

    // J'attends 0.3s et je recache sa valeur
    setTimeout(function() {
      cardElement.textContent = '';
    }, 300);

    // puis j'enleve la classe .hide
    setTimeout(function() {
      cardElement.classList.remove('hide');
    }, 500);

    // puis je laisse a nouveau l'utilisateur cliquer
    setTimeout(function() {
      card.active = false;
    }, 1000);
  }
}
