
function plus(num1 , num2) {
    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Sum = ${num1+num2}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}


function modulus(num1 , num2) {
    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Sum = ${num1%num2}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);   
}


function minus(num1 , num2) {
    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Sum = ${num1-num2}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);   
}


function multiplication(num1 , num2) {
    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Sum = ${num1*num2}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);   
}


function division(num1 , num2) {
    document.getElementById("myList").innerHTML = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Sum = ${num1/num2}`);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);   
}

