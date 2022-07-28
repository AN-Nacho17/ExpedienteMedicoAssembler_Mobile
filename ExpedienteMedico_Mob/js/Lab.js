$(document).ready(function () {
    const pdfBtns = [];
    const imgBtns = [];
    const _server = 'asmymedicaladmin.azurewebsites.net';
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _url = `https://${_server}/Api/Api/labimages?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    getLab(data.data)
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

    function getLab(data) {
        for (let i = 0; i < data.length; i++) {
            $("#lab_container").append(getLabElement(data[i], i));
        }
    }

    const getLabElement = (data, i) => {
        let ImageButton = "";
        let PdfButton = "";
        const _server = 'https://asmymedicaladmin.azurewebsites.net';
        if (data.pdfUrl != null) {
            const _pdfUrl = `${_server}//${data.pdfUrl}`;
            PdfButton = `<button id="pdfbtn${i}" class="pdf_button btn-large">
                Ver PDF
                <img src="/img/pdf.svg" alt="">
            </button>`;
            let id = `pdfbtn${i}`;
            let obj = { id: id, url: _pdfUrl };
            pdfBtns.push(obj);
        } else {
            `<button></button>`;
        }
        if (data.imageUrl != null) {
            const _imageUrl = `${_server}//${data.imageUrl}`;
            ImageButton = `<div class="text-center">
                <button id="imgbtn${i}" class="image_button btn-large">
                    Ver imagen
                    <img src="/img/img.svg" alt="">
                </button>
            </div>`;
            let id = `imgbtn${i}`;
            let obj = { id: id, url: _imageUrl };
            imgBtns.push(obj);
        } else {
            `<button></button>`;
        }
        return `<div class="accordion-item">
    <h2 class="accordion-header" id=lab-heading${i}>
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#lab-collapse${i}" aria-expanded="false" aria-controls="lab-collapse${i}">
            Recursos descargables #${data.id}
        </button>
    </h2>
    <div id="lab-collapse${i}" class="accordion-collapse collapse show" aria-labelledby="lab-heading${i}"
        data-bs-parent="#lab_container">
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
        <div class="row py-3 mb-3">
        <div class="py-3 button_container col-md-6">
            <div class="text-center">
                ${PdfButton}
            </div>
        </div>
        <div class="py-3 button_container col-md-6">
            ${ImageButton}
        </div>
    </div>
    </div >
    </div > `;
    }
    console.log(pdfBtns);
    console.log(imgBtns);
    //setListeners();
});

function setListeners() {
    for (let i = 0; i < pdfBtns.length; i++) {
        document.getElementById(pdfBtns[i].id).addEventListener('click', function () {
            window.open(pdfBtns[i].url, '_blank');
        });
    }
    //iterate through all image buttons and add event listener
    for (let i = 0; i < imgBtns.length; i++) {

        document.getElementById(imgBtns[i].id).addEventListener('click', function () {
            window.open(imgBtns[i].url, '_blank');
        });
    }
}
