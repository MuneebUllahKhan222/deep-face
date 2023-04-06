import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id:null,
  modalState:false,
  pricingModalState:false,
  stripeModalState:false,
  purchaseAmount:null,
  purchaseCredits:null
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
    setPurchaseAmount: (state,action) => {  
      const {payload} = action 
      console.log('payload', payload)
      state.purchaseAmount = payload;
    },
    setPurchaseCredit: (state,action) => {   
      const {payload} = action 
      state.purchaseCredits = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUserData, setModalClose, setModalOpen, setPricingModalClose, setPricingModalOpen, setStripeModalClose, setStripeModalOpen, setPurchaseAmount, setPurchaseCredit } = userSlice.actions

export default userSlice.reducer