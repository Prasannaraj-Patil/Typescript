class Circle {
    private alpha: number;
    private radius: number;
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D, radius: number, vx: number, vy: number, initialx: number,initialy:number) {
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.x = initialx;
        this.y = initialy;
        this.context = context;
        this.alpha = 1;
    }
    draw() {
        var context = this.context;
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.fillStyle = 'red'
        context.globalAlpha = this.alpha;
        context.fill();
        context.restore();
        this.update();
    }

    private update() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.alpha *= 0.95;
    }
    get Alpha() {
        return (this.alpha);
    }
}


class Smoke {
    private container: { circle: Circle }[] = [];
    private context: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private no: number;
    private canvas: HTMLCanvasElement;
    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, x: number, y: number, noofparticals: number) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.no = noofparticals;
        this.canvas = canvas;
        //this.creat();
    }

    private random(max: number, min: number) {
        return (Math.random() * (max - min) + min);
    }

     start() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.rect(0, 0, canvas.width, canvas.height);
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.save();
        this.context.translate(0, 500);
         this.context.scale(1, -1);
         for (var i = 1; i <= this.no; i++) {
             var vy = this.random(1, 5);
             var vx = this.random(-1, 1);
             var r = this.random(3, 10);
             var circle = new Circle(this.context, r, vx, vy, this.x, this.y);
             
             this.container.push({ circle: circle });
         }
         for (var i = 0; i < this.container.length; i++) {
             this.container[i].circle.draw();
         }
         
         this.context.restore();

         for (var i = 0; i < this.container.length; i++) {
             if (this.container[i].circle.Alpha < 0.1) {
                 this.container.splice(i, this.container.length - 1);
                 break;
             }
         }

    }

}