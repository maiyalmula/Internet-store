import './Arrivals.css'
import sections from './Props.jsx'

function Arrivals(){
    return <div className="conteiner">
        <div className="hero-section">
            <div className="hero-text">
                <h1>NEW ARRIVALS</h1>
            </div>
            <div className="hero-section">
                {sections.map(section=>{
                    
                })}
            </div>
        </div>
    </div>
}
export default Arrivals