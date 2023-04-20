import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../../screen/Landing/Landing";
import Details from "../../screen/Details/Details";
import Explore from "../../screen/Explore/Explore";
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import PerformanceTest from "../../screen/Landing/PerformanceTest";
import Analytics from "../../screen/Landing/Analytics";
import Settings from "../../screen/Landing/Settings";
import MyProfile from "../../screen/Others/MyProfile";
import Intro from "../../screen/Log/Intro/Intro";

const AuthenticatedApp = ({ isExit }) => {
  return (
    <Routes>
      <Route element={<PanelLayout />}>
        <Route path="/Home" index element={<Landing isExit={isExit} />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/PerformanceTest" element={<PerformanceTest />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
      <Route path="/Detail/:id" element={<Details />} />
      <Route path="/Explore" element={<Explore />} />
      <Route path="/SignIn" element={<Navigate to="/" />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Intro" element={<Intro />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthenticatedApp;
