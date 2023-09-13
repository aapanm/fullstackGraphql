import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const localvalue = localStorage.getItem("user");
  const user = JSON.parse(localvalue);
  return user ? <Outlet /> : <Navigate to={"/auth"} replace />;
}
