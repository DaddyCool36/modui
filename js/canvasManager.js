class CanvasManager {
    constructor(selectorConteneur) {
        this.selectorConteneur = selectorConteneur;
        this.conteneur = document.querySelector(selectorConteneur);
        if (!this.conteneur) {
            this.erreur = "Conteneur introuvable";
            return 1;
        }

        this.dimensionner();
    }

    dimensionner() {
        this.largeur = this.conteneur.clientWidth;
        this.hauteur = this.conteneur.clientHeight;
    }

    genererGrille(nombreEnX, nombreEnY) {
        this.nombreEnX = nombreEnX;
        this.nombreEnY = nombreEnY;

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

    placerAleatoirement(nombreDeCanvas) {
        this.nombre = nombreDeCanvas;

        this.grille = [];
        for (var i = 0; i < this.nombre; i++) {
            var leCanvas = document.createElement('canvas');

            leCanvas.width = Math.round(50 + (Math.random() * (this.largeur - 50)));
            leCanvas.height = Math.round(50 + (Math.random() * (this.hauteur - 50)));
            leCanvas.style.display = 'block';
            leCanvas.style.position = 'absolute';
            leCanvas.style.background = 'transparent';
            leCanvas.id = 'canN' + i;

            var xAleatoire = Math.round(Math.random() * (this.largeur - leCanvas.width));
            var yAleatoire = Math.round(Math.random() * (this.hauteur - leCanvas.height));
            leCanvas.style.left = xAleatoire + 'px';
            leCanvas.style.top = yAleatoire + 'px';

            this.grille.push(leCanvas.id);

                this.conteneur.append(leCanvas);
        }

        return this.grille;
    }

    
}