import React from "react";
import "./RightSidebar.css";
import WhatsHappening from "./WhatsHappening";
import WhoToFollow from "./WhoToFollow";
import Search from "./Search";

const RightSidebar = () => {
  return (
    <>
      <div className="rightSidebar">
        <Search />
        <WhatsHappening />
        <WhoToFollow />

        <footer>
          <div className="links1">
            <a href="https://twitter.com">Terms of Service</a>
            <a href="https://twitter.com">Privacy Policy</a>
            <a href="https://twitter.com">Cookie Policy</a>
          </div>
          <div className="links2">
            <a href="https://twitter.com">Ads Info</a>
            <a href="https://twitter.com">More ··· </a>
            <p>© 2021 Ninja Twitter</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default RightSidebar;
