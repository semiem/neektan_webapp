import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../../screen/Log/SignIn/SignIn";

const UnAuthenticatedApp = ({ isLogin }) => {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/SignIn" />} />
      <Route path="/SignIn" element={<SignIn isLogin={isLogin} />} />
      <Route path="*" element={<Navigate to="/SignIn" />} />
    </Routes>
  );
};

export default UnAuthenticatedApp;
