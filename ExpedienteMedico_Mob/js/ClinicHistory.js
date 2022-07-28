$(document).ready(function () {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _server = 'asmymedicaladmin.azurewebsites.net';
        const _url = `https://${_server}/Api/Api/notes?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    getNotes(data.data);
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

    function getNotes(data) {
        for (let i = 0; i < data.length; i++) {
            $("#medicNotes_list").append(getMedicNote(data[i]));
        }
    }

    const getMedicNote = (data) => {
        //spanish dat
        let date = new Date(data.noteDate);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let dateString = new Date(date).toLocaleDateString("es-ES", options);
        let item =
            `  <div class="row">
        <li class="medicNote list-group-item">
            <div class="col-md-6 mx-auto">
                <div class="medicNote_label container text-center">
                    <label>
                        ${dateString}
                    </label>
                </div>
            </div>
            <div class="col-md-6 mx-auto">
                <div id="note_description" class="container text-center py-3">
                    ${data.note}
                </div>
            </div>
        </li>
    </div>`;
        return item;
    }


});
