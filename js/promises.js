
// const commit = (username)=>{
//     const url = `https://api.github.com/users/${userName}/events`
//     const options = {
//         method: "GET",
//         headers: {
//             "Authorization": `token ${GITHUB_TOKEN}`
//         }
//     }
//     return fetch(url, options)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         });
//
// }
//
// const userName= 'hussainarusa'
// console.log(commit(userName))
//
//
//
// const lastCommit = (url) => {
//     const commitUrl = url;
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }
//     return fetch(url, options)
//         .then((response)=>{
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
//
// }
//
// (() => {
//     commit(userName).then((commit) => {
//         console.log(commit);
//         lastCommit(commit.theLastCommit[0]).then((theLastCommit) => {
//             console.log(theLastCommit);
//         });
//     });
// })();






// const getLastCommitDate = (username) => {
//     const url = `https://api.github.com/users/${username}/events`;
//     const options = {
//         method: "GET",
//         headers: {
//             "Authorization": `token ${GITHUB_TOKEN}`
//         }
//     };
//
//     return fetch(url, options).then((response) => response.json())
//         .then((data) => {
//             const commitEvents = data.filter((event) => event.type === "PushEvent");
//             if (commitEvents.length === 0) {
//                 throw new Error("No commit events found for the user.");
//             }
//             const lastCommitDate = commitEvents[0].created_at;
//             return lastCommitDate;
//         });
//
// };
//
// (()=> {
//     const username = "hussainarusa";
//     getLastCommitDate(username).then((lastCommitDate) => {
//             console.log(`Last commit date for ${username}: ${lastCommitDate}`);
//         })
//         .catch((error) => {
//             console.log("Error fetching data:", error.message);
//         });
//
// })();



const getLastCommitDate = async (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token ${GITHUB_TOKEN}`
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        const commitEvents = data.filter((event) => event.type === "PushEvent");
        if (commitEvents.length === 0) {
            throw new Error("No commit events found for the user.");
        }

        const lastCommitDate = commitEvents[0].created_at;
        return lastCommitDate;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
};

// Example usage:
const username = "hussainarusa";
(async () => {
    try {
        const lastCommitDate = await getLastCommitDate(username);
        console.log(`Last commit date for ${username}: ${lastCommitDate}`);
    } catch (error) {
        console.log(error.message);
    }
})();








