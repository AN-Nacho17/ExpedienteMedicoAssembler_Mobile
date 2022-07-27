const fs = require('fs');

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

    // $("#login_form").submit(function (e) {
    //     e.preventDefault();
    //     var form = $(this);
    //     var formData = form.serialize();
    //     var redirectUrl = form.attr('action');
    //     var url = 'https://localhost:44346/User/Auth/login';
    //     var type = form.attr('method');
    //     $.ajax({
    //         url: url,
    //         type: type,
    //         data: formData,
    //         success: function (data) {
    //             if (data.success) {
    //                 window.location.href = redirectUrl;
    //             } else {
    //                 alert(data.message);
    //                 //$("#login_error").html(data.message);
    //             }
    //         }
    //     });
    // });

    //form submit
    $("#login_form").submit(function (e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let start = $(this).attr('action');
        if (email != "" && password != "") {
            $.ajax({
                type: "POST",
                url: `https://localhost:44346/User/Auth/login?email=${email}&password=${password}`,
                success: function (data) {
                    if (data.success) {
                        let user = {
                            email: data.data.email,
                            name: data.data.completeName,
                            id: data.data.id,
                        }
                        writeFile('auth/user.txt', JSON.stringify(user));
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

    function writeFile(filename, content) {
        fs.writeFile(filename, content, err => {
            if (err) {
                console.error(err);
            }
        })
    }

});
