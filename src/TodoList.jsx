import {useState } from "react";
import {v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id:uuidv4()}]);
    let [NewTodo, setNewTodo] = useState("");
    let addNewTask =()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: NewTodo, id: uuidv4()}]
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo =(id)=>{
      setTodos((prevTodos) => prevTodos.filter((todo)=> todo.id !== id));
    };
   let upperCaseAll=()=>{
    setTodos((prevTodos) => 
        prevTodos.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
    );
};
let UpperCaseOne=(id) =>{
    setTodos((prevTodos) => 
        prevTodos.map((todo)=>{
            if(todo.id === id){
             return{
                ...todo,
                task: todo.task.toUpperCase()
            };
            } else{
                return todo;
            }
           
        })
    );
};




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
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={()=> deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=> UpperCaseOne(todo.id)}>UpperCase One</button>
                        </li> 

                ))}
            </ul>
            <button onClick={upperCaseAll}>upperCase All</button>
        </div>
    );
}