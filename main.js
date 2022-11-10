document.getElementById("result_btn").onclick = function(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let operator = document.getElementById("operation").value;
    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "-":
            result = num1 - num2;
            break;
    }

    document.getElementById("result_block").innerHTML = Number(result.toFixed(14));
};


