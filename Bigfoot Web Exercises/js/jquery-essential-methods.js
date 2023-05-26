// let $jQueryParent = $('#paragraphParent');

$jQueryParent.css( "color", "red");


// jQuery selector
let $jQueryParent = $('#paragraphParent');
//I cannot do THIS!
//jQueryParent.style.color = 'red';

// Vanilla JavaScript equivalent
let vanillaParent = document.querySelector('#paragraphParent');

// changing one css property
// $jQueryParent.css('color', 'blue');

// OR change a bunch of them!
// $jQueryParent.css({
//     fontWeight: '800',
//     fontSize: '24px',
//     fontStyle: 'italic'
// });

// adding classes with jQuery
// $jQueryParent.addClass('highlight');

// getting more than one element, you can run the same methods
let $paragraphs = $('p');

$paragraphs.css('color', 'blue');

// vanilla javascript
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(element){
    element.style.color = 'blue';

    element.setAttribute('data-name', 'anything');
    let paragraphValue = element.getAttribute('data-name');
});

$paragraphs.attr('data-name2', 'really anything');
let newParaValue = $paragraphs.attr('data-name2');

$paragraphs.text('This is the new text inside this element!');
let paraText = $paragraphs.text();
console.log(paraText);

// adding a class to elements
$paragraphs.addClass('highlight');

// removing a class from elements
$paragraphs.removeClass('highlight');

$paragraphs.on('click', function(){
    // $(this).toggleClass('highlight');
    $(this).animate({
        opacity: 0.25
    }, 3000, function() {
        // Animation complete.
    });
});









