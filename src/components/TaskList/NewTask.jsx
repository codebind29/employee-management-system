const NewTask = ({data}) => {
    return (
        <div className='task-card new'>
            <div className='task-meta'>
                <h3 className='task-tag'>{data.category}</h3>
                <h4>{data.taskDate || 'No date'}</h4>
            </div>
            <h2>{data.taskTitle}</h2><p>{data.taskDescription}</p>
            <div className='task-actions'>
                <button className='button-accept'>Accept task</button>
            </div>
        </div>
    )
}

export default NewTask