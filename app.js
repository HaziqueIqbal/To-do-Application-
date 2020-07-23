var list = document.getElementById("list");
var date = new Date();
document.getElementById("datte").innerHTML = date.toDateString();
function addTodo() {
    var item = document.getElementById("items");
    if (item.value === "") {
        window.alert("Please Enter Some value..");
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("class","edit");
        var li = document.createElement("li");
        var text_li = document.createTextNode(item.value);
        div.appendChild(text_li);
        li.appendChild(div);

        list.appendChild(li);
        var delet = document.createElement("i");
        delet.setAttribute("class", "fa fa-trash");
        delet.setAttribute("onClick", "allDelete(this)")
        li.appendChild(delet);

        var edit = document.createElement("i");
        edit.setAttribute("class", "fa fa-pencil-square-o");
        edit.setAttribute("onClick", "ediit(this)");
        li.appendChild(edit);

        item.value = "";
    }
}

function reset() {
    list.innerHTML = "";
}
function allDelete(receive) {
    receive.parentNode.remove();

}
function ediit(receive) {
    var val = receive.parentNode.firstChild.firstChild.nodeValue;
    var newVal = window.prompt("Enter New Value",val);
    receive.parentNode.firstChild.firstChild.nodeValue = newVal;
}