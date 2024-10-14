class Grille extends AnimatedCanvas {

    constructor(canvas, couleur = 'white', espacement = 10) {
        super(canvas);

        this.couleur = couleur;
        this.espacement = espacement

        this.largeurFinale = this.width;
        this.hauteurFinale = this.height;

        this.on = true;

        this.stopApres = false;
    }

    avancer() {

        switch (this.numeroAnimation) {
            case 0:
                if (this.depart == null) {
                    this.depart = Date.now();
                }
        
                this.now = Date.now();
        
                var diff = this.now - this.depart;
        
                var step1 = 30;
                var step2 = step1 + 30;
        
                if (diff >= 0 && diff < step1) {
                    this.on = true;
                }
        
                if (diff >= step1 && diff < step2) {
                    this.on = false;
                }
        
                if (diff >= step2) {
                    this.on = true;
                    this.stopApres = true;
                }
                break;
        
            default:
                break;
        };
        
    }

    dessiner() {

        switch (this.animationEnCours) {
            case 0:
                if (!this.on) {
                    return;
                }
        
                this.ctx.beginPath();
        
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
                break;
        
            default:
                break;
        };
        
    }
    
}