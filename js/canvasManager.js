class CanvasManager {
    constructor(selectorConteneur) {
        this.selectorConteneur = selectorConteneur;
        this.conteneur = document.querySelector(selectorConteneur);
        if (!this.conteneur) {
            this.erreur = "Conteneur introuvable";
        }
    }

    genererGrille(nombreEnX, nombreEnY) {
        this.nombreEnX = nombreEnX;
        this.nombreEnY = nombreEnY;

        this.largeur = this.conteneur.clientWidth;
        this.hauteur = this.conteneur.clientHeight;

        this.grille = [];
        for (var i = 0; i < nombreEnX; i++) {
            this.grille[i] = [];
            for (var j = 0; j < nombreEnY; j++) {

                var leCanvas = document.createElement('canvas');
                leCanvas.width = this.largeur / this.nombreEnX;
                leCanvas.height = this.hauteur / this.nombreEnY;
                leCanvas.style.display = 'block';
                leCanvas.style.position = 'absolute';
                leCanvas.id = 'canX' + i + 'Y' + j;

                leCanvas.style.left = (i * leCanvas.width) + 'px';
                leCanvas.style.top = (j * leCanvas.height) + 'px';




                this.grille[i][j] = leCanvas.id;

                this.conteneur.append(leCanvas);
            }
        }
        return this.grille;
    }
}