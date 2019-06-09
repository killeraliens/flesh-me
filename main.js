'use strict';


// console.log(headImg["src"]);

function changeSrc(el, src) {
    const elem = document.getElementById(el);
    console.log(elem.src);
    elem.src = src;
}