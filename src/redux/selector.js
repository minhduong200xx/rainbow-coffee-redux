import { createSelector } from "@reduxjs/toolkit";
export const tableSelector = (state) => state.tables;
export const selectSelector = (state) => state.select.choiceTable;
export const showListSelector = (state) => state.select.showList;
export const showBillSelector = (state) => state.select.showBill;
export const fetchData = createSelector(
  tableSelector,
  selectSelector,
  (tables, select) => {
    return tables.find((item) => {
      if (item.id === select) {
        return item;
      }
    });
  }
);
