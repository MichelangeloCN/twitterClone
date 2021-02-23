import React, { useState, useEffect } from "react";
import "./Feed.css";

import tweets from "../tweets";

import Tweet from "./Tweet";

const Feed = () => {
  const [feedTweets, setTweets] = useState(tweets);
  const [isLoading, setIsLoading] = useState(null);

  const tweetComponents = feedTweets.map((tweet) => (
    <Tweet key={tweet.id} tweet={tweet} />
  ));

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      console.log("timer");
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="feedContainer">
      {isLoading ? (
        <i id="loadingSpinner" className="ri-loader-2-line" />
      ) : (
        tweetComponents && <p>There are not tweets available</p>
      )}
    </div>
  );
};
export default Feed;
