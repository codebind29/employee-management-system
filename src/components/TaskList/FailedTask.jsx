import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='task-card failed'>
            <div className='task-meta'><h3 className='task-tag'>{data.category}</h3><h4>{data.taskDate || 'No date'}</h4>
            </div>
            <h2>{data.taskTitle}</h2><p>{data.taskDescription}</p>
            <div className='task-actions'><button className='button-fail'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask