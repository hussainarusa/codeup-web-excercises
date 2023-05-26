

/*
    TODO: Using separation of concern principles, module syntax, and
        async/await, create a series of code that:
        - uses the star wars api: https://swapi.dev/
        - returns a specific planet
        - returns the eye color of a specific character
        - returns all of the data on a specific movie
        *BONUS* - Add it onto the DOM however you want


 */


const wars = 'https://swapi.dev/api';

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
}

export async function getPlanetBy() {
    const url = `${wars}/planets/${id}/`;
    return fetchJson(url);
}



// main.js

import { getPlanetById, getCharacterEyeColor, getMovieById } from 'https://swapi.dev/api';

const outputDiv = document.querySelector('#output');

async function displayPlanetById(id) {
    try {
        const planet = await getPlanetById(id);
        outputDiv.innerHTML += `<p>Planet ${planet.name} has a diameter of ${planet.diameter} km.</p>`;
    } catch (error) {
        console.error(error);
    }
}

async function displayCharacterEyeColor(name) {
    try {
        const eyeColor = await getCharacterEyeColor(name);
        outputDiv.innerHTML += `<p>${name}'s eye color is ${eyeColor}.</p>`;
    } catch (error) {
        console.error(error);
    }
}

async function displayMovieById(id) {
    try {
        const movie = await getMovieById(id);
        outputDiv.innerHTML += `<p>${movie.title} was directed by ${movie.director} and released in ${movie.release_date}.</p>`;
    } catch (error) {
        console.error(error);
    }
}


const element= document.createElement('div')
element.classList.add(``)






displayPlanetById(1);
displayCharacterEyeColor('Luke Skywalker');
displayMovieById(1);






