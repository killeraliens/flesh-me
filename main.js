'use strict';

function changeSrc(el, src, alt) {

  if ( $(`#${el}`).attr('src') === src ) {
    $(`#${el}`).removeAttr('src');
    $(`#${el}`).removeAttr('alt');
    $(`#${el}`).attr('aria-pressed', 'false');
  } else {
    $(`#${el}`).attr('aria-pressed', 'true');
    $(`#${el}`).fadeOut(0, function() {
      $(`#${el}`).attr('src',src);
      $(`#${el}`).attr('alt', alt);
      console.log($(`#${el}`).attr('alt'));
      $(`#${el}`).on('load', function(){
        $(`#${el}`).fadeTo(1000,.9, 'swing');
      });
    });

  }
  console.log($(`#${el}`).attr('aria-pressed'));

}
