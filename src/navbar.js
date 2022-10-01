import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="container navbar-wrapper">
                <div className="row">
                    <div className="col-6 left-side text-start">
                        SW Headstone Restoration
                    </div>
                    <div className="col-6 right-side text-end">
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}