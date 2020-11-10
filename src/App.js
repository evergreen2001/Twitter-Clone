import React from "react";
import Sidebar from "../src/components/Sidebar/Index";
import Feed from "./components/Feed/Index";


import "./App.css";

function App() {
  return (
    <div className="app">
{/* sidenav */}
    <Sidebar />
    {/* news feed */}
    <Feed/>

    {/* widgets */}
    </div>
    
  );
}

export default App;
