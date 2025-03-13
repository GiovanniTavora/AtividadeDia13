

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

    taskText.value="";
}