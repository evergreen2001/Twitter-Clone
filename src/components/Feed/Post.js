import React from "react";
import { Avatar } from "@material-ui/core";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./post.css";

export const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  timestamp,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headertext">
            <h3>
              Ido Dickson
              <span>
                <VerifiedUserIcon className="post__badge" />
                @ido Dickson
              </span>
            </h3>

            <div className="post__headerdescription">
              <p>Hello world</p>
            </div>
          </div>
          </div>
          <img
            src="https://media.giphy.com/media/3oz8xOUyiwvMfLqc4o/source.gif"
            alt="post"
          />
        

          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
          </div>
      </div>
    
  );
};

export default Post;
