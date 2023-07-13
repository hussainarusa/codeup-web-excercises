// $(() => {
//
// $.ajax('data/blog.json')
//     .done((response)=> {
//     console.log(response)
//
// });
//
    $('button').on('click', () => {
        const userQuery = $('input').val();
        $.ajax('data/blog.json')
            .done((data) => {
                console.log(data);
                renderBlog(data);
            })
            .fail((response) => {
                console.log("This failed")
            })
    })
//
//
//
//
//     function renderBlog(blogResponse){
//         blogResponse.forEach(function (blog) {
//         $('div.posts').append(`
//
//         <div class='card'>
//                 <h1>${blog.title} </h1>
//                 <p>${blog.categories}</p>
//                 <p>${blog.content}</p>
//                 <p>${blog.date}</p>
//        </div>
//         `)
//     });
//
//
//         }})
//
//
//


$(() => {
    let blogPosts = []; // Store the fetched blog posts

    $.ajax('data/blog.json')
        .done((response) => {
            blogPosts = response;
            renderBlog(blogPosts);
        });

    $('button').on('click', () => {
        const userQuery = $('input').val();
        $.ajax('data/blog.json')
            .done((data) => {
                console.log(data);
                renderBlog(data);
            })
            .fail((response) => {
                console.log("This failed")
            })
    })

    function renderBlog(posts) {
        $('div.posts').empty();
        posts.forEach(function (blog) {
            $('div.posts').append(`
        <div class='card'>
          <h1>${blog.title}</h1>
          <p>${blog.categories}</p>
          <p>${blog.content}</p>
          <p>${blog.date}</p>
        </div>
      `);
        });
    }

    function getNewBlogPosts(allPosts, existingPosts) {
        const existingIds = existingPosts.map(post => post.id);
        return allPosts.filter(post => !existingIds.includes(post.id));
    }

    function renderNewBlogPosts(newPosts) {
        newPosts.forEach(function (blog) {
            $('div.posts').append(`
        <div class='card'>
          <h1>${blog.title}</h1>
          <p>${blog.categories}</p>
          <p>${blog.content}</p>
          <p>${blog.date}</p>
        </div>
      `);
        });
    }
});
