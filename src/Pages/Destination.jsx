import {useState, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import dataTour from "../utils/data_wisata.json"
import { Link } from 'react-router-dom';
import MapComponent from '../Components/MapComponent';


const DestinationCard = ({tour}) =>{
    return(
        <>
                <div className="row mb-5 mt-5">
                    <div className="col-md-5 overflow-hidden mb-3" style={{height:"250px"}}>
                        <img src={tour.image} alt={tour.name} className='h-100 w-100' style={{objectFit: 'cover'}}  />
                    </div>
                    <div className="col-md-6">
                        <h3 className='fw-bold'>{tour.name}</h3>
                        <p className='fs-14'>
                            <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                            {tour.location}

                        </p>
                        <p className='fs-14'>{tour.desc.substring(0,200)}...</p>
                        <Link className='btn btn-warning rounded-0 fs-12 mt-3 p-2 ps-4 pe-4 text-white' to={`/destinasi/${tour.id}`}>Lihat Detail</Link>
                    </div>
                </div>
                <hr />
            </>
    )
}


const Destination = () => {
    const [tours, setTours] = useState([]);
    const [count,setCount] = useState(3)
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTours(dataTour);
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get("s");
        if (searchTerm) {
            setSearch(searchTerm);
        }
    }, []);

    useEffect(() => {
        const term = search;
        if (term.trim() === "") {
            setSearchResults([]);
        } else {
            const filteredResults = tours.filter(
                (tour) =>
                // berdasarkan nama dan lokasi
                tour.name.toLowerCase().includes(term.toLowerCase()) ||
                tour.location.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    }, [search, tours]);


    // console.log(searchResults);


    

    const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearch(term);

    if (term.trim() === "") {
        setSearchResults([]);
    } else {
        const filteredResults = tours.filter((tour) =>
            // berdasarkan nama dan lokasi
            tour.name.toLowerCase().includes(term.toLowerCase()) || 
            tour.location.toLowerCase().includes(term.toLowerCase()) 
        );

        setSearchResults(filteredResults);
    }
};



    return (
        <div className="mt-5 pt-4 destination-page">
            <MapComponent searchResults={searchResults} data={tours} />
            <div className="container mt-5 mb-5">
                <div className='row'>
                    <h2 className="fw-bold col-md-2">Destinasi</h2>
                    <div className='col-md-10 d-flex align-items-center p-3 p-md-0 position-relative'>
                        <i className="bi bi-geo-alt-fill position-absolute"></i>
                        <input type="text" className='w-100 ps-4' placeholder='Cari Disini' value={search} onChange={handleSearchChange} />
                    </div>

                </div>
                <div className="destination-list mt-5">
                    {   search.length <= 0 ?
                        tours.slice(0, count).map(tour => (
                            <DestinationCard tour={tour}  key={tour.id}/>
                        ))
                        :
                        searchResults.length > 0 ?
                        searchResults.map(tour => (
                            <DestinationCard tour={tour}  key={tour.id}/>
                        ))

                        :
                        <div className='text-center fw-bold'>
                        Destinasi dengan nama "{search}" tidak ditemukan.
                        </div>
                    }
                </div>
                {
                    count < tours.length && search.length <= 0 && (
                        <button onClick={() => setCount(count + 5)} className='w-100 p-2 fs-12 border-0 btn-more'>
                            Lihat Lebih Banyak
                        </button>
                    )
                }

            </div>
        </div>
    )
}

export default Destination
