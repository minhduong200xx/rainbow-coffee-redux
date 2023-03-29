import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrinksList from "./components/DrinkList/DrinksList";
import Header from "./components/Header";
import TableList from "./components/Table/TableList";
import Table from "./components/Table/Tables";
import { getDataFromStorage } from "./redux/actions";
import { tableSelector } from "./redux/selector";
function App() {
  const table = useSelector(tableSelector);
  useEffect(() => {
    localStorage.setItem("tables", JSON.stringify(table));
  }, [table]);
  return (
    <div className="bg-slate-50 h-full w-full">
      <Header />
      <TableList />
      <DrinksList />
    </div>
  );
}

export default App;
