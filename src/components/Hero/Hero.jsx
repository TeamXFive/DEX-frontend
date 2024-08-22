import './Hero.css'
import Background from "../background/background";
import VideoSlider from "../videoslider/videoslider";
import ConhecaDex from '../ConhecaDex/conhecaDex';

function Hero() {
    return (
        <div className= "hero">
            <Background/>
            <ConhecaDex/>
            <VideoSlider/>
        </div>
    )

}

export default Hero;