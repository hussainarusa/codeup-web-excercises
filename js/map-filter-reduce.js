let users1;
users1 = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

//1.
let usersWith3Languages = users1.filter(user => user.languages.length > 2);

let userEmails = users1.map(user => {
    return users1.email
});

//2.

let longestEmail = users1.reduce((acc, user,index) => {
    if (acc.length < users1.email.length){
        return users1.email;
    } else {
        return acc;
    }
},'');

//3.
let instructors = users1.reduce((acc, user, index) => {
    if (index+1 === users1.length) {
        return acc + ` ${user.name}.`;
    } else {
        return acc + ` ${user.name},`;
    }
}, 'Your instructors are:');

// 4.
let specialLanguages = users.reduce((acc, user) => {
    user.languages.forEach(function (language) {
        if (!acc.includes(language)) {
            acc.push(language);
        }
    });
    return acc;
},[]);
    console.log(specialLanguages)


// 5.

const userNames= users1.reduce((instructor, name)=> name +instructor);
console.log(name)





