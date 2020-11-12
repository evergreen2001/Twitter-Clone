import React, { useState, useEffect } from "react";
import "./feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";

import db from "../../firebase";
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

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={true}
          text={post.text}
          image="https://media.giphy.com/media/3oz8xOUyiwvMfLqc4o/source.gif"
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}

export default Index;
