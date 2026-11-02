export function Footer() {
    return (

        <footer id="footer" className="footer-light">






            <div className="footer-main-wrapper">
                <div className="container footer-main">
                    <div className="row sm-gutters">

                        <div className="col-md-3">
                            <nav className="footer-links nav-collapsible">
                                <h4 className="footer-title nav-toggler collapsed" data-toggle="collapse" data-target="#footer-info" aria-controls="footer-info" aria-expanded="false">
                                    Information
                                </h4>
                                <div className="collapse nav-collapse" id="footer-info">


                                    <div className="cms-menu cms-menu-linklist" data-menu-name="footerinformation">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#" className="menu-link">

                                                    <span>What's New</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="menu-link">

                                                    <span>Recently viewed products</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="col-md-3">
                            <nav className="footer-links nav-collapsible">
                                <h4 className="footer-title nav-toggler collapsed" data-toggle="collapse" data-target="#footer-service" aria-controls="footer-service" aria-expanded="false">
                                    <span className="d-none d-md-block">Service</span>
                                    <span className="d-md-none">Service</span>
                                </h4>
                                <div className="collapse nav-collapse" id="footer-service">


                                    <div className="cms-menu cms-menu-linklist" data-menu-name="footerservice">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#" className="menu-link">

                                                    <span>Contact us</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="col-md-3">
                            <nav className="footer-links company nav-collapsible">
                                <h4 className="footer-title nav-toggler collapsed" data-toggle="collapse" data-target="#footer-company" aria-controls="footer-company" aria-expanded="false">
                                    <span className="d-none d-md-block">Company</span>
                                    <span className="d-md-none">Company</span>
                                </h4>
                                <div className="collapse nav-collapse" id="footer-company">


                                    <div className="cms-menu cms-menu-linklist" data-menu-name="footercompany">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#" className="menu-link">

                                                    <span>Privacy policy</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="col-md-3 order-first">



                            <div className="theme-selector d-none d-md-block">
                                <h4>Themes</h4>
                                <div className="content">
                                      
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



            <div className="footer-bottom-wrapper">
                <div className="container footer-bottom">
                    <div className="row sm-gutters">


                        <div className="col-12 col-sm-auto pb-1 pb-sm-0 text-sm-center">
                        </div>

                        <div className="col text-sm-right">
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
