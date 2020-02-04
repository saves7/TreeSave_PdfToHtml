
let toggle = document.querySelector('.nav-toggle');
let nav = document.querySelectorAll('.nav');

toggle.onclick = function () {

    if (nav[0].className === 'nav') {
    nav[0].className = 'nav nav_active';
    } else {
        nav[0].className = 'nav';
    }
    console.log(nav[0].className);
}

// jQuery(function() {
//
//     $('.nav-toggle').on('click',function (event) {
//             event.preventDefault();
//             $('.nav').toggleClass("nav_active");
//      })
// });