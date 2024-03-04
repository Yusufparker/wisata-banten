
delete L.Icon.Default.prototype._getIconUrl;

const customMarkerIcon = {
    destination : new L.Icon({
                iconRetinaUrl: '/img/marker-icon-2x.png',
                iconUrl: '/img/marker-icon-2x.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            }),
    hotel : new L.Icon({
                iconRetinaUrl: '/img/hotel-marker2.png',
                iconUrl: '/img/hotel-marker2.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            })
}





export default customMarkerIcon