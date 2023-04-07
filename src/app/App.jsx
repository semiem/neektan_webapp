import { useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp/UnAuthenticatedApp";
import { getItem } from "../core/services/LocalStorage";

const App = () => {
  const [logging, setLogging] = useState(getItem("token") !== false);
  const handleLogin = () => {
    setLogging(true);
  };

  const handleExit = () => {
    setLogging(false);
  };

  return logging ? (
    <AuthenticatedApp isExit={handleExit} />
  ) : (
    <UnAuthenticatedApp isLogin={handleLogin} />
  );
};

export default App;
