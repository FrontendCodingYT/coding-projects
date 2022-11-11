class Shape {
    x: number;
    y: number;
    velocityX: number;
    velocityY: number;
    speed: number;
    constructor(x: number, y: number, velocityX: number,
        velocityY: number, speed: number) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.speed = speed;
    }
}

class Paddle extends Shape {
    width: number;
    height: number;
    up: boolean;
    down: boolean;
    constructor(x: number, y: number, velocityX: number,
        velocityY: number, width: number, height: number, speed: number) {
        super(x, y, velocityX, velocityY, speed);
        this.width = width;
        this.height = height;
    }

    render(context: CanvasRenderingContext2D) {
        this.update();
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.up) {
            this.y -= this.velocityY;
        } else if (this.down) {
            this.y += this.velocityY;
        }
    }

    moveUp() {
        this.up = true;
    }

    stopMoveUp() {
        this.up = false;
    }

    moveDown() {
        this.down = true;
    }

    stopMoveDown() {
        this.down = false;
    }
}

class Circle extends Shape {
    size: number;
    constructor(x: number, y: number, velocityX: number,
        velocityY: number, size: number, speed: number) {
        super(x, y, velocityX, velocityY, speed);
        this.size = size;
    }
}

class Particle extends Circle {
    constructor(x: number, y: number, velocityX: number,
        velocityY: number, size: number, speed: number) {
        super(x, y, velocityX, velocityY, size, speed);
    }

    render(context: CanvasRenderingContext2D) {
        this.update();

        if (this.size <= 0)
            return;

        context.fillStyle = "white";
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        this.y += this.velocityY * this.speed;
        this.x += this.velocityX * this.speed;
        this.size -= 0.05;
    }

}

class Ball extends Circle {
    constructor(x: number, y: number, velocityX: number,
        velocityY: number, size: number, speed: number) {
        super(x, y, velocityX, velocityY, size, speed);
    }

    render(context: CanvasRenderingContext2D) {
        this.update();

        context.fillStyle = "white";
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        // Only move it if the game is not paused
        if (!pause) {
            this.y += this.velocityY * this.speed;
            this.x += this.velocityX * this.speed;
        }

        if (this.y >= windowHeight - this.size) {
            this.velocityY *= -1;
        }

        if (this.y <= this.size) {
            this.velocityY *= -1;
        }

        if (this.x >= windowWidth + 50) {
            // Add particles!
            for (let i = 0; i < 100; i++) {
                const velocityX = Math.random() - 1;
                const velocityY = Math.random() * 2 - 1;
                const speed = Math.random() * 3 + 1;
                const size = Math.random() * 4 + 3;
                particles.push(new Particle(this.x, this.y, velocityX, velocityY, size, speed));
            }
            this.x = windowWidth / 2;
            this.y = windowHeight / 2;
            leftPaddlePoints++;
            pause = true;
        }

        if (this.x <= -50) {
            // Add particles!
            for (let i = 0; i < 100; i++) {
                const velocityX = Math.random();
                const velocityY = Math.random() * 2 - 1;
                const speed = Math.random() * 3 + 1;
                const size = Math.random() * 4 + 3;
                particles.push(new Particle(this.x, this.y, velocityX, velocityY, size, speed));
            }
            this.x = windowWidth / 2;
            this.y = windowHeight / 2;
            rightPaddlePoints++;
            pause = true;
        }
    }
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

const initialBallX = Math.random() <= 0.5 ? -1 : 1;
const initialBallY = Math.random() * 2 - 1;
const ball = new Ball(windowWidth / 2, windowHeight / 2, initialBallX, initialBallY, 25, 5);
const particles: Particle[] = [];
const paddleHeight = 300;
const paddleWidth = 25;
const leftPaddle = new Paddle(25, windowHeight / 2 - (paddleHeight / 2), 0, 4, paddleWidth, paddleHeight, 5);
const rightPaddle = new Paddle(windowWidth - 50, windowHeight / 2 - (paddleHeight / 2), 0, 4, paddleWidth, paddleHeight, 5);
let pause = true;
let leftPaddlePoints = 0;
let rightPaddlePoints = 0;
window.requestAnimationFrame(render);

function render() {
    context.fillStyle = "black";
    context.fillRect(0, 0, windowWidth, windowHeight);

    if (pause) {
        context.textAlign = "center";
        context.font = "72px Arial";
        context.fillStyle = "white";
        context.fillText("PRESS SPACE", windowWidth / 2, windowHeight / 2 + windowHeight / 4)
    }

    context.textAlign = "center";
    context.font = "72px Arial";
    context.fillStyle = "white";
    context.textBaseline = "middle";
    context.fillText(leftPaddlePoints.toString(), windowWidth / 2 - windowWidth / 4, windowHeight / 2);
    context.fillText(rightPaddlePoints.toString(), windowWidth / 2 + windowWidth / 4, windowHeight / 2);

    // Logic for checking if the ball touches the paddle
    // Logic for the right paddle
    if (ball.y > rightPaddle.y && ball.y < rightPaddle.y + paddleHeight) {
        if (ball.x + ball.size > rightPaddle.x && ball.x < rightPaddle.x + paddleWidth) {
            ball.x = rightPaddle.x - ball.size;
            ball.velocityX *= -1.05;
        }
    }

    // Logic for the left paddle
    if (ball.y > leftPaddle.y && ball.y < leftPaddle.y + paddleHeight) {
        if (ball.x > leftPaddle.x && ball.x - ball.size < leftPaddle.x + paddleWidth) {
            ball.x = leftPaddle.x + ball.size + leftPaddle.width;
            ball.velocityX *= -1.05;
        }
    }

    ball.render(context);

    leftPaddle.render(context);
    rightPaddle.render(context);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].render(context);

        if (particles[i].size <= 0) {
            particles.splice(i, 1);
        }
    }

    window.requestAnimationFrame(render);
}

onkeydown = (event: KeyboardEvent) => {
    switch (event.key.toUpperCase()) {
        case "W": {
            leftPaddle.moveUp();
            break;
        }
        case "S": {
            leftPaddle.moveDown();
            break;
        }
        case "ARROWUP": {
            rightPaddle.moveUp();
            break;
        }
        case "ARROWDOWN": {
            rightPaddle.moveDown();
            break;
        }
    }
}

onkeyup = (event: KeyboardEvent) => {
    switch (event.key.toUpperCase()) {
        case "W": {
            leftPaddle.stopMoveUp();
            break;
        }
        case "S": {
            leftPaddle.stopMoveDown();
            break;
        }
        case "ARROWUP": {
            rightPaddle.stopMoveUp();
            break;
        }
        case "ARROWDOWN": {
            rightPaddle.stopMoveDown();
            break;
        }
        case " ": {
            pause = false;
            break;
        }
    }
}