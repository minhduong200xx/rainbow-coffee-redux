import { useState } from "react";
import DrinksList from "./components/DrinkList/DrinksList";
import Header from "./components/Header";
import TableList from "./components/Table/TableList";
import Table from "./components/Table/Tables";
function App() {
  return (
    <div className="bg-slate-50 h-[100vh] w-full">
      <Header />
      <TableList />
      <DrinksList />
    </div>
  );
}

export default App;
