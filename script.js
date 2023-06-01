var scroll1 = 0;
var slider = document.querySelector('.item__row');

document.getElementById('arrow-left').addEventListener('click', oneclik_back);

function oneclik_back() {
    scroll1 += 300; 
    if(scroll1 > 0) {
        scroll1 = -1200;
    }
    slider.style.left = scroll1 +  'px';
}
document.getElementById('arrow-right').addEventListener('click', oneclik_next);

function oneclik_next() {
    scroll1 -= 300; 
    if(scroll1 < -1200) {
        scroll1 = 0;
    }
    slider.style.left = scroll1 +  'px';
}


//SPORT PRODUCT

var slider1 = document.querySelector('.item__row_sport');

document.getElementById('arrow-left-sport').addEventListener('click', oneclik_next_1);

function oneclik_next_1() {
    scroll1 += 300; 
    if(scroll1 > 0) {
        scroll1 = -1200;
    }
    slider1.style.left = scroll1 +  'px';
}

document.getElementById('arrow-right-sport').addEventListener('click', oneclik_back_1);

function oneclik_back_1() {
    scroll1 -= 300; 
    if(scroll1 < -1200) {
        scroll1 = 0;
    }
    slider1.style.left = scroll1 +  'px';
}

var slider2 = document.querySelector('.item__row__weights');

document.getElementById('arrow-left-weights').addEventListener('click', oneclik_next_2);

function oneclik_next_2() {
    scroll1 += 300; 
    if(scroll1 > 0) {
        scroll1 = -1200;
    }
    slider2.style.left = scroll1 +  'px';
}

document.getElementById('arrow-right-weights').addEventListener('click', oneclik_back_2);

function oneclik_back_2() {
    scroll1 -= 300; 
    if(scroll1 < -1200) {
        scroll1 = 0;
    }
    slider2.style.left = scroll1 +  'px';
}

