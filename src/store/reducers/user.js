import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id:null,
  modalState:false,
  pricingModalState:false,
  stripeModalState:false,
  unsubscribeModalState:false,
  lockerAdModalState:false,
  lockerPricingModalState:false,
  purchaseAmount:null,
  purchaseCredits:null,
  purchaseSubscriptionAmount:null,
  purchaseSubscriptionMonth:null,
  subscriptionFlow:false,
  inProgress:false,
  subscriptionId: null
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
    setLockerAdModalClose: (state) => {   
      state.lockerAdModalState = false;
    },
    setLockerAdModalOpen: (state) => {   
      state.lockerAdModalState = true;
    },
    setLockerPricingModalClose: (state) => {   
      state.lockerPricingModalState= false;
    },
    setLockerPricingModalOpen: (state) => {   
      state.lockerPricingModalState = true;
    },
    setUnsubcribeModalOpen: (state) => {   
      state.unsubscribeModalState = true;
    },
    setUnsubcribeModalClose: (state) => {   
      state.unsubscribeModalState = false;
    },
    setInProgress: (state,action) => {   
      const {payload} = action 
      state.inProgress = payload;
    },
    setPurchaseAmount: (state,action) => {  
      const {payload} = action 
      state.purchaseAmount = payload;
    },
    setPurchaseCredit: (state,action) => {   
      const {payload} = action 
      state.purchaseCredits = payload;
    },
    setPurchaseSubAmount: (state,action) => {  
      const {payload} = action 
      state.purchaseSubscriptionAmount = payload;
    },
    setPurchaseSubMonth: (state,action) => {   
      const {payload} = action 
      state.purchaseSubscriptionMonth = payload;
    },
    setSubcriptionFlow:(state) => {
      state.subscriptionFlow = true;
    },
    setSubscriptionId: (state,action) => {  
      const {payload} = action 
      state.subscriptionId = payload;
    },
    resetFlows:(state) => {
      state.purchaseAmount=null;
      state.purchaseCredits=null;
      state.purchaseSubscriptionAmount=null;
      state.purchaseSubscriptionMonth=null;
      state.subscriptionFlow=false;
      state.setSubscriptionId= null;
    },
    resetAllModals: (state) => {
      state.stripeModalState =false;
      state.modalState = false;
      state.pricingModalState = false;
      state.lockerAdModalState = false;
      state.lockerPricingModalState = false;
    },
    resetAll: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const {setUserData, setModalClose, setModalOpen, setPricingModalClose, setPricingModalOpen, setStripeModalClose, setStripeModalOpen, setPurchaseAmount, setPurchaseCredit, setLockerAdModalClose, setLockerAdModalOpen, setPurchaseSubAmount, setPurchaseSubMonth, resetFlows, setSubcriptionFlow, setLockerPricingModalClose, setLockerPricingModalOpen, resetAll, resetAllModals, setInProgress, setUnsubcribeModalClose, setUnsubcribeModalOpen, setSubscriptionId } = userSlice.actions

export default userSlice.reducer