$(document).ready(function(){
  // $('#button-submit').click(function (){
    // $("#message").each(function(){
    //     if ($.trim($(this).val()).length == 0){
    //         $('.alert').show();
    //         $("#message").focus();
    //         return false;
    //     }
    //     else{
    //         // $(this).removeClass("highlight");
    //         $('.alert').hide();
    //         // isFormValid = true;
    //         return true;
    //      }
    //     });
  //
  //
  // });

  $('#msg-form').submit(function(e){
    e.preventDefault();
      $('#message').each(function(){
          if ($.trim($(this).val()).length == 0){
            $(".alert").attr('class', 'alert alert-warning').show();
              $("#message").focus();
              return false;
          }
          else{
              $('.alert').hide();
              var msg = $('#message').val();
              // $.post( "/", { message:msg } );

              $.post( "/",{ message:msg })
              .done(function(){
                $(".alert").attr('class', 'alert alert-success').show();
                $('#msg-form')[0].reset();
              })

              .fail(function() {
                $(".alert").attr('class', 'alert alert-danger').show();
              });



              return true;
           }
          });

  });
});
