import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useState } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, text: "Create a to-do app", day: "04/06/2022", reminder: true },
    {
      id: 2,
      text: "Finish a to-do app ",
      day: "04/06/2022 ",
      reminder: true,
    },
    {
      id: 3,
      text: "Create a new app",
      day: "04/06/2022 ",
      reminder: true,
    },
  ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Togle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

 

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
        < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
         ) : (
            "No Tasks to Show"
            )}
      </div>
      <div className="container1">


      <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
        < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
         ) : (
            "No Tasks to Show"
            )}



      </div>
    </div>
    
  )
}

export default App
