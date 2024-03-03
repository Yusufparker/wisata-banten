import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from "react-router-dom";
import customMarkerIcon from './customMakerIcon';
function MapComponent({searchResults, data}) {
    const tours = searchResults.length > 0 ? searchResults : data

    return (
        <MapContainer
            center={[-6.4456544, 105.7077133, 9]}
            zoom={8}
            style={{ height: "400px", width: "100%" }}
            zoomControl={false}
            scrollWheelZoom={false}
            
        >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                tours.map(tour=>(
                    <Marker position={[tour.lat, tour.long]} key={tour.id} icon={customMarkerIcon}>
                        <Popup>
                            <div  className='p-1'>
                                <img src={tour.image} alt=""  className='w-100'/>
                            </div>
                            <p>{tour.name}</p>
                            <Link className='fs-12' to={`/destinasi/${tour.id}`}>Lihat Detail</Link>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    );
}

export default MapComponent