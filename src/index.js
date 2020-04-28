
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];

function renderTodoApp() {
    let app = document.querySelector("#app")
    let h1 = document.createElement("h1")
    // your code here
    // const listNode = document.querySelector(".list")
    let listNode = document.createElement("form")
    // listNode.classList.add(".list")

  

    // for (let list of todos.list){}
        
        let html = `
        <ul style="list-style-type: none;">
            <li class="list-item">
            <input type ="checkbox"/>
         Take Jim to the hair salon
            </li>
            <li class="list-item">
            <input type ="checkbox"/>
         Drop off vedding invitation at mailbox
            </li>
            <li class="list-item">
            <input type ="checkbox"/>
         Pick up the cake
            </li>
            <li class="list-item">
            <input type ="checkbox"/>
         Call the caterers
            </li>
        </ul>    
            `;
        listNode.innerHTML += html    
   
    
    
    

    h1.innerText = "To Do List"

    app.appendChild(h1)
    // and maybe some here
    app.appendChild(listNode)
}

renderTodoApp()