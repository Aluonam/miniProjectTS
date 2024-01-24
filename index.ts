const btn = document.getElementById("btn")! as HTMLButtonElement; // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 
const input = document.getElementById("todoinput")! as HTMLInputElement; 
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")


// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("SUBMITED!")
// })

// lo mismo que: 
function handleSubmit(e: SubmitEvent){
        e.preventDefault();
        const newToDoText = input.value;
        const newLi = document.createElement("Li");
        newLi.append(newToDoText);
    }

form.addEventListener("submit", handleSubmit)

// btn?.addEventListener("click", function(){ // funcion callback 
//     alert(input.value);
//     input.value = "";
// })

// btn // ya no lo entiende como nulo







// -------------ASSERTIONS---------------------
// permiten tratar un valor como otro tipo
// let mystery: unknown = 'Hello world';

// const numCharacters = (mystery as string).length
