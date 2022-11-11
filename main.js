document.getElementById("result_btn").onclick = function(){
    let num1 = Number(document.getElementById("value1").value);
    let num2 = Number(document.getElementById("value2").value);
    let operator = document.getElementById("operation").value;
    let list = document.querySelector(".list_output");
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

    result = Number(result.toFixed(14));
    document.getElementById("result_block").innerHTML = result;

    let div = document.createElement('div');
    div.className = "item_output";
    div.innerHTML = result;
    list.append(div);
    div.onclick = function(){
        div.remove();
    }

};


