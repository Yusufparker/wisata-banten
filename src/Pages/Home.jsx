import BantenNews from "../Components/BantenNews"
import PopularTours from "../Components/PopularTours"
import heroVideo from "../assets/video/0221.mp4"
import dataTour from "../utils/data_wisata.json"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Contact = () =>{
    const [message,setMessage] = useState('')

    const handleSubmit = ()  => {
        const subject = encodeURIComponent(
            "Pesan dari website Wisata Banten."
        );
        const body = encodeURIComponent(message);

        window.location.href = `mailto:muhammadyusuf@yusufparker.com?subject=${subject}&body=${body}`;
    }

    return(
        <div className="contact mt-5 mb-5">
            <div className="container">
                <h1 className="text-center fw-bold"><span className="text-warning text-shadow">Hubungi</span> Kami</h1>
                <p className="text-center">Ada pertanyaan? Jangan ragu untuk menghubungi kami!</p>
                <form className="text-center mt-4" onSubmit={handleSubmit}>
                    <div className="col-md-6 m-auto">
                        <input type="text" className="w-100" value={message} required onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button className="mt-3 rounded border fs-14 ps-3 pe-3 pt-2 pb-2 btn btn-warning">Kirim Pesan</button>

                </form>
            </div>
        </div>
    )
}









const Gallery = () =>{
    return(
        <div className="gallery  mb-5 text-white bg-gelap p-3 pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 pe-4">
                        <h1 className="text-warning">Wisata Banten</h1>
                        <p>Dengan keramahan penduduknya dan kekayaan budayanya yang memikat, Banten siap menyambut Anda untuk menjelajahi pesonanya yang tiada duanya. Selamat menikmati petualangan tak terlupakan di Banten!</p>

                    </div>
                    <div className="col-md-7 mb-4 " data-aos="zoom-in-up">
                        <div style={{height:"300px"}} className="overflow-hidden first-image">
                            <img src="img/6.jpg" alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pe-md-3 mb-4" data-aos="zoom-in-up">
                        <div>
                            <img src="img/pantai-gallery.jpg" alt="" className="w-100"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 pe-md-3 " data-aos="zoom-in-up"> 
                                <div>
                                    <img src="img/2.jpg" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-6 pe-md-3 " data-aos="zoom-in-up">
                                <div>
                                    <img src="img/4.jpg" alt="" className="img-fluid"/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}




const Home = () => {
    const [tours, setTours] = useState([]);
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
        setTours(dataTour);
    }, []);

    // console.log(tours);

    // filter search 
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearch(term);

        if (term.trim() === "") {
            setSearchResults([]);
        } else {
            const filteredResults = tours.filter((tour) =>
            tour.name.toLowerCase().includes(term.toLowerCase())
            );

            setSearchResults(filteredResults);
        }
    };


    // handle hilangkan drop
    const handleOnBlur = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setIsFocused(false);
        }, 300);
    }

    
    


    return (
    <div className="home">
        <div className="hero overflow-hidden position-relative">
            <video src={heroVideo} className="w-100 object-fit-cover" autoPlay loop muted />
            <div className="position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="text-white  p-3 desc position-relative">
                    <h3  className="fw-bold text-shadow text-center">Panduan Wisata</h3>
                    <h3 className="fw-bold text-shadow text-center" style={{marginTop:'-10px'}}>Menggali Kekayaan Wisata Banten</h3>
                    <div className="input-grup mt-4   position-relative ">
                        <input type="text" className="w-100  border-0 shadow-lg " value={search} onBlur={handleOnBlur}  onFocus={() => setIsFocused(true)} onChange={handleSearchChange} />
                        <button className=" position-absolute border-0 bg-warning"><i className="bi bi-search"></i></button>
                    </div>
                    <div className={`drop-search position-absolute bg-white text-black ${isFocused ? 'active' : ''}`}>
                        {
                            searchResults.length > 0 ?
                            searchResults.map(search =>(
                                <Link className="row mb-3 text-black" to={`/destinasi/${search.id}`} key={search.id}>
                                    <div className="col-md-2 col-4">
                                        <img src={search.image} alt="" className="w-100" />
                                    </div>
                                    <div className="col">
                                        <h5>{search.name}</h5>
                                        <p className="fs-12">{search.desc.substring(0,100)}...</p>
                                    </div>
                                </Link>
                            ))
                            :
                            <div className="fs-12 text-secondary text-center fw-bold">
                                "Tidak Ada Hasil Yang Ditemukan <i className="bi bi-search"></i>"
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>
        <PopularTours/>
        <div className="about  mb-5 container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-5 rounded image" data-aos="zoom-in-up">
                    <img src="img/menara banten senja.jpg" alt="menara banten" className="img-fluid"  />
                </div>
                <div className="col-md-6 d-flex align-items-center desc" data-aos="zoom-in-up">
                    <div>
                        <h2 style={{fontSize:"60px"}}  className="fw-bold text-warning text-shadow">Tentang</h2>
                        <h1 className="fw-bold" style={{fontSize:"65px"}}>Wisata Banten</h1>
                        <p className="fs-13">Banten, provinsi yang kaya akan sejarah dan keindahan alam, merupakan destinasi yang menakjubkan bagi para pelancong. Dengan pesona alamnya yang menawan, warisan budayanya yang kaya, dan beragam atraksi wisatanya, Banten menawarkan pengalaman yang tak terlupakan bagi setiap pengunjung..</p>
                        <Link to='/tentang'>Lihat Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </div>
        
        {/* destinasi */}
        <div className="destinasi  mb-5">
            <div className="container">
                <h2 className="fw-bold text-center text-warning text-shadow" style={{fontSize:"60px"}} >Eksploras<i className="bi bi-geo-fill"></i></h2>
                <h1 className="fw-bold text-center mb-5" style={{fontSize:"65px"}}>Destinasi Impian</h1>
                <div className="row">
                    {
                        tours.slice(0, 3).map(tour => (
                            <Link to={`/destinasi/${tour.id}`} className="col-md-4 card-destinasi mb-4 text-black" data-aos="zoom-in-up" key={tour.id}>
                                <div className="image text-center">
                                    <img src={tour.image} alt={tour.name} className="w-100" />
                                </div>
                                <div className="mt-3 d-flex justify-content-between">
                                    <h5 className="fs-14 fw-bold">{tour.name}</h5>
                                    <p className="fs-12"><i className="bi bi-geo-alt-fill text-danger"></i> {tour.location}</p>
                                </div>
                                <p className="fs-12">{tour.desc.substring(0,100)}...</p>
                                
                            </Link>
                        ))
                    }
                </div>
                <div className="text-center">
                    <Link to='/destinasi' className="more">Lihat Selengkapnya</Link>
                </div>
            </div>
        </div>
        <Gallery/>

        <BantenNews/>
        <hr />
        <Contact/>
        
        

        
    </div>
    )
}

export default Home
