const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;


ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
        painting = true;
    }
}

function onMouseUp(event){
    painting = false;
}

function onMouseLeave(event){
    painting = false;
}

function changeColor(event){
    const color22 = event.target.style.backgroundColor;
    ctx.strokeStyle = color22;
    ctx.fillStyle = color22;
}

function onRightClick(event){
    console.log(event)
    event.preventDefault();
    const color22 = event.target.style.backgroundColor;
    ctx.strokeStyle = color22;
    ctx.fillStyle = color22;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("context", onRightClick);
}

function handleRange(event){
    ctx.lineWidth = event.target.value;
}

if(range){
    range.addEventListener("input", handleRange)
}

function onModeChange(evnet){
    filling = !filling;
    if(filling){
        mode.innerText = "paint";
    } else {
        mode.innerText = "fill";
    }
}

if(mode){
    mode.addEventListener("click", onModeChange)
}

function onSaveClick(event){
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.download = "PaintJS[EXPORT]";
    link.click();
}

if(save){
    save.addEventListener("click", onSaveClick)
}
Array.from(colors).forEach(color => color.addEventListener("click", changeColor));