$(document).ready(function () {

    tinymce.init({
        selector: "textarea",
        height: 300,
        menubar: false,
        toolbar: false,
        readonly: true
    });

    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _url = `https://localhost:44346/Api/Api/treatments?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    getTreatment(data.data);
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

    function getTreatment(data) {
        for (let m = 0; m < data.length; m++) {
            $("#treatment_container").append(getTreatmentElement(data[m], m));
        }
    }

    const getTreatmentElement = (data, m) => {
        return `<div class="accordion-item">
    <h2 class="accordion-header" id=treatment-heading${m}>
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#treatment-collapse${m}" aria-expanded="false" aria-controls="treatment-collapse${m}">
           ${data.name}
        </button>
    </h2>
    <div id="treatment-collapse${m}" class="accordion-collapse collapse show" aria-labelledby="treatment-heading${m}"
        data-bs-parent="#treatment_container">
        <div class="accordion-body">
            <strong>Detalles del tratamiento.</strong>
        </div>
        <div class="container py-2">
        <div class="row">
            <textarea class="py-2">
            ${data.description}
            </textarea>
        </div>
    </div >
    </div > `;
    }

});




