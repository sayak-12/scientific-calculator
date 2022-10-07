function fav(el) {
    let elem= el.querySelector('ion-icon');
    let val= elem.getAttribute('name');
    if (val=='moon-outline') {
        elem.setAttribute('name', 'sunny-outline');
    }
    else{
        elem.setAttribute('name', 'moon-outline');
    }
   }
function fav1(el) {
    let elem= el.querySelector('ion-icon');
    let val= elem.getAttribute('name');
    if (val=='school-outline') {
        elem.setAttribute('name', 'construct-outline');
    }
    else{
        elem.setAttribute('name', 'school-outline');
    }
   }
function fav2(el) {
    let elem= el.querySelector('ion-icon');
    let val= elem.getAttribute('name');
    if (val=='time-outline') {
        elem.setAttribute('name', 'close-outline');
    }
    else{
        elem.setAttribute('name', 'time-outline');
    }
   }
function fav4(el) {
    let elem= el.querySelector('ion-icon');
    let val= elem.getAttribute('name');
    if (val=='duplicate-sharp') {
        elem.setAttribute('name', 'remove-circle');
    }
    else{
        elem.setAttribute('name', 'duplicate-sharp');
    }
   }
   function textelem(){
    let size = document.querySelector('.question').textContent.length;
    size--;
    return document.querySelector('.question').textContent.substring(0, size);
   }
   let j=0;
   function equalfunction(){
    j++;
    if (calc.classList.contains(".scin")){
        equalScin();
    }
    else{
        equalNormal();
    }
   }
function equalNormal(){
    let input = document.querySelector('.question').textContent;
    let output = document.querySelector('.answer');
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    if (input==''){
        output.textContent = '0';
    }
    else{
        try {
            let answer = parseFloat(eval(input)).toFixed(2).replace(/[.,]00$/, "");
            output.textContent = answer;
            let StrAns = input + "=" + answer;
            AddtoHistory(StrAns);

        } catch (error) {
            output.textContent = "Format Error";
        }
    }
}

