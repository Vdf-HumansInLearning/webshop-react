import { Outlet } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

import { motion } from "framer-motion";

const useAuth = () => {
  let localStorageObj = localStorage.getItem("user_id");
  const user = { loggedIn: localStorageObj ? true : false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Outlet />
    </motion.div>
  ) : (
    <NotFoundPage />
  );
};

export default ProtectedRoutes;
