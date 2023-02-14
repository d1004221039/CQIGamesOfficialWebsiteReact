import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/gameIntroduction.css"
import { useState } from "react";
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GameIntroduction=()=>{
    const [slider, setSlider] =useState()
    const previous=()=>{
        slider.slickPrev();

    }
    const next=()=>{
        slider.slickNext();
        
    }
	const settings = {	
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
        dots:false,
        infinite:false,
        arrows:false,      
        responsive: [
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 1,
              }
            },          
        ]
	  };

      
    return(
        <div id="games" className="full-width-container block-2">
        <div className="container">
            <div className="row">
                <div className="grid_12">
                    <header>
                        <h2><span>遊戲介紹</span></h2>
                    </header>
                </div>
            </div>
            <div className="row" style={{position: 'relative'}}>
                    <div className="SliderButton">
                        <button onClick={previous}><IoIosArrowBack /></button>
                        <button onClick={next}><IoIosArrowForward /></button>
                 
                    </div>
                    <Slider ref={c => (setSlider(c) )} {...settings}>                    
                    <div className="grid_4 Slider-item">
                        <div className="" style={{}}>
                        
                            <div className="img_container">
                                {/* <button style={style.owlTextButton} onClick={()=>{openInNewTab("https://www.cqicasino.com")}}>
                                        <img src={require("../../images/happygamboy_icon.png") } alt="img" title="豪銀娛樂城"/>
                                </button>  */}

                                <a href="https://www.cqicasino.com">
                                    <img src={require("../../images/happygamboy_icon.png") } alt="img" title="豪銀娛樂城"/>
                                </a>
                            </div>
                            <div className="owl-text">
                                <a href="https://www.cqicasino.com">
                                    <img src={require( "../../images/happygamboy_logo.png" )} alt="img"/>
                                </a>
                            </div>
                            <div className="appstore">
                                <a href="https://apps.apple.com/tw/app/id1498186802" target="_blank">
                                    <img src={require("../../images/appstore.png")} alt="img"/>
                                </a>
                            </div>
                            <div className="googleplay">
                                <a href="https://play.google.com/store/apps/details?id=com.cqicasino.happycity"
                                    target="_blank">
                                    <img src={require("../../images/googleplay.png")} alt="img"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid_4 Slider-item" >
                        <div className="">
                            <div className="img_container">
                                <a href="https://ponponsnake.com/" target="_blank">
                                    <img src={require("../../images/ponponsnake2_icon.png")} alt="img" title="碰碰蛇2"/>
                                </a>
                            </div>
                            <div className="owl-text"><a href="https://ponponsnake.com/" target="_blank">
                                    <img src={require("../../images/ponponsnake_logo_0812.png")} alt="img"/></a></div>
                            <div className="appstore"><a
                                    href="https://apps.apple.com/us/app/%E7%A2%B0%E7%A2%B0%E8%9B%87-2/id1504212624"
                                    target="_blank"><img src={require("../../images/appstore.png")} alt="img"/></a></div>
                            <div className="googleplay"><a
                                    href="https://play.google.com/store/apps/details?id=com.cqigames.snakeknight"
                                    target="_blank"><img src={require("../../images/googleplay.png")} alt="img"/></a></div>
                            <div className="aliyun"><a
                                    href="https://ponponsnake.oss-cn-hangzhou.aliyuncs.com/PonPonSnake.apk"
                                    target="_blank"><img src={require("../../images/aliyun.png")} alt="img"/></a></div>
                        </div>
                    </div>

                    <div className="grid_4 Slider-item">
                        <div className="">
                            <div className="img_container">
                                <img src={require("../../images/stellar_icon.png")} alt="img"/>
                            </div>
                            <div className="owl-text"><img src={require("../../images/stellar_logo.png")} alt="img" title="STELLAR"/>
                            </div>
                            <div className="appstore">
                                <a href="https://itunes.apple.com/tw/app/stellar/id1351152445?mt=8" target="_blank">
                                    <img src={require("../../images/appstore.png")} alt="img"/>
                                </a>
                            </div>
                            <div className="googleplay" style={{display:"none"}}><a
                                    href="https://play.google.com/store/apps/details?id=com.cqigames.stellar"
                                    target="_blank"><img src={require("../../images/googleplay.png")} alt="img"/></a></div>
                        </div>
                    </div>

                    <div className="grid_4 Slider-item">
                        <div className="">
                            <div className="img_container">
                                <img src={require("../../images/pieginlin_icon.png")} alt="img" title="pifairies"/>
                            </div>
                            <div className="owl-text"><img src={require("../../images/pifairies_logo.png")} alt="img"/></div>
                            <div className="googleplay"  style={{display:"none"}}><a
                                    href="https://play.google.com/store/apps/details?id=com.cqigames.pifairies&hl=en_US"
                                    target="_blank"><img src={require("../../images/googleplay.png")} alt="img"/></a></div>
                        </div>
                    </div>
                    </Slider>
            
            </div>
        </div>
    </div>

    )
}

// const style = {
	
// 	owlTextButton:{
// 		border:"none" , 
// 		background:"none" ,
// 		display:"flex",
// 		justifyContent: "center",
// 		alignItems:"center",
// 		margin:"0px",
// 		cursor: "pointer",
// 	}

// }

export default GameIntroduction