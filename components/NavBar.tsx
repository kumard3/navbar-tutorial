export default function NavBar() {
    return (
        <div className="header header-fixed">
        <div className="navbar container">
            <div className="logo"><a href="#home">LOGO</a></div>
            <input type="checkbox" id="navbar-toggle" />
            <label htmlFor="navbar-toggle"><i></i></label>
            <nav className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>        
        </div>
    </div>
          
    )
}
