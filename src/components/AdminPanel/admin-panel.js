 
 import './admin-panel.css';
 import ReachUs from './reach-us';
 import WhyChooseUs from './why-choose-us';



 function AdminPanel() {
   return (
    <>
    <div className="eigthth-page">
     <h1 className="eighth-page-text">Admin Panel</h1>
             <p className="eighth-page-text">The web panel affords the apt set of tools for handling the online e-commerce store seamlessly</p>
            <div className="card-list">
                <div className="card card1">
                    <img src="vector-icons-19.png" alt="icon1" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">Access & Control</h6>
                    <p>The admin can track the orders and manage the revenue persistently.</p>
                </div>
                <div className="card card2">
                    <img src="vector-icons-20.png" alt="icon2" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">Instant notifications</h6>
                    <p>The updates will be sent instantly through SMS, email, and push notifications.</p>
                </div>
                <div className="card card3">
                    <img src="vector-icons-21.png" alt="icon3" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">Manage users</h6>
                    <p>Manage & save customer details like contact numbers, orders, delivery addresses, etc.</p>
                </div>
                <div className="card card4">
                    <img src="vector-icons-22.png" alt="icon3" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">Real-time synchronization</h6>
                    <p> Manage & save customer in her control. That didn't stop her from trying to control the situation.</p>
                </div>
         
          
                <div className="card card10">
                    <img src="vector-icons-23.png" alt="icon3" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">User Account Management</h6>
                    <p>The admin can track the order chiseling the ice and then pouring a drink over it looked </p>
                </div>
               
                <div className="card card12">
                    <img src="vector-icons-20.png" alt="icon3" className="card-img-top"/>
                    <h6 className="pt-3 fw-bold text-center">Multi Currency Support</h6>
                    <p>The updates will be sent drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked </p>
                </div>
 
            </div>
    </div>
    <ReachUs/>
    <WhyChooseUs/>
    </>
   );
 }
 
 export default AdminPanel;
 