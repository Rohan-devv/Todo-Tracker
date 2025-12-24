const input = document.getElementById('todo-input')
const btn = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

let todos = [];

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

function renderTodos(){

    list.innerHTML = ""
    
    todos.forEach((todo,index) => {
        const li = document.createElement('li')
        const node = createTodoNode(todo,index)
        li.appendChild(node)
        list.appendChild(li)
        
    })
    

}

function addTodo(){
    const text = input.value.trim()
    if(text === null){
        return
    } 

    todos.push({text: text, completed: false})
    saveTodo()
    renderTodos()

}

function createTodoNode(todo, index){

}