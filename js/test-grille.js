canvasManager = new CanvasManager("#modui");

var leCanvas = document.createElement('canvas');
leCanvas.width = '500';
leCanvas.height = '500';
leCanvas.style.display = 'block';
leCanvas.style.position = 'absolute';
leCanvas.id = 'canGrille';

leCanvas.style.left = '50px';
leCanvas.style.top = '50px';

canvasManager.conteneur.append(leCanvas);

g = new Grille(leCanvas, 'cyan', 50);

g.startAnimating();