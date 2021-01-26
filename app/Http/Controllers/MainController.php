<?php

namespace App\Http\Controllers;

class MainController extends Controller
{
    // Pour l'instant en dur, mais a terme, il faudra stocker dans la BDD a la suite d'un create et aller le rechercher dans le get, par ex avec un token pour individualiser la partie
    private $game = [
        "c",
        "e",
        "b",
        "g",
        "a",
        "h",
        "g",
        "h",
        "d",
        "f",
        "e",
        "d",
        "c",
        "b",
        "a",
        "f"
    ];

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function main()
    {
        dump($_SERVER);
        return 'Coucou!';
    }

    public function create()
    {
        // ========================================
        // Generation du plateau de jeu
        // ========================================

        // On doit generer un tableau qui contient les caracteres autorisés, chacun affiché 2x, et melangé aleatoirement

        // Pour commencer dans du facile, on definit que le nombre de caracteres differents est 4
        // Ce nombre sera par la suite passé en argument a la methode pour generer des parties plus compliquées
        $maxCarac = 8;

        // On definit les caracteres autorisés dans un tableau
        $autorizedCaracters = str_split("abcdefghijklmnopqrstuvwxyz");

        // En fonction du nombre de caracteres max de la partie ($maxCarac) on prend les X premiers elements des caracteres autorisés
        array_splice($autorizedCaracters, $maxCarac);

        // $game sera le plateau de jeu, il s'agit d'un tableau associatif dont l'index sera un nombre commencant par 1
        $game = [];

        // Vu qu'on veut que chaque caractere soit doublé dans le tableau, il faut doubler ce tableau
        // On va boucler sur ce tableau, et a chaque entrée, on va rajouter la valeur de l'index courant a la fin du tableau
        foreach ($autorizedCaracters as $carac) {
            $autorizedCaracters[] = $carac;
        }

        // Il faut mainetnant melanger de maniere aleatoire ce tableau
        shuffle($autorizedCaracters);

        return response()->json($this->game = $autorizedCaracters);
    }

    public function get($id)
    {
        return response()->json($this->game[$id]);
    }
}
