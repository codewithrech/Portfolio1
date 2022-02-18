function addItem(event) {
    event.preventDefault();
    let text = document.getElementById("todo-input");
    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = ""
}
function getItem() {
    db.collection("todo-items").onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.forEach((doc) => {
            items.push(doc.data)({
                id: doc.id,
                ...doc.data()
            })
        } )
        generateItems(items);
    })
}
function generateItems(items) {
    let itmsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
        <div class="todo-item">
        <div class="check">
            <div data-id="${item.id} class="check-mark">
                <img src="./assets/icon-check.svg" alt="">

            </div>

        </div>
        <div class="todo-text">
        ${items.text}
        </div>
    </div>
 `
})
document.querySelector("todo-items").innerHTML=itemsHTML;
}
function createEventListeners(){
    let todoCheckMarks=document.querySelectorAll(".todo-item .check-mark")
    todoCcheckMarks.forEach((checkMark)=>{
    checkMark.addEventListener("click", function(){
        markCompeted(checkMark.dataset.id);

    })
})
}
function markCompeted(){
    db.collection("todo-items").doc()
    console
}
getItems();


