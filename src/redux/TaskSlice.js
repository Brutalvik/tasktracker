import { createSlice } from '@reduxjs/toolkit';

const TaskSlice = createSlice({
    name: "Task",
    initialState: [
        {
            id: Date.now(),
            title: "Task 1",
            completed: false
        },
        {
            id: Date.now(),
            title: "Task 2",
            completed: false
        },
        {
            id: Date.now(),
            title: "Task 3",
            completed: true
        }
    ],
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