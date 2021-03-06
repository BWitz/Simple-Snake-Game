let inputDirection = { x: 0, y: 0 }
let lastInputDirection = {x: 0, y: 0}

window.addEventListener('keydown', kd => {
    switch(kd.key) {
        case 'ArrowUp':
        inputDirection = { x: 0, y: -1 }
        break

        case 'ArrowDown':
        inputDirection = { x: 0, y: 1 }
        break        

        case 'ArrowLeft':
        inputDirection = { x: -1, y: 0 }
        break        

        case 'ArrowRight':
        inputDirection = { x: 1, y: 0 }
        break
    }
})



export function getInputDirection(){
    return inputDirection;
}