let fontSize = 16;

function increaseFontSize() {
    fontSize++;
    document.getElementById("fontsize").innerHTML = fontSize;
    document.getElementById("text").style.fontSize = fontSize + "px";
}
function decreaseFontSize() {
    fontSize--;
    document.getElementById("fontsize").innerHTML = fontSize;
    document.getElementById("text").style.fontSize = fontSize + "px";
}


function changeFont() {
    var font = document.getElementById("font").value;
    document.getElementById("text").style.fontFamily = font;
}

function showSourceCode() {
    var sourceCode = document.getElementById("text").outerHTML;
    var sourceCodeContainer = document.getElementById("sourcecode");
    if (sourceCodeContainer.style.display === "none") {
        sourceCodeContainer.value = sourceCode;
        sourceCodeContainer.style.display = "block";
    } else {
        sourceCodeContainer.style.display = "none";
    }
}