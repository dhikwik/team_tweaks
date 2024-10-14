 
 import './footer.css';
 import FAQ from './FAQ';
 import DubaiSection from './dubai';



 function Footer() {
   return (
    <>
    <FAQ/>
    <DubaiSection/>
     <div className="footer">
        <div className="footer-info d-flex">
            <div className="footer-section">
                <h5>Links</h5>
                <p>About Us</p>
                <p>Blogs</p>
                <p>Case Studies</p>
                <p>Contact Us</p>
                <p>Policy</p>

            </div>
            <div className="footer-section">
            <h5>IOT</h5>
                <p>Internet of Things</p>
                <p>Smart Water Management</p>
                <p>Assest Tracking System</p>
                <p>Advanced Iot</p>
            </div>
            <div className="footer-section">
            <h5>Solutions</h5>
                <p>Taxi Dipatch Software</p>
                <p>On demand Services</p>
                <p>Chat Application</p>
                <p>Video Sharing Application</p>
                <p>Ecommerce Solutions</p>

            </div>
            <div className="footer-section">
            <h5>Services</h5>
                <p>DevOps</p>
                <p>Blockchain</p>
                <p>Web Development</p>
                <p>WordPress Development</p>
                <p>IOS Development </p>

            </div>
            <div className="footer-section">
            <p>Andriod Development</p>
                <p>Mobile App Development</p>
                <p>Flutter App Development</p>
                <p>Web Development</p>
                <p>Backend Development </p>


            </div>
        </div>
         <div className="footer-icons d-flex mt-5">
            <img src="socials.png" alt="social"/>
            <img src="dmca.png" alt="dmca"/>
        </div>
        <hr className="footer-hr"/>
        <div className="footer-copyrights text-center">
            <p>© Team Tweaks / <span>Mobile App development Company in Chennai, India </span>All Rights Reserved</p>
            <h6>A parent company of Casperon Technologies Pvt Ltd.</h6>
        </div>
     </div>
      
     </>
   );
 }
 
 export default Footer;
 