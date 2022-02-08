import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import {AllServiceChildPages} from '../pageTemplates/index';
export const counterSlice = createSlice({
  name: "tabs_data",
  initialState: {
    Panes: [],
    currentPage: {},
    tableItem: {},
  },
  reducers: {
    uploadAllData: (state, { payload }) => {
      state.Panes = payload.tabs_reducer.Panes?payload.tabs_reducer.Panes:[];
    },
    addNewTab: (state, {payload}) => {
      state.Panes = _.uniqBy([...state?.Panes, payload], "path");
    },
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    changePanes: (state, { payload }) => {
      state.Panes.splice(payload, 1);
    },
    toggleModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    changeCurrentPageData: (state, { payload }) => {
      state.currentPage.data = payload;
    },
    setTableItem: (state, { payload }) => {
      state.tableItem = payload;
    },
    removeTableItem: (state, { payload }) => {
      state.currentPage.data = state.currentPage?.data?.filter(
        (el) => el.number != payload.number
      );
    },
    editTableItem: (state, { payload }) => {
      const www = state.currentPage.data.find(
        (data) => data.number === state.tableItem.number
      );

      if (www) {
        state.currentPage[www.number] = www;
      }
    },
  },
});

export const {
  addNewTab,
  removeTab,
  toggleModal,
  setCurrentPage,
  changeCurrentPageData,
  changePanes,
  setTableItem,
  removeTableItem,
  editTableItem,
  uploadAllData,
} = counterSlice.actions;

export default counterSlice.reducer;
