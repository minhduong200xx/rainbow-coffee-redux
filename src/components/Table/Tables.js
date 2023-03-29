import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choiceTable } from "../../redux/actions";
import { tableSelector } from "../../redux/selector";

const Table = ({ id, status }) => {
  const dispatch = useDispatch();
  const tableData = useSelector(tableSelector);
  const showTable = (e) => {
    dispatch(choiceTable(parseInt(e.target.value)));
  };
  return (
    <button
      value={id}
      className={`items-center flex justify-center h-16 w-20 rounded-2xl hover:bg-yellow-400 text-2xl font-bold text-white ${status} `}
      onClick={showTable}
    >
      {id}
    </button>
  );
};

export default Table;
