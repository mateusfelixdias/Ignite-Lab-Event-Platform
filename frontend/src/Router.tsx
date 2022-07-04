import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Subscribe /> } />
      <Route path="/event" element={ true ? <Main /> : <Navigate to={'/'} replace /> } />
      <Route path="/event/lesson/:slug" element={ <Main /> } />
    </Routes>
  );
};