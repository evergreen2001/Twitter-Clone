import React from "react";
import "../Sidebar/sidebaroptions.css";


//icons

function SidebarOptions({ text, Icon , active }) {
  return (
    <div className={`sidebaroption ${active && 'sideabarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
