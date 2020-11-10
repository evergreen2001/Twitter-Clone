import React from "react";
import Sidebar from "../src/components/Sidebar/Index";
import Feed from "./components/Feed/Index";
import Widgets from './components/Widgets/Index'



import "./App.css";

function App() {
  return (
    <div className="app">
{/* sidenav */}
    <Sidebar />
    {/* news feed */}
    <Feed/>

    {/* widgets */}

    <Widgets/>
    </div>
    
  );
}

export default App;
