const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-container");


/// ADD THE TASK IN THE CONTAINER  
   /// WHEN THE VALUE IS NOTHING MEANS THAT THE YOU ENTERS NOTHING IN THE INPUT 
function addTask(){
 
    if(inputBox.value == ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    saveData();
}
 
/// CHECKED AND UNCHECKD THE TASK && AND DELETE THE TASK 

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
}, false);

// ADD THE LOCAL STORAGE FOR IF THE TAB IS CUT 
///for the you will get the data after the close the window or browser

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();