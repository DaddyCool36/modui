/**
* Modular UI Display - ModUI
* @author Froum <djfroum@gmail.com>
*/

canvasManager = new CanvasManager("#modui");
var grille = canvasManager.genererGrille(10, 1);

var valH = Math.floor(Math.random() * 360);

Faker.fakeBouton();

// Grille de fenetres
grille.forEach(y => {

    var ui = new Fenetre(
        document.querySelector('#' + y), // id du canvas
        y + 1, // vitesse de 1 à y
        'hsl(' + valH + 'deg, 100%, 70%)', // couleur
        'null',
        'null',
        y + 1);

console.log(ui)

    ui.startAnimating(0);
})




/*
grille.forEach(y => {
    var can = document.querySelector('#' + y);
    var valS = Math.floor(40 + Math.random() * 60);
    var valL = Math.floor(30 + Math.random() * 70);
    var color = 'hsl(' +
        valH +
        'deg, ' +
        valS +
        '%, ' +
        valL +
        '%)';
    var epaisseur = Math.round(1 + (Math.random() * 5));
    var vitesse = 1 + (Math.random() * 4);

    var espacement = Math.round(10 + (Math.random() * 40));

    var typesUI = [

        {
            'type': 'Fenetre',
            'params': [
                'can',
                'vitesse',
                'color',
                'null',
                'null',
                'epaisseur'
            ]
        },
/*
        {
            'type': 'Grille',
            'params': [
                'can',
                'color',
                'espacement'
            ]
        },

        {
            'type': 'Bouton1',
            'params': [
                'can',
                'color'
            ]
        }
        
    ];

    var numUIAleatoire = Math.floor(Math.random() * typesUI.length);
    var uiType = typesUI[numUIAleatoire];

    var params = uiType.params.join(',');
    var ui = eval('new ' + uiType.type + '(' + params + ');');

    var ombrageOuiNon = Math.floor(Math.random() * 2);
    // ui.activerOmbre(ombrageOuiNon > 0);

    animationAleatoire(ui);


    
});

function animationAleatoire(ui) {
    var tps = Math.random() * 2000;
    setTimeout(() => {
        ui.startAnimating(0);
    }, tps);
}

*/