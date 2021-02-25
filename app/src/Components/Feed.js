import React, { useState, useEffect } from "react";
import "./Feed.css";

import Tweet from "./Tweet";

const Feed = ({ tweetList }) => {
  const [isLoading, setIsLoading] = useState(null);

  const createTweetComponents = (tweets) => {
    if (tweets.length === 0) return <p>There are not tweets available</p>;
    return tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tweetComponents = createTweetComponents(tweetList);

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
