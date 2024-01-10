import React from "react";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Login setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;