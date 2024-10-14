 
 import './dubai.css'

 function DubaiSection() {
   return (
     <div className="dubai-section d-flex">
        <div className="dubai-text-section">
            <h1 className="fw-bolder">UNITED<br/>ARAB<br/>EMIRATES</h1>
            <p>Suite 17, Iridium Building, Umm <br/>Suquiem Road, Al Barsha, Dubai<br/> UAE</p>
            <h6>contact@teamtweaks.com</h6>
            <h6>+971 52 988 6644</h6>     
            <h5 className="fw-bolder"> INDIA   UK   USA</h5>
        </div>
        <div className="dubai-image-section">
            <img src="dubai.png" alt="dubai" className="dubai-image"/>
        </div>
     </div>
   );
 }
 
 export default DubaiSection;
 