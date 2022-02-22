// To add a todo list

function addItem(event) {
    event.preventDefault(); 
    let text = document.getElementById("todo-input");
    console.log(text.value);
    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
 
    text.value = "";
}

//to display the todo lists
function getItem() {
    db.collection("todo-items").onSnapshot((snapshot) => {
         let items=[];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id, 
                ...doc.data()
            })
            console.log(items);
        })
        generateItems(items);
    })
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
        <div class="todo-item">
        <div class="check">
            <div data-id="${item.id} class="check-mark">
                <img src="./assets/icon-check.svg" alt="">

            </div>

        </div>
        <div class="todo-text">
        ${item.text}
        </div>
    </div>
 `
})
document.querySelector(".todo-items").innerHTML=itemsHTML;
createEventListeners();
}
function createEventListeners(){
    let todoCheckMarks=document.querySelectorAll(".todo-item .check-mark");
    // todoCheckMarks.forEach((checkMark)=>{
    // checkMark.addEventListener("click", function(){
    //     markCompeted(checkMark.dataset.id);

    //})
//})
console.log(todoCheckMarks);
}


// function markCompeted(){
//     db.collection("todo-items").doc()
//     console
// }
  getItem();


