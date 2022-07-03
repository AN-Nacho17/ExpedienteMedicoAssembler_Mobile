$(document).ready(function () {
    for (let i = 0; i < 3; i++) {
        $("#medicines_list").append(getMedicineElement(i));
    }
});

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