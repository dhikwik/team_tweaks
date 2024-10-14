 
 import './why-choose-us.css'

 function WhyChooseUs() {
   return (
     <div className="why-choose-us">
      <h1 className="why-choose-us-heading">Why Choose Us?</h1>
             <p className="why-choose-us-subheading">Unique expertise, client-focused approach, and proven track record set us apart as the ideal choice for application development projects.</p>
            <div className="why-choose-us-card-list d-flex">
                <div className="why-choose-us-card">
                    <img src="vector-icons-19.png" alt="icon1" className="card-img-top why-choose-us-img"/>
                    <h6 className="pt-3 fw-bold text-center">User-friendly development
                    </h6>
                    <p>Our apps are easier to use and provide a top-notch user experience.  </p>
                </div>
                <div className="why-choose-us-card">
                    <img src="vector-icons-20.png" alt="icon2" className="card-img-top why-choose-us-img"/>
                    <h6 className="pt-3 fw-bold text-center">Reasonable pricing</h6>
                    <p> Our exclusive app development packages are reasonable and also assured with 100% quality. </p>
                </div>
                <div className="why-choose-us-card">
                    <img src="vector-icons-21.png" alt="icon3" className="card-img-top why-choose-us-img"/>
                    <h6 className="pt-3 fw-bold text-center">Features-rich enabled apps</h6>
                    <p>We are readily available to develop both basic features and advanced features. It all depends on the customer’s needs and demands. </p>
                </div>
                <div className="why-choose-us-card">
                    <img src="vector-icons-21.png" alt="icon3" className="card-img-top why-choose-us-img"/>
                    <h6 className="pt-3 fw-bold text-center">24/7 support</h6>
                    <p>Our technical support team is readily available 24/7 to help our prospective clients.  </p>
                </div>
 
 
            </div>
      </div>
   );
 }
 
 export default WhyChooseUs;
 