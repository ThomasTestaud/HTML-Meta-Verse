class Camera {

    screenHeight;
    screenWidth;
    centerX;
    centerY;
    container;

    constructor(container) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.centerX = this.screenWidth / 2;
        this.centerY = this.screenHeight / 2;
        this.container = container;
    }

    focus(player) {
        this.container.scrollTo(player.positionX - this.centerX, player.positionY - this.centerY);
    }

}

export default Camera
