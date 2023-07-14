$(() => {



// Global Variables

    const map = initializeMap();
    const favRestaurantButton = document.querySelector('#fav-restaurant-button');
    const favRestaurantsButton = document.querySelector('#fav-restaurants-button');
    const markers = [];
    const favRestaurants = [

        {name: "Tarka", address: "427 TX-1604 Loop Ste 101, San Antonio, TX 78232", info: "Very yummy indian food that is almost authentic!"},
        {name: "Earth Burger",address:"Park North Shopping Center NW Loop 410, Bldg. L-7, 818 I- 410 Access Rd, San Antonio, TX 78216" , info: "Delicious fully vegan fast food menu!"},
        {name: "Vegan Sun", address:"225 W Center St, Provo, UT 84601" , info: "Hidden gem for vietnamese vegan food in Utah!"}
    ];



// Functions
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_API_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }


    // favorite restaurant
    function showFavRestaurantCity() {
        geocode('San Antonio, Texas', MAPBOX_API_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(9);
            })
    }

    // Create marker
    function showFavRestaurant(favRestaurant) {
        geocode(favRestaurant.address, MAPBOX_API_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(15);
                const marker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map);
                const popup = new mapboxgl.Popup()
                    .setHTML(favRestaurant.name);
                marker.setPopup(popup);
                markers.push(marker);
            })
    }


    function showFavRestaurants() {
        favRestaurants.forEach((favRestaurant) => {
            showFavRestaurant(favRestaurant);
        })
    }



// Events

    favRestaurantButton.addEventListener('click', () => showFavRestaurant(
        {
            address: "225 W Center St, Provo, UT 84601",
            name: "Vegan Sun"
        }
    ));
    favRestaurantsButton.addEventListener('click', showFavRestaurants);



// Run When App Loads

    showFavRestaurantCity();






























})