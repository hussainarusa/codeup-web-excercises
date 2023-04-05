
function getLastCommitDate(username) {
    const url =  fetch(url, {headers: {'Authorization': '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'}})
        `https://api.github.com/users/${username}/events/public`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const lastCommitEvent = data.find(event => event.type === "PushEvent");
            if (lastCommitEvent) {
                return lastCommitEvent.created_at;
            } else {
                throw new Error(`No commit events found for user ${username}`);
            }
        })
        .catch(error => {
            throw new Error(`Error fetching commit history for user ${username}: ${error.message}`);
        });
}

    getLastCommitDate("hussainarusa")
        .then(date => console.log(date))
        .catch(error => console.error(error));




import {keys} from"./keys.js"
let option = {
    header: {
        "Authorization": `token ${keys.github}`
    }
}

export const getUser = async(username)=>{
    try{
        const url = `https://api.github.com/users/${username}/events/public`;
        const options = {
            headers: {
                'Authorization': `token ${GITHUB_APPID}`
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getLastCommit = (userEvents)=>{
    let commits = userEvents.filter(function(e){
        return e.type === "PushEvent";
    });
    return commits[0];
}


import {getUser, getLastCommit, getDate} from './github.js'

(async()=>{
    // main thread
    let user = await getUser('hussainarusa');
    console.log(user);
    let lastCommit = getLastCommit(user);
    console.log(lastCommit);
    let date = getDate({user.created_at});
    console.log(date);



})();

