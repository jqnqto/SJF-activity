// $('.confirm_appointment').submit(function(e) {
    
//     e.preventDefault();
    
//     // $(this).serialize(); will be the serialized form
//     $(this).append($(this).serialize() + '<br />');
// });

// $(document).ready(function(){
//     $(".add-row").click(function(){
//         var name = $("#name").val();
//         var email = $("#email").val();
//         var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
//         $("table tbody").append(markup);
// });

function tableUpdate() {
    if ($("#job").val() != '' &&
        $("#arrival").val() != null &&
        $("#burst").val() != null) {
      // Add product to Table
      table();
      // Clear form fields
      formClear();
      // Focus to product name field
      $("#user_form").focus();
    }
  }
  function formClear() {
    $("#job").val("");
    $("#arrival").val("");
    $("#burst").val("");
  }