import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../../screen/Landing/Landing";
import Details from "../../screen/Details/Details";
import Explore from "../../screen/Explore/Explore";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import PerformanceTest from "../../screen/Landing/PerformanceTest";
import Analytics from "../../screen/Landing/Analytics";
import Settings from "../../screen/Landing/Settings";

const AuthenticatedApp = ({ isExit }) => {
  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route path="/" index element={<Landing isExit={isExit} />} />
        <Route path="/PerformanceTest" element={<PerformanceTest />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
      <Route path="/Detail/:id" element={<Details />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/SignIn" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthenticatedApp;
