import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/tasksSlice'; 

const store = configureStore({
  reducer: rootReducer,

});

export default store;
