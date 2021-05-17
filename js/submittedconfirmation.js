// DOM Elements Submitted Confirmation
const modalSubmit = document.getElementsByClassName('ContainerConfirmationSubmit');
const closeModalSubmit = document.getElementsByClassName('CloseModalSubmit');
const closeBtnConfirmation = document.getElementById('CloseBtnConfirmation');

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