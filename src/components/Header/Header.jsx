import './Header.css'


function Header(){
    return <header>
        <div className="conteiner">
            <div className="nav-bar">
                <div className='nav-logo'>
                    <img src="./icons/Vector.png" alt="" />
                    <a href="#!">Fasion</a>
                </div>
                <div className="nav-right">
                    <a href="">CATALOGU</a>
                    <a href="">FASHION</a>
                    <a href="">FAVOURITE</a>
                    <a href="">LIFESTYLE</a>
                    <a href="">SIGN UP</a>
                </div>
            </div>
        </div>
    </header>
}

export default Header
