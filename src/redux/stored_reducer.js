import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import ClientTemplate from "../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from "../Templates/pageTemplates/ServiceTemplate";
import axios from "../functions/axios";
import { DELETE, GET, POST } from "../functions/Methods";

export const counterSlice = createSlice({
  name: "tabs_data",
  initialState: {
    // saqlanadi
    values: {},
    loading: false,
    tableItem: [],
    values: {},
    Panes: [],
    currentPage: {},
    innerModal: "",
    filteredMainData: [],
    serachInputValue: "",
    currentLocation: [],
    currentLocationIsOpen: false,
  },
  reducers: {
    addNewTab: (state, { payload }) => {
      const bool = [
        ...ServiceTemplate?.sections,
        ...ProgrammsTemplate?.tabs,
        ...ClientTemplate?.tabs,
      ]?.find((a) => (a?.path === payload?.path ? true : false));
      if (bool) {
        state.Panes = _.uniqBy([...state?.Panes, payload], "path");
      }
    },
    clearPanes: (state, { payload }) => {
      state.Panes = payload;
    },
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    changePanesModal: (s, { payload }) => {
      s.Panes = payload.panes;
      s.currentPage = payload.currentPage;
    },
    changePanes: (state, { payload }) => {
      state.Panes.splice(payload, 1);
    },
    toggleModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    toggleInnerModal: (state, { payload }) => {
      state.innerModal.isOpenModal = payload;
      // state.innerModal = ""
    },
    setCurrentPage: (state, { payload }) => {
      if (!payload?.sections) {
        state.currentPage = payload;
      } else {
        state.currentPage = {};
      }
    },
    changeCurrentPageData: (state, { payload }) => {
      if (payload) {
        state.currentPage.data = payload;
      }
    },
    setTableItem: (state, { payload }) => {
      state.tableItem = payload;
    },
    removeTableItem: (state, { payload }) => {
      let ids = state.tableItem.map((row) => {
        return row.id;
      });
      return POST(state.currentPage?.mainUrl + "/delete", ids);
    },
    editTableItem: (state, { payload }) => {
      const www = state.currentPage.data.find(
        (data) => data.number === state.tableItem.number
      );
      if (www) {
        state.currentPage[www.number] = www;
      }
    },
    setValues: (state, { payload }) => {
      console.log(payload);
      state.values = payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setFilteredMainData: (state, { payload }) => {
      state.filteredMainData = payload;
    },
    setSearchInputValue: (state, { payload }) => {
      state.serachInputValue = payload;
    },
    setInnerModel: (state, { payload }) => {
      state.innerModal = payload;
    },
    setOffInnerModel: (state, { payload }) => {
      state.innerModal = "";
    },
    setCurrentLocation: (s, { payload }) => {
      s.currentLocation = payload;
    },
    setCurrentLocationIsOpen: (s, _) => {
      s.currentLocationIsOpen = !s.currentLocationIsOpen;
    },

    setValuesKey: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
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
  changePanesModal,
  toggleTableType,
  clearPanes,
  stopLoading,
  startLoading,
  setSearchInputValue,
  setValues,
  setInnerModel,
  toggleInnerModal,
  setFilteredMainData,
  setOffInnerModel,
  setCurrentLocation,
  setCurrentLocationIsOpen,
  setValuesKey,
} = counterSlice.actions;

export default counterSlice.reducer;
