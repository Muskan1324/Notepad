
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

function addTask(){
    alert("Data Saved !!");

    if(inputBox.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}
function Clear(){
    localStorage.clear();
    location.reload();
}


listContainer.addEventListener("click", function(x){
    if(x.target.tagName ==="SPAN")
    {
        x.target.parentElement.remove();
        saveData()
    }
},false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);    
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");  
}
showTask();
