$(document).ready(function () {
    for (let i = 0; i < 3; i++) {
        $("#medicNotes_list").append(getMedicNote(i));
    }
});

const getMedicNote = (i) => {
    let item =
        `  <div class="row">
    <li class="medicNote list-group-item">
        <div class="col-md-6 mx-auto">
            <div class="medicNote_label container text-center">
                <label>
                    Fecha de registro: 7/3/2022:10:36 PM
                </label>
            </div>
        </div>
        <div class="col-md-6 mx-auto">
            <div class="container text-center py-3">
                <button onClick="loadMedicNote()"class="medicNote_button">
                    Ver nota
                    <img src="/img/_next.svg" alt="Medicine">
                </button>
            </div>
        </div>
    </li>
</div>`;
    return item;
}

function loadMedicNote() {
    document.location.href = "MedicNote.html";
}