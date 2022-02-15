import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import ClientTemplate from "../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from '../Templates/pageTemplates/ServiceTemplate'
import axios from "../functions/axios"


export const counterSlice = createSlice({
    name: "tabs_data",
    initialState: {
        Panes: [],
        currentPage: {},
        mainData: [],
        loading: false,
        tableItem: {},
        values: {},
        allData: {
            states: [
                {id:"22",name:"eee"},
                {id:"23",name:"gj"},
                {id:"24",name:"rty"},
                 
            ],
        }
    },
    reducers: {
        addNewTab: (state, { payload }) => {
            const bool = [...ServiceTemplate?.sections, ...ProgrammsTemplate?.tabs, ...ClientTemplate?.tabs]?.find((a) =>
                a?.path === payload?.path ? true : false
            );
            // console.log(bool);
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
        setCurrentPage: (state, { payload }) => {
            if (!payload?.sections) {
                // Bu sections bolgan tamplate larni currentPage ga o'zlashtirmaydi misol uchun ServicePage ni
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

            state.tableItem.map((el) => {
                axios(`${state.currentPage?.mainUrl}/${el.number}`, "DELETE")
            })

            const data = axios(state.currentPage?.mainUrl)

            data.then((res) => {
                state.mainData = res.data.data
            })


        },
        editTableItem: (state, { payload }) => {
            const www = state.currentPage.data.find(
                (data) => data.number === state.tableItem.number
            );
            if (www) {
                state.currentPage[www.number] = www;
            }
        },
        addValuesData: (state, { payload }) => {
            state.values = { ...state.values, ...payload };

        },
        setData: (state, { payload }) => {
            state.mainData = payload;
            // console.log(payload);
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        setAllData: (state, { payload }) => {
            state.allData = { ...state.allData, payload };
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
    setData,
    stopLoading,
    startLoading,
    addValuesData,
    setAllData
} = counterSlice.actions;

export default counterSlice.reducer;
