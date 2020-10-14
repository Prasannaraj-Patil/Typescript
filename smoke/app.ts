var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 0, 5);
runsmoke();
function runsmoke()
{
    smoke.start();
    window.requestAnimationFrame(runsmoke);
}