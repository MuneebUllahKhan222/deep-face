import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { payload } = action;
      state.email = payload.email;
      state.id = payload._id;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUserData } = userSlice.actions

export default userSlice.reducer