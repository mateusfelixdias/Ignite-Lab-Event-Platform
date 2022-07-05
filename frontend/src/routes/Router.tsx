import { Main } from "../components/Main";
import { Route, Routes } from "react-router-dom";
import { Subscribe } from "../pages/Subscribe";
import { PrivateRoute } from "./PrivateRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Subscribe /> } />
      <Route path="/event" element={ <PrivateRoute> <Main /> </PrivateRoute> } /> 
      <Route path="/event/lesson/:slug" element={ <PrivateRoute> <Main /> </PrivateRoute>  } />
    </Routes>
  );
};