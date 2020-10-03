import "./Display_card.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function Display_card({name,githublink,avatarSrc}) {
  return <div  className="display_cards">
     
      <Avatar alt={name}  className="display_cards-avatar" src={avatarSrc}>

      </Avatar>
      <div className="display_cards_name">
         <h3>{name}</h3>
          <a href={githublink}>{githublink}</a>
      </div>
  </div>;
}

export default Display_card;
