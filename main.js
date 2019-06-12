'use strict';

function changeSrc(el, src, alt) {

  const bubbleText = $('#js-bubble-text');

  if ( $(`#${el}`).attr('src') === src ) {
    $(`#${el}`).removeAttr('src');
    $(`#${el}`).removeAttr('alt');
    $(`#${el}`).attr('aria-pressed', 'false');
    bubbleText.text('FLESH ME').removeClass('shrink-text');
  } else {
    $(`#${el}`).attr('aria-pressed', 'true');
    $(`#${el}`).fadeOut(0, function() {
      $(`#${el}`).attr('src',src);
      $(`#${el}`).attr('alt', alt);
      console.log($(`#${el}`).attr('alt'));
      $(`#${el}`).on('load', function(){
        $(`#${el}`).fadeTo(1000,.9, 'swing');
      });
      const newTxt = $(`#${el}`).attr('alt');
      bubbleText.text(`I have ${newTxt}`).addClass('shrink-text');
    });

  }
  console.log($(`#${el}`).attr('aria-pressed'));

}
