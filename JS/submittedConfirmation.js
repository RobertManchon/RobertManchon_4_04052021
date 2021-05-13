// DOM Elements Submitted Confirmation
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ Submitted Confirmation ------ //
//  Display Modal  Submit

 function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

// Close Submit
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);