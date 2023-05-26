// jQuery("h2").click(function(){
//     $(this).next().slideToggle(500)
// });
//
// $('#nebula').text("Llama Yamma")
//
// const $headingReference= $("#nebula");
//
// $(".codeup").css({
//     `border`: `1px red`
// })

$(`h1`).click(function(){
    $(this).css(`background-color`, `pink`)
});


$(`p`).dblclick(function (){
    $(this).css('font-size', `18px`)
});

$(`li`).hover(function(){
    $(this).css(`background-color`, `red`)
}, function(){
    $(this).css(`background-color`, `black`)
})
