import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: "select",
  initialState: { choiceTable: 1, showList: false, showBill: false },
  reducers: {
    choiceTable(state, action) {
      state.choiceTable = action.payload;
      state.showBill = true;
      state.showList = true;
    },
    show(state, action) {
      state.showList = action.payload.list;
      state.showBill = action.payload.bill;
    },
  },
});
export default selectSlice.reducer;
