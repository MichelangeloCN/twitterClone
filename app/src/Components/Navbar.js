import React from "react";
import "./Navbar.css";
import michael from "../img/michaelangelo.jpg";

const Navbar = () => {


  return (
    <>
      <div className="Navbar">
        <div className="navWrapper">
          <div className="navTwitterLogo">
            <i className="ri-twitter-fill"> </i>
          </div>

          <div id="navElements" className="navHome">
            <i className="ri-home-7-line"> </i>
            <h2>Home</h2>
          </div>

          <div id="navElements" className="nacExplore">
            <i className="ri-hashtag"> </i>
            <h2>Explore</h2>
          </div>

          <div id="navElements" className="navNotification">
            <i className="ri-notification-3-line"> </i>
            <h2>Notifications</h2>
          </div>

          <div id="navElements" className="navMessages">
            <i className="ri-mail-line"> </i>
            <h2>Messages</h2>
          </div>

          <div id="navElements" className="navBookmarks">
            <i className="ri-bookmark-line"> </i>
            <h2>Bookmarks</h2>
          </div>

          <div id="navElements" className="navLists">
            <i className="ri-file-list-2-line"> </i>
            <h2> Lists</h2>
          </div>

          <div id="navElements" className="navProfile">
            <i className="ri-user-line"> </i>
            <h2>Profile</h2>
          </div>

          <div id="navElements" className="navmore">
            <i className="ri-more-fill"> </i>
            <h2>More</h2>
          </div>

          <div className="navTweetButton">
            {/* here export nav tweet component */}
          </div>
        </div>

        <div className="bottomProfile">
          <div className="bottomProfileContent">
            <div className="profileImg">
              <img src={michael} alt="michael" />
            </div>

            <div className="profileHandle">
              <h3> Michaelangelo </h3>
              <p className="secondaryText">@Michaelangelo</p>
            </div>
          </div>

          <div className="bottomProfileIcon">
            <i className="ri-more-fill"> </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;