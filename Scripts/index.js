function execButton(objValue) {
    size = document.getElementById("text_store").value.length
    if(objValue == "clear") {
        document.getElementById("text_0").value = "";
        document.getElementById("text_1").value = "";
        document.getElementById("text_store").value = ""
        console.log(document.getElementById("text_store").value)
        return;
    }
    else if(objValue == "percent"){
        document.getElementById("text_0").value += "%"
        document.getElementById("text_store").value += " / 100"
        document.getElementById("text_store").value = operate(document.getElementById("text_store").value) + "*"
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
        document.getElementById("text_0").value += "-"
        document.getElementById("text_store").value += "-"
        return
    }
    else if(objValue == "equals") {
        result = operate(document.getElementById("text_store").value)
        document.getElementById("text_1").value = document.getElementById("text_0").value
        document.getElementById("text_0").value = result
        document.getElementById("text_store").value = result
        return
    }
    else if (objValue == "remove_character") {
        if (document.getElementById("text_store").value == "") {
            return
        }
        document.getElementById("text_0").value = removeLastCharacter(document.getElementById("text_0").value)
        document.getElementById("text_store").value = removeLastCharacter(document.getElementById("text_store").value)
        return
    }
    else if (objValue == ".") {
        value = document.getElementById("text_store").value
        try {
            if(value.charAt(size-1).match("*","+","-","/")) {
                document.getElementById("text_0").value += "0."
                document.getElementById("text_store").value += "0."
                return
            }
            else {
                if(value.substring(value.indexOf(value.match("*","+","-","/"))).includes(".")) {
                    return
                }
                else {
                    document.getElementById("text_0").value += "."
                    document.getElementById("text_store").value += "."
                    return
                }
            }
        } catch (SyntaxError) {
        }
        if(size == 0) {
            document.getElementById("text_0").value += "0."
            document.getElementById("text_store").value += "0."
            return
        }
        else if (value.includes(".")) {
            return
        }
        return
    }
    else if(document.getElementById("text_store").value.substring(size - 5) == "/ 100") {
        document.getElementById(text_0).value += "x"
    }
    document.getElementById("text_0").value += objValue;
    document.getElementById("text_store").value += objValue;
    console.log(document.getElementById("text_store").value)
}

function removeLastCharacter(value) {
    console.log(value)
    newString = ""
    for (let i = 0; i < value.length; i++) {

        if (i != value.length - 1) {
            newString += value.charAt(i);
        }
        else {
            return newString;
        }
    }
}

function operate(elementValue) {
    number = ""
    console.log(elementValue)
    console.log(elementValue.length)
    for (let i = 0; i < elementValue.length; i++) {
        if(elementValue.charAt(i) == '*') {
            console.log("entrei")
            number += " * "
            continue
        }
        else if(elementValue.charAt(i) == '/') {
            number += " / "
            continue
        }
        else if(elementValue.charAt(i) == '-') {
            number += " - "
            continue
        }
        else if(elementValue.charAt(i) == '+') {
            number += " + "
            continue
        }
        number += elementValue.charAt(i)
    }
    console.log(number)
    return eval(number)
}