const Navigation = () => {
    return (
        
        <div>

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#219C90"}}>
                <a className="navbar-brand" href="/">My Awesome App Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Food Labels</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Importance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Support us</a>
                    </li>
                    </ul>
                </div>
            </nav>

        </div>

        
    );
}
 
export default Navigation;


