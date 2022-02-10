import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
function SwipeButton() {
  return (
    <div className="swipebutton">
      <IconButton className="swipebutton_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton_close" f>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton_favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipebutton_flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
