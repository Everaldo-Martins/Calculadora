var calc = document.querySelector('.calc'); 
calc.focus();

function conhex(c){
    const l = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15};
    for(let i in l){
        if(c === i){
            return l[i];
        }    
        else if(c === l[i]){
            return i;
        }
    }          
    return c;
}

function calcular(event){            
    calc.value += event;
}        

function igual(){
    let numCalc = Array.from(calc.value),
        n0 = 0,
        n1 = 0,
        op = "",
        count = 0, 
        r = 0;

    for(let i in numCalc){
        if(isNaN(numCalc[i]) & numCalc[i] != "." & numCalc[i] != ","){
            op = numCalc[i];
            count++;
        }
        else if(numCalc[i] === ","){
            numCalc[i] = ".";
        }
        else if(count === 0){
            n0 += numCalc[i];
        }
        else if(count === 1){
            n1 += numCalc[i];
        }               
    }

    n0 = parseFloat(n0);
    n1 = parseFloat(n1);

    if (op === "+") {
        r = n0 + n1;
    }
    else if(op === "-"){
        r = n0 - n1;
    }
    else if(op === "x" | op === "*"){
        r = n0 * n1;
    }
    else if(op === "÷" | op === "/"){
        r = n0 / n1;
    }
    else if(op === "√"){
        r = Math.sqrt(n1);
    }
    calc.value = r;          
}

function clean(){
    let c = Array.from(calc.value),
    l = "";
    if(c.length > 1){
        c.pop(c.length -1);
        c.forEach(e => {
            l += e;
        });
    }
    calc.value = l;
}

function calcPi(){
    calc.value += "3.14159265359";
} 

function reset(){
    calc.value = "";
    calc.focus();          
}

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        igual();
    }
}, false);

function bin(){
    let n = parseInt(calc.value),
    b = 2,
    l = [];
    while (n >= b){
        m = n % b;
        l.push(m);    
        n = ~~(n / b);
    }
    l.push(n);
    l.reverse();

    calc.value = l.join("");
}

function oct(){
    let n = parseInt(calc.value);
    b = 8,
    l = [];
    while (n >= b){
        m = n % b;
        l.push(m);    
        n = ~~(n / b);
    }
    l.push(n);
    l.reverse();

    calc.value = l.join("");
}

function hex(){
    let n = parseInt(calc.value),
    b = 16,
    l = [];
    while (n >= b){
        m = n % b;
        l.push(conhex(m));    
        n = ~~(n / b);
    }
    l.push(conhex(n));
    l.reverse();

    calc.value = l.join("");
}