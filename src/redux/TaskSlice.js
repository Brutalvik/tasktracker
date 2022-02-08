import { createSlice } from '@reduxjs/toolkit';

const TaskSlice = createSlice({
    name: "Task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTask);
        },
        toggleCompletedTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id)
        },
        editTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].title = action.payload.title;
        }   
    }
})

export const { addTask, toggleCompletedTask, deleteTask, editTask } = TaskSlice.actions;
export default TaskSlice.reducer;