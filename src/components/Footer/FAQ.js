 
 import './FAQ.css'

 function FAQ() {
   return (
     <div className="FAQ">
        <div className="FAQ-heading">
            <h1 className="fw-bold text-center">Frequently<span className="FAQ-sub-text"> Asked Question</span></h1>
        </div>
        <div className="FAQ-body d-flex">
            <div className="FAQ-section-1">
            <div class="accordion" id="accordion-Faq-1">
                <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How do I place an order?
                        <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion-Faq-1">
                        <div class="accordion-body">
                        Go to the app, add items to your cart, proceed to checkout, and confirm the order.
                        </div>
                        </div>
                </div>
                 
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How can I track my order?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>

                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    Track your order in the "My Orders" section, where you can see the status and estimated delivery time.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What are the available payment methods?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    We accept credit/debit cards, net banking, UPI, digital wallets, and cash on delivery (COD).
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    What if an item I ordered is unavailable?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    If an item is unavailable after you’ve placed the order, we will notify you through the app or via email. 
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    Can I schedule my delivery for a specific time?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    Can I schedule my delivery for a specific time? 
                    </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="FAQ-section-1">
            <div class="accordion" id="accordionFaq2">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseOne">
                    How do I place an order?
                    <img src="tick-circle.png" alt="circle" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq2">
                    <div class="accordion-body">
                    Go to the app, add items to your cart, proceed to checkout, and confirm the order.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseTwo">
                    How can I track my order?
                    <img src="tick-circle.png" alt="circle" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq2">
                    <div class="accordion-body">
                    Track your order in the "My Orders" section, where you can see the status and estimated delivery time.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
                    What are the available payment methods
                    <img src="tick-circle.png" alt="circle" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq2">
                    <div class="accordion-body">
                    We accept credit/debit cards, net banking, UPI, digital wallets, and cash on delivery (COD).
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseThree">
                    What if an item I ordered is unavailable?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq2">
                    <div class="accordion-body">
                    If an item is unavailable after you’ve placed the order, we will notify you through the app or via email. 
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseThree">
                    Can I schedule my delivery for a specific time?
                    <img src="tick-circle.png" alt="arrow" className="accordian-icon"/>
                    </button>
                    </h2>
                    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq2">
                    <div class="accordion-body">
                    Can I schedule my delivery for a specific time? 
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
           
    );
 }
 
 export default FAQ;
 