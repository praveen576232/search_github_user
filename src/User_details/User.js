import "./User.css";
import React from "react";
import { Avatar } from "@material-ui/core";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import WebTwoToneIcon from "@material-ui/icons/WebTwoTone";
import { useStateValue } from "../StateProvider/StateProvider";
function User() {
  const [{ user }] = useStateValue();
  return (
    <div className="user">
      <div className="div_top">
        <p>Users</p>
      </div>
      <div className="divuser">
        <div className="github_user_top">
          <div className="github_profile">
            <Avatar
              alt={user?.name}
              className="github_profile_avatar"
              src={user?.avatar_url}
            ></Avatar>
            <div className="github_profile_name">
              <h3>{user?.name}</h3>
              <p>{user?.twitter_username && `@${user?.twitter_username}`}</p>
            </div>
          </div>
          <a href={`${user?.html_url}`}>Follow</a>
        </div>
        <div className="github_user_bottom">
          <p>{user?.bio}</p>
          <div className="github_user_bottom_option">
            <BusinessTwoToneIcon />
            <p>{user?.company}</p>
          </div>
          <div className="github_user_bottom_option">
            <LocationOnTwoToneIcon />
            <p>{user?.location}</p>
          </div>
          <div className="github_user_bottom_option">
            <WebTwoToneIcon />
            <a href={`https://${user?.blog}`}>{user?.blog}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
