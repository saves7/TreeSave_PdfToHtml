let btn_prev = document.querySelector('.gallery__btn_prev');
let btn_next = document.querySelector('.gallery__btn_next');
let images = document.querySelectorAll('.gallery__photo img');
//console.log(images[0]);
let i = 0;

btn_prev.onclick = function () {
    images[i].className = 'gallery__image gallery__image_absolute';
    i--;
        if (i<0) {
         i=images.length-1;
        }
    images[i].className = 'gallery__image_show';
    //console.log(i+images[i].className);
}

btn_next.onclick = function () {
    images[i].className = 'gallery__image gallery__image_absolute';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'gallery__image_show ';
    //console.log(i+images[i].className);
}

// jQuery(function() {
//     jQuery('body').css('color', 'blue');
// });

