

import "../css/contact-form.css"
import "../css/style.css"
import "../css/grid.css"
import Iframe from 'react-iframe'
import { useEffect ,useState } from "react"

const Contact_us =()=>{
	// RWD控制
    const [mapWidth ,setMapWidth] =useState('1024')
	const mapRWD =  () => {         
		if(window.innerWidth > 1024){
			setMapWidth('1024')
		}else if(window.innerWidth > 768){
			setMapWidth('600')
		}else {
			setMapWidth('300')
		}         
	}
    useEffect(()=>{
        window.addEventListener("resize",mapRWD);
    })

	//傳訊息控制
	const [name,setName] =useState("")
	const [mail,setMail] =useState("")
	const [subject,setSubject] =useState("")
	const [content,setContent] =useState("")

	const sendFeedback = ()=>{
		var formData = `{"userNickname":"${name}","feedbackType":"${subject}","content":"${content}","email":"${mail}"}`
		
		fetch('https://feedback.cqiserv.com/feedback/official/cqigames', {
			method: "POST",
			
			crossDomain:true,
			mode: 'cors',
			redirect: 'follow',
			body:formData,
			headers: new Headers({
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Credentials': 'true',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD'
			}),
			// mode: 'no-cors',
		})
		.then((response)=>{return  response.json();})
		.then(function(response) {
		
			// console.log(response)
			if (true) {
				reSet();
				alert("感謝您的回饋，我們會持續努力做出好遊戲");
			} else {
				alert("請確認網路是否連線");
			}
		}).catch(function(err) {
			console.log(err);
			alert("請確認網路是否連線!");
		})
		
	}

	const reSet=()=>{
		setName("")
		setMail("")
		setContent("")
		setSubject("")
	}


    return(

    <section id="content" className="index-4" style={{paddingTop:"100px"}}>
		<div className="full-width-container block-1">
			<div className="container">
				<div className="row">
					<div className="grid_12" style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
						<header>
							<h2><span>我們在這</span></h2>
						</header>
						<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5716444437962!2d121.29732991561426!3d25.0146673839815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681fb02de88e4b%3A0x29438ea1d84de212!2z6L6w6Kmu5ZyL6Zqb5oqV6LOH6aGn5ZWP!5e0!3m2!1szh-TW!2stw!4v1670833587727!5m2!1szh-TW!2stw" width={mapWidth} height="450" style={{border:0}}   />
					</div>
				</div>
			</div>
		</div>
		<div className="full-width-container block-2">
			<div className="container">
				<div className="row">
					<div className="grid_6 preffix_3">
						{/* 原本為from */}
						<div id="contact-form">
                     
							<div className="contact-form-loader"></div>
							<header>
								<h2 style={{textAlign: 'center'}}><span>聯絡我們</span></h2>
							</header>
							<span className="text" style={{color: '#ffffff'}}>
								您好，謝謝您對我們的關注。<br />如果有甚麼想要告訴我們的，請聯絡我們。<br />我們會真誠的對待每一份訊息。<br /><br />
							</span>
							<div>
								<label className="name">
									<span className="text">．您的稱呼：</span>
									<input type="text" id="userNickname" name="userNickname" placeholder="" value={name}  onChange={(e)=>{setName(e.target.value)}} data-constraints="@Required @Length(min=2,max=50)" />
									<span className="empty-message">*此欄位必填。</span>
									<span className="error-message">*稱呼長度至少兩個字。</span>
								</label>
								<label className="email">
									<span className="text">．您的電子信箱：</span>
									<input type="text" id="email" name="email" placeholder="" value={mail}  onChange={(e)=>{setMail(e.target.value)}} data-constraints="@Required @Email" />
									<span className="empty-message">*此欄位必填。</span>
									<span className="error-message">*這不是一個有效的電子信箱。</span>
								</label>
								<label className="subject">
									<span className="text">．主旨：</span>
									<input type="text" id="subject" name="subject" placeholder="" value={subject} onChange={(e)=>{setSubject(e.target.value)}}   data-constraints="@Required" />
									<span className="empty-message">*此欄位必填。</span>
									<span className="error-message">*這不是一個有效的主旨。</span>
								</label>
								<label className="message">
									<span className="text">．訊息：</span>
									<textarea id="content" name="content" placeholder="" value={content} onChange={(e)=>{setContent(e.target.value)}}   data-constraints='@Required @Length(min=10,max=999)'></textarea>
									<span className="empty-message">*此欄位必填。</span>
									<span className="error-message">*訊息內容長度至少10個字</span>
								</label>
								<div className="cont_btn">
									<button  data-type="reset" className="btn" id="reset" onClick={reSet}>重寫</button>
									<button  id="sendMessageButton"  className="btn" onClick={sendFeedback} >送出</button> {/*onclick="sendFeedback()" */}
								</div>
							</div>
						
							
							{/* <div className="modal fade response-message">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal"
												aria-hidden="true">&times;</button>
											<h4 className="modal-title">訊息</h4>
										</div>
										<div className="modal-body">
											您的訊息已送出！
										</div>
									</div>
								</div>
							</div> */}
                     
						</div>
						
					</div>
				
				</div>
			</div>
		</div>
	</section>
    )
}

export default Contact_us