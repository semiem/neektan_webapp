import { useEffect, useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp/UnAuthenticatedApp";
import { getItem } from "../core/services/LocalStorage";
import Welcome from "./Welcome";

const App = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  const [loggedIn, setLoggedIn] = useState(getItem("token") !== false);

  useEffect(() => {
    setTimeout(() => {
      setIsWelcome(false);
    }, 6000);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleExit = () => {
    setLoggedIn(false);
  };

  return isWelcome ? (
    <Welcome />
  )
   : loggedIn ? (
    <AuthenticatedApp isExit={handleExit} />
  ) : (
    <UnAuthenticatedApp isLogin={handleLogin} />
  );
};

export default App;
