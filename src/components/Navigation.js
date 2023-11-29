const Navigation = () => {
    return (
        
        <div>

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#60beb5"}}>
                <a className="navbar-brand" href="/">My Awesome App Name</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/FoodLabels">Food Labels</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Importance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SupportUs">Support us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/TitleScreen">TitleScreen</a>
                    </li>
                    </ul>
                </div>
            </nav>

        </div>

        
    );
}
 
export default Navigation;


