const gridSize = 21;

// The reason why we add 1 is because we must account for the fact that the integers per variable of the grid begin at 0. 

export function randomGridPosition() {
    return {
        x : Math.floor(Math.random() * gridSize) + 1,
        y : Math.floor(Math.random() * gridSize) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x  > gridSize || position.y < 1 || position.y > gridSize
    )
}