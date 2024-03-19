import { useState } from "react";
import ToDoItems from "./ToDoItems";
import Footer from "./Footer";
import Form from "./Form";
function ToDo() {
    const [toDos, setToDos] = useState([])
    const completeTodos=toDos.filter((toDo)=>toDo.done).length
    const totalTodos=toDos.length
    const sortedTodos=toDos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    return (
        <div>
            <Form toDos={toDos} setToDos={setToDos} />
            <ToDoItems toDos={sortedTodos} setToDos={setToDos} />
            <Footer completeTodos={completeTodos} totalTodos={totalTodos}/>
        </div>
    )
}
export default ToDo;