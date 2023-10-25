import './Promo.css'

function Promo(){
    return  <main>
        <div className="conteiner">
            <div className="promo">
            <div className="promo-img">
                        <img src="./header-img.jpg" alt="" />
                    </div>
                    <div className="promo__title">
                        <span className="highlight">
                            <span>LET’S <br /></span>
                        </span>
                        
                        EXPLORE <br />

                        <span className="highlight--yellow">
                            <span>UNIQUE<br /></span>
                        </span>

                        CLOTHES.
                    </div>
                    
                    <div className="promo__desc">
                        Live for Influential and Innovative fashion!
                    </div>

                    <div className="promo__ai">

                        <div className="promo__fig">
                            <img src="./images/line.png" alt="" />
                        </div>

                        <div className="promo__btn">
                            <a href="">Shop Now</a>
                    
                        </div> 

                    </div>

                     

                    
            </div>
        </div>
    </main>

}
export default Promo