let darkbtn = document.querySelector(".darklight");
let scibtn= document.querySelector(".scinorm");
let history= document.querySelector(".history");
let buttons = document.querySelectorAll('span');
let body = document.querySelector("body");
const calc = document.querySelector(".container");
const texta= document.querySelector(".textarea");
let buttonContainer= document.querySelector(".btncont");
let scbtncont= document.querySelector(".btncont2");
let second=document.querySelector(".second");
let equals= document.querySelector(".eq");
let questionArea=document.querySelector(".question");
let answerArea=document.querySelector(".answer");
let drop= document.querySelector(".drp");
let modebuttons = drop.querySelectorAll('.drpspan');
let back = document.querySelector(".backsp");
// let normalbtns = document.querySelectorAll(".";)
let closed = document.querySelector(".closed");
let panel = document.querySelector(".panel");
history.addEventListener("click", function(){
    panel.classList.toggle("visible");
})
closed.addEventListener("click", function(){
    panel.classList.remove("visible");
})
darkbtn.addEventListener("click", function() {
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('dark');
        
    }
    // back.classList.toggle('dark');
    body.classList.toggle('dark');
    calc.classList.toggle('dark');
    texta.classList.toggle('dark');
    drop.classList.toggle("dark");
})
scibtn.addEventListener("click", function(){
    calc.classList.toggle("scin");
    scbtncont.classList.toggle("delay");
})
let scbtn1= document.querySelector(".sqr");
let scbtn2= document.querySelector(".power");
let scbtn3= document.querySelector(".tenpower");
let scbtn4= document.querySelector(".epower");
let scbtn5= document.querySelector(".fact");
let scbtn6= document.querySelector(".sqrt");
let scbtn7= document.querySelector(".cbrt");
let scbtn8= document.querySelector(".sin");
let scbtn9= document.querySelector(".cos");
let scbtn10= document.querySelector(".tan");
let scbtn11= document.querySelector(".int");
let scbtn12= document.querySelector(".ln");
let scbtn13= document.querySelector(".log2");
let scbtn14= document.querySelector(".btn14");
let scbtn15= document.querySelector(".btn15");
let cbtn= document.querySelector(".c");
cbtn.addEventListener("click", function(){
    if (j!=0) {
        j=0;
    }
    document.querySelector('.question').textContent =''; 
    document.querySelector('.answer').textContent='0'; 
    document.querySelector('.question').style.fontSize = '2rem';
    document.querySelector('.answer').style.fontSize= '1.92rem';
})
let operatorbtns = document.querySelectorAll(".op");
operatorbtns.forEach(element => {
    element.addEventListener("click", function () {
        
        if (j!=0) {
            document.querySelector('.question').textContent = document.querySelector('.answer').textContent;
            j=0;
        }
        if (element.id == "m") {
            document.querySelector('.question').textContent += "*";
        }
        else if (element.id == "d") {
            document.querySelector('.question').textContent += "/";
        }
        else{
            document.querySelector('.question').textContent += element.innerHTML;
        }
    })
})
second.addEventListener("click", function(){
    val= second.querySelector('ion-icon').getAttribute('name');
    if(val=='duplicate-sharp'){
        scbtn1.innerHTML='X&sup2;';
        scbtn2.innerHTML= 'X^';
        scbtn3.innerHTML= '10^';
        scbtn4.innerHTML= 'e^';
        scbtn5.innerHTML= 'X!';
        scbtn6.innerHTML= '&Sqrt;';
        scbtn7.innerHTML= '&#x221B;';
        scbtn8.innerHTML= 'Sin';
        scbtn9.innerHTML= 'Cos';
        scbtn10.innerHTML= 'Tan';
        scbtn11.innerHTML= '&int;dx';
        scbtn12.innerHTML= 'Ln';
        scbtn13.innerHTML= 'Log';
        scbtn14.innerHTML= '(';
        scbtn15.innerHTML= ')';
    }
    else{
        scbtn1.innerHTML='X&sup3;';
        scbtn2.innerHTML= 'nCr';
        scbtn3.innerHTML= 'nPr';
        scbtn4.innerHTML= 'Inverse';
        scbtn5.innerHTML= 'Det';
        scbtn6.innerHTML= 'n&Sqrt;';
        scbtn7.innerHTML= '&sum;';
        scbtn8.innerHTML= 'arcsin';
        scbtn9.innerHTML= 'arcCos';
        scbtn10.innerHTML= 'arcTan';
        scbtn11.innerHTML= 'd/dx';
        scbtn12.innerHTML= '&conint;';
        scbtn13.innerHTML= 'Log&#8339;';
        scbtn14.innerHTML= '&pi;';
        scbtn15.innerHTML= '&deg; &acute; &acute;&acute;';
    }
})
let mode = document.querySelector(".modebtn");
let array = ['No calculations made', 'No calculations made', 'No calculations made', 'No calculations made', 'No calculations made'];
md = document.querySelector(".md1");
mode.addEventListener("click", function(){
    drop.classList.toggle("active");
    window.onclick= function(e){
        if(!e.target.matches(".modebtn")){
            if (drop.classList.contains("active")) {
               drop.classList.remove("active"); 
            
            }
            
        }
    }
})
function updateName(selected){
    md.innerHTML= selected.innerHTML; 
}
let historyclass = document.querySelectorAll(".hist");
//recent calculation algorithm
function AddtoHistory(el) {
    array.unshift(el);
    array.pop();
    document.getElementById("hist1").innerHTML = array[0];
    document.getElementById("hist2").innerHTML = array[1];
    document.getElementById("hist3").innerHTML = array[2];
    document.getElementById("hist4").innerHTML = array[3];
    document.getElementById("hist5").innerHTML = array[4];
    historyclass.forEach(element => {
        if (element.textContent != 'No calculations made') {
            element.style.backgroundColor="rgb(245,245,245)";
        }
        else{
            element.style.backgroundColor="rgba(245, 245, 245, 0.541)";
        }
    })
}

//calculations scientifica
function factorial(x) {
    if (x<=1) {
        return 1;
    }
    else{
        return x * factorial(x-1);
    }
}



