import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";


const initialState = {
  Panes: [],
};

// const navigate = useNavigate();


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
  },
});

// Action creators are generated for each case reducer function

export const { addNewTab, removeTab } = counterSlice.actions;

export default counterSlice.reducer;
