import './homepage.css';

const Homepage = () =>{
    return(
     <div className="home-page">
        <div className="navigation_section">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand" href="#"><img src="/TeamTweaks-Logo2.png" alt="logo"/></span>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item me-5">
                    <span class="nav-link active" aria-current="page" href="#">Home</span>
                  </li>
                  
                  <li class="nav-item dropdown me-5">
                    <span class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </span>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><span class="dropdown-item" href="#">Action</span></li>
                      <li><span class="dropdown-item" href="#">Another action</span></li>
                      
                    </ul>
                  </li>

                  <li class="nav-item dropdown me-5">
                    <span class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </span>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><span class="dropdown-item" href="#">Action</span></li>
                      <li><span class="dropdown-item" href="#">Another action</span></li>
                      
                    </ul>
                  </li>
                  <li class="nav-item me-5">
                    <span class="nav-link active" aria-current="page" href="#">Blog</span>
                  </li>
                  <li class="nav-item me-5">
                    <span class="nav-link active" aria-current="page" href="#">Case Study</span>
                  </li>
                  <li class="nav-item me-5">
                  <button type="button" class="btn btn-success"><img src="white-arrow.png" alt="arrow"/>   Contact Us    </button>
                  </li>
                  
                </ul>
                
              </div>
            </div>
          </nav>
        </div>

        <div className='main-section'>
          <div className='left-main-section ms-0'>
            <div className="main-section-text">
            <h2 className="main-section-text1 fw-bold">The Right Platform for</h2>
            <h1 className="main-section-text2 fw-bolder">On Demand <span class="sub-text">Grocery App <br></br> Development </span>Solution</h1>
            <p className="main-section-text3">Successfully execute the busniess and enhance your sale by using our grocery app or custom built grocery app</p>
            </div>
            <div className="main-section-logo">
              <div className="logo-content-1">
                <img src="/vector-icons-2.png" alt="vector1"></img>
                <p className="pt-3">Budget<br/> Friendly</p>
              </div>

              <div className="logo-content-2">
                <img src="/vector-icons-3.png" alt="vector2"></img>
                <p className="pt-3">Responsive<br/> Design</p>
              </div>

              <div className="logo-content-3">
                <img src="/vector-icons-4.png" alt="vector3"></img>
                <p className="pt-3">One-Stop <br/>Solution</p>
              </div>

              <div className="logo-content-4">
                <img src="/vector-icons-1.png" alt="vector4"></img>
                <p className="pt-3">Custom <br/>built plans</p>
              </div>

            </div>
          </div>
          <div className='right-main-section'>
            <img src="/lady.png" alt="lady" className='lady-looking-phone-img'/>
          </div>
        </div>
    </div>
    )

}

export default Homepage;