document.querySelector(".sqr").addEventListener("click", function(){
    if (document.querySelector(".sqr").innerHTML=='X&sup2;') {
	let input= document.querySelector('.question').textContent;
	    y = Math.pow(input, 2);
	    let two = "2";
	    document.querySelector('.question').innerHTML +=two.sup();
	    document.querySelector('.answer').textContent = y;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
    else {
	let input= document.querySelector('.question').textContent;
	    y = Math.pow(input, 3);
	    let two = "3";
	    document.querySelector('.question').innerHTML +=two.sup();
	    document.querySelector('.answer').textContent = y;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
})
document.querySelector(".power").addEventListener("click", function(){
    if (document.querySelector(".power").innerHTML=="X^") {
	let xy = prompt("Please enter value of x[base] and y[power] here[separated by comma,]").split(",");
	    x= xy[0];
	    y= xy[1];
	    z = Math.pow(x,y);
	    document.querySelector('.question').innerHTML += x+y.sup();
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let xy = prompt("Please enter value of n[selection-pool] and r[selections] here[separated by comma,]").split(",");
	    n= xy[0];
	    r= xy[1];
        z = combinations(n,r);
        document.querySelector('.question').innerHTML += n + "C" + r;
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
})
document.querySelector(".tenpower").addEventListener("click", function(){
    if (document.querySelector(".power").innerHTML=="10^") {
        let xy = prompt("Please enter value of x[base] and y[power] here[separated by comma,]").split(",");
            x= xy[0];
            y= xy[1];
            z = Math.pow(x,y);
            document.querySelector('.question').innerHTML += x+y.sup();
            document.querySelector('.answer').textContent = z;
            document.querySelector('.question').style.fontSize = "1.92rem";
            document.querySelector('.answer').style.fontSize = "3.2rem";
            let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
            AddtoHistory(StrAns);
    }
    else{
        let xy = prompt("Please enter value of n[selection-pool] and r[selections] here[separated by comma,]").split(",");
            n= xy[0];
            r= xy[1];
            z = permutations(n,r);
            document.querySelector('.question').innerHTML += n + "P" + r;
            document.querySelector('.answer').textContent = z;
            document.querySelector('.question').style.fontSize = "1.92rem";
            document.querySelector('.answer').style.fontSize = "3.2rem";
            let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
            AddtoHistory(StrAns);
    }
})
document.querySelector(".epower").addEventListener("click", function(){
    let x = prompt("Please enter value of power here");
    z = Math.pow(Math.E,x);
    document.querySelector('.question').innerHTML += "e"+x.sup();
    document.querySelector('.answer').textContent = z;
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
    AddtoHistory(StrAns);
})
document.querySelector(".fact").addEventListener("click", function(){
    let x = prompt("Please enter value of num here");
    z = factorial(x);
    document.querySelector('.question').innerHTML += x+"!";
    document.querySelector('.answer').textContent = z;
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
    AddtoHistory(StrAns);
})
document.querySelector(".sqrt").addEventListener("click", function(){
    if (document.querySelector(".sqrt").innerHTML=="&Sqrt;") {
	let x = prompt("Please enter value of number here");
	    z = Math.sqrt(x);
	    document.querySelector('.question').innerHTML += "&Sqrt;"+ x;
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let xy = prompt("Please enter value of x[number] and n[root] here[separated by comma,]").split(",");
    x= xy[0];
    n= xy[1];
    z = Math.pow(x,1/n);
    document.querySelector('.question').innerHTML += x+"<sup>1/</sup>"+n.sup();
    document.querySelector('.answer').textContent = z;
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
    AddtoHistory(StrAns);
}
})
document.querySelector(".cbrt").addEventListener("click", function(){
    let x = prompt("Please enter value of number here");
    z = Math.cbrt(x);
    document.querySelector('.question').innerHTML += "&#x221B;"+ x;
    document.querySelector('.answer').textContent = z;
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
    AddtoHistory(StrAns);
})
document.querySelector(".sin").addEventListener("click", function(){
    if (document.querySelector(".sin").innerHTML=="Sin") {
	let x = prompt("Please enter value of number here");
	    z = Math.sin(((Math.PI/180)*x)).toFixed(5);
	    document.querySelector('.question').innerHTML += "sin("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let x = prompt("Please enter value of number here");
	    z = ((Math.asin(x))*180/Math.PI).toFixed(5);
	    document.querySelector('.question').innerHTML += "sin <sup>-1</sup>("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
})
document.querySelector(".cos").addEventListener("click", function(){
    if (document.querySelector(".cos").innerHTML=="Cos") {
	let x = prompt("Please enter value of number here");
	    z = Math.cos(((Math.PI/180)*x)).toFixed(5);
	    document.querySelector('.question').innerHTML += "cos("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let x = prompt("Please enter value of number here");
	    z = ((Math.acos(x))*180/Math.PI).toFixed(5);
	    document.querySelector('.question').innerHTML += "cos <sup>-1</sup>("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
})
document.querySelector(".tan").addEventListener("click", function(){
    if (document.querySelector(".tan").innerHTML=="Tan") {
	let x = prompt("Please enter value of number here");
	    z = Math.tan(((Math.PI/180)*x)).toFixed(5);
	    document.querySelector('.question').innerHTML += "tan("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let x = prompt("Please enter value of number here");
	    z = ((Math.atan(x))*180/Math.PI).toFixed(5);
	    document.querySelector('.question').innerHTML += "tan <sup>-1</sup>("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
})
document.querySelector(".ln").addEventListener("click", function(){
    let x = prompt("Please enter value of number here");
    z = Math.log(x).toFixed(5);
    document.querySelector('.question').innerHTML += "log<sub>e</sub>("+ x + ")";
    document.querySelector('.answer').textContent = z;
    document.querySelector('.question').style.fontSize = "1.92rem";
    document.querySelector('.answer').style.fontSize = "3.2rem";
    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
    AddtoHistory(StrAns);
})
document.querySelector(".log2").addEventListener("click", function(){
    if (document.querySelector(".log2").innerHTML=="Log") {
	let x = prompt("Please enter value of number here");
	    z = Math.log10(x).toFixed(5);
	    document.querySelector('.question').innerHTML += "log<sub>10</sub>("+ x + ")";
	    document.querySelector('.answer').textContent = z;
	    document.querySelector('.question').style.fontSize = "1.92rem";
	    document.querySelector('.answer').style.fontSize = "3.2rem";
	    let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
	    AddtoHistory(StrAns);
}
else{
    let xy = prompt("Logx(y)=> Please enter value of x[base] and y[number] here[separated by comma,]").split(",");
            x= xy[0];
            y= xy[1];
            z = logn(x,y);
            document.querySelector('.question').innerHTML += "Log" + x.sub() +y;
            document.querySelector('.answer').textContent = z;
            document.querySelector('.question').style.fontSize = "1.92rem";
            document.querySelector('.answer').style.fontSize = "3.2rem";
            let StrAns = document.querySelector('.question').innerHTML + "=" + document.querySelector('.answer').textContent;
            AddtoHistory(StrAns);
}
})
document.querySelector(".btn14").onclick = function(){
    if (document.querySelector(".btn14").innerHTML=="(") {
	document.querySelector('.question').textContent +='(';
}
else{
    document.querySelector('.question').innerHTML +='3.14';
}
}
function logn(x,y) {
    return Math.log(y)/Math.log(x);
}
  
  
  function combinations(n, r) 
  {
    if (n<r) {
        alert("Value of n cannot be smaller than r");
    }
    else 
    {
      return factorial(n)/(factorial(r)*factorial(n-r));
    }
  }
  function permutations(n, r) 
  {
    if (n<r) {
        alert("Value of n cannot be smaller than r");
    }
    else 
    {
      return factorial(n)/factorial(n-r);
    }
  }
function equalScin(){
    if (document.querySelector('.question').innerHTML=="") {
        document.querySelector('.answer').textContent = 0;
    }

}