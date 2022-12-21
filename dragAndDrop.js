
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    ev.srcElement.style.top = ev.y + "px";
    ev.srcElement.style.left = ev.x + "px";
}
function allowDrop(ev) {
    ev.preventDefault();
}
let count=0;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    
    if (document.getElementById(data).id == ev.target.dataset.td) {
    ev.target.appendChild(document.getElementById(data));
    count++;
    if (count==9) {
        audio();
    }
    }
}

function audio(){
    document.getElementById("audio1").play();
}