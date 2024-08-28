import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Component() {
    let [todos , setTodos]=useState([{todo:"sample",id:uuidv4(),isDone:false}]);
    let [newtodo,setNewtodo]=useState("");

    //including todo task in todos array
    let clickbtn=()=>{
      
        setTodos((prevValue)=>{
           
                return [...prevValue,{todo:newtodo,id:uuidv4()}]
             
        });
        setNewtodo("");
    }
//taking new todo from input box
    let updateValue=(event)=>{
    //    console.log(event.target.value);
    
       setNewtodo(event.target.value);
    }
// delete Todo // write as call back
    let deleteTodo=(id)=>{
//   setTodos(todos.filter((todo)=> todo.id!=id))  //you can  use call back insted  of this writen here
    setTodos((todovalue)=>(
       todovalue.filter((todo)=> todo.id!=id)
    ))
    };

  // change todo in uppercase   (for all todo)

  let toUpperCase=()=>{
        setTodos((prevtask)=>(prevtask.map((todo)=>{
            
                return{
                    ...todo,
                todo: todo.todo.toUpperCase()
                };
            })
        ));
    
    }

    //change one todo in uppercase

    let uppercaseOne=(id)=>{
        setTodos((prevtask)=>(prevtask.map((todo)=>{
            if(todo.id==id)
            {
                return{
                    ...todo,
                todo: todo.todo.toUpperCase()
                };

            }

            else{
                return todo;
            }
         
        })
    ));
    }

    //Mark one AS Done

    let markOneDone=(id)=>{
        setTodos((prevtask)=>(prevtask.map((todo)=>{
            if(todo.id==id)
            {
                return{
                    ...todo,
                isDone:true
                };

            }

            else{
                return todo;
            }
         
        })
    ));
    }

    //mark All As Done

    let markAllRead=()=>{
        console.log("all mark");
        setTodos((prevtask)=>(prevtask.map((todo)=>{
            
            return{
                ...todo,
            
                isDone:true
            };
        })
    ));
    }

  return (
    <>
    <div>
      <input placeholder="Enter Todo" value={newtodo} onChange={updateValue} ></input> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={clickbtn} >ADD </button>
    </div>
    <br></br><br></br> <br></br><br></br><hr></hr>
    <h1>Your Todo List</h1>
    <div>

    <ul>
        {
           todos.map((todo)=>
           (
            
           
            <li key={todo.id}>
                <span style={todo.isDone? {textDecorationLine:"line-through",color:"red"}:{}}>
                {todo.todo}
                </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>uppercaseOne(todo.id)}>uppercase one</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>markOneDone(todo.id)}>Mark As Done</button>
            </li>
           
           )
               
           )
        }
       
    </ul>
    <button onClick={toUpperCase}>In Uppercase</button>
    <button onClick={markAllRead}>Mark All AS read</button>

    </div>

    </>
  )
}

export default Component
