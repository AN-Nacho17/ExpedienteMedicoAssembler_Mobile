$(document).ready(function () {

    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _url = `https://localhost:44346/Api/Api/sufferings?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    getAffections(data.data);
                } else {
                    Swal.fire({
                        title: "Error",
                        text: data.data,
                        iscon: "error",
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

    function getAffections(data) {
        for (let i = 0; i < data.length; i++) {
            $("#affections_container").append(getAffectionElement(data[i], i));
        }
    }

    const getAffectionElement = (data, i) => {
        return `<div class="accordion-item">
    <h2 class="accordion-header" id=affection-heading${i}>
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#affection-collapse${i}" aria-expanded="false" aria-controls="affection-collapse${i}">
            ${data.name}
        </button>
    </h2>
    <div id="affection-collapse${i}" class="accordion-collapse collapse show" aria-labelledby="affection-heading${i}"
        data-bs-parent="#affections_container">
        <div class="accordion-body">
            <strong>Detalles del padecimiento.</strong>
        </div>
        <div class="container py-2">
            <div class="row">
                <div id="accordion-description">
                    ${data.description}
                </div>
            </div >
        </div >
    </div >
    </div > `;
    }
});

