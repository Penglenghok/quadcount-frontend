import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login.tsx";
import Expenses from "../pages/expenses";
import Groups from "../pages/groups";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  );
}
