import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Expenses from "../pages/expenses";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  );
}
