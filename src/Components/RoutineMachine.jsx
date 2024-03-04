import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import customMarkerIcon from "./customMakerIcon";

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(props.destination.lat, props.destination.long),
            L.latLng(props.userLocation.lat,props.userLocation.long)
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 3 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: true,
        createMarker: function (i, waypoint, n) {
            return L.marker(waypoint.latLng, {
                icon: customMarkerIcon['destination']
            });
        }
    });

    instance.on('routesfound', function(e) {
        const routes = e.routes;
        const distanceInMeters = routes[0].summary.totalDistance; // Jarak dalam meter
        const distanceInKilometers = distanceInMeters / 1000; // Konversi ke kilometer
        console.log('Jarak tempuh:', distanceInKilometers, 'km');
        // kirim state ke parent
        props.onChangeDistance(distanceInKilometers)

        
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;


