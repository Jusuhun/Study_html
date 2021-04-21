const form = document.querySelector(".jsForm");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreetings(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //she is not
        form.classList.add(SHOWING_CN)
        greeting.classList.remove(SHOWING_CN)
    } else {
        //she is not
        paintGreetings(currentUser);
    }
}

function init(){

}

init();