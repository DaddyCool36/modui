class Bouton1 extends AnimatedCanvas {

    constructor(canvas, couleur = 'white', couleurBouton = 'white', numero = null) {
        super(canvas);

        this.couleur = couleur;

        this.couleurBouton = couleurBouton;

        this.numero = numero;
        if (numero == null) {
            this.numero = Math.floor(1 + Math.random() * 99);
        }
    }

    avancer() {



    }

    dessiner() {
        this.ctx.beginPath();

        this.ctx.strokeStyle = this.couleur;

        this.epaisseur = 5;
        this.longueurLED = 40; // en %
        this.ctx.lineWidth = this.epaisseur;

        var xDebut = (this.width / 2) - (this.width * (this.longueurLED / 100) / 2) - this.epaisseur;
        var xFin = (this.width / 2) + (this.width * (this.longueurLED / 100) / 2) + this.epaisseur;

        this.ctx.moveTo(xDebut, this.height - (this.epaisseur));
        this.ctx.lineTo(this.epaisseur, this.height - this.epaisseur);
        this.ctx.lineTo(this.epaisseur, this.epaisseur);
        this.ctx.lineTo(this.width - this.epaisseur, this.epaisseur);
        this.ctx.lineTo(this.width - this.epaisseur, this.height - this.epaisseur);
        this.ctx.lineTo(xFin, this.height - this.epaisseur);

        this.ctx.stroke();

        this.ctx.fillStyle = this.couleurBouton;

        this.ctx.fillRect(xDebut + this.epaisseur, this.height - (this.epaisseur * 2), this.width * (this.longueurLED / 100), this.epaisseur * 3);

        this.stopAnimation = true;

        console.log(this.numero);

    }
}