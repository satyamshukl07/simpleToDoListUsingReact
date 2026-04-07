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
        <div style={{padding: "20px", fontFamily: "Arial"}}>
             <h2>📝 Todo List</h2>
            
             <div style={{marginBottom: "20px"}}>
                 <input 
                    placeholder="add a task" 
                    value={NewTodo}
                    onChange={updateTodoValue}
                    style={{
                        padding: "8px",
                        width: "300px",
                        fontSize: "16px",
                        marginRight: "10px"
                    }}
                ></input>
                <button 
                    onClick={addNewTask}
                                        style={{
                        padding: "8px 16px",
                        fontSize: "16px",
                        cursor: "pointer",
                         backgroundColor: "#4CAF50",
                         color: "white",
                         border: "none",
                         borderRadius: "4px"
                     }}
                 >
                     Add Task
                 </button>
             </div>

             <hr></hr>
            
             <h4>Tasks ({todos.length})</h4>
             <ul style={{listStyle: "none", padding: "0"}}>
                 {todos.map((todo)=>(
                     <li 
                         key={todo.id}
                         style={{
                             marginBottom: "12px",
                             padding: "12px",
                             backgroundColor: "#f5f5f5",
                             borderRadius: "4px",
                             display: "flex",
                             justifyContent: "space-between",
                             alignItems: "center"
                         }}
                     >
                         <span style={{fontSize: "16px", flex: 1}}>
                             {todo.task}
                         </span>
                         <button 
                             onClick={()=> UpperCaseOne(todo.id)}
                             style={{
                                 padding: "6px 12px",
                                 marginRight: "8px",
                                 cursor: "pointer",
                                 backgroundColor: "#2196F3",
                                 color: "white",
                                 border: "none",
                                 borderRadius: "4px",
                                 fontSize: "14px"
                             }}
                         >
                             UpperCase One
                         </button>
                         <button 
                             onClick={()=> deleteTodo(todo.id)}
                             style={{
                                 padding: "6px 12px",
                                 cursor: "pointer",
                                 backgroundColor: "#f44336",
                                 color: "white",
                                 border: "none",
                                 borderRadius: "4px",
                                 fontSize: "14px"
                             }}
                         >
                             Delete
                         </button>
                     </li>
                 ))}
             </ul>

            <button 
                onClick={upperCaseAll}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#FF9800",
                    color: "white",
                    border: "none",
                                         borderRadius: "4px",
                     marginTop: "20px"
                 }}
             >
                 UpperCase All
             </button>
         </div>
    );
 }