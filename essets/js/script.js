var calc = document.querySelector('.calc'),
    result = document.querySelector('.result')
    num = ['1','2','3','4','5','6','7','8','9'];

    calc.value = '0';
    calc.focus();

document.addEventListener('keypress', function(e){    
    if(calc.value === '0' & e.key in num) calc.value = ""
    if(e.key === 'Enter') igual();
}, false);

function calcular(event){
    if(calc.value.length < 14){
        if(calc.value === '0' & event in num | event === '√') calc.value = event;
        else calc.value += event;
    }    
}        

function conhex(c){
    const l = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15};
    for(let i in l){
        if(c === i) return l[i];
        else if(c === l[i]) return i;
    }          
    return c;
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
            if(numCalc[i] === "×" | numCalc[i] === "x") numCalc[i] = "*";
            else if(numCalc[i] === "÷") numCalc[i] = "/";
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
        
        n0 = parseFloat(n0);
        n1 = parseFloat(n1);

        if(op === "*"){r = n0 * n1;}
        else if(op === "/"){r = n0 / n1;}
        else if (op === "+") {r = n0 + n1;}
        else if(op === "-"){r = n0 - n1;}
        
        else if(op === "√"){r = Math.sqrt(n1);}
        else if(op === "%"){r = (n0 * n1) / 100;}
    }  
    
    result.value = calc.value;
    calc.value = r.toString().substring(0, 14);      
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

function reset(){
    calc.value = 0;
    result.value = "";
    calc.focus();          
}

function base(b){
    if(b === 'bin'){b = 2;}
    else if(b === 'oct'){b = 8;} 
    else if(b === 'hex'){b = 16;}

    let n = parseInt(calc.value),    
    l = [];

    while (n >= b){
        m = n % b;
        l.push(conhex(m));    
        n = ~~(n / b);
    }

    l.push(conhex(n));
    l.reverse();

    result.value = calc.value;
    calc.value = l.join("");
}