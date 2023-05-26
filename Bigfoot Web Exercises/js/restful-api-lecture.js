
//usually goes in a separate file
const setPost = async (postData) =>{
    let url = ``;
    let options ={
        method: `POST`, //sometimes a POST OR GET
        header: {
            "Authorization": `token`
        },
        body: JSON.stringify(postData)
    }
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}

///// separate file

(async ()=>{
    let blogPost={
        "title": "I love lamp!",
        "body": "lamp warm and yummi"
    }
    let result = await setPost(blogPost);

})();