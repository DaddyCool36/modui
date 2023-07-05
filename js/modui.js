/**
* Modular UI Display - ModUI
* @author Froum <djfroum@gmail.com>
*/

canvasManager = new CanvasManager("#modui");
var grille = canvasManager.genererGrille(12, 10);

var valH = Math.floor(Math.random() * 360);

Faker.fakeLabel();

grille.forEach(x => {
    x.forEach(y => {
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
        ui.activerOmbre(ombrageOuiNon > 0);

        animationAleatoire(ui);
    });
});

function animationAleatoire(ui) {
    var tps = Math.random() * 2000;
    setTimeout(() => {
        ui.startAnimating();
    }, tps);
}

