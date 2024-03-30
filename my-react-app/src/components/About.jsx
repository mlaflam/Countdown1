import React from 'react';
import "../styles/About.css";
import dog from "../assets/Atticus.jpeg";
import plants from "../assets/Plants.jpeg";

const About = () => {
    return (
        <>
            <h1>About Me</h1>
            <p className="basic-text">
                Hi, my name is Maggie Laflam and I'm from Roanoke, Virginia. 
                I currently go to the University of Virginia where I study Computer Science.
            </p>

            <h2>Hobbies and Interests</h2>
            <ul className="list">
                <li>Gardening</li>
                <li>Reading Fantasy or Sci-Fi</li>
                <li>Playing Oboe</li>
            </ul>

            <h3 className="sub-heading">Personal Projects:</h3>
            <div>
                <p className="basic-text">
                    <a href="https://mlaflam.github.io/flora-finder/" target="_blank" className="link">Flora Finder</a>
                    - Flora Finder is a native plant search engine. Simply type in your state name and it will propagate results for native plants near you!
                </p>
            </div>
            <div style={{ display: 'flex' }}>
                <p className="basic-text">
                    <a href="https://mlaflam.github.io/youtube-mockup/" target="_blank" className="link"> Youtube Mockup</a>
                    - This is a simple Mockup of the popular website YouTube. I made this over a past summer to learn skills such as HTML and CSS.
                </p>
            </div>

            <h3 className="sub-heading">Pets and Plants:</h3>
            <div className="container">
                <div className="sub-container">
                    <img src={dog} alt="Atticus" className="picture" style={{ width: '325px' }} />
                    <p className="basic-text pic-description" style={{ width: '325px' }}>
                        I have a dog named Atticus that's a Shi-poo.
                        He's not named after Finch from TKAM but after a detective from one of my mom's favorite shows.
                        He is the cutest dog in the world and no one can convince me otherwise!
                    </p>
                </div>

                <div className="sub-container">
                    <img src={plants} alt="Plants" className="picture" />
                    <p className="basic-text pic-description">
                        I am also a proud plant mom of over 50 plants! It's been a lot harder to keep them alive during college though...
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
