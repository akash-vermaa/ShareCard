import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        name: "Guest",
        isLoggedIn: false
    },
    reducers: {
        login: (state, action)=> {
            if( state.userId === action.payload.userId){
                state.isLoggedIn = true
            }
        }
    }
})

export const { login } = userSlice.actions
export default userSlice.reducer