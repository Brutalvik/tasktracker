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
        }
    }
})

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;