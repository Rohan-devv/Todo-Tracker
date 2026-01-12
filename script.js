const input = document.getElementById('todo-input')
const btn =  document.getElementById('add-btn')
const list =  document.getElementById('todo-list')

let todos = []

function loadTodos(){
    const storedTodos = localStorage.getItem('todos')
    if(storedTodos){
        todos =  JSON.parse(storedTodos)
    }
    else{
        todos = []
    }
}

function saveTodo(){

    localStorage.setItem('todos',JSON.stringify(todos) )
}

function renderTodo(){
    list.innerHTML = ''
    todos.forEach(function(todo, index){
        const node = createTodoNode(todo, index)
        list.appendChild(node)
    })
}

function addTodo(){
    const text = input.value.trim()
    if(!text){
        return
    }
    input.value = ''
    todos.push({text:text, completed: false})
    saveTodo()
    renderTodo()

}

function createTodoNode(todo, index){
    const li = document.createElement('li')


    // checkbox to toggle 
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = !!todo.completed
    checkbox.addEventListener('click', function(){
        todo.completed = checkbox.checked
        saveTodo()
    })

    // creating textspan 
    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    textSpan.style.margin = "0 8px"

    if(todo.completed){
        textSpan.style.textDecoration = 'line-through'
    } 
    textSpan.addEventListener('dblclick', function(){
        const newText =  prompt('Edit Todo', todo.text)
        if(newText !== null){
           todo.text = newText.trim()
           textSpan.textContent = todo.text
        }
        saveTodo()
        
    })

    // make a delete button
    const delbtn = document.createElement('button')
    delbtn.textContent = "Delete"
    delbtn.addEventListener('click', function(){
        todos.splice(index,1)//'index' string → JS convert karega NaN 
        renderTodo()
        saveTodo()
    })
    li.appendChild(checkbox)
    li.appendChild(textSpan)
    li.appendChild(delbtn)
    return li
    

}

btn.addEventListener('click', addTodo)

input.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
        addTodo()
    }

})

loadTodos()





// const input = document.getElementById('todo-input')
// const btn = document.getElementById('add-btn')
// const list = document.getElementById('todo-list')



// function loadTodos() {
//     const storedTodos = localStorage.getItem("todos")

//     if (storedTodos) {
//         todos = JSON.parse(storedTodos)
//     } else {
//         todos = []
//     }

//     renderTodos()
// }


// function saveTodo(){
//     localStorage.setItem("todos", JSON.stringify(todos))
// }

// function renderTodos(){

//     list.innerHTML = ""
    
//     todos.forEach((todo,index) => {       
//         const node = createTodoNode(todo,index)
//         list.appendChild(node)
        
//     })
    

// }

// function addTodo(){
//     const text = input.value.trim()
//     if(text === ''){
//         return
//     } 

//     todos.push({text: text, completed: false})
//     input.value = ''
//     saveTodo()
//     renderTodos()

// }

// function createTodoNode(todo, index){
//     const li = document.createElement("li")

//     // checkbox to toggle completion

//     const checkbox = document.createElement("input")
//     checkbox.type = "checkbox"
//     checkbox.checked = !!todo.completed
//     checkbox.addEventListener("change", function (){
//         todo.completed = checkbox.checked
//         saveTodo()
//     })

//     // create text span 

//     const textSpan = document.createElement("span")
//     textSpan.textContent = todo.text
//     textSpan.style.margin = "0 8px"

//     if(todo.completed) {
//         textSpan.style.textDecoration = 'line-through'
//     }
    
//     // Edit the todo for doubleclick

//     textSpan.addEventListener("dblclick", function(){
//         const newText = prompt("Edit Todo", todo.text)
//         if(newText !== null){
//             todo.text =  newText.trim()
//             textSpan.textContent = todo.text
//             saveTodo()
//         }

//     })

//     // Delete todo button

//     const delbtn = document.createElement('button') 
//     delbtn.textContent = 'Delete'
//     delbtn.addEventListener('click', function (){
//         todos.splice(index, 1)
//         renderTodos()
//         saveTodo()
//     })

//     li.appendChild(checkbox)
//     li.appendChild(textSpan)
//     li.appendChild(delbtn)

//     return li  

// } 

// btn.addEventListener('click', addTodo)

// input.addEventListener('keydown', function(e){
//     if(e.key == 'Enter'){
//         addTodo()
//     }
// })

// loadTodos()
