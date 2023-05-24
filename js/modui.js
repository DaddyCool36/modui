/**
* Modular UI Display - ModUI
* @author Froum <djfroum@gmail.com>
*/

function mettreALEchelle(listeDePoints, echelle) {

    var nouvelleListe = [];

    listeDePoints.forEach(coord => {
        nouvelleListe.push([coord[0] * echelle, coord[1] * echelle]);
    });

    return nouvelleListe;
}

class Exemple1 extends AnimatedCanvas {

    constructor(canvas, x = 100, y = 100, vitesse = 1, couleur = 'white') {
        super(canvas);
        this.x = x;
        this.y = y;
        this.vitesse = vitesse;
        this.couleur = couleur;
        this.radius = 50;
        this.rotation = 0;
    }

    avancer() {
        this.rotation += this.vitesse * Math.PI / 180;
    }

    dessiner() {
        this.ctx.beginPath();

        this.ctx.shadowBlur = 20;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowColor = this.couleur;

        this.ctx.arc(this.x, this.y, this.radius, this.rotation, this.rotation + 1);
        this.ctx.fillStyle = this.couleur;
        this.ctx.fill();
    }
}

class Exemple2 extends AnimatedCanvas {

    constructor(canvas, x = 100, y = 100, vitesse = 1, couleur = 'white') {
        super(canvas);
        this.x = x;
        this.y = y;
        this.vitesse = vitesse;
        this.couleur = couleur;
        this.largeur = 80;
        this.hauteur = 50;

        this.angle = 0;
        this.pan = 0;
    }

    avancer() {
        this.angle += 2 * Math.PI / 180;
        this.pan = Math.sin(this.angle) * 100;
    }

    dessiner() {
        this.ctx.beginPath();

        this.ctx.shadowBlur = 20;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowColor = this.couleur;

        if (this.numeroAnimation == 0) {
            this.ctx.rect(this.x, this.y + this.pan, this.largeur, this.hauteur);
        }

        if (this.numeroAnimation == 1) {
            this.ctx.rect(this.x + this.pan, this.y, this.largeur, this.hauteur);
        }

        if (this.numeroAnimation == 2) {
            this.ctx.rect(this.x + this.pan, this.y + this.pan, this.largeur, this.hauteur);
        }

        if (this.numeroAnimation == 3) {
            this.ctx.rect(this.x, this.y, this.largeur + this.pan, this.hauteur);
        }

        this.ctx.fillStyle = this.couleur;
        this.ctx.fill();
    }
}

//const canvas = document.querySelector('#myCanvas');
// const exemple1Tournant = new Exemple1(canvas, 300, 80, 10, 'cyan');
// exemple1Tournant.startAnimating();

// const exemple2Pan = new Exemple2(canvas, 120, 200, 10, 'red');
// exemple2Pan.numeroAnimation = 3;
// exemple2Pan.startAnimating();

//const fenetre = new Fenetre(canvas, 0, 0, 1.8, 'lightgray', 950, 600, 3);
//fenetre.startAnimating();


canvasManager = new CanvasManager("#modui");
var grille = canvasManager.genererGrille(6, 5);
grille.forEach(x => {
    x.forEach(y => {
        var can = document.querySelector('#' + y);
        var val = 55 + Math.random() * 200;
        var color = 'rgb(' +
            val +
            ', ' +
            val + //Math.random() * 255 +
            ', ' +
            val + //Math.random() * 255 +
            ')';
        var epaisseur = 1 + (Math.random() * 5);
        var vitesse = 0.2 + (Math.random() * 5);

        /*
                var typesUI = [
                    'Fenetre',
                ];
        
                var uiType = typesUI[Math.round(Math.random() * typesUI.length)];
        */

        //var ui = eval('new ' + uiType + '(can, vitesse, color, null, null, epaisseur);');
        var ui = new Fenetre(can, vitesse, color, null, null, epaisseur);
        //fenetre.startAnimating();
        animationAleatoire(ui);
    });
});

function animationAleatoire(ui) {
    var tps = Math.random() * 2000;
    setTimeout(() => {
        ui.startAnimating();
    }, tps);
}