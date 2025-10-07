import React, { useState } from 'react'
import './App.css'
import { FaEdit, FaTrash } from 'react-icons/fa';

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)
  const [editText, setEditText] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (task.trim() === '') return
    const newTask = { id: Date.now(), text: task, completed: false }
    setTasks(prev => [...prev, newTask])
    setTask('')
  }

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const startEditing = (task) => {
    setIsEditing(true)
    setCurrentTask(task)
    setEditText(task.text)
  }

  const submitEdit = (e) => {
    e.preventDefault()
    if (!editText.trim()) return
    setTasks(prev =>
      prev.map(t =>
        t.id === currentTask.id ? { ...t, text: editText } : t
      )
    )
    setIsEditing(false)
    setCurrentTask(null)
    setEditText('')
  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1>Get Things Done !</h1>

        {!isEditing && (
          <form onSubmit={addTask} className="TodoForm">
            <input
              type="text"
              className="todo-input"
              value={task}
              onChange={e => setTask(e.target.value)}
              placeholder="What do you need to do?"
            />
            <button type="submit" className="todo-btn">Add Task</button>
          </form>
        )}

        {isEditing ? (
          <form onSubmit={submitEdit} className="TodoForm">
            <input
              type="text"
              className="todo-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Update task..."
            />
            <button type="submit" className="todo-btn">Update</button>
          </form>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="Todo">
              <p
                className={task.completed ? 'completed' : 'incompleted'}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </p>
              <div>
                <span
                  className="edit-icon"
                  onClick={() => startEditing(task)}
                >
                  <FaEdit/>
                </span>
                <span
                  className="delete-icon"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash/>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App;