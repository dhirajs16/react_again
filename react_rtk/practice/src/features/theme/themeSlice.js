import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light',
    },
    reducers: {
        toggle: (state) => {
            state.value == 'light'? state.value = 'dark': state.value = 'light' 
        }
    }
})

export default themeSlice.reducer
export const { toggle } = themeSlice.actions