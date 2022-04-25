const n1 = document.getElementById("n1"),
    n2 = document.getElementById("n2"),
    operator = document.getElementById("operator"),
    result = document.getElementById("result"),
    parenthesesN1 = document.getElementsByClassName("parenthesesN1"),
    parenthesesN2 = document.getElementsByClassName("parenthesesN2");
let chosenOperator = false,
    thereIsPointN1 = false,
    thereIsPointN2 = false;
let addNumeral = (numeral) => {
    if (!chosenOperator) {
        if (n1.innerHTML.length < 8) {
            n1.innerHTML += numeral;
        }
    } else {
        if (n2.innerHTML.length < 8) {
            n2.innerHTML += numeral;
        }
    }
}
let addPoint = () => {
    if (!chosenOperator) {
        if (!thereIsPointN1) {
            n1.innerHTML += ".";
            thereIsPointN1 = true;
        }
    } else {
        if (!thereIsPointN2) {
            n2.innerHTML += ".";
            thereIsPointN2 = true;
        }
    }
}
let addOperator = (op) => {
    if (n1.innerHTML !== "" && n2.innerHTML == "") {
        operator.innerHTML = op;
        chosenOperator = true;
    }
}
let clearAll = () => {
    n1.innerHTML = "";
    n2.innerHTML = "";
    operator.innerHTML = "";
    result.innerHTML = "";
    chosenOperator = false;
    thereIsPointN1 = false;
    thereIsPointN2 = false;
    parenthesesN1[0].style = parenthesesN1[1].style = "display: none";
    parenthesesN2[0].style = parenthesesN2[1].style = "display: none";
}
let calc = () => {
    if (n2.innerHTML !== "") {
        let operationResult = 0;
        switch (operator.innerHTML) {
            case "+":
                operationResult = ((10 * parseFloat(n1.innerHTML) + (10 * parseFloat(n2.innerHTML))) / 10);
                break;
            case "-":
                operationResult = ((10 * parseFloat(n1.innerHTML) - (10 * parseFloat(n2.innerHTML))) / 10);
                break;
            case "x":
                operationResult = (10 * parseFloat(n1.innerHTML) * (10 * parseFloat(n2.innerHTML)) / 100);
                break;
            case "/":
                operationResult = (10 * parseFloat(n1.innerHTML) / (10 * parseFloat(n2.innerHTML)));
                break;
            case "%":
                operationResult = ((10 * parseFloat(n1.innerHTML) / (10 * parseFloat(n2.innerHTML)) / 10) * 100);
                break;
        }
        if (String(operationResult % 1).length > 1) {
            result.innerHTML = "= " + (operationResult.toFixed(3));
        }
        else {
            result.innerHTML = "= " + (operationResult);
        }
    }
}
let changeSignal = () => {
    if (!chosenOperator) {
        if (n1.innerHTML[0] != "-") {
            n1.innerHTML = "-" + n1.innerHTML;
            parenthesesN1[0].style = parenthesesN1[1].style = "display: inline";
        } else {
            n1.innerHTML = (n1.innerHTML).replace(/^./, "");
            parenthesesN1[0].style = parenthesesN1[1].style = "display: none";

        }
    }
    else {
        if (n2.innerHTML[0] != "-") {
            n2.innerHTML = "-" + n2.innerHTML;
            parenthesesN2[0].style = parenthesesN2[1].style = "display: inline";

        } else {
            n2.innerHTML = (n2.innerHTML).replace(/^./, "");
            parenthesesN2[0].style = parenthesesN2[1].style = "display: none";

        }
    }
}
let clearEntry = () => {
    if (result.innerHTML === "") {
        if (n2.innerHTML != "") {
            n2.innerHTML = "";
        } else {
            if (chosenOperator) {
                chosenOperator = false;
                operator.innerHTML = "";
            }
            else {
                n1.innerHTML = "";
            }
        }
    }
}

let github = () => {
    alert("You clicked the GitHub button (Congratulations! But it's no big deal!)");
}