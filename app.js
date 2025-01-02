 var inputbox = document.querySelector("#input");
var container = document.querySelector("ul");
var button = document.querySelector("button");
var li = document.querySelector("li");


button.addEventListener("click",()=>{
    if (inputbox.value === '') {
        alert("YOU MUST WRITE SOMETHING");
    } else {


        let placeholder = container.querySelector(".no-tasks");
        if (placeholder) {
            placeholder.remove();
        }


        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        
        
    
    }
    inputbox.value = "";
    saveData();
});

container.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      
  }
  else if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
  } 
  
  
}, false);


function saveData(){
    
    localStorage.setItem("data", container.innerHTML);
    toggleNoTasksMessage();
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
    toggleNoTasksMessage();
}

function toggleNoTasksMessage() {
    if (container.children.length === 0) {
        let placeholder = document.createElement("li");
        placeholder.className = "no-tasks";
        placeholder.textContent = "No tasks available";
        container.appendChild(placeholder);
    } else {
        let placeholder = container.querySelector(".no-tasks");
        if (placeholder) {
            placeholder.remove();
        }
    }
}

showTask();

