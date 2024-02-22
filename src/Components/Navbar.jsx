import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    const [navActive , setNavActive] = useState(false)

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navBgClass = scrollPosition > 100 ? "bg-black" : "";

    const handleToggleNav = () =>[
        setNavActive(!navActive)
    ]

    return (
        <>
        <nav className={` fixed-top ${navBgClass}`}>
            <div className="container  p-3 d-flex align-items-center justify-content-between">
                <div className="logo">
                    <Link className="text-white" to=""><h1 className="fs-4 fw-bold text-shadow">Wisata Banten<span className="fs-1 text-warning ms-1">.</span></h1></Link>
                </div>
                <div className="humberger">
                    <button onClick={handleToggleNav}><i className="bi bi-list"></i></button>
                </div>
                <div className={`nav-list pt-3 ${navActive ? 'active' : ''}`}>
                    <button onClick={handleToggleNav}><i className="bi bi-x-lg"></i></button>
                    <ul className="list-unstyled">
                        <li className="me-5 d-inline-block">
                            <Link to="/" className="text-decoration-none text-white ">Beranda</Link>
                        </li>
                        <li className="me-5  d-inline-block">
                            <Link to="/tentang" className="text-decoration-none text-white">Tentang</Link>
                        </li>
                        <li className="me-5  d-inline-block">
                            <Link to="/destinasi" className="text-decoration-none text-white">Destinasi</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        </>
    )
}

export default Navbar
