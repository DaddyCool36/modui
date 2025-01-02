canvasManager = new CanvasManager("#modui");

let leCanvas = document.createElement('canvas');
leCanvas.width = 500;
leCanvas.height = 500;
leCanvas.style.display = 'block';
leCanvas.style.position = 'absolute';
leCanvas.id = 'canFenetre';

leCanvas.style.left = '50px';
leCanvas.style.top = '50px';

canvasManager.conteneur.append(leCanvas);

f = new Fenetre(leCanvas, 1.5, 'cyan', null, null, 10);

f.startAnimating();