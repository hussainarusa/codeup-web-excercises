(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

         planetsArray = planetsString.split("|")

     console.log(planetsArray)

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

        let planetsList= planetsString.split("|")
         console.log(planetsList)

        let brPlanets = planetsList.join ('<br>')


        console.log(brPlanets);


        // take an array split it up and essentially add html styling , when you send to the html page


    let listPlanets = planetsString.split("|");
    let brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    console.log(brlistPlanets);



})();