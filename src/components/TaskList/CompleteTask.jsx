import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='task-card complete'>
        <div className='task-meta'><h3 className='task-tag'>{data.category}</h3><h4>{data.taskDate || 'No date'}</h4>
            </div>
        <h2>{data.taskTitle}</h2><p>{data.taskDescription}</p>
        <div className='task-actions'><button className='button-complete'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask