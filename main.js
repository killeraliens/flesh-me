'use strict';


// console.log(headImg["src"]);

function changeSrc(el, src) {

    $(`#${el}`)
        .fadeOut(200, function() {
            $(`#${el}`).attr('src',src);
            $(`#${el}`).on('load', function(){
                $(`#${el}`).fadeTo(1000,.9, 'swing');
            });
        });

}
