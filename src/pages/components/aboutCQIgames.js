import React,{useState,useEffect} from "react"

const AboutCqiGames= ()=>{
    // List <name 姓名，appellation 稱呼 ，title 自介，subTitle 自介2> ，imgURL 圖片名
    // const teamDatas = [{
    //     name:"鄭嘉賢 - 遊戲長",
    //     appellation:"JZ",
    //     title :"擬虛世界の霸王",
    //     subTitle:"擬虛世界の霸王",
    //     imgURL:"JZ"
    // },
    // {
    //     name:"林建亨 - 製作人",
    //     appellation:"Paddy",
    //     title :"區塊鏈工程師",
    //     subTitle:"你剛攻擊我的村莊？",
    //     imgURL:"paddy"
    // },
    // {
    //     name:"張文榮 - 首席開發者",
    //     appellation:"㊚Jayz㊝",
    //     title :`主要是美術也是程式更是頂尖的開發者       
    //     所以才叫首席開發者       
    //     精通絕大多數的美術技術      
    //     熟練遊戲程式撰寫、專精整合遊戲       
    //     努力的研究開發遊戲        
    //     為的就是有一天能當上特級廚師`,
    //     subTitle:`
    //     阿對了，我只是隻貓，     
    //     剛剛都亂講的！
    //     `,
    //     imgURL:"文榮"
    // },{
    //     name:"唐凡 - 研發經理",
    //     appellation:"我要叫大雞雞🐓",
    //     title :"神出鬼沒的大ㄐㄐ",
    //     subTitle:"",
    //     imgURL:"唐凡"
    // }]

    const [teamDatas,SetTeamDatas]  =useState([])
    useEffect(()=>{
        fetch('http://34.120.93.178/userNotes/GetList')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {       
            SetTeamDatas(myJson)
        });
    },[])

    
    return(
        <div id="about_cqi_games" className="full-width-container block-3 ">
            <div className="container">
                <div className="row">
                    <div className="grid_8 preffix_2">
                        <header>
                            <h2><span>關於我們</span></h2>
                        </header>
                        <h4><span className="text" style={{textAlign: 'left'}}>CQI
                                Games成立於2017年。<br /><br />我們立志成為全台灣最大的獨立開發工作室。<br /><br />這裡是個夢想凝聚的地方，聚集著一群對遊戲充滿熱情的人。<br /><br />回想著第一次踏入遊戲世界的衝擊感，我們的目標就是重現這份感覺。<br /><br />如果你跟我們有著相同的想法，歡迎加入我們。：）</span>
                        </h4>
                    </div>
                </div>

                <div className="row" style={{marginTop:"100px"}}>
                    <div className="grid_12">
                        <header>
                            <h2><span>團隊成員</span></h2>
                        </header>
                    </div>
                    {teamDatas.map((teamData)=>{                        
                        return(
                            <>                            
                                {
                                    teamData.title &&(
                                    <div key={teamData.name} className="grid_3 team-member" >
                                        <article>
                                            <div className="img_container">
                                                <img className="memberImage" src={`http://34.120.93.178/Images/${teamData.imgUrl.slice(31)}`} alt="our team" />
                                            </div>
                                            <h4 className="name_ori">{teamData.name}</h4>
                                            <h4 className="name_fun">{teamData.appellation}</h4>
                                            <p className="original">
                                                {teamData.title}
                                            </p>
                                            <p className="forfun">
                                                {teamData.subTitle}
                                            </p>
                                        </article>
                                    </div>
                                    )
                                }
                            </>
                        )})}  
                </div>
            </div>
        </div>

    )
}

export default AboutCqiGames