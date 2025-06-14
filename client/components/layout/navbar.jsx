export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Casa De Danica</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Porac Pampanga Branch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" hx-get="/booking" hx-swap="afterend">Book Now</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" hx-get="/track" hx-swap="afterend">Track Your Booking</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}