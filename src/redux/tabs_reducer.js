import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Panes: [
    { title: "Tab 1", content: "Content of Tab Pane 1", key: 1 },
    { title: "Tab 2", content: "Content of Tab Pane 2", key: 2 },
    { title: "Tab 3", content: "Content of Tab Pane 3", key: 3 },
    { title: "Tab 4", content: "Content of Tab Pane 4", key: 4 },
    { title: "Tab 5", content: "Content of Tab Pane 5", key: 5 },
    { title: "Tab 6", content: "Content of Tab Pane 6", key: 6 },
    { title: "Tab 7", content: "Content of Tab Pane 7", key: 7 },
    { title: "Tab 8", content: "Content of Tab Pane 8", key: 8 },
  ],
};

export const counterSlice = createSlice({
  name: "Bottom Tabs",
  initialState,
  reducers: {
    addNewTab: (state, action) => {
      state.Panes.push(action.payload)
    },
    removeTab: (state, action) => {
      state.Panes = state.Panes.filter((obj) => obj.key != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function

export const { addNewTab, removeTab } = counterSlice.actions;

export default counterSlice.reducer;
