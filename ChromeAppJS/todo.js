const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos(){
    const loadToDo = localStorage.getItem(TODOS_LS);
    if(loadToDo !== null){
        const parsedToDos = JSON.parse(loadToDo);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

function paintTodo(text){
    console.log(text);

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length + 1;

    delBtn.innerText = "X"
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newID
    }

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(evnet){
    evnet.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();