import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos: [],
    update: {},
    completed: [],

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        add: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload.text,
                priority:action.payload.priority,
                createdAt:action.payload.time
            })
        },
        remove: (state, action) => {
            console.log(action.payload)
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        update: (state, action) => {
            state.todos.filter((todo) => {
                if (todo.id == action.payload) {
                    state.update= {
                        id:todo.id,
                        text:todo.text
                    }
                }
            })
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        complete:(state, action) => {
            state.completed.push({...action.payload,completedAt:new Date().toLocaleTimeString()})
            state.todos = state.todos.filter((todo) => todo.id != action.payload.id)
            // console.log(state.completed[0],"the completed")
        },
    }
})


export default counterSlice.reducer
export const { add, remove, update,complete } = counterSlice.actions

