document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.getElementById("setMarkerButton").addEventListener('click', event=>{
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

const restaurants =[
    {name: "Tarka", longitude: -98.499786, latitude: 29.609840, info: "Very yummy indian food that is almost authentic!"},
    {name: "Earth Burger", longitude: -98.604520, latitude: 29.481310, info: "Delicious fully vegan fast food menu!"},
    {name: "Vegan Sun", longitude: -111.662781, latitude: 40.233280, info: "Hidden gem for vietnamese vegan food in Utah!"}
];
restaurants.forEach(restaurant=>{
    const element = document.createElement("div");
    element.className = 'marker';
    const marker = new mapboxgl.Marker(element)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`
            <p class="popup">${restaurant.name}</p>
            <p>${restaurant.info}</p>
                `);
    marker.setPopup(popup);
});


document.querySelector("#hideMarkers").addEventListener('click', event=>{
    document.querySelectorAll(".mapboxgl-marker").forEach(svg=>{
        svg.style.display = "none";
    });
});