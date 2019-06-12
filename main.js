'use strict';


// console.log(headImg["src"]);

function changeSrc(el, src, alt) {

  // const applyAlt = event.currentTarget['alt'];
  // el['alt'] = applyAlt;
  // console.log($(`#${el}`).attr('alt'));

    $(`#${el}`)
        .fadeOut(200, function() {
            $(`#${el}`).attr('src',src);
            $(`#${el}`).attr('alt', alt);
          console.log($(`#${el}`).attr('alt'));
            $(`#${el}`).on('load', function(){
                $(`#${el}`).fadeTo(1000,.9, 'swing');
            });
        });

}
