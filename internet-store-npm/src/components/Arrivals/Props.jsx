import './Arrivals.css'

function Props({section}){
    return <>
        <div key ={section.id} className="section">
            <img src={section.img} alt="" className="section-girl"/>
            <h1>{section.h1}</h1>
            <img src={section.arrow} className='arrow' alt="" />
            <p>{section.p}</p>
            
        </div>
    </>
}
export default Props