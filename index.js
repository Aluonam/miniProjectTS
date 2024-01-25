var btn = document.getElementById("btn"); // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("SUBMITED!")
// })
// lo mismo que: 
function handleSubmit(e) {
    e.preventDefault();
    var newToDoText = input.value;
    var newLI = document.createElement("LI");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(checkbox);
    newLI.append(newToDoText);
    list === null || list === void 0 ? void 0 : list.append(newLI); // por si es nulo
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn?.addEventListener("click", function(){ // funcion callback 
//     alert(input.value);
//     input.value = "";
// })
// btn // ya no lo entiende como nulo
// -------------ASSERTIONS---------------------
// permiten tratar un valor como otro tipo
// let mystery: unknown = 'Hello world';
// const numCharacters = (mystery as string).length
