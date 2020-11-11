import React from "react";
import "./feed.css";
import Tweetbox from "./Tweetbox";
import Post  from "./Post";



function index() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>


<Tweetbox/>

<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>

     
    </div>
  );
}

export default index;
