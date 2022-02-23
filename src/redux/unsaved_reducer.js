import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import axios from "../functions/axios";
import { DELETE, GET, POST } from "../functions/Methods";

export const counterSlice = createSlice({
    name: "unsaved_reducer",
    initialState: {
        // saqlanmaydi
        allData: { status: [{ id: 1, name: "1" }, { id: 0, name: "0" },] },
        mainData: [],
    },
    reducers: {
        setAllData: (state, { payload }) => {
            // 1 chi yozgan codimiz  state.allData = {...state.allData, ...payload};
            state.allData = { ...state.allData, ...payload };
        },
        setData: (state, { payload }) => {
            let arrayWithKeys = [];
            payload &&
                payload?.forEach((item, key) => {
                    arrayWithKeys.push({ ...item, key });
                });
            state.mainData = arrayWithKeys;
        },
    },
});

export const {
    setAllData,
    setData

} = counterSlice.actions;

export default counterSlice.reducer;
