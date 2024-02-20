class CanvasAnimator {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.animations = [];
    }
  
    addAnimation(animation) {
      this.animations.push(animation);
    }
  
    start() {
      this.animationLoop();
    }
  
    stop() {
      this.animations.forEach((animation) => animation.stop());
      cancelAnimationFrame(this.animationFrameId);
    }
  
    animationLoop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
      this.animations.forEach((animation) => {
        if (animation.shouldAnimate) {
          animation.draw(this.ctx);
        }
      });
  
      this.animationFrameId = requestAnimationFrame(() => this.animationLoop());
    }
}
  
class Animation {
    constructor(init, draw, stop) {
      this.init = init;
      this.draw = draw;
      this.stop = stop;
      this.shouldAnimate = false;
    }
  
    start() {
      this.shouldAnimate = true;
      this.init();
    }
  
    stop() {
      this.shouldAnimate = false;
      this.stop();
    }
}
  
// Exemple d'utilisation

const canvas = document.getElementById('canvas');
const animator = new CanvasAnimator(canvas);

// Animation 1 : Dessiner un cercle qui grandit
const animation1 = new Animation(
    () => {
      this.radius = 0;
    },
    (ctx) => {
      ctx.beginPath();
      ctx.arc(100, 100, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
      this.radius += 1;
    },
    () => {}
);
  
// Animation 2 : Déplacer un rectangle
const animation2 = new Animation(
    () => {
      this.x = 0;
    },
    (ctx) => {
      ctx.fillStyle = 'blue';
      ctx.fillRect(this.x, 100, 50, 50);
      this.x += 1;
    },
    () => {}
);
  
// Déclencher les animations

const div1 = document.getElementById('div1');
div1.addEventListener('click', () => {
    animation1.start();
});

const div2 = document.getElementById('div2');
div2.addEventListener('mouseover', () => {
    animation2.start();
});

animator.addAnimation(animation1);
animator.addAnimation(animation2);

animator.start();