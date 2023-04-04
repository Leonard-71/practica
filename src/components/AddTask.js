import { useRef, useState } from 'react'
import Task from './Task';
const AddTask = ({ onAdd }) => {

  const [text, setText] = useState('')
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false)
  
  const dateInputRef = useRef(null);


   const onSubmit = (e) => {
    e.preventDefault()
    if (!text && !date) {
      alert('Please add a task')
      return
    }
    onAdd({ text,date, reminder })
    setText('')
    setDate('')
    setReminder(false)
  }


  const onUpdate = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please edit a task')
      return
    }
    onAdd({ text,date, reminder })
    setText(e.target.value)
    setDate(e.target.value)
    setReminder(e.currentTarget.checked)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
      <label>Day & Time</label>
      <input
          type="date"
          ref={dateInputRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>


      <label className='lbl-btn'>Set Reminder  
      <label className="switch">
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        <span className="slider round"></span>
      </label>
        </label>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
      <input type='button' value='Update Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask