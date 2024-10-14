 
 import './app-screenshot.css'

 function AppScreenshot() {
   return (
     <div className="app-screenshot">
        <div className="app-screenshot-body d-flex">
            <div className="app-screenshot-section-1">
                <h1 className="app-screenshot-header">App screenshots</h1>
                <p className="app-screenshot-header">Make your business run smoother, improve customer<br/> service, and speed up deliveries. Take your grocery<br/> business to new heights.</p>
                <button className="app-screenshot-button1">User App</button>
                <button className="app-screenshot-button2">Delivery App</button>
            </div>
            <div className="app-screenshot-section-2">
                 <img src=" app_screenshot (1).png" alt=" app_screenshot (1)"/>
            </div>
            <div className="app-screenshot-section-3">
                 <img src=" app_screenshot (4).png" alt=" app_screenshot (2)"/>
            </div>
            <div className="app-screenshot-section-4">
                 <img src=" app_screenshot (3).png" alt=" app_screenshot (3)"/>
            </div>
            
        </div>
           
     </div>
   );
 }
 
 export default AppScreenshot;
 