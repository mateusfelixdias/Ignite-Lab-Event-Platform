import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Main } from "./components/Main";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key={1} element={<Subscribe />} />
        <Route path="/event" key={2} element={<Main />} />
        <Route path="/event/lesson/:slug" key={3} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};