import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container-fluid navbar-container">
            <div className="container navbar-wrapper">
                <div className="row">
                    <div className="col-6 left-side text-start">
                        <Link to="/">North Shore Cleaning</Link>
                    </div>
                    <div className="col-6 right-side text-end">
                        <a href="#footer">Contact</a>
                        <Link to="/about">About Our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}