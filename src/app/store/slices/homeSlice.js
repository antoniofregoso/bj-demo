import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState:{
        context:{
            lang:'es',
            theme:'light'
        },
        journey:'attention',
        stage:'idle'

    },
    reducers:{
        setLanguaje:(state, action) => {
            state.context.lang = action.payload;
        },
        setTheme:(state, action) => {
            state.context.theme = action.payload;
        }
    }
});

export const { setLanguaje, setTheme } =  homeSlice.actions;
export default homeSlice.reducer;
