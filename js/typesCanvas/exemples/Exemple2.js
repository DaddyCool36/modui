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