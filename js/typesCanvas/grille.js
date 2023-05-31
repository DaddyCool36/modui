class Grille extends AnimatedCanvas {

    constructor(canvas, couleur = 'white', espacement = '10') {
        super(canvas);

        this.couleur = couleur;
        this.espacement = espacement

        this.largeurFinale = this.width;
        this.hauteurFinale = this.height;

        this.on = true;

        this.stopApres = false;
    }

    avancer() {

        if (this.depart == null) {
            this.depart = Date.now();
        }

        this.now = Date.now();

        var diff = this.now - this.depart;

        if (diff >= 0 && diff < 50) {
            this.on = true;
        }

        if (diff >= 50 && diff < 100) {
            this.on = false;
        }

        if (diff >= 100) {
            this.on = true;
            this.stopApres = true;
        }

    }

    dessiner() {

        if (!this.on) {
            return;
        }

        this.ctx.beginPath();
        /*
                this.ctx.shadowBlur = 20;
                this.ctx.shadowOffsetX = 0;
                this.ctx.shadowOffsetY = 0;
                this.ctx.shadowColor = this.couleur;
        */

        this.ctx.strokeStyle = this.couleur;

        for (var y = 1; y < this.height; y += this.espacement) {
            this.ctx.moveTo(1, y);
            this.ctx.lineTo(this.width, y);
        }
        for (var x = 1; x < this.width; x += this.espacement) {
            this.ctx.moveTo(x, 1);
            this.ctx.lineTo(x, this.height);
        }

        this.ctx.moveTo(1, this.height - 1);
        this.ctx.lineTo(this.width - 1, this.height - 1);
        this.ctx.lineTo(this.width - 1, 1);

        this.ctx.stroke();

        if (this.stopApres) {
            this.stopAnimation = true;
        }
    }
}