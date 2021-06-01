$( document ).ready(function() {
  $('.js-modal-close').click(function () {
    $(this).closest('.ap-modal-window').remove(); // to remove it from DOM
    // $(this).closest('.ap-modal-window').hide(); // to reuse it
  });
  $('.js-modal-close-w').click(function (e) {
    e.preventDefault();
    $(this).closest('.ap-modal-window-wrapper').remove(); // to remove it from DOM
    // $(this).closest('.ap-modal-window-wrapper').hide(); // to reuse it
  });
  $(document).click(function (e) {
    if (e.target === $('.ap-modal-window-wrapper')[0]){
      $('.ap-modal-window-wrapper').remove();
    }
  });
});