

$(document).ready(function () {
    //Login form validation
    $("#login_form").validate({
        rules: {
            name: "required",
            password: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Por favor ingrese su nombre",
            password: "Por favor ingrese su contraseña",
            email: "Por favor ingrese un email válido"
        },
        submitHandler: function (form) {
            localStorage.setItem("name", $("#name").val());
            localStorage.setItem("password", $("#password").val());
            localStorage.setItem("name", $("#email").val());
            form.submit();
        }
    });
    /*
//Login form submit
$("#login_form").submit(function (e) {
e.preventDefault();
var form = $(this);
const url = "a";
var data = form.serialize();
$.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function (data) {
        if (data.success) {
            window.location.href = data.redirect;
        } else {
            $("#login_error").html(data.message);
        }
    }
});
});
*/

});
