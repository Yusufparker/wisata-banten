import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="p-5 pb-1 bg-gelap text-white">
            <div className="container">
                <h1 className="fs-4 text-center fw-bold ">Wisata Banten<span className="fs-1 text-warning ms-1">.</span></h1>
                <ul className="d-flex justify-content-center list-unstyled fs-12 mt-2" style={{gap:"20px"}}>
                    <li><Link className="text-white" to="/">Beranda</Link></li>
                    <li><Link className="text-white" to="/tentang">Tentang</Link></li>
                    <li><Link className="text-white" to="/destinasi">Destinasi</Link></li>
                </ul>
                <div className="sosmed d-flex justify-content-center mt-4" style={{gap:"10px"}}>
                    <Link><i className="bi bi-instagram"></i></Link>
                    <Link><i className="bi bi-youtube"></i></Link>
                    <Link><i className="bi bi-linkedin"></i></Link>
                    <Link><i className="bi bi-twitter-x"></i></Link>
                </div>
                <p className="text-center mt-5 fs-14">Copyright © {new Date().getFullYear()} Muhammad Yusuf | All rights reserved.</p>

            </div>
        </footer>
    )
}

export default Footer
