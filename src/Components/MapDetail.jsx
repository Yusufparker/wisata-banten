import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "leaflet-routing-machine";
import RoutineMachine from "./RoutineMachine";

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap(); // Menggunakan useMap disini

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            const radius = e.accuracy;
            const circle = L.circleMarker(e.latlng, { radius }); // Gunakan L.circleMarker
            circle.addTo(map);
            setBbox(e.bounds.toBBoxString().split(","));
        });
    }, [map]);

    return position === null ? null : (
        <Marker position={position}>
        <Popup>
            You are here. <br />
            Map bbox: <br />
            <b>Southwest lng</b>: {bbox[0]} <br />
            <b>Southwest lat</b>: {bbox[1]} <br />
            <b>Northeast lng</b>: {bbox[2]} <br />
            <b>Northeast lat</b>: {bbox[3]}
        </Popup>
        </Marker>
    );
}

const MapDetail = ({ tour, onTrackedChange }) => {
    const [userLocation, setUserLocation] = useState(null);
    const [tracked, setTracked] =useState(false)

    const getLocation = () => {
        if(!tracked){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, long: longitude });
                    setTracked(true)
                    onTrackedChange(true);
                },
                (error) => {
                    console.error("Gagal mendapatkan lokasi pengguna:", error);
                }
            );
        }else{
            setTracked(false)
            onTrackedChange(false)
        }
    };
    const destination = {
        "lat" : tour.lat,
        "long": tour.long
    }
    

    return (
        <div className={`p-3 p-md-5 map-detail   ${tracked ? 'tracked' : ''}`}>
            <button onClick={getLocation} className="mb-3 border-0 bg-none fs-14 p-2 ps-3 pe-3  w-100">{tracked ? 'Batal' : 'Lacak Lokasi Anda'}</button>
            <MapContainer className="map-container"
            center={[tour.lat, tour.long]}
            style={{ height: "400px", width: "100%" }}
            zoom={tracked ? 15 : 8}
            // scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[tour.lat, tour.long]} key={tour.id}>
                    <Popup>
                    <div className="p-1">
                        <img src={tour.image} alt="" className="w-100" />
                    </div>
                    <p>{tour.name}</p>
                    </Popup>
                </Marker>
                {
                    userLocation !== null &&
                        <RoutineMachine 
                            destination={destination} 
                            userLocation={userLocation}
                        />
                }
            </MapContainer>
        </div>
    );
};

export default MapDetail;
