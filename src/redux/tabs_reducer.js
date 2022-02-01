import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  Panes: [],
  currentPage:{},
};


export const counterSlice = createSlice({
  name: "Bottom Tabs",
  initialState,
  
  reducers: {

    addNewTab: (state, action) => {
      const isExsist = state?.Panes.find(obj => obj.path == action.payload.path)

      if (!isExsist) {
        state.Panes.push(action.payload)
      }
    },
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    toggleModal: (state, {payload}) => {
      state.currentPage.isOpenModal = payload;
    },
    setCurrentPage: (state, {payload}) => {
      state.currentPage = payload
    }

  },
});

// Action creators are generated for each case reducer function

export const { addNewTab, removeTab, toggleModal ,setCurrentPage} = counterSlice.actions;

export default counterSlice.reducer;
