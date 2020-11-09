import React from "react";
import "../Sidebar/sidebar.css";
import SidebarOption from "../Sidebar/SidebarOptions";

//icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption Icon={HomeIcon} active text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messgae" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="Options" />
    </div>
  );
};

export default Sidebar;
