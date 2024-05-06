import { Routes, Route } from "react-router-dom";

import JoinBlock from "../components/JoinBlock/JoinBlock";
import RequireAuth from "../hoc/RequireAuth";

import routeNames from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={routeNames.LOGIN} element={<JoinBlock />} />
      <Route
        path={routeNames.CHAT}
        element={
          <RequireAuth>
            <div>Здесь будет чат с логикой на сервере, которую сделаю я</div>
          </RequireAuth>
        }
      />

      <Route path={routeNames.NOT_FOUND} element={<div>404</div>} />
    </Routes>
  );
};

export default Router;
