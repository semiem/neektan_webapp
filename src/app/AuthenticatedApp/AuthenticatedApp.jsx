import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../../screen/Landing/Landing";
import Details from "../../screen/Details/Details";

const AuthenticatedApp = ({ isExit }) => {
  return (
    <Routes>
      <Route path="/" index element={<Landing isExit={isExit} />} />
      <Route path="/Detail/:id" element={<Details />} />
      <Route path="/SignIn" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthenticatedApp;
