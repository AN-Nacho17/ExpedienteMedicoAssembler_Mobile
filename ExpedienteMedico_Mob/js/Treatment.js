$(document).ready(function () {
    for (let m = 0; m < 3; m++) {
        $("#treatment_container").append(getTreatmentElement(m));
    }
    //collapse all accordion items
});


const getTreatmentElement = (m) => {
    return `<div class="accordion-item">
<h2 class="accordion-header" id=treatment-heading${m}>
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#treatment-collapse${m}" aria-expanded="false" aria-controls="treatment-collapse${m}">
       Tratamiento #${m}
    </button>
</h2>
<div id="treatment-collapse${m}" class="accordion-collapse collapse show" aria-labelledby="treatment-heading${m}"
    data-bs-parent="#affections_container">
    <div class="accordion-body">
        <strong>Detalles del tratamiento.</strong>
    </div>
    ${treatmentDescription}
</div>
</div>`;
}

const treatmentDescription =
    `<div class="container py-2">
        <div class="row">
            <textarea class="py-2"></textarea>
        </div>
    </div >`;
