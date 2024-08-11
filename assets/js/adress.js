let adressForms = document.querySelector('.form-group');
let adressNotebook = document.querySelector('.adres-defteri');
let resetButton = document.querySelector('.reset');

let adressInformation = [];

if(typeof localStorage.adressInformation !== 'undefined') {
    adressInformation =JSON.parse(localStorage.adressInformation);
    renderSubmitForm();
}

function handleSubmitForm(e) {
    e.preventDefault();

    let formdata = new FormData(adressForms);
    let formobj = Object.fromEntries(formdata);
    adressInformation.push(formobj)

    adressForms.reset();
    renderSubmitForm();
    save();
}

adressForms.addEventListener('submit', handleSubmitForm);

function save() {
    localStorage.adressInformation = JSON.stringify(adressInformation);
}

function renderSubmitForm() {
    adressNotebook.innerHTML = '';

    for(let i = 0; i < adressInformation.length; i++) {
        adressNotebook.innerHTML += `<li> ${adressInformation[i].name} ${adressInformation[i].lastname} ${adressInformation[i].phoneNumber} ${adressInformation[i].adress} </li>`
    }
}

function reset() {
    localStorage.clear();
    adressInformation = [];
    renderSubmitForm();
}

resetButton.addEventListener('click', reset);