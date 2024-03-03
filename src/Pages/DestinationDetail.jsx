import { useParams } from "react-router-dom";
import dataTour from "../utils/data_wisata.json";
import MapDetail from "../Components/MapDetail";
import { useState } from "react";

const DestinationDetail = () => {
    const [tracked, setTracked] = useState(false);
    const { id } = useParams();

    // Mencari data tur berdasarkan ID
    const tour = dataTour.find(tour => tour.id ===id);

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
            <div className="container mt-5 mb-5 ">
                <div className="row">
                    <div className="col-md-6 order-md-2 d-flex align-items-center">
                        <div>
                            <h1 className="mb-5"><i className="bi bi-geo-alt-fill text-danger"></i> {tour.location} -  Banten</h1>
                            <p className="fs-14">{tour.desc}</p>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img src={tour.image} className="w-100" alt="" />
                    </div>
                </div>
            </div>

            <MapDetail tour={tour} onTrackedChange={handleTrackedChange} />

        </div>
    );
};

export default DestinationDetail;
