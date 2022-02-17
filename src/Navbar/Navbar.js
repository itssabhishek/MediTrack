function Navbar() {
    return (<header className="d-flex align-items-baseline text-white" style={{height:100+'vh'}}>
        <div className="d-flex flex-column align-self-stretch flex-shrink-0 bg-red-700 " style={{width: 4.5 +'rem'}}>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip"
               data-bs-placement="right" data-bs-original-title="Icon-only">
                <svg className="bi" width="40" height="32">
                    <use xlinkHref="#bootstrap"/>
                </svg>
                <span className="visually-hidden">Icon-only</span>
            </a>
        </div>
        <div className="d-flex align-items-center w-100 bg-dark h-20">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    {/*<li><a href="#" className="nav-link px-2 text-secondary"><img className={"img-thumbnail"} src={"/images/MediTrackIconWithBG.jpg"} alt={"Meditrack"}/></a></li>*/}
                    <li><a href="#" className="nav-link px-2 text-secondary">Dashboard</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Nearby Hospitals & Medical</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Healthcare Products</a></li>
                    <li><a href="#" className="nav-link px-2 text-white">Helps</a></li>
                </ul>
            </div>
        </div>
    </header>)
}

export default Navbar;