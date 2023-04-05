import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id:null,
  modalState:false,
  pricingModalState:false,
  stripeModalState:false
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
    setModalOpen: (state) => {   
      state.modalState = true;
    },
    setModalClose: (state) => {   
      state.modalState = false;
    },
    setPricingModalOpen: (state) => {   
      state.pricingModalState = true;
    },
    setPricingModalClose: (state) => {   
      state.pricingModalState = false;
    },
    setStripeModalOpen: (state) => {   
      state.stripeModalState = true;
    },
    setStripeModalClose: (state) => {   
      state.stripeModalState = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUserData, setModalClose, setModalOpen, setPricingModalClose, setPricingModalOpen, setStripeModalClose, setStripeModalOpen } = userSlice.actions

export default userSlice.reducer