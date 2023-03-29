import { createSlice } from "@reduxjs/toolkit";
var initialState = [];
const initState = Array(25)
  .fill()
  .map((item, index) => ({
    id: index + 1,
    drink: [],
    total: 0,
    empty: true,
  }));
const storage = JSON.parse(localStorage.getItem("tables"));
storage ? (initialState = storage) : (initialState = initState);
const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    getDataFromStorage(state, action) {
      state = action.payload;
    },
    clearData(state, action) {
      state.map((item) => {
        if (item.id === action.payload) {
          item.drink = [];
          item.total = 0;
          item.empty = true;
        }
      });
    },
    setNotEmpty(state, action) {
      state.map((item) => {
        if (item.id === action.payload) {
          if (item.total === 0) {
            item.empty = true;
          } else item.empty = false;
        }
      });
    },
    addDrink: (state, action) => {
      state.filter((item) => {
        if (item.id === action.payload.table) {
          if (item.drink.length === 0) {
            item.drink.push({
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              quantity: 1,
            });
            item.total += action.payload.price;
          } else {
            item.drink.map((drink) => {
              if (drink.name === action.payload.name) {
                drink.quantity += 1;
              }
            });
            if (
              !item.drink.find((drink) => drink.name === action.payload.name)
            ) {
              item.drink.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 1,
              });
            }
            item.total += action.payload.price;
          }
        }
      });
    },
    increaseQty(state, action) {
      state.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink.map((drink) => {
            if (drink.name === action.payload.name) {
              drink.quantity += 1;
            }
          });
          item.total += action.payload.price;
        }
      });
    },
    decreaseQty(state, action) {
      state.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink.map((drin) => {
            if (drin.name === action.payload.name) {
              if (drin.quantity - 1 < 1) {
                item.drink = item.drink.filter(
                  (add) => add.name !== action.payload.name
                );
              } else {
                drin.quantity -= 1;
              }
            }
          });
          item.total -= action.payload.price;
        }
      });
    },
    deleteDrink(state, action) {
      state.filter((item) => {
        if (item.id === action.payload.id) {
          item.drink = item.drink.filter(
            (drink) => drink.name !== action.payload.name
          );
          item.total -= action.payload.price * action.payload.quantity;
        }
      });
    },
  },
});
export const { addDrink } = tableSlice.actions;
export default tableSlice.reducer;
