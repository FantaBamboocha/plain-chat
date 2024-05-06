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
            <div>KUKU</div>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Router;
