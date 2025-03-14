function execButton(objValue) {
    size = document.getElementById("text_store").value.length
    if(objValue == "clear") {
        document.getElementById("text_0").value = "";
        document.getElementById("text_1").value = "";
        document.getElementById("text_store").value = ""
        //console.log(document.getElementById("text_store").value)
        return;
    }
    else if(objValue == "percent"){
        document.getElementById("text_0").value += "%"
        document.getElementById("text_store").value += " / 100"
        document.getElementById("text_store").value = operate(document.getElementById("text_store").value) + "*"
        return
    }
    else if(objValue == "*") {
        if(!document.getElementById("text_store").value.includes("*")) {
            document.getElementById("text_0").value += "x";
            document.getElementById("text_store").value += "*"
        }
        return
    }
    else if(objValue == "/") {
        if(!document.getElementById("text_store").value.includes("/")) {
        document.getElementById("text_0").value += "÷"
        document.getElementById("text_store").value += "/"
        }
        return
    }
    else if(objValue == "invert") {
        value = document.getElementById("text_store").value
        if (value.length == 1 && value.charAt(0) == "-") {
            //console.log("etrei")
            document.getElementById("text_0").value = ""
            document.getElementById("text_store").value = ""
            return
        }
        else if(value.charAt(0) == "-") {
            //console.log("entrei")
            document.getElementById("text_0").value = document.getElementById("text_0").value.substring(1)
            document.getElementById("text_store").value = value.substring(1)
            return
        }
        else if(value.indexOf("-")>0) {
            index = value.indexOf("-")
            document.getElementById("text_0").value = document.getElementById("text_0").value.substring(0,index) + "+" + document.getElementById("text_0").value.substring(index+1)
            document.getElementById("text_store").value = document.getElementById("text_store").value.substring(0,index) + "+" + document.getElementById("text_store").value.substring(index+1)
            return
        }
        else if(value.indexOf("+")>0) {
            index = value.indexOf("+")
            document.getElementById("text_0").value = document.getElementById("text_0").value.substring(0,index) + "-" + document.getElementById("text_0").value.substring(index+1)
            document.getElementById("text_store").value = document.getElementById("text_store").value.substring(0,index) + "-" + document.getElementById("text_store").value.substring(index+1)
            return
        }
        try {
            if(value.indexOf(value.match(/["*""+""/"][^"."]/gi)[0])) {
                
                //console.log(value.charAt(value.indexOf(value.match(/["*""+""-""/"][^"."]/gi)[0])+1))
                index = value.indexOf(value.match(/["*""+""/"][^"."]/gi)[0])
                //console.log(document.getElementById("text_0").value.substring(0,index))
                //console.log(document.getElementById("text_0").value.substring(0,index+1))
                document.getElementById("text_0").value = document.getElementById("text_0").value.substring(0,index+1) + "-" + document.getElementById("text_0").value.substring(index+1)
                document.getElementById("text_store").value = document.getElementById("text_store").value.substring(0,index+1) + "-" + document.getElementById("text_store").value.substring(index+1)
            }
            
            else {
                index = value.indexOf(value.match(/["*""/"][^"."]/gi)[0])

                document.getElementById("text_0").value = document.getElementById("text_0").value.substring(0,index+1) + document.getElementById("text_0").value.substring(index+2)
                document.getElementById("text_store").value = document.getElementById("text_store").value.substring(0,index+1) + document.getElementById("text_store").value.substring(index+2)
            }
        } catch (TypeError) {

            document.getElementById("text_0").value = "-" + document.getElementById("text_0").value
            document.getElementById("text_store").value = "-" + value
        }
        
        return
    }
    else if(objValue == "equals") {
        console.log(document.getElementById("text_store").value)
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
        
        //console.log(value.match(/["*""+""-""/"][^"."]/gi))
        try {
            if (value.charAt(size-1) == '-') {
                document.getElementById("text_0").value += "0."
                document.getElementById("text_store").value += "0."
                return
            }
            else if (!value.substring(value.indexOf("-")).includes(".")) {
                document.getElementById("text_0").value += "."
                document.getElementById("text_store").value += "."
                return
            }
            else if(value.charAt(size-1) == value.match(/["*""+""/"][^"."]/gi)[0]) {
                //console.log(value.match(/["*""+""-""/"][^"."]/gi)[0])
                //console.log(value.charAt(size-1))
                document.getElementById("text_0").value += "0."
                document.getElementById("text_store").value += "0."
                return
            }
            else {
                //console.log("entrei")
                if(!value.substring(value.indexOf(value.match(/["*""+""/"][^"."]/gi)[0])).includes(".")) {
                    //console.log(value.substring(value.indexOf(value.match(/["*""+""-""/"][^"."]/gi)[0])))
                    //console.log((value.match(/["*""+""-""/"][^"."]/gi)[0]))
                    document.getElementById("text_0").value += "."
                    document.getElementById("text_store").value += "."
                    return
                }
            }
            //console.log(value)
            // console.log((value.match("*+-/")[0]))
        } catch  {
            //console.log("entrei2")
            if (value.charAt(0) == '') {
                document.getElementById("text_0").value += "0."
                document.getElementById("text_store").value += "0."
                return
            }
            else if (value.match(/[0-9]/gi)[0] && !value.includes(".")) {
                //console.log("usguri")
                document.getElementById("text_0").value += "."
                document.getElementById("text_store").value += "."
                return
            }
        }
        
        return
    }
    else if (objValue == "0" && document.getElementById("text_store").value == "")  {
        return
    }
    else if(document.getElementById("text_store").value.substring(size - 5) == "/ 100") {
        document.getElementById(text_0).value += "x"
        return
    }
    else if(objValue == "+") {
        if (!document.getElementById("text_store").value.includes("+")) {
            document.getElementById("text_0").value += objValue;
            document.getElementById("text_store").value += objValue;
        }
        return
    }
    else if(objValue == "-") {
        if(!document.getElementById("text_store").value.includes("-")) {
            document.getElementById("text_0").value += objValue;
            document.getElementById("text_store").value += objValue;
        }
        return
    }
    document.getElementById("text_0").value += objValue;
    document.getElementById("text_store").value += objValue;
    //console.log(document.getElementById("text_store").value)
}

function removeLastCharacter(value) {
    //console.log(value)
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
    //console.log(elementValue)
    //console.log(elementValue.length)
    for (let i = 0; i < elementValue.length; i++) {
        if(elementValue.charAt(i) == '*') {
            //console.log("entrei")
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
    //console.log(number)
    return eval(number)
}