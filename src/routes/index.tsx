import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Expenses from "../pages/Expense";
import Group from "../pages/Home/Group";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Check" element={<Group />} />
        <Route path="/expense/:id" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
}
