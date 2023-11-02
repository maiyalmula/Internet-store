import './Favourites.css'

function Favourites(){
    return <div className="conteiner">
        <div className="favourites">
            <div className="fav-h1">
                <h1>Young’s Favourite</h1>
            </div>
            <div className="content">
                <div className="sex">
                    <img src="./images/01.jpg" alt="" />
                    <h4>Trending on instagram</h4>
                    <img className='arrow' src="./icons/Arrow.png" alt="" />
                    <p>Explore Now!</p>
                </div>
                <div className="sex">
                    <img src="./images/02.jpg" alt="" />
                    <h4>All Under $40</h4>
                    <img className='arrow' src="./icons/Arrow.png" alt="" />
                    <p>Explore Now!</p>
                </div>
            </div>
        </div>
    </div>
}
export default Favourites