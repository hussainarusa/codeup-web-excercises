


$(document).ready(function() {
    $('.toggle-class-btn').on('click', function() {
        $('dd.invisible').toggleClass('invisible');
    });
});




    //
    // let toggleClassButton = document.querySelector('.toggle-class-btn');
    // let invisibleItems = document.querySelectorAll('dd.invisible');
    //
    // toggleClassButton.addEventListener('click', function() {
    //     invisibleItems.forEach(function(item) {
    //         item.classList.toggle('invisible');
    //     });
    // });


// $(document).ready(function (){
//     $('.li-btn').on('click', function(){
//         $('ul li').last().css("color", "yellow")
//     });
// });



// Create a button that, when clicked, makes the last li in each ul have a yellow background.

// jquery

$(document).ready(function() {
    $(".li-btn").click(function() {
        $("ul").each(function() {
            $(this).find("li:last-child").css("background-color", "yellow");
        });
    });
});


// js

document.querySelector(".li-btn").addEventListener("click", function() {
    let ulList = document.getElementsByTagName("ul");

    for (let i = 0; i < ulList.length; i++) {
        let lastLi = ulList[i].querySelectorAll("li:last-child");
        lastLi[lastLi.length - 1].style.backgroundColor = "yellow";
    }
});
// When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

// jquery

$(document).ready(function() {
    $('h3').click(function(){
        $("li").css("font-weight", "bold")
    })
})

// When any list item is clicked, first li of the parent ul should have a font color of blue.

// jquery

// $(document).ready(function(){
//     $("li").click(function(){
//         $("ul").each(function() {
//             $(this).find("li:first-child").css("color", "blue");
//         });
//     })
// })
//
// //my js attempt     DIDNT WORK
//
// document.querySelector('li').addEventListener('click', function (){
//     let firstLi = document.querySelectorAll('li');
//
//     for(let i=0; i < firstLi.length; i ++){
//         let bluLi = firstLi[i].querySelector("li:first-child");
//         bluLi[firstLi.length+1].style.color = "blue";
//     }
// })


// CHAT GPT
document.addEventListener("DOMContentLoaded", function() {
    let liElements = document.querySelectorAll("li");

    for (let i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener("click", function() {
            let ulElements = document.querySelectorAll("ul");

            for (let j = 0; j < ulElements.length; j++) {
                let firstLi = ulElements[j].querySelector("li:first-child");
                firstLi.style.color = "blue";
            }
        });
    }
});





$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function(){
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue);
    });
    console.log($images[0]);
    console.log('Image Source Array => ', imgSources);
    switch(btn) {
        case "leftBtn":
            // do the logic for left btn
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            console.log('clicked leftBtn')
            break;
        case "middleBtn":
            // do the logic for middle btn
            let randomNum = randomNumber(1, 2);
            if (randomNum === 1) {
                //go left
                $($images[1]).attr('src', imgSources[0]);
                $($images[0]).attr('src', imgSources[1]);
            } else {
                //go right
                $($images[1]).attr('src', imgSources[2]);
                $($images[2]).attr('src', imgSources[1]);
            }
            console.log('clicked middleBtn')
            break;
        case "rightBtn":
            // do the logic for right btn
            console.log('clicked rightBtn')
            $($images[2]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[2]);
            break;
    }
});
