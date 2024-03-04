import { useParams, Link } from "react-router-dom";
import dataTour from "../utils/data_wisata.json";
import dataPenginapan from "../utils/data_penginapan.json"
import MapDetail from "../Components/MapDetail";
import { useState, useEffect } from "react";
import RecomendedPlace from "../Components/RecomendedPlace";

const DestinationDetail = () => {
    const [tracked, setTracked] = useState(false);
    const { id } = useParams();
    const [peninapan, setPenginapan] = useState([])
    
    // Mencari data tur berdasarkan ID
    const tour = dataTour.find(tour => tour.id ===id);


    // rumus buat ubah ke km
    function calculateDistanceInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius bumi dalam kilometer
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180); 
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
            Math.sin(dLon / 2) * Math.sin(dLon / 2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        const distance = R * c; // Jarak dalam kilometer
        return distance;
    }


    useEffect(() => {
        const filteredPenginapan = dataPenginapan.filter((penginapan) => {
            // Menggunakan rumus jarak Euclidean 
            const distance = Math.sqrt(
                Math.pow(penginapan.lat - tour.lat, 2) +
                Math.pow(penginapan.long - tour.long, 2)
            );

            // Menetapkan jarak maksimum yang diperbolehkan
            const maxDistance = 0.35;

            return distance <= maxDistance;
        });

        // Menambahkan jarak ke setiap objek penginapan
        const penginapanWithDistance = filteredPenginapan.map((penginapan) => {


            // ubah ke km buat dipake nantinya
            const distance = calculateDistanceInKm(penginapan.lat, penginapan.long, tour.lat, tour.long);
            return {
                ...penginapan,
                distance: distance
            };
        });

        setPenginapan(penginapanWithDistance);
    }, []);



    console.log(peninapan);


    
    const isiPesan = `Halo kak, saya ingin mengetahui info mengenai wisata di ${tour.name}`
    if (!tour) {
        return <div>Tur tidak ditemuka lorem100</div>;
    }

    const handleTrackedChange = (value) => {
        setTracked(value);
    };

    return (
        <div className={`detail-destinasi  ${tracked ? 'tracked' : ''}`}>
            <div className="header overflow-hidden position-relative">
                <img src={tour.image} className="w-100" alt="" />
                <h1 className="fw-bold position-absolute text-center text-shadow-lg">{tour.name}</h1>
            </div>
            <div className="container mt-5 mb-2 ">
                <div className="row">
                    <div className="col-md-6 order-md-2 d-flex align-items-center">
                        <div>
                            <h1 className="mb-5"><i className="bi bi-geo-alt-fill text-danger"></i> {tour.location} -  Banten</h1>
                            <p className="fs-14">{tour.desc}</p>
                            <Link to={`https://wa.me/${tour.contact}?text=${isiPesan}`} target="_blank" className="fs-14  mt-3 mb-5 rounded-0 text-white btn btn-warning p-2 ps-3 pe-3 d-inline-block"><i className="bi bi-whatsapp"></i> Hubungi Admin</Link>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img src={tour.image} className="w-100" alt="" />
                    </div>
                </div>
            </div>


            <MapDetail tour={tour} onTrackedChange={handleTrackedChange} penginapan={peninapan} />
            <hr />
            <RecomendedPlace penginapan={peninapan} />

        </div>
    );
};

export default DestinationDetail;
