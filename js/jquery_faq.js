// $(document).ready(function(){
//     $(`invisible`).click(function(event){
//         event.preventDefault();
//         $(`invisible`).toggleClass(`visible`)
//     });
// })
// NAUUUUR!!!
// let invisible = $(`dt`);
// invisible.on(`click`, function(){
//     $(invisible).toggleClass(`invisible`)
// });

let $question = $('dt');
let $answer = $('dd');

$('button').click('toggle', function (){
    $answer.toggleClass('invisible');
});

$question.click('toggle', function (){
    $(this).toggleClass('highlight');
});