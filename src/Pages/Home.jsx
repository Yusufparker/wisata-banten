import PopularTours from "../Components/PopularTours"
import heroVideo from "../assets/video/0221.mp4"
import dataTour from "../utils/data_wisata.json"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const Home = () => {
    const [tours, setTours] = useState([]);
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
        setTours(dataTour);
    }, []);

    // console.log(tours);

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
                    <div className={`drop-search position-absolute bg-white text-black ${isFocused ? '' : 'd-none'}`}>
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
                            <div className="fs-12 text-center">
                                Kosong
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>
        <PopularTours/>

        
    </div>
    )
}

export default Home
