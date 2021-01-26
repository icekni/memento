# Memento

Quand on arrive pas a dormir et qu'on repense aux notions vues la veille, on se dit que ca pourrait etre marrant de faire un petit jeu en JS

Puis pourquoi pas utiliser une API, donc va pour du PHP

Et puis meme si je ne suis pas doué en design, pourquoi pas revoir un peu css, ses animations et sa grid.

Et on finit avec un memento :-)

## Javascript

- Appel AJAX d'une API pour recuperer le tableau de jeu
- Generation dynamique du plateau
- gestion des classes css pour dynamiser le tout
- A venir :
  - Detection de la fin de partie
  - Affichage du nombre de coup
  - Envoie AJAX pour faire un tableau des scores en BDD
  - Formulaire pour specifier la difficulté, la taille du plateau, et envoyer via AJAX pour generer un plateau

## PHP

- Une petite API qui renvoie un plateau de jeu (pour l'instant fixe) et la valeur d'une carte en fonction de son numero
- A venir : 
  - Generation aleatoire du plateau de jeu
  - Gestion de taille differente de plateau en fonction de l'appel AJAX
  - Gestion du jeu en php pour eviter les petits malins de l'inspecteur d'element
  - Protection par token pour pas pouvoir faire les requetes en dehors du jeu
- Et qui sait ?
  - WebSocket pour jouer a 2
  - WebSocket pour chatter avec son adversaire

## Design (TODO)

Il reste tout a faire de ce coté là
- Des images a la places de simples lettres, ca serait pas mal
- Une interface qui guide mieux
- Des options possibles
- ...
