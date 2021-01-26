const cheat = {
  generateToken: function(length) {
    let result = '';

    // Pour empecher la triche avec quelqu'un qui entrerait directement dans son navigateur l'url pour avoir toutes les cases, on va utiliser un token (facon CSRFToken) pour etre sur que la requete provient bien d'une fenetre de jeu
    let autorizedCaracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Boucle qui va generer X caracteres aleatoire (X etant la valeur passée en parametre)
    for (let i = 0; i < length; i++) {
      // Math.random va me renvoyer un nombre compris entre 0 et 1
      // Pour que ca corresponde a un caractere de la liste, il faut le multiplier par le nombre de caracteres de la liste
      // Et vu qu'on aura alors un nombre a virgule, il faut l'arrondir
      result += autorizedCaracters.charAt(Math.floor(Math.random() * autorizedCaracters.length));
    }

    return result;
  },

  sendToken: function(token) {
      // Je dois envoyer le token
  }

}
