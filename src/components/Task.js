import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task:', task.description);
    if (newDescription !== null) {
      dispatch(editTask({ id: task.id, description: newDescription, isDone: task.isDone }));
    }
  };

  return (
    <div className="task-item">
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
