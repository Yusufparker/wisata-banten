import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useState, useEffect } from "react";
import "leaflet-routing-machine";
import RoutineMachine from "./RoutineMachine";

import customMarkerIcon from "./customMakerIcon";


const MapDetail = ({ tour, onTrackedChange }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [tracked, setTracked] =useState(false)
    const [distance, setDistance] = useState(null)
    const [zoomLevel, setZoomLevel] = useState(8);

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

    useEffect(() => {
        // If userLocation is set, change zoom level
        if (userLocation) {
            setZoomLevel(15);
        } else {
            setZoomLevel(8);
        }
    }, [userLocation]);
    const destination = {
        "lat" : tour.lat,
        "long": tour.long
    }
    

    return (
        <div className={`p-3 p-md-5 map-detail   ${tracked ? 'tracked' : ''}`}>
            <button onClick={getLocation} className="mb-3 border-0 bg-none fs-14 p-2 ps-3 pe-3  w-100">{tracked ? 'Batal' : 'Lacak Lokasi Anda'}</button>
            {
                distance !== null && (
                    <p className="text-center">Total Jarak : <span className="fw-bold">{distance} KM</span></p>
                )
            }
            <MapContainer className="map-container"
            center={ tracked ? [userLocation.lat, userLocation.long] : [tour.lat, tour.long]}
            style={{ height: "400px", width: "100%" }}
            zoom={zoomLevel}
            // scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[tour.lat, tour.long]} key={tour.id} icon={customMarkerIcon}>
                    <Popup>
                    <div className="p-1">
                        <img src={tour.image} alt="" className="w-100" />
                    </div>
                    <p>{tour.name}</p>
                    </Popup>
                </Marker>

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
