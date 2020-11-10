import React from "react";
import "./tweetbox.css";

import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src=""></Avatar>

          <input type="text" placeholder="what happening" />
        </div>
        <input
          type="text"
          placeholder="enter image url"
          className="tweetbox__imageInput"
        />

        <Button className="tweet_btn">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
