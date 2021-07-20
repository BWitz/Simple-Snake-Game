let lastRenderTime = 0;
const snakeSpeed = 1;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    let renderedInterval = 0;
    if (secondsSinceLastRender < 1 / snakeSpeed) return

        console.log("Render")
        lastRenderTime = currentTime;
    
    update();
    draw();

}

window.requestAnimationFrame(main);

function update(){

}

function draw(){

}