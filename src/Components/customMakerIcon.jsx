
delete L.Icon.Default.prototype._getIconUrl;

const customMarkerIcon = new L.Icon({
    iconRetinaUrl: '/img/marker-icon-2x.png',
    iconUrl: '/img/marker-icon.png',
    shadowUrl: '/img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

export default customMarkerIcon