import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalState",
  initialState: {
    modalState: false,
  },
  reducers: {
    enableModal(state) {
      state.modalState = true;
    },
    disableModal(state) {
      state.modalState = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
