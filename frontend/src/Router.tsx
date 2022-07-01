import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Main />} />
        <Route path="/event/lesson/:slug" element={<Main />} />
      </Routes>
    </HashRouter>
  );
};