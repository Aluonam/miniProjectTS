const btn = document.getElementById("btn"); // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 

btn?.addEventListener("click", function(){
    alert("clicked!")
})

btn // ya no lo entiende como nulo

// -------------ASSERTIONS---------------------
// permiten tratar un valor como otro tipo
let mystery: unknown = 'Hello world';

const numCharacters = (mystery as string).length
