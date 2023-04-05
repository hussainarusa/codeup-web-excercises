
// ATTRIBUTE METHODS


// let $question = $('dt');
// let $answer = $('dd');
//
// $('button').click('toggle', function (){
//     $answer.toggleClass('invisible');
// });
//
// $question.click('toggle', function (){
//     $(this).toggleClass('highlight');
// });


//  TRAVERSING

$(`button`).click(function(){
    $(this).children(`li`).css(`highlight`, `yellow`)
})


$('.h3').next().css('font-weight', 'bold');


$(`.ul`).children().css(`color`, `blue`);

