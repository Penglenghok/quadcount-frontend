import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";



export default function AuthRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
  