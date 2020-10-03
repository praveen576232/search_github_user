import "./CardRepo.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function CardRepo({ Icon, backgroundColor, iconcolor, fnumber, types,onClick }) {
  return (
    <div onClick={onClick} className="cardrepo">
      <Avatar
        style={{ backgroundColor: backgroundColor }}
        className="cardrepo_avatar"
      >
        <Icon style={{ color: iconcolor }} className="cardrepo-icon" />
      </Avatar>
      <div className="cardrepo_info">
        <h2>{fnumber}</h2>
        <p>{types}</p>
      </div>
    </div>
  );
}

export default CardRepo;
