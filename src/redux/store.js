import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectSlice from "../components/Table/selectSlice";
import tableSlice from "../components/Table/tableSlice";
const reducer = combineReducers({
  tables: tableSlice,
  select: selectSlice,
});
const store = configureStore({
  reducer,
});
export default store;
