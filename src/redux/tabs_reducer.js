import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash';


// const initialState = {
//   Panes:  [], 
//   currentPage: {},
// };


export const counterSlice = createSlice({
        name: "tabs_data",
        initialState: {
            Panes: [],
            currentPage: {},
            tableItem: {},
        },
        reducers: {

            addNewTab: (state, action) => {
                state.Panes = _.uniqBy([...state?.Panes, action.payload], 'path');
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
                if (!payload?.sections) {
                    // Bu sections bolgan tamplate larni currentPage ga o'zlashtirmaydi misol uchun ServicePage ni
                    state.currentPage = payload
                } else {
                    state.currentPage = {}
                }
            },
            changeCurrentPageData: (state, {payload}) => {
                if (state.currentPage) {
                    state.currentPage.data = payload;
                }
            },
            setTableItem: (state, {payload}) => {
                state.tableItem = payload;
                console.log(state.tableItem);
            },
            removeTableItem: (state, {payload}) => {
                state.currentPage.data = state.currentPage?.data?.filter(el => el.number != payload.number)
            },
            editTableItem: (state, {payload}) => {
                const www = state.currentPage.data.find(data => data.number === state.tableItem.number);

                console.log(www);
                console.log(state.currentPage);
                if (www) {
                    state.currentPage[www.number] = www
                }

                console.log(state.currentPage);
            }
        },

    }
);


export const {
    addNewTab,
    removeTab,
    toggleModal,
    setCurrentPage,
    changeCurrentPageData,
    changePanes,
    setTableItem,
    removeTableItem,
    editTableItem
} = counterSlice.actions;

export default counterSlice.reducer;

