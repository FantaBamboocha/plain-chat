import { Navigate } from "react-router-dom";

import { useAuth } from "../hook/useAuth";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
