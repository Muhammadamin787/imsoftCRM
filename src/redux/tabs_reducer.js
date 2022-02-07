import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';


const initialState = {
  Panes:  [], 
  currentPage: {},
};


export const counterSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {

    addNewTab: (state, action) => {
      // const isExsist = state?.Panes.find(obj => obj.path == action.payload.path);

      // const newPanes = [...state?.Panes, action.payload];

      state.Panes = _.uniqBy([...state?.Panes, action.payload], 'path');

      // state.Panes = arr;

      // if (!isExsist) {
      //   state.Panes.push(action.payload)
      // }

    },
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    changePanes: (state, {payload}) => {
      state.Panes.splice(payload, 1);
    },
    toggleModal: (state, {payload}) => {
      state.currentPage.isOpenModal = payload;
    },
    setCurrentPage: (state, {payload}) => {
      state.currentPage = payload
    },
    changeCurrentPageData: (state, {payload}) =>{
      state.currentPage.data = payload;
    },
  },
}

);

// Action creators are generated for each case reducer function

export const { addNewTab, removeTab, toggleModal ,setCurrentPage, changeCurrentPageData, changePanes} = counterSlice.actions;

export default counterSlice.reducer;
