import AddIcon from '@mui/icons-material/Add';
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      {/* Education Option */}
      <div className="sidebarOption">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/" // Provide a valid base64 string for the Education image
          alt="Education"
        />
        <p>Education</p>
      </div>

      {/* Discover Spaces Option */}
      <div className="sidebarOption">
        <AddIcon />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
