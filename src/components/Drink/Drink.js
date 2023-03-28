import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDrink, setNotEmpty } from "../../redux/actions";
import { v4 } from "uuid";
import tableSlice from "../Table/tableSlice";
import { fetchData, selectSelector } from "../../redux/selector";
import currency from "currency.js";

const Drink = ({ imgUrl, name, price }) => {
  const dispatch = useDispatch();
  const [drinkName, setDrinkName] = useState("");
  const [drinkPrice, setDrinkPrice] = useState("");
  const tableData = useSelector(fetchData);
  const currentTable = useSelector(selectSelector);
  const handleAddDrink = () => {
    dispatch(
      addDrink({
        id: v4(),
        name: name,
        price: price,
        quantity: 1,
        table: currentTable,
      })
    );
  };
  return (
    <div
      className="h-16 items-center w-auto bg-slate-100 rounded-md flex px-2 shadow-xl hover:bg-yellow-300 hover:-translate-y-[2px]"
      onClick={handleAddDrink}
    >
      <img
        src={imgUrl}
        alt=""
        className="h-12 w-12 object-contain overflow-clip rounded-lg"
      />
      <a className="flex flex-col gap-2 justify-start items-start ml-2">
        <h3 className="w-fit h-5 font-bold text-xs text-start pb-2 overflow-hidden text-ellipsis">
          {name}
        </h3>
        <span className="text-xs bottom-0 font-normal">
          {currency(price * 1000, {
            symbol: "",
            separator: ",",
            decimal: ".",
            precision: 0,
          }).format()}
          <sup className="top-0 underline">đ</sup>
        </span>
      </a>
    </div>
  );
};

export default Drink;
