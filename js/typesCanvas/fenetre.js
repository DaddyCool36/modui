class Fenetre extends AnimatedCanvas {

    constructor(canvas, vitesse = 1, couleur = 'white',
        largeurFinale = null, hauteurFinale = null, epaisseur = 1) {
        super(canvas);

        this.vitesse = vitesse;
        this.couleur = couleur;

        this.epaisseur = epaisseur;

        this.largeurInit = 100;
        this.hauteurInit = 100;

        this.largeur = this.largeurInit;
        this.hauteur = this.hauteurInit;

        this.largeurFinale = this.width;
        this.hauteurFinale = this.height;



        if (largeurFinale != null) {
            this.largeurFinale = largeurFinale;
        }
        if (hauteurFinale != null) {
            this.hauteurFinale = hauteurFinale;
        }

        this.diffX = this.largeurFinale - this.largeurInit;
        this.diffY = this.hauteurFinale - this.hauteurInit;

        this.agrandX = 0;
        this.agrandY = 0;

        this.chemin = [];
        this.cheminInterne = [];

        this.bezier = BezierEasing(.7, 0, .3, 1);

        this.loop = 0.0;

    }
    
    avancer() {

        switch (this.numeroAnimation) {
            case 0:
                if (this.loop < 1) {
                    this.loop += this.vitesse / 100;
                }
        
                const bezier = this.bezier(this.loop);
        
                this.largeur = this.largeurInit + (this.diffX * bezier);
                this.hauteur = this.hauteurInit + (this.diffY * bezier);
        
                this.largeur = (this.largeur > this.largeurFinale ? this.largeurFinale : this.largeur);
                this.hauteur = (this.hauteur > this.hauteurFinale ? this.hauteurFinale : this.hauteur);
        
                // if (this.largeur > this.largeurFinale) {
                //     this.largeur = this.largeurFinale;
                // }
        
                // if (this.hauteur > this.hauteurFinale) {
                //     this.hauteur = this.hauteurFinale;
                // }
        
                if (this.largeur >= this.largeurFinale && this.hauteur >= this.hauteurFinale) {
                    this.stopAnimation = true;
                    return;
                }
        
                const milieuH = this.hauteur / 2;
        
                this.chemin = [
                    // haut
                    [this.epaisseur, 0],
                    [7 * this.epaisseur, 0],
                    [8 * this.epaisseur, this.epaisseur],
                    // biseau haut droite
                    [this.largeur - 30, this.epaisseur],
                    [this.largeur, 30 + this.epaisseur],
                    // décroché milieu droite
                    [this.largeur, milieuH + this.epaisseur],
                    [this.largeur - (2 * this.epaisseur), milieuH + this.epaisseur],
                    // bas droite
                    [this.largeur - (2 * this.epaisseur), this.hauteur - this.epaisseur],
                    [this.largeur - (3 * this.epaisseur), this.hauteur],
                    // bas gauche
                    [this.epaisseur, this.hauteur],
                    [0, this.hauteur - this.epaisseur],
                    [0, this.epaisseur],
                ];
        
                this.cheminInterne = [
                    // haut gauche
                    [this.epaisseur, 3 * this.epaisseur],
                    [5 * this.epaisseur, 3 * this.epaisseur],
                    [6 * this.epaisseur, 2 * this.epaisseur],
                    // biseau haut droite
                    [this.largeur - (30 + (2 * this.epaisseur)), 2 * this.epaisseur],
                    [this.largeur - this.epaisseur, 30 + (3 * this.epaisseur)],
                    // décroché milieu droite
                    [this.largeur - this.epaisseur, milieuH],
                    [this.largeur - (3 * this.epaisseur), milieuH],
                    // bas droite
                    [this.largeur - (3 * this.epaisseur), this.hauteur - (2 * this.epaisseur)],
                    [this.largeur - (5 * this.epaisseur), this.hauteur - (2 * this.epaisseur)],
                    [this.largeur - (6 * this.epaisseur), this.hauteur - this.epaisseur],
                    // bas gauche
                    [2 * this.epaisseur, this.hauteur - this.epaisseur],
                    [this.epaisseur, this.hauteur - (2 * this.epaisseur)],
                    [this.epaisseur, this.hauteur - (2 * this.epaisseur)],
                ];
        
                this.agrandX += this.vitesse;
                this.agrandY += this.vitesse;

                break;
        
            default:
                break;
        }

        
    }

    dessiner() {

        switch (this.numeroAnimation) {
            case 0:
                this.ctx.beginPath();
                /*
                        this.ctx.shadowBlur = 20;
                        this.ctx.shadowOffsetX = 0;
                        this.ctx.shadowOffsetY = 0;
                        this.ctx.shadowColor = this.couleur;
                */
                this.ctx.moveTo(this.chemin[0][0], this.chemin[0][1]);
                this.chemin.forEach(point => {
                    this.ctx.lineTo(point[0], point[1]);
                });
                // ctx.lineTo(path[0][0], path[0][1]);
                this.ctx.closePath();

                this.ctx.moveTo(this.cheminInterne[0][0], this.cheminInterne[0][1]);
                this.cheminInterne.forEach(point => {
                    this.ctx.lineTo(point[0], point[1]);
                });

                this.ctx.closePath();



                this.ctx.fillStyle = this.couleur;
                this.ctx.fill('evenodd');
            
                break;
        
            default:
                break;
        }

    }
        
}