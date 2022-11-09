const NUMBER = {
    value1: document.getElementById("value1").value,
    value2: document.getElementById("value2").value,
    result: document.getElementById("result"),
}

const OPERATION = {
    divide: (value1 / value2),
    multi: (value1 * value2),
    sub: (value1 - value2),
    add: (value1 + value2),
}

let result;

document.getElementById("divide").onclick = function(){
    result = OPERATION.divide;
};
document.getElementById("multi").onclick = function(){
    result = OPERATION.multi;
};
document.getElementById("sub").onclick = function(){
    result = OPERATION.sub;
};
document.getElementById("add").onclick = function(){
    result = OPERATION.add;
};

document.getElementById("result_btn").onclick = function(){
    document.getElementById("result_block").innerHTML = result;
};


