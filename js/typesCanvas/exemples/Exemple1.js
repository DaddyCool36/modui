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