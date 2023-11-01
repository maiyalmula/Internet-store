import './Footer.css'
function Footer(){
    return <div className="footer">
        <div className="conteiner">
            <div className="fashion">
                <div className="left-block">
                    <h1>FASHION</h1>
                    <p>Complete your style with awesome <br /> clothes from us.</p>
                    <div className="icons">
                        <img src="./icons/fb.png" alt="" />
                        <img src="./icons/inst.png" alt="" />
                        <img src="./icons/tw.png" alt="" />
                        <img src="./icons/in.png" alt="" />
                    </div>
                </div>
                <div className="right-block">
                    <div className="block">
                        <p>Company</p>
                        <a href="">About</a> <br />
                        <a href="">Contact us</a> <br />
                        <a href="">Support</a> <br />
                        <a href="">Careers</a> <br />        
                    </div>
                    <div className="block">
                        <p>Quick Link</p>
                        <a href="">Share Location</a><br />
                        <a href="">Orders Tracking</a><br />
                        <a href="">Size Guide</a><br />
                        <a href="">FAQs</a>            
                    </div>
                    <div className="block">
                        <p>Legal</p>
                        <a href="">Terms & conditions</a><br />
                        <a href="">Privacy Policy</a>           
                    </div>
                </div>

            </div>
        </div>
    </div>
}
export default Footer