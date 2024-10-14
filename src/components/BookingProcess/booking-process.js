 
 import './booking-process.css'
 import ProductForBusinessRequirement from'./product-for-business-requirement';
 import AppScreenshot from './app-screenshot';



 function BookingProcess() {
   return (
    <>
    <ProductForBusinessRequirement/>
     <div className="booking-process">
            <h1 className="fw-bold">Booking Process</h1>
            <p className="booking-process-subheading">The restaurant’s owner or manager can either accept or reject the food delivery order. As per the availability of food, the restaurant partner can customize the menu. </p>
            <div className="booking-process-body d-flex">
                <div className="booking-process-section1">
                    <img src="phone2 (1).png" alt="phone2" />
                    <h6 className="booking-process-subtext pt-2">User App</h6>

                </div>
                <div className="booking-process-section1">
                <img src="phone2 (2).png" alt="phone2" />
                <h6 className="booking-process-subtext pt-2">Driver App</h6>
                </div>
            </div>
     </div>
     <AppScreenshot/>
     </>
      
   );
 }
 
 export default BookingProcess;
 