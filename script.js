//heading and paragram
const head = document.createElement("h1")
const para = document.createElement("p")
//input label
const container = document.createElement("div")
const row1 = document.createElement("div")
const input = document.createElement("input")
input.addEventListener("input", () => {
    if (input.value != "0" || input.value != 1 || input.value != 2 || input.value != 3 || input.value != 4 || input.value != 5 || input.value != 6 || input.value != 7 || input.value != 8 || input.value != 9) {
        alert("word is not valid in calculation")
        deleted()
    }
   
})

//row 1 buttons
const row2 = document.createElement("div")
const clear = document.createElement("button")
const dot = document.createElement("button")
const back = document.createElement("button")
const multiple = document.createElement("button")
//row 2 buttons
const row3 = document.createElement("div")
const seven = document.createElement("button")
const eight = document.createElement("button")
const nine = document.createElement("button")
const divtion = document.createElement("button")
//row 3 buttons
const row4 = document.createElement("div")
const four = document.createElement("button")
const five = document.createElement("button")
const six = document.createElement("button")
const subtract = document.createElement("button")
//row 4 buttons
const row5 = document.createElement("div")
const one = document.createElement("button")
const two = document.createElement("button")
const three = document.createElement("button")
const addtion = document.createElement("button")
//row 5 buttons
const row6 = document.createElement("div")
const zero = document.createElement("button")
const doublezero = document.createElement("button")
const equal = document.createElement("button")


//set attribute or class
//heading attributes
head.setAttribute("id", "title")
para.setAttribute("id", "description")
//input attributes
container.setAttribute("class", "container");
row1.setAttribute("class", "row")
input.setAttribute("type", "text")
input.setAttribute("class", "col-12")
input.setAttribute("id", "result")
//----------------------------------
//row 1 attributes
row2.setAttribute("class", "row")
clear.setAttribute("type", "button")
clear.setAttribute("class", "col-2")
clear.setAttribute("id", "clear")
clear.setAttribute("onclick", "clearAll()")
dot.setAttribute("type", "button")
dot.setAttribute("class", "col-2")
dot.setAttribute("id", "dot")
dot.setAttribute("onclick", "display('.')")
back.setAttribute("type", "button")
back.setAttribute("class", "col-2")
back.setAttribute("id", "back")
back.setAttribute("onclick", "deleted()")
multiple.setAttribute("type", "button")
multiple.setAttribute("class", "col-2")
multiple.setAttribute("id", "multiple")
multiple.setAttribute("onclick", "display('*')")
//-----------------------------------
//row 2 attributes
row3.setAttribute("class", "row")
seven.setAttribute("type", "button")
seven.setAttribute("class", "col-2")
seven.setAttribute("id", "7")
seven.setAttribute("onclick", "display('7')")
eight.setAttribute("type", "button")
eight.setAttribute("class", "col-2")
eight.setAttribute("id", "8")
eight.setAttribute("onclick", "display('8')")
nine.setAttribute("type", "button")
nine.setAttribute("class", "col-2")
nine.setAttribute("id", "9")
nine.setAttribute("onclick", "display('9')")
divtion.setAttribute("type", "button")
divtion.setAttribute("class", "col-2")
divtion.setAttribute("id", "divtion")
divtion.setAttribute("onclick", "display('/')")
//-----------------------------------
//row 3 attributes
row4.setAttribute("class", "row")
four.setAttribute("type", "button")
four.setAttribute("class", "col-2")
four.setAttribute("id", "4")
four.setAttribute("onclick", "display('4')")
five.setAttribute("type", "button")
five.setAttribute("class", "col-2")
five.setAttribute("id", "5")
five.setAttribute("onclick", "display('5')")
six.setAttribute("type", "button")
six.setAttribute("class", "col-2")
six.setAttribute("id", "6")
six.setAttribute("onclick", "display('6')")
subtract.setAttribute("type", "button")
subtract.setAttribute("class", "col-2")
subtract.setAttribute("id", "subtract")
subtract.setAttribute("onclick", "display('-')")
//------------------------------------
//row 4 attributes
row5.setAttribute("class", "row")
one.setAttribute("type", "button")
one.setAttribute("class", "col-2")
one.setAttribute("id", "1")
one.setAttribute("onclick", "ones()")
one.setAttribute("onclick", "display(1)")
two.setAttribute("type", "button")
two.setAttribute("class", "col-2")
two.setAttribute("id", "2")
two.setAttribute("onclick", "display('2')")
three.setAttribute("type", "button")
three.setAttribute("class", "col-2")
three.setAttribute("id", "3")
three.setAttribute("onclick", "display('3')")
addtion.setAttribute("type", "button")
addtion.setAttribute("class", "col-2")
addtion.setAttribute("id", "add")
addtion.setAttribute("onclick", "display('+')")
//------------------------------------
//row 5 attributes
row6.setAttribute("class", "row")
zero.setAttribute("type", "button")
zero.setAttribute("class", "col-2")
zero.setAttribute("id", "7")
zero.setAttribute("onclick", "display('0')")
doublezero.setAttribute("type", "button")
doublezero.setAttribute("class", "col-2")
doublezero.setAttribute("id", "8")
doublezero.setAttribute("onclick", "display('00')")
equal.setAttribute("type", "button")
equal.setAttribute("class", "col-5")
equal.setAttribute("id", "equal")
equal.setAttribute("onclick", "evaluvation()")
//------------------------------------

//inner values or innerHTML
//heading values
head.innerText = "calculator"
para.innerText = "This is online Calculator"
//row1 values
clear.innerText = "C"
dot.innerText = "•"
back.innerText = "←"
multiple.innerText = "X"
//row2 values
seven.innerText = "7"
eight.innerText = "8"
nine.innerText = "9"
divtion.innerText = "/"
//row3 values
four.innerText = "4"
five.innerText = "5"
six.innerText = "6"
subtract.innerText = "-"
//row4 values
one.innerText = "1"
two.innerText = "2"
three.innerText = "3"
addtion.innerText = "+"
//row5 values
zero.innerText = "0"
doublezero.innerText = "00"
equal.innerText = "="

//function
function display(val) {
    var i = document.getElementById("result").value += val
    console.log(i);
}
function evaluvation() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y
}
function clearAll() {
    document.getElementById("result").value = ""
}
function deleted() {
    let vel = document.getElementById("result");
    vel.value = vel.value.substring(0, vel.value.length - 1);
}
//append tags
container.append(row1, row2, row3, row4, row5, row6)
row1.append(input)
row2.append(clear, dot, back, multiple)
row3.append(seven, eight, nine, divtion)
row4.append(four, five, six, subtract)
row5.append(one, two, three, addtion)
row6.append(zero, doublezero, equal)
document.body.append(head, para, container)
