import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        MovieResults:null,
        movieNames:null,

    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,MovieResults} =action.payload;
            state.movieNames=movieNames;
            state.MovieResults=MovieResults;
        }
    },

});
export const {toggleGptSearchView,addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;