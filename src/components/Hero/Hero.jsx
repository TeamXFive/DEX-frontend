import './Hero.css'
import Background from "../background/background";
import VideoSlider from "../videoslider/videoslider";

function Hero() {
    return (
        <>
            <figure className="hero-background-container">
                <Background/>
            </figure>
            <VideoSlider/>
        </>
    )

}

export default Hero;