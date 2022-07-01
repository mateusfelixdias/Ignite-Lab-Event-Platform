import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Subscribe />} />
        <Route path="/event" element={<Main />} />
        <Route path="/event/lesson/:slug" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};