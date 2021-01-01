import React, { Component } from 'react';
import Joke from './Joke';
import './Home.css';
import PetStory from './PetStory';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="homeContainer">
                <Joke />

                {/* Pet news: */}
                <h2>Read cute pet news:</h2>
                <div className="storiesContainer">

                    <PetStory src="https://cdn0.wideopenpets.com/wp-content/uploads/2019/11/Knock-Car-Cats.png"
                        alt="Cat Sleeping On Car Tire"
                        title="Guy Who Didn’t Like Cats Falls In Love With One"
                        link="https://www.thedodo.com/videos/guy-who-didnt-like-cats-finds-one-stuck-in-his-tire-and-falls-in-love" />

                    <PetStory src="https://assets3.thrillist.com/v1/image/2933331/1584x3000/scale;jpeg_quality=60.jpg"
                        alt="Dog Napping"
                        title="Dog Chooses Strangest Positions for His Naps"
                        link="https://www.thedodo.com/daily-dodo/dog-sleeps-in-strangest-positions" />

                    <PetStory src="https://i.pinimg.com/736x/df/14/6a/df146a2194473a22f57c14edc1548748.jpg"
                        alt="German Shepherd and Blue-And-Yellow Macaw"
                        title="Dog Finds An Injured Parrot And They Become Best Friends"
                        link="https://www.thedodo.com/videos/dog-finds-an-injured-parrot-and-they-become-best-friends" />

                    <PetStory src="https://www.thesprucepets.com/thmb/X4x-GRZ7hGDhN_8rG8iM1gQz4cY=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522664558-58a6e85e3df78c345b61ff63.jpg"
                        alt="White Cockatoo"
                        title="Parrot Loves Going To Home Depot With His Dad"
                        link="https://www.thedodo.com/videos/parrot-loves-going-to-home-depot-with-his-dad" />

                    <PetStory src="https://i.ytimg.com/vi/hpwe7KB5trw/maxresdefault.jpg"
                        alt="Cat Looking at a TV Screen"
                        title="This Cat's Obsessed With One Movie"
                        link="https://www.thedodo.com/videos/this-cats-obsessed-with-one-movie" />

                    <PetStory src="https://coleandmarmalade.com/wp-content/uploads/2019/10/64274711_10218331127417189_6987735782832209920_o.jpg"
                        alt="Tiny Kitten"
                        title="Teeny 1-Pound Kitten Pounces On 80-Pound Dog"
                        link="https://www.thedodo.com/videos/teeny-1-pound-kitten-pounces-on-80-pound-dog" />

                </div>
            </div>
        );
    }

}

export default Home;