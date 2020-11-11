import React from "react";
import "./widget.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className="widgets">
     

      <div className="widgets__input">
        <SearchIcon className="widgets__searchicon" />
        <input placeholder="search twitter" type="text" />
      </div>

      <div className="widgets__container">

          <h2>What Happening</h2>

          <TwitterTweetEmbed
  tweetId={'1326371554524090373'}
/>

{/* <TwitterTimelineEmbed
  sourceType="profile"
  screenName="idoevergreen"
  options={{height: 400}}
/> */}

<TwitterFollowButton
    screenName={'idoevergreen'}
  />


  <TwitterShareButton
    url={'https://facebook.com/evergreen.ido'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
      </div>
    </div>
  );
}

export default Widgets;
