/**
 * Animation de Canvas
 * effacer() : efface le canvas
 * startAnimating() : debute l'animation
 * stopAnimating() : stoppe l'animation
 * avancer() : fonction vide à surcharger
 * dessiner() : fonction vide à surcharger
 */
class AnimatedCanvas {
    /**
     * Constructeur du canvas à animer
     * @param {DOMObject} canvas L'élément canvas du DOM à animer 
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.handleId = null;
        this.numeroAnimation = 0;
        this.stopAnimation = false;
        this.couleur = 'white';

        // Liste d'animations du Canvas
        this.animations = [];
        // L'animation sélectionnée
        this.animationEnCours = "";
    }

    /**
     * Efface le canvas
     */
    effacer() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /**
     * Fonction vide à surcharger
     * Avance d'un cycle l'animation
     */
    avancer() {

    }

    /**
     * Fonction vide à surcharger
     * Dessine le canvas
     */
    dessiner() {

    }

    activerOmbre(actif = true) {
        if (!actif) {
            return;
        }
        this.ctx.shadowBlur = 20;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowColor = this.couleur;
    }

    /**
     * Débute l'animation.
     * A chaque cycle : appelle effacer(), avancer() et dessiner()
     *      tant que this.stopAnimation est false.
     */
    startAnimating() {
        const animate = () => {

            if (this.stopAnimation) {
                this.stopAnimating();
                return;
            }

            this.effacer();
            this.avancer();
            this.dessiner();
            this.handleId = requestAnimationFrame(animate);
        };
        animate();
    }

    /**
     * Stoppe l'animation.
     */
    stopAnimating() {
        cancelAnimationFrame(this.handleId);
    }
}