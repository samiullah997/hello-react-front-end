import { createAsyncThunk } from "@reduxjs/toolkit";

const GREETINGS = "GREETINGS";

export const showGreetings = createAsyncThunk( GREETINGS, async (args, {dispatch}) => {

  try {
    const res = await fetch("http://localhost:3001/api/v1/greetings");
    const data = await res.json();
    dispatch({ type: GREETINGS, greetings: data[0] });
  } catch (err) {
    console.log(err);
  }
});

const greetingReducer = (state = [], action) => {
    switch (action.type) {
      case GREETINGS:
        return action.greetings
      default:
        return state;
    }
  };
  
  export default greetingReducer;