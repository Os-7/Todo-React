import { useState } from "react"

export default function AppTodo({onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo" onChange={(event)=>{setTodoName(event.target.value)}} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={(event) =>{setDueDate(event.target.value)}} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn" onClick={handleAddButtonClicked}>Add</button>
        </div>
    </div>
  )
}
