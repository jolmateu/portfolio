const activeTask = [{id:"1", name:"Task1", active:true}, {id:"2", name:"Task2", active:true}, {id:"2", name:"Task3", active:true}];
const completeTask = [{id:"1", name:"Task4", active:true}, {id:"2", name:"Task5", active:true}, {id:"3", name:"Task6", active:true}];

var btnNewtask = document.getElementById("btnNewtask");

var addTask = () => {
    var id = id;
    var taskName = newtask.value;
    activeTask.push(task);
    taskList();
}

btnNewtask.addEventListener("click", addTask);

var taskList = () => {
    const allTask = activeTask.concat(completeTask);
    var slist = document.getElementById("slist");
    for (var i=0; i<allTask.length;i++) {
        var item = allTask[i].name;
        var div = document.createElement("div");
        div.className = "taskelement";
        var elem = document.createElement("input");
        elem.type = "checkbox";
        elem.className = "task";
        elem.id = "task";

        var label = document.createElement("label");
        label.className = "ltask";
        label.id = "ltask";
        label.innerHTML=item;
        slist.append(div);
        slist.appendChild(elem);
        slist.appendChild(label);

        var btn = document.createElement("button");
        btn.className = "deleteBtn";
        btn.type = "button";
        btn.innerHTML = "X";
        slist.appendChild(btn);
        
        var linebreak = document.createElement("br");
        slist.appendChild(linebreak);
    }
}

taskList();

var toggle = document.querySelector(".task");
var ltask = document.querySelector(".ltask");

toggle.addEventListener('change', function() {
    ltask.style.textDecoration = this.checked ? "line-through" : "initial";
});



