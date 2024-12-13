let inputs = document.querySelector("#inp");
let text = document.querySelector(".list-container"); 

function add() {
    if (inputs.value.trim() === "") { 
        alert("Enter the task");
    } else {
        let newElement = document.createElement("li"); 
        newElement.innerHTML = `${inputs.value} <i style="cursor: pointer; color: red;">delete</i>`; 
        text.appendChild(newElement); 

        newElement.querySelector("i").addEventListener("click", () => {
            newElement.remove(); 
        });

        inputs.value = "";
    }
}
