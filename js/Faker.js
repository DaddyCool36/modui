/**
 * Classe de génération de texte
 */
class Faker {

    /**
     * Génère un nombre aléatoire composé de nbChiffres chiffres.
     * @param {int} nbChiffres Nombre de chiffres que doit contenir le nombre. Défaut = 1.
     * @returns {string} Un nombre composé de nbChiffres chiffres.
     */
    static fakeNombre(nbChiffres = 1) {
        var nombres = "";
        for (var i = 0; i < nbChiffres; i++) {
            nombres += Math.floor(Math.random() * 9.99999);
        }
        return nombres;
    }

    /**
     * Génère un mot avec des lettres aléatoires. Le mot comportera le nombre de lettres nbLettres.
     * @param {int} nbLettres Nombre de lettre que comportera le mot. Défaut = 1
     * @param {int} casse Type de casse du mot : 
     *      - 0 = Mot entier en minuscules
     *      - 1 = Première lettre en majuscule, le reste en minuscule
     *      - 2 = Mot entier en majuscules
     * @returns {string} le mot généré.
     */
    static fakeMot(nbLettres = 1, casse = 0) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var mot = "";
        for (var i = 0; i < nbLettres; i++) {
            var lettre = alphabet[Math.floor(Math.random() * alphabet.length)];
            mot += lettre;
        }

        if (casse == 1) {
            mot = mot[0].toUpperCase() + mot.substring(1);
        }
        if (casse == 2) {
            mot = mot.toUpperCase();
        }

        return mot;
    }
}