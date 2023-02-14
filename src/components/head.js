
import LOGOImg from '../images/cqig_logo.png';
import React,{useState ,useEffect} from 'react';
const Head =()=>{
	const [navChooseNow,setNavChooseNow] = useState('main')	
	useEffect(()=>{
		setNavChooseNow(window.location.pathname)	
	},[navChooseNow])
	

	// 
	// console.log(navChooseNow)
	// const toggleNavChoose=(value)=>{
	// 	setNavChooseNow(value)
	// }

    return(
    <header id="header" style={{position:"fixed",top:"0px",left:"0px",zIndex:"999",width:"100%"}}>
		<div id="stuck_container">
			<div className="container">
				<div className="row">
					<div className="grid_12">
						<a href="index.html"><img alt="LOGO" src={LOGOImg} /></a>
						<nav>
							<ul className="sf-menu">
								<li><a href="/" style={{color :navChooseNow==="/"?"#fff":"#7d261a" }}>關於我們</a></li>
								<li><a href="contact_us" style={{color :navChooseNow==="/contact_us"?"#fff": "#7d261a" }}>聯絡我們</a></li>
								<li><a href="https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=6a424a733c3e466f383a426b40463e219313131304864527109j97"
										target="_blank">加入我們</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
    )

}

export default Head