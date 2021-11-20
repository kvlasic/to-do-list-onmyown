const listInput = document.getElementById('listInput')
const listsUl = document.getElementById('lists')
const listTitle = document.getElementById('listTitle')
const todosUl = document.getElementById('todos')
const todosInput = document.getElementById('todosInput')

let lists = [];
let activeListIndex = 0;

// add a new list object to lists array
function addList(event) {
    event.preventDefault();
    let newListName = { name: listInput.value, items: [] }
    lists.unshift(newListName);
    changeList(0);
    renderLists();
}

// choose a certain list
function changeList(n) {
    activeListIndex = n;
    listTitle.innerHTML = lists[activeListIndex].name
    renderTodos()
}

// add a new task to items array in lists array
function addToDo(event) {
    event.preventDefault();
    let newToDo = { todo: todosInput.value }
    lists[activeListIndex].items.unshift(newToDo);
    renderTodos();
}

// render the lists
function renderLists() {
    listsUl.innerHTML = ""
    listInput.value = ""
    lists.forEach((l, i) => {
        const listHTML = `<li onclick="changeList(${i})">${l.name}</li>        `;
        listsUl.insertAdjacentHTML("beforeend", listHTML);
    })
}

// render the todos
function renderTodos() {
    todosUl.innerHTML = ""
    todosInput.value = ""
    lists[activeListIndex].items.forEach((t) => {
        const todoHTML = `<div class="task"><li>${t.todo}</li>
        <div>
        <button>X</button>
        <button>✓</button>
        </div>
        </div>`;
        todosUl.insertAdjacentHTML("beforeend", todoHTML);
    })
}