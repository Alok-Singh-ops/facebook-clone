import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.authReducer);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
