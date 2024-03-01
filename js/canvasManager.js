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

    genererUnCanvas(id, largeur, hauteur, top, left) {
        
        var leCanvas = document.createElement('canvas');
        leCanvas.id = id;

        leCanvas.width = largeur;
        leCanvas.height = hauteur;
        leCanvas.style.display = 'block';
        leCanvas.style.position = 'absolute';
        

        leCanvas.style.left = left;
        leCanvas.style.top = top;

        return leCanvas;
    }

    genererGrille(nombreEnX, nombreEnY) {
        this.nombreEnX = nombreEnX;
        this.nombreEnY = nombreEnY;

        var largeurCanvas = this.largeur / this.nombreEnX;
        var hauteurCanvas = this.hauteur / this.nombreEnY;

        this.grille = [];
        for (var i = 0; i < nombreEnX; i++) {

            for (var j = 0; j < nombreEnY; j++) {

                nouveauCanvas = this.genererUnCanvas(
                    'canX' + i + 'Y' + j,
                    largeurCanvas,
                    hauteurCanvas,
                    (j * leCanvas.height) + 'px',
                    (i * leCanvas.width) + 'px'
                )

                this.grille.push(nouveauCanvas.id);

                this.conteneur.append(nouveauCanvas);
            }
        }

        return this.grille;
    }

    placerAleatoirement(nombreDeCanvas) {
        this.nombre = nombreDeCanvas;

        this.grille = [];
        for (var i = 0; i < this.nombre; i++) {

            largeurCanvas = Math.round(50 + (Math.random() * (this.largeur - 50)));
            hauteurCanvas = Math.round(50 + (Math.random() * (this.hauteur - 50)));
            var xAleatoire = Math.round(Math.random() * (this.largeur - largeurCanvas));
            var yAleatoire = Math.round(Math.random() * (this.hauteur - hauteurCanvas));

            nouveauCanvas = this.genererUnCanvas(
                'canN' + i, 
                largeurCanvas,
                hauteurCanvas, 
                yAleatoire + 'px', 
                xAleatoire + 'px'
            );

            nouveauCanvas.style.background = 'transparent';

            this.grille.push(nouveauCanvas.id);

            this.conteneur.append(nouveauCanvas);
        }

        return this.grille;
    }

    
}