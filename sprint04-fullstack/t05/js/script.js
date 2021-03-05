let div = document.getElementById('yellow');
let listener_yellow = function(e) {
    div.style.left = e.pageX - 50 + "px";
    div.style.top = e.pageY - 50 + "px";
};

yellow.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener_yellow);
});

yellow.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener_yellow);
});


document.getElementById('green');
let listener_green = function(e) {
    div.style.left = e.pageX - 50 + "px";
    div.style.top = e.pageY - 50 + "px";
};

green.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener_green);
});

green.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener_green);
});