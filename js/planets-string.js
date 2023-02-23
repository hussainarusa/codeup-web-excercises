(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // /**
    //  * TODO:
    //  * Convert planetsString to an array, and save it in a variable named
    //  * planetsArray.
    //

    //
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    //
    //  * console.log planetsArray to check your work
    //  */

    console.log(planetsArray);

    // /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?


    let listPlanets = planetsString.split("|");
    let brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    console.log(brlistPlanets);


    //  * BONUS:
    //  * Create another string that would display your planets in an un dordered
    //  * list. You will need an opening AND closing <ul> tags around the entire
    //  * string, and <li> tags around each planet.
    //  */

})();