import React, { useState, useEffect } from "react";
import "./feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

import db from "../../firebase";
import ReactFlipMove from 'react-flip-move'

function Index() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />

<ReactFlipMove>


      {posts.map((post) => (
        <Post
        key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}

</ReactFlipMove>

    </div>
  );
}

export default Index;
