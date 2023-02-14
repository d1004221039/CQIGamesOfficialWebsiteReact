import React from "react";
import "./css/pictures.css"

const Pictures = ()=>{

    return(
        <div className="CQI_pictures full-width-container block-2">
            <div className="container">
                <div className="row">
                    <header>
                        <h2><span>照片分享</span></h2>
                    </header>
                </div>
                <div className="pictures_block">


                    <div className="NewYear2023">
                        <h4>
                            <span className="text" style={{textAlign: 'left'}}>
                            2023 舞龍舞獅🧨迎新春🧨</span>
                        </h4>
                        <img src={require("../../images/CQI_pictures/New_Year.png")} alt="" />
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pictures