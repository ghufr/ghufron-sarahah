// $(function () {
//   $('#msg-form').parsley().on('field:validated', function() {
//     var ok = $('.parsley-error').length === 0;
//     $('.bs-callout-info').toggleClass('hidden', !ok);
//     $('.bs-callout-warning').toggleClass('hidden', ok);
//   })
//   .on('form:submit', function() {
//     return false; // Don't submit form for this demo
//   });
// });

$(document).ready(function(){

  $('#button-submit').click(function (){
    // var form_data = $('#msg-form').find('textarea[name="message-box"]').val();
    $("#message-box").each(function(){
        if ($.trim($(this).val()).length == 0){
            $('.alert').show();
            // $(this).addClass("highlight");
            // isFormValid = false;

        }
        else{
            // $(this).removeClass("highlight");
            $('.alert').hide();
            // isFormValid = true;
         }
        });

    return false;
  });
});
