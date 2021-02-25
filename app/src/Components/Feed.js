import React, { useState, useEffect } from "react";
import "./Feed.css";

import tweets from "../tweets";

import Tweet from "./Tweet";

const Feed = () => {
  const [feedTweets] = useState(tweets);
  const [isLoading, setIsLoading] = useState(null);

  const createTweetComponents = (tweetList) => {
    if (tweetList.length === 0) return <p>There are not tweets available</p>;
    return tweetList.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tweetComponents = createTweetComponents(feedTweets);

  return (
    <div className="feedContainer">
      {isLoading ? (
        <div className="spinnerContainer">
          <i id="loadingSpinner" className="ri-loader-2-line" />
        </div>
      ) : (
        tweetComponents
      )}
    </div>
  );
};
export default Feed;
