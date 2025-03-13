function execButton(objValue) {
    if(objValue == "clear") {
        document.getElementById("text_0").value = "";
        document.getElementById("text_store").value = ""
        return;
    }
    else if(objValue == "percent"){
        document.getElementById("text_0").value += "%"
        document.getElementById("text_store").value += "/100"
        return
    }
    else if(objValue == "*") {
        document.getElementById("text_0").value += "x";
        document.getElementById("text_store").value += "*"
        return
    }
    else if(objValue == "/") {
        document.getElementById("text_0").value += "÷"
        document.getElementById("text_store").value += "/"
        return
    }
    else if(objValue == "invert") {
        document.getElementById("text_0") += "-"
        document.getElementById("text_store") += "-"
        return
    }
    else if(objValue == "equals") {
        result = operate(document.getElementById("text_0").value)
        document.getElementById("text_1").value = document.getElementById("text_0").value
        document.getElementById("text_0").value = result
        document.getElementById("text_store").value = result
    }
    else if (objValue == "remove") {
        document.getElementById("text_0").value = removeLastCharacter(document.getElementById("text_0").value)
        document.getElementById("text_store").value = removeLastCharacter(document.getElementById("text_store").value)
        return
    }
    else if (objValue == ".") {
        //if ()
    }
    document.getElementById("text_0").value += objValue;
    document.getElementById("text_store").value += objValue;
}

function removeLastCharacter(value) {
    newString = ""
    for (let i = 0; i < length(value); i++) {
        if (i != length(value) - 2) {
            newString += value.charAt(i);
        }
        else {
            return newString;
        }
    }
}

function operate(elementValue) {
    
    for (let i = 0; i < length(elementValue); i++) {
        let character = elementValue.charAt(i);
        if (character == "x") {
            
        }
        if (i == length(elementValue) - 1) {

        }
    }
}

function mult() {

}