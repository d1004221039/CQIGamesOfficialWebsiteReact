
import LOGOImg from '../images/cqig_logo.png';
const Footer = ()=>{

    return(
        <footer id="footer">
		<div className="container">
			<div className="row">
				<div className="grid_6 preffix_3 copyright">
					<h4 style={{textAlign: "center"}}><img alt="LOGO" src={LOGOImg}/></h4>
					<div style={{marginTop:"-10px"}}> 330 桃園市中正路1082號E3棟26樓　</div>
					<div style={{marginTop:"-10px"}}> twchenquan@gmail.com　</div>
					<div style={{marginTop:"-10px"}}> +886 (3) 316-0003　</div>
					<div style={{marginTop:"30px"}}>© <span id="copyright-year"></span> |  Privacy Policy</div>
					
				</div>
			</div>
		</div>
	</footer>

    )

}


export default Footer