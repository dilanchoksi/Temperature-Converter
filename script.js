document.getElementById("submitButton").onclick = function() {
    let temp = document.getElementById("input").value;

    if (document.getElementById("fButton").checked) {
        document.getElementById("result").innerHTML = toF(temp).toFixed(2) + "°F";
    } else if (document.getElementById("cButton").checked) {
        document.getElementById("result").innerHTML = toC(temp).toFixed(2) + "°C";
    } else {
        document.getElementById("result").innerHTML = "select a unit..."
    }
}

function toC(temp) {
    return (temp-32)*5/9;
}

function toF(temp) {
    return temp*9/5+32;
}