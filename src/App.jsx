import requests from "./Requests"
import Main from "./components/Main"
import Search from "./components/Navbar/Search";
import Row from "./components/Row/Row"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



function App() {
  return (
    <>
      
      
      
     
      <div data-aos="fade-down">  
      <Main/>
      </div>
      
      

      <div data-aos="fade-down">   
       <Row rowID='2' title='UpComing' fetchUrl={requests.requestUpcoming}/>
      </div>

      <div data-aos="fade-down">   
       <Row rowID='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      </div>

      <div data-aos="fade-down">  
       <Row rowID='4' title='Trending' fetchUrl={requests.requestTrending}/>
      </div>


      <div data-aos="fade-down">   
       <Row rowID='5' title='Recommendations' fetchUrl={requests.requestRecommendations}/>
      </div>
 
      
      
      
     
      
      
      
    </>
  )
}

export default App
