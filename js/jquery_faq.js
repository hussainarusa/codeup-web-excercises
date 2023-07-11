


// $(document).ready(function() {
//     $('.toggle-class-btn').on('click', function() {
//         $('dd.invisible').toggleClass('invisible');
//     });
// });





    let toggleClassButton = document.querySelector('.toggle-class-btn');
    let invisibleItems = document.querySelectorAll('dd.invisible');

    toggleClassButton.addEventListener('click', function() {
        invisibleItems.forEach(function(item) {
            item.classList.toggle('invisible');
        });
    });

