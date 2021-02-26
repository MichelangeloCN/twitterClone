import React from "react";
import './WhoToFollow.css'
import michael from '../img/michaelangelo.jpg'
import donatello from '../img/donatello.jpg'
import leonardo from '../img/leonardo.jpg'

import ProfilePicture from './ProfilePicture'

const WhoToFollow = () => {
  
  return (
    <>
      <div className="whoToFollow">
        <h1> Who to follow </h1>

        <div className="profile profile1" id="profileFlex">
          <ProfilePicture src={michael} size="small" id="profileFlexImg" />
          <div className="profileHandle">
            <h3> Michaelangelo </h3>
            <p className="secondaryText">@Michaelangelo</p>
          </div>
          <div className="followsYou">
            <p className="secondaryText"> Follows You </p>
          </div>
          <div className="profileButton">
            <button type="button" className="blueText">
              Follow
            </button>
          </div>
        </div>

        <div className="profile profile2" id="profileFlex2">
          <ProfilePicture src={donatello} size="small" id="profileFlexImg" />
          <div className="profileHandle">
            <h3> Donatello </h3>
            <p className="secondaryText">@Donatello</p>
          </div>
          <div className="followsYou">
            <p className="secondaryText"> </p>
          </div>
          <div className="profileButton">
            <button type="button" className="blueText">
              Follow
            </button>
          </div>
        </div>

        <div className="profile profile3" id="profileFlex3">
          <ProfilePicture src={leonardo} size="small" id="profileFlexImg"/>
          <div className="profileHandle">
            <h3> Leonardo </h3>
            <p className="secondaryText">@Leonardo</p>
          </div>
          <div className="followsYou">
            <p className="secondaryText"> Follows You </p>
          </div>
          <div className="profileButton">
            <button type="button" className="blueText">
              Follow
            </button>
          </div>
        </div>

        <div className="buttonWrapper">
            <button type= "button" className = "blueText">Show More</button>
        </div>

      </div>
    </>
  );
};

export default WhoToFollow;