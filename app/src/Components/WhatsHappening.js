import React from "react";
import './WhatsHappening.css'
import pizza from '../img/pizza.png'
import startchild from '../img/starchild.jpg'


const WhatsHappening = () => {
  return (
    <>
      <div className="whatsHappening">
        <h1>What`s happening</h1>
        

        <div className="news1 newsImg" > 
            <div className="newsText">
                <p className = "secondaryText">Michaelangelo · Pizza</p>
                <h3> After Michaelangelos problems with gluttony and eating his borhers pizzas Michelangelo no longer wants pizza ! </h3>
            </div>
            <div className="newsImage">
                <img src = {pizza} alt= "pizza"/>
            </div>
        </div>

        <div className="news2 newsNoImg"> 
            <p className = "secondaryText">Discovery · Atlantis</p>
            <h3> The Turtles discover an Atlantean city, but not in ancient Greece!</h3>
        </div>


        <div className="news3 newsNoImg"> 
            <p className = "secondaryText">Trending in New York</p>
            <h3> Gadget Man comes out of retirement after 50 years. </h3>
        </div>

        <div className="news4 newsNoImg"> 
            <p className = "secondaryText">Yoshi · Splinter</p>
            <h3> Turtles agree to use the small amount of mutagen that they have left to concoct a formula that will revert Splinter back into Yoshi. </h3>
        </div>

        <div className="news5 newsImg"> 
            <div className="newsText">
            <p className = "secondaryText">Starchild · Quorax</p>
                <h3>The Turtles witness a spaceship crash-landing on Earth. The Turtles venture inside. Its only occupant: a small funny-looking alien child, named Quarx... </h3>
            </div>
            <div className="newsImage">
                <img src = {startchild} alt= "starchild"/>
            </div>
        </div>
        
        <div className="buttonWrapper">
            <button type= "button" className = "blueText">Show More</button>
        </div>
        
      </div>
    </>
  );
};

export default WhatsHappening;
