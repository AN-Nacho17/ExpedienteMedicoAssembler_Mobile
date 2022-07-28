
$(document).ready(function () {

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
    });

    //form submit
    $("#login_form").submit(function (e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let start = $(this).attr('action');
        const _server = 'asmymedicaladmin.azurewebsites.net';
        if (email != "" && password != "") {
            $.ajax({
                type: "POST",
                url: `https://${_server}/User/Auth/login?email=${email}&password=${password}`,
                success: function (data) {
                    if (data.success) {
                        localStorage.setItem("user", JSON.stringify(data.data));
                        window.location.href = start;
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: data.data,
                            icon: "error",
                            button: "Aceptar",
                        });
                    }
                }
            });
        }
    });

});
