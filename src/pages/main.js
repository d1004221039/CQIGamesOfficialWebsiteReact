// import  './css/owl.carousel.css';
import AboutCqiGames from "./components/aboutCQIgames.js"
import GameIntroduction from"./components/gameIntroduction.js"
import TopBanner from "./components/topBanner.js"
import Pictures from "./components/pictures.js"
const Main = ()=>{
	// const openInNewTab = url => {
	// 	// 👇️ setting target to _blank with window.open
	// 	window.open(url, '_blank', 'noopener,noreferrer');
	// };


    return(
        <section id="content" className="index" style={{paddingTop:"100px"}}>
		<TopBanner />
		
		<GameIntroduction />
		<AboutCqiGames />
		<Pictures />
	</section>

    )
}


export default Main