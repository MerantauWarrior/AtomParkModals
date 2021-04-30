$( document ).ready(function() {
  $('.ap-modal-window__close').click(function () {
    $(this).closest('.ap-modal-window').remove(); // to remove it from DOM
    // $(this).closest('.ap-modal-window').hide(); // to reuse it
  });
});