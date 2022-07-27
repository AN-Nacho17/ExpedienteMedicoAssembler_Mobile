$(document).ready(function () {
    //get user
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
        const id = user.id;
        const _url = `https://localhost:44346/Api/Api/meds?id=${id}`;
        $.ajax({
            type: "GET",
            url: _url,
            success: function (data) {
                if (data.success) {
                    console.log(data.data);
                    getMedicines(data)
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
});

const getMedicines = (data) => {
    const medicineList = data.medicines;
    for (let i = 0; i < medicineList.length; i++) {
        $("#medicines_list").append(getMedicineElement(i));
    }
}

const getMedicineElement = (i) => {
    let item =
        `<div class="row">
            <li class="list-group-item">Medicine #${i}
                 <div class="container">
                     <img src="/img/_medicine.svg" alt="Medicine">
                 </div>
             </li>
        </div>`;
    return item;
}