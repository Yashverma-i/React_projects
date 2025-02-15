// eslint-disable-next-line react/prop-types
const Board = ({task, handleDelete}) => {
  return (
    <div className='task'>
      {task}
      <button className='delete' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Board;
