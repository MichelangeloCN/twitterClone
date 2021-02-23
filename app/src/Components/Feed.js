import React, { useState } from "react";
import "./Feed.css";

import tweets from "../tweets";

import Tweet from "./Tweet";

const Feed = () => {
  const [feedTweets, setTweets] = useState(tweets);

  const tweetComponents = feedTweets.map((tweet) => <Tweet tweet={tweet} />);

  return <div className="feedContainer">{tweetComponents}</div>;
};
export default Feed;
