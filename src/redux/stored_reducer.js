import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import ClientTemplate from "../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from "../Templates/pageTemplates/ServiceTemplate";
import axios from "../functions/axios";
import { POST } from "../functions/Methods";
export const counterSlice = createSlice({
  name: "tabs_data",
  initialState: {
    values: {},
    loading: false,
    tableItem: [],
    Panes: [],
    currentPage: {},
    innerModal: "",
    filteredMainData: [],
    serachInputValue: "",
    currentLocation: [],
    currentLocationIsOpen: false,
    bottomActiveKey: null,
  },
  reducers: {
    removeTab: (state, action) => {
      state.Panes.splice(action.payload, 1);
    },
    setCurrentPage: (state, { payload }) => {
      if (!payload?.sections) {
        const newCurrentPage = {
          ...state.currentPage,
          tableItem: [...state.tableItem],
          values: { ...state.values },
        };

        if (
          newCurrentPage?.path &&
          newCurrentPage?.text !== "Mijozlar Ro'yxati"
        ) {
          const find = state.Panes.find(
            (a) => a.path === state.currentPage.path
          );
          if (find) {
            state.Panes = state.Panes.map((item) =>
              item.path === state.currentPage.path ? newCurrentPage : item
            );
          } else {
            state.Panes = _.uniqBy([...state?.Panes, newCurrentPage], "path");
          }
        }

        state.values = {};
        state.tableItem = [];

        state.Panes.forEach((page) => {
          if (page.path === payload.path) {
            state.values = page.values;
            state.tableItem = page.tableItem;
          }
        });

        state.currentPage = payload;
      }
    },
    toggleModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    toggleInnerModal: (state, { payload }) => {
      state.innerModal.isOpenModal = payload;
      // state.innerModal = ""
    },
    changeCurrentPageData: (state, { payload }) => {
      if (payload) {
        state.currentPage.data = payload;
      }
    },
    setTableItem: (state, { payload }) => {
      state.tableItem = payload;
      state.currentPage.tableItem = payload;
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
    clearPanes: (state) => {
      state.Panes = [];
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
    setBottomActiveKey: (state, { payload }) => {
      state.bottomActiveKey = payload;
    },
  },
});

export const {
  removeTab,
  toggleModal,
  setCurrentPage,
  changeCurrentPageData,
  changePanes,
  setTableItem,
  removeTableItem,
  editTableItem,
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
  setBottomActiveKey,
} = counterSlice.actions;

export default counterSlice.reducer;
