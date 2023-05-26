// const getLuke = async ( character => {
//     // let response = await fetch(`https://swapi.dev/api/people/1/${character}`);
//     // return await response.json();
// });

// const getMovie = async (movie = 1) => {
//
// }
// fetch('https://swapi.dev/api/people/1')
//     .then(response => response.json())
//     .then(data => console.log(data));
//

const getPerson = async () => {
    let response = await fetch('https://swapi.dev/api/people/1/');
    let data = await response.json();
    return data;
}

(async ()=>{
    let luke = await getPerson();
    console.log(luke);
})();