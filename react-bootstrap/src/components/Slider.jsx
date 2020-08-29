import React,{useState} from "react";
import "./Slider.scss";
import ImgComp from "./SliderImages";
import i1 from "./SlideImages/1.png";
import i2 from "./SlideImages/2.jpg";
import i3 from "./SlideImages/3.jpg";
import i4 from "./SlideImages/4.png";

function Slider() {
    //Create an array for components to show inside the slider 
    const [x, setX] = useState(0);
    let sliderArr = [<ImgComp src={i1}/>, <ImgComp src={i2}/>, <ImgComp src={i3}/>, <ImgComp src={i4}/>,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];


    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
        //setX(x + 100);
    };

    const goRight = ()=> {
        x === -100 * (sliderArr.length - 1) ? setX(0): setX(x - 100);
    };

return(
    <div className="slider">
{sliderArr.map((item, index) => {
        return (
            <div 
            key={index} 
            className="slide"
            style={{transform: `translate(${x}px`}}>
                {item}  
            </div>
        );
    })}
 
<button id="goLeft"  onClick={goLeft}>
<i class="fas fa-chevron-left"></i>
</button>
<button id="goRight" onClick={goRight}>
<i class="fas fa-chevron-right"></i>
</button>
    </div>
);
}


export default Slider;

