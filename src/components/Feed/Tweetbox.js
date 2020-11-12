import React, { useState } from "react";
import "./tweetbox.css";
import db from "../../firebase";

import { Avatar, Button } from "@material-ui/core";


function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "dickson x",
      username: "firebang",
      verified: true,
      text: tweetMessage,
      avatar:'https://lh3.googleusercontent.com/ogw/ADGmqu8pWaDJLNq8gZKV8xHpe17_zqsD4OOBZwFsn6Hs=s32-c-mo',
image:""
    });

    setTweetMessage("")
  setImage('')
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src=""></Avatar>

          <input
            type="text"
            placeholder="what happening"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        <input
          type="text"
          placeholder="enter image url"
          className="tweetbox__imageInput"
          value={tweetImage}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button className="tweet_btn" onClick={sendTweet} >Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
