document.addEventListener("DOMContentLoaded", loadTasks());

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText == ""){
        alert("Digite uma tarefa válida!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let item = document.createElement("li");

    item.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    taskList.appendChild(item);
    saveTasks();
    taskText.value="";
}

function toggleTask(element){
    element.parentElement.classList.toggle("completed");
    saveTasks();
}

function deleteTask(button){
    button.parentElement.remove();
    saveTasks();
}

function saveTasks(){
    let tasks = [];

    document.querySelectorAll("#taskList li").forEach( task =>{
        tasks.push({
            text: task.innerText.replace("X", "").trim(),
            completed: task.classList.contains("completed")
        })
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let item = document.createElement("li");

        item.innerHTML = `
            <span onclick="toggleTask(this)">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(this)">X</button>
        `;
        if(task.completed){
            item.classList.add("completed")
        }
    
        taskList.appendChild(item);
    })
}
