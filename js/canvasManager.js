class CanvasManager {
    constructor(selectorConteneur) {
        this.selectorConteneur = selectorConteneur;
        this.conteneur = document.querySelector(selectorConteneur);
        if (!this.conteneur) {
            this.erreur = "Conteneur introuvable";
        }
    }

    dimensionner() {
        this.largeur = this.conteneur.clientWidth;
        this.hauteur = this.conteneur.clientHeight;
    }

    genererGrille(nombreEnX, nombreEnY) {
        this.nombreEnX = nombreEnX;
        this.nombreEnY = nombreEnY;

        this.dimensionner();

        var largeurCanvas = this.largeur / this.nombreEnX;
        var hauteurCanvas = this.hauteur / this.nombreEnY;

        this.grille = [];
        for (var i = 0; i < nombreEnX; i++) {
            //this.grille[i] = [];
            for (var j = 0; j < nombreEnY; j++) {

                var leCanvas = document.createElement('canvas');
                leCanvas.width = largeurCanvas;
                leCanvas.height = hauteurCanvas;
                leCanvas.style.display = 'block';
                leCanvas.style.position = 'absolute';
                leCanvas.id = 'canX' + i + 'Y' + j;

                leCanvas.style.left = (i * leCanvas.width) + 'px';
                leCanvas.style.top = (j * leCanvas.height) + 'px';

                this.grille.push(leCanvas.id);

                this.conteneur.append(leCanvas);
            }
        }

        return this.grille;
    }

    
}