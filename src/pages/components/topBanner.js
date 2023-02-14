import "./css/topBanner.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopBanner = ()=>{
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
    }
    return(
        <div className="full-width-container block-1" >
            <div className="camera_container">
           
                <div id="camera_wrap">
                    <Slider {...settings}>
                        <div>
                            <div className="item-container">
                                <img className="item" alt="img" src={require("../../images/index_img_slider-a.jpg")}  />
                            </div>
                        </div>
                        <div>
                            <div className="item-container">
                                <img className="item" alt="img" src={require("../../images/index_img_slider-b.jpg")}  />						
                            </div>
                        </div>
                       
                    </Slider>
                </div>
                
            </div>
        </div>
    )

}

export default TopBanner