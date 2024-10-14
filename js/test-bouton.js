canvasManager = new CanvasManager("#modui");

var leCanvas = document.createElement('canvas');
leCanvas.width = '500';
leCanvas.height = '300';
leCanvas.style.display = 'block';
leCanvas.style.position = 'absolute';
leCanvas.id = 'canBouton1';

leCanvas.style.left = '50px';
leCanvas.style.top = '50px';

canvasManager.conteneur.append(leCanvas);

f = new Bouton1(leCanvas, 1.5, 'cyan', null, null, 5);

f.startAnimating();