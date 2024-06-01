class Animation {

    id = 0;

    animate = false;

    duration = 1000;

    speed = 1;

    init() {
        // durée de l'animation, en ms
        this.duration = 1000;
        // vitesse de l'animation
        this.speed = 1 ;
    }

    start() {
        this.animate = true;
    }

    stop() {
        this.animate = false;
    }
}