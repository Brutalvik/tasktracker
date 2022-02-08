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
        }
    }
})

export const { addTask, toggleCompletedTask } = TaskSlice.actions;
export default TaskSlice.reducer;