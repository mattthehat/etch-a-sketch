const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Set canvas options
const {width, height} = canvas;

let x = Math.floor((Math.random() * width) + 1);
let y = Math.floor((Math.random() * height) + 1);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;


ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function draw({key}) {
    ctx.beginPath();
    ctx.moveTo(x,y);

    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    switch(key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT; 
        break;
        case 'ArrowDown':
            y += MOVE_AMOUNT; 
            
        break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT; 
        break;
        case 'ArrowRight':
            x += MOVE_AMOUNT; 
        break;
        default:
            break;
    }

    ctx.lineTo(x,y);
    ctx.stroke();
}


function handleKey(e) {
        if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key})
    }
}

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,);
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    }, {once: true})
    
}

window.addEventListener('keydown', handleKey)

shakeBtn.addEventListener('click', clearCanvas);