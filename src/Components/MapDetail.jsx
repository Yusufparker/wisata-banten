import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useState, useEffect } from "react";
import "leaflet-routing-machine";
import RoutineMachine from "./RoutineMachine";

import customMarkerIcon from "./customMakerIcon";



const DistanceLoading = () =>{
    return(
        <di className="text-center mb-5 mt-3"  >
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <p className="fs-12 mt-2">Menghitung Jarak..</p>
        </di>
    )
}










const MapDetail = ({ tour, onTrackedChange, penginapan }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [tracked, setTracked] =useState(false)
    const [distance, setDistance] = useState(null)

    const onChangeDistance = (value) =>{
        setDistance(value)
    }

    // track lokasi
    const getLocation = () => {
        if(!tracked){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, long: longitude });
                    setTracked(true)
                    onTrackedChange(true);
                    window.scrollTo(0, 0);
                },
                (error) => {
                    console.error("Gagal mendapatkan lokasi pengguna:", error);
                }
            );
        }else{
            setUserLocation(null)
            setTracked(false)
            onTrackedChange(false)
            setDistance(null)
        }
    };


    const destination = {
        "lat" : tour.lat,
        "long": tour.long
    }
    

    return (
        <div className={`p-3 p-md-5 map-detail   ${tracked ? 'tracked' : ''}`}>
            <button onClick={getLocation} className="mb-3 border-0 bg-none fs-14 p-2 ps-3 pe-3  w-100">{tracked ? 'Batal' : 'Lacak Lokasi Anda'}</button>
            {
                tracked  && (
                    distance !== null 
                    ? 
                        <p className="text-center">Total Jarak : <span className="fw-bold">{distance} KM</span></p>
                    : 
                        // ada loading spinner saat nunggu jarak
                        <DistanceLoading/>


                )
            }
            <MapContainer className="map-container"
            center={ tracked ? [userLocation.lat, userLocation.long] : [tour.lat, tour.long]}
            style={{ height: "400px", width: "100%" }}
            zoom={8}
            // scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[tour.lat, tour.long]} key={tour.id} icon={customMarkerIcon['destination']}>
                    <Popup>
                    <div className="p-1">
                        <img src={tour.image} alt="" className="w-100" />
                    </div>
                    <p>{tour.name}</p>
                    </Popup>
                </Marker>

                {
                    penginapan.map(p => (
                        <Marker position={[p.lat, p.long]} key={p.id} icon={customMarkerIcon['hotel']}>
                            <Popup>
                            <div className="p-1">
                                <img src={p.image} alt="" className="w-100" />
                            </div>
                            <p>{p.name}</p>
                            </Popup>
                        </Marker>
                    ))
                }

                {/* tracking ke destinasi tujuan */}
                {
                    userLocation !== null &&
                        <RoutineMachine 
                            destination={destination} 
                            userLocation={userLocation}
                            onChangeDistance={onChangeDistance}
                        />
                }
            </MapContainer>
        </div>
    );
};

export default MapDetail;
