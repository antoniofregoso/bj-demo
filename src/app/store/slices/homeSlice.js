import { createSlice } from '@reduxjs/toolkit';

function getTheme(){
    if (isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark'
    }else{
        return 'light'
    }
}


const homeSlice = createSlice({
    name: 'home',
    initialState:{
        context:{
            lang:'es',
            theme: getTheme()
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
