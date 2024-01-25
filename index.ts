
interface Todo {
    text: string,
    completed: boolean,
}

const todos: Todo[] = [];

const btn = document.getElementById("btn")! as HTMLButtonElement; // ! añadir ! Es un operador tipográfico. Lo pones después de alguna expresión que podría ser null y TypeScript asumirá que no es null. que 
const input = document.getElementById("todoinput")! as HTMLInputElement; 
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;


// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     console.log("SUBMITED!")
// })

// lo mismo que: 
function handleSubmit(e: SubmitEvent){
        e.preventDefault();
        const newTodo: Todo = {
            text: input.value,
            completed: false,
        };
        createTodo(newTodo);
        todos.push(newTodo);
        input.value = "";
    }

function createTodo (todo: Todo) {
        const newLI = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        newLI.append(todo.text);
        newLI.append(checkbox)
        list?.append(newLI); // por si es nulo

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
