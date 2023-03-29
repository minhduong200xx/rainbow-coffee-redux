export const addDrink = (data) => {
  return {
    type: "tables/addDrink",
    payload: data,
  };
};
export const increaseQty = (data) => {
  return {
    type: "tables/increaseQty",
    payload: data,
  };
};
export const decreaseQty = (data) => {
  return {
    type: "tables/decreaseQty",
    payload: data,
  };
};
export const deleteDrink = (data) => {
  return {
    type: "tables/deleteDrink",
    payload: data,
  };
};
export const choiceTable = (id) => {
  return {
    type: "select/choiceTable",
    payload: id,
  };
};
export const setNotEmpty = (id) => {
  return {
    type: "tables/setNotEmpty",
    payload: id,
  };
};
export const show = (show) => {
  return {
    type: "select/show",
    payload: show,
  };
};
export const clearData = (id) => {
  return {
    type: "tables/clearData",
    payload: id,
  };
};
export const getDataFromStorage = (data) => {
  return {
    type: "tables/clearData",
    payload: data,
  };
};
