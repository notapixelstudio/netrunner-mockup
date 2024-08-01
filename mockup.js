var svg = document.querySelector('svg');
var slide_index = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.next').forEach(o => o.addEventListener('click', function(e) {
        console.log('next!');
    }));

    right_mode();
});

document.addEventListener('keyup', function(e) {
    if(e.code == 'ArrowLeft') {
        slide_prev();
    }
    else if(e.code == 'ArrowRight') {
        slide_next();
    }
    else if(e.code == 'KeyL') {
        left_mode();
    }
    else if(e.code == 'KeyR') {
        right_mode();
    }
});

function slide_prev() {
    slide_index = Math.max(0, slide_index-1);
    update_slide();
}

function slide_next() {
    slide_index++;
    update_slide();
}

function w(selector) {
    return +(svg.querySelector(selector).getAttribute('width'));
}

function update_slide() {
    svg.setAttribute("viewBox", `${svg.viewBox.baseVal.width*slide_index} ${svg.viewBox.baseVal.y} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`);
}

function right_mode() {
    svg.querySelector('.right').setAttribute('visibility', 'visible');
    svg.querySelector('.left').setAttribute('visibility', 'hidden');

    svg.querySelector('#scoreArea').setAttribute('transform', `translate(0,0)`);
    svg.querySelector('#playArea').setAttribute('transform', `translate(${w('#scoreAreaExtent')},0)`);
    svg.querySelector('#actionsArea').setAttribute('transform', `translate(${w('#scoreAreaExtent')+w('#playAreaExtent')},0)`);
    
    svg.querySelector('#menuArea').setAttribute('transform', `translate(1920,0) scale(-1,1)`);
}

function left_mode() {
    svg.querySelector('.left').setAttribute('visibility', 'visible');
    svg.querySelector('.right').setAttribute('visibility', 'hidden');

    svg.querySelector('#actionsArea').setAttribute('transform', `translate(0,0)`);
    svg.querySelector('#playArea').setAttribute('transform', `translate(${w('#actionsAreaExtent')},0)`);
    svg.querySelector('#scoreArea').setAttribute('transform', `translate(${w('#actionsAreaExtent')+w('#playAreaExtent')},0)`);
    
    svg.querySelector('#menuArea').setAttribute('transform', `translate(0,0)`);
}