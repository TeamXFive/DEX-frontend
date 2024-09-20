import '../../../style/Home/Hero/Hero.css'
import Background from "../Background/Background.jsx";
import Videoslider from "../Videoslider/Videoslider.jsx";
import ConhecaDex from '../ConhecaDex/ConhecaDex.jsx';

function Hero() {
    return (
        <div className="hero">
            <Background/>
            <ConhecaDex/>
            <Videoslider/>
            
        </div>
    )

}

export default Hero;