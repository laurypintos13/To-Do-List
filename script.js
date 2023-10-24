const inputTodoList = document.getElementById('inputTodoList');
const btnAdd = document.getElementById('btnAdd');
const ul = document.querySelector("ul");
const empty = document.querySelector('.empty');
const noText = document.querySelector(".noText")


btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();


        const textInput = inputTodoList.value;


    if(textInput != ""){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = textInput;
    
        li.appendChild(p);
        li.appendChild(createBtnDelete())
        ul.appendChild(li);
    
        inputTodoList.value = ""
        empty.style.display = "none";
    }

})

function createBtnDelete(){
    const btnDelete = document.createElement('button')

    btnDelete.textContent = "X"
    btnDelete.className = "btn-delete"

    btnDelete.addEventListener('click', (e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li")
        if(items.length === 0){
            empty.style.display = "block";
        }
    });
    return btnDelete;
 
}

// function dataSave(){
//     localStorage.setItem("data",ul.innerHTML )
// }
// function showData(){
//     ul.innerHTML = localStorage.getItem("data")
// }
// showData();