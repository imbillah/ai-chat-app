import React from "react";
import NewChat from "./newChat/NewChat";

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
