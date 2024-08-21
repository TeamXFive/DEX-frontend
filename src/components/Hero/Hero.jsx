import './Hero.css'
import Background from "../background/background";
import VideoSlider from "../videoslider/videoslider";

function Hero() {
    return (
        <div className= "hero">
            <Background/>
            <VideoSlider/>
        </div>
    )

}

export default Hero;