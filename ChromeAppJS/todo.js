const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = document.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function paintTodo(text){
    // con
}

function handleSubmit(evnet){
    evnet.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();