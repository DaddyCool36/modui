canvasManager = new CanvasManager("#modui");

var leCanvas = document.createElement('canvas');
leCanvas.width = canvasManager.conteneur.clientWidth;
leCanvas.height = canvasManager.conteneur.clientHeight;
leCanvas.style.display = 'block';
leCanvas.style.position = 'absolute';
leCanvas.id = 'canFenetre';

leCanvas.style.left = '0 px';
leCanvas.style.top = '0 px';

canvasManager.conteneur.append(leCanvas);

f = new Fenetre(leCanvas, 1.5, 'cyan', null, null, 5);

f.startAnimating();