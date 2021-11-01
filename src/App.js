import logo from "./logo.svg";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }
  const user = "Beatriz";
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          login={login}
          logout={logout}
        />
      </header>
    </div>
  );
}

export default App;
