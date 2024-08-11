import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const existingTask = state.find(task => task.id === id);
      if (existingTask) {
        existingTask.description = description;
        existingTask.isDone = isDone;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const existingTask = state.find(task => task.id === action.payload);
      if (existingTask) {
        existingTask.isDone = !existingTask.isDone;
      }
    }
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
