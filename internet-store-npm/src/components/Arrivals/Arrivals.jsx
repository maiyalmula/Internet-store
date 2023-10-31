import './Arrivals.css'
import Props from './Props.jsx'
import {sections} from './section.data.js'

function Arrivals(){
    return <div className="conteiner">
        <div className="hero-section">
            <div className="hero-text">
                <h1>NEW ARRIVALS</h1>
            </div>
            <div className="hero-section-props">
                {sections.map(section=>(
                    <Props key={section.id} section={section}/>
                ))}
            </div>
        </div>
    </div>
}
export default Arrivals