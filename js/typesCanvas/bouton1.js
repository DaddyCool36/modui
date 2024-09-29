class Bouton1 extends AnimatedCanvas {

    constructor(canvas, couleur = 'white', couleurBouton = 'white', numero = null) {
        super(canvas);

        this.couleur = couleur;

        this.couleurBouton = couleurBouton;

        this.numero = numero;

        this.animations[0] = {
            avancer: function() {

                if (this.numero == null) {
                    this.numero = Faker.fakeNombre(2);
                }
        
                this.texte = Faker.fakeMot(3, 2);
        
            },

            dessiner: function () {
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

                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';

                var tailleNombre = this.height * 0.5;
                this.ctx.font = "bold " + tailleNombre + "px sans-serif";
                this.ctx.fillText(this.numero, (this.width / 2), (this.height / 1.7));

                var tailleTexte = tailleNombre * 0.3;
                this.ctx.font = "bold " + tailleTexte + "px sans-serif";
                this.ctx.textAlign = 'center';
                this.ctx.fillText(this.texte, (this.width / 2), (this.height / 4.0));


                this.stopAnimation = true;
            }
        };

    }

}