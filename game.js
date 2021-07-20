import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeCollision} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid as outOfBounds} from './grid.js'


let loss = false;
const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;

function main(currentTime) {


    // Must resolve game over!
    if (gameOver) {
        if(confirm('Game Over!')) {
            window.location = '/';
        }
        return;
    }
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
    updateSnake()
    updateFood()
    gameOver()
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard);
}

function gameOver() {
    if (outOfBounds(getSnakeHead)) {
        console.log('Out of Bounds!')
        debugger
    } else if (snakeCollision()) {
        console.log('snake collision!')
        debugger
    }
    loss = outOfBounds(getSnakeHead() || snakeCollision())
}