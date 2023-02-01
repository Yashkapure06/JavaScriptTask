const textarea = document.getElementById("textarea");
const counter =  document.getElementById("counter");
const characterLimit = 50;

textarea.addEventListener("input", function() {
    const remaining = characterLimit - textarea.value.length;
    counter.innerHTML = `${remaining} <span>/50</span>`;
    if (remaining < 20 && remaining > 10) {
        counter.style.color = "yellow";
    } 
    else if (remaining < 10) {
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
    });