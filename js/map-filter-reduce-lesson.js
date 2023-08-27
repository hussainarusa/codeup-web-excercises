(()=> {
    //map
    const url = "./data/hoses.json"
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)// this is a promise , the ticket
        .then(response => { // ticket getting called
            return response.json(); //how do you want it back .json is a method that you want it returned as json, you have diff options like text
        })
        .then(houses => {
            console.log(houses); // working with houses array
            let housesTwoBedsPlus = houses.filter(house.beds)
            const nmrOfBeds = parseFloat(house.beds)
            const nmrOfBaths = parseFloat(house.bath)
            return nmrOfBeds >= 5 && nmrOfBaths >= 2

        });
    console.log(housesTwoBedsPlus)
})();