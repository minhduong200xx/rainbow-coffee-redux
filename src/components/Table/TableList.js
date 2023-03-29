import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { tableSelector } from "../../redux/selector";
import Table from "./Tables";

const TableList = (show) => {
  var data = useSelector(tableSelector);
  const tableData = data;

  return (
    <div className="w-fit mx-auto bg-emerald-500 h-fit py-10 px-10 my-4 rounded-2xl shadow-2xl">
      <h3 className="text-white text-2xl font-bold uppercase mx-auto w-fit py-2">
        Chọn bàn
      </h3>
      <div className="grid grid-cols-5 gap-10 gap-y-10 mx-auto mt-4 cursor-pointer w-full">
        {tableData.map((item, index) => (
          <Table
            key={index}
            id={index + 1}
            status={item.empty ? "bg-green-900" : "bg-red-600"}
          />
        ))}
      </div>
    </div>
  );
};

export default TableList;
