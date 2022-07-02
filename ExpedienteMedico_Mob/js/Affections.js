$(document).ready(function () {
    for (let i = 0; i < 3; i++) {
        $("#affections_container").append(getAffectionElement(i));
    }
    //collapse all accordion items
    $('.collapse').collapse('hide');
});

const getAffectionElement = (i) => {
    return `<div class="accordion-item">
<h2 class="accordion-header" id=heading${i}>
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        Accordion Item ${i}
    </button>
</h2>
<div id="collapse${i}" class="accordion-collapse collapse show" aria-labelledby="heading${i}"
    data-bs-parent="#affections_container">
    <div class="accordion-body">
        <strong>Detalles del padecimiento.</strong>
    </div>
    ${affectionDescription}
</div>
</div>`;
}

const affectionDescription =
    `<div class="container py-2">
        <div class="row">
            <textarea class="py-2"></textarea>
        </div>
    </div >`;
