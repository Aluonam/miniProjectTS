const btn = document.getElementById("btn"); // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 

btn?.addEventListener("click", function(){
    alert("clicked!")
})

btn // ya no lo entiende como nulo