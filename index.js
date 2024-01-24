var btn = document.getElementById("btn"); // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 
var input = document.getElementById("todoinput");
input;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});
btn; // ya no lo entiende como nulo
// -------------ASSERTIONS---------------------
// permiten tratar un valor como otro tipo
var mystery = 'Hello world';
var numCharacters = mystery.length;
