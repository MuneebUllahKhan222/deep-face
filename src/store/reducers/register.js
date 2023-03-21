import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  email: "",
  _id:''
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterUserEmail: (state, action) => {
      const { payload } = action;
      if (payload) {
        state.email = payload.email;
      state._id = payload._id;
      }
      
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { setRegisterUserEmail } = registerSlice.actions;

export default registerSlice.reducer;
