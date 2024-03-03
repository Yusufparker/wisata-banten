import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        waypoints: [
        L.latLng(props.destination.lat, props.destination.long),
        L.latLng(props.userLocation.lat,props.userLocation.long)
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: true


    });

    

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
