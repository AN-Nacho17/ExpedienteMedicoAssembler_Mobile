$(document).ready(function () {
    //get user
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _url = `https://localhost:44346/Api/Api/history?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    renderUserInfo(data.data.user);
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
    } else {
        Swal.fire({
            title: "Error",
            text: "No hay ningun usuario logueado",
            icon: "error",
            button: "Aceptar",
        });
    }

    function renderUserInfo(user) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log(user);
        document.getElementById("name").value = user.completeName;
        document.getElementById("email").value = user.email;
        document.getElementById("id").value = user.userId;
        document.getElementById("phone").value = user.phoneNumber;
        let date = user.lastDateAttended;
        let dateString = new Date(date).toLocaleDateString("es-ES", options);
        document.getElementById("lastdate").value = dateString;
    }


});