import "./css/pop.css";
import { useState } from "react";
const Pop = ()=>{
    const [showPop , setShowPop] = useState(true)

    const clickClosePop =()=>{
       
        setShowPop(false)
    }
    return(
        <>
         {showPop && 
            <div className="pop-container-BG">
                <div className="pop-container">
                    <button className="close-pop" onClick={clickClosePop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.85" height="20.85" viewBox="0 0 20.85 20.85">
                            <path id="close-round"
                                d="M24.771,22.009,17.683,14.92l7.089-7.089a1.954,1.954,0,0,0-2.763-2.763L14.92,12.157,7.831,5.068A1.954,1.954,0,0,0,5.068,7.831l7.089,7.089L5.068,22.009a1.954,1.954,0,0,0,2.763,2.763l7.089-7.089,7.089,7.089a1.954,1.954,0,0,0,2.763-2.763Z"
                                transform="translate(-4.495 -4.495)" fill="#fff" />
                        </svg>
                    </button>
                    <div className="pop-title">公&nbsp;告</div>
                    <p className="pop-content">
                        近期發現有股票公司或詐騙集團冒用本公司名義，偽造或利用本公司網站名義進行網路詐騙，
                        歹徒會利用偽造的電子郵件或網站，鼓吹使用者申購股票或騙取個人資料。
                    </p>
                    <p className="pop-content">
                        為保障您使用本公司網站各項服務的安全，當您透過電子郵件或其他網站點選連結本公司網頁時，
                        請務必仔細核對瀏覽器的網址，是否顯示為CQI Games網址：https://www.cqigames.com/
                    </p>
                    <p className="pop-content">
                        CQI Games貼心提醒您！
                    </p>
                </div>
            </div>
        }
         
        </>
       
        
    )
}

export default Pop