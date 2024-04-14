let btn = document.querySelector(".btn");
let task = document.querySelector("input");
let ul = document.querySelector("ul");
 

btn.addEventListener("click", () =>{
    let item = document.createElement("li");
    item.innerText = task.value;

    if(task.value !=""){
        ul.appendChild(item);
        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        item.appendChild(delBtn);
        delBtn.classList.add("delete");
    }
    
    task.value = "";
    //event delegation
    ul.addEventListener("click", (e) => {
        if(e.target.nodeName == "BUTTON"){
            let listItem = e.target.parentElement;
            listItem.remove();
        }
    });
});




