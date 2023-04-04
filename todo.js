const formToDo = document.querySelector(".todo-form");
const inputToDo = document.querySelector(".todo-form input");
const btnToDoAdd = document.querySelector(".todo-form button");
const ulToDo = document.querySelector(".todo-list-box");

formToDo.addEventListener("submit", handleSubmit);

/*  */
const toDos = [];

/* form event */
function handleSubmit(e) {
  e.preventDefault();
  const newToDo = inputToDo.value;
  addToDoList(newToDo);
  toDos.push(newToDo);
  saveToDos();
  inputToDo.value = "";
}
/*  add todo list */
function addToDoList(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnToDoDel = document.createElement("button");
  if (newToDo.trim() !== "") {
    span.innerText = newToDo;
    li.appendChild(span);
    li.appendChild(btnToDoDel);
    ulToDo.appendChild(li);
  }

  btnToDoDel.addEventListener("click", delToDoList);
}

/* todoList remove*/
function delToDoList(e) {
  const li = e.target.parentElement;
  li.remove();
}

/* localStorage Save */
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  console.log(JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // 배열로 만들어줌

  parsedToDos.forEach((todo) => addToDoList(todo));
}
