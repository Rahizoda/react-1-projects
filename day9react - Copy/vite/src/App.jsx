import React from "react";
import Sync from "./Component/sync";
import Async from "./Component/Async";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen p-4 text-center">
      <Async />
    </div>
  );
};
export default App;
