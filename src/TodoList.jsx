import {useState } from "react";

export default function TodoList(){
    let [todos, setTodos] = useState(["sample task"]);
    let [NewTodo, setNewTodo] = useState("");
    let addNewTask =()=>{
        setTodos([...todos, NewTodo]);
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }


    return (
        <div>
            <input placeholder="add a task" value = {NewTodo}onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul> 
                {todos.map((todo)=>(
                    <li>{todo}</li> 
                ))}
            </ul>
        </div>
    );
}