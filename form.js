//  Form_With_JS
let formulaire = document.getElementById('envoyer');

// let_For_nom 
let nom = document.getElementById('nom');
let messageErreurNom = document.getElementById('messageErreurNom');


// let_For_LastName
let prenom = document.getElementById('prenom');
let messageErreurPrenom = document.getElementById('messageErreurPrenom');


// let_For_Mail
let mail = document.getElementById('mail');
let messageErreurMail = document.getElementById('messageErreurMail');


// let_For_Message
let message = document.getElementById('message');
let messageErreurMessage = document.getElementById('messageErreurMessage');




// let_Checking
let regex = /^[a-zA-ZÃ©Ã¨Ã®Ã¯Ã‰ÃˆÃŽÃ][a-zÃ©Ã¨ÃªÃ Ã§Ã®Ã¯]+([-'\s][a-zA-ZÃ©Ã¨Ã®Ã¯Ã‰ÃˆÃŽÃ][a-zÃ©Ã¨ÃªÃ Ã§Ã®Ã¯]+)?$/;


// function_Modal_PopUp
function popUp() {
    const close = document.getElementById('close');
    // show_Modal 
    document.getElementById('modal_container').style.display = "flex";

    // button_Close
    close.onclick = function () {
        document.getElementById('modal_container').style.display = "none";
    }
}


formulaire.addEventListener('click', validation);


function validation(event) {
    // If_Incorrect_Entry_FirstName
    if (nom.validity.valueMissing) {
        event.preventDefault();
        messageErreurNom.textContent = 'Veillez entrer votre nom'
        messageErreurNom.style.color = 'red';
    }

    // If_Incorrect_Entry_LastName
    else if (prenom.validity.valueMissing) {
        event.preventDefault();
        messageErreurPrenom.textContent = 'Veillez entrer votre prénom';
        messageErreurPrenom.style.color = 'red';
    }

    // If_Incorrect_Entry_Mail
    else if (mail.validity.valueMissing) {
        event.preventDefault();
        messageErreurMail.textContent = 'Veillez entrer votre adresse mail';
        messageErreurMail.style.color = 'red';
    }

    // If_Incorrect_Entry_Message
    else if (message.validity.valueMissing) {
        event.preventDefault();
        messageErreurMessage.textContent = 'Veillez entrer votre addresse mail';
        messageErreurMessage.style.color = 'red';
    }


    // If_The_Data_Format_Is_Incorrect
    else if (regex.test(nom.value) == false) {
        event.preventDefault();
        // nom_Checking
        messageErreurNom.textContent = 'Format incorrect';
        messageErreurNom.style.color = 'orange';
    }

    // lastName_Checking
    else if (regex.test(prenom.value) == false) {
        messageErreurPrenom.textContent = 'Format incorrect';
        messageErreurPrenom.style.color = 'orange';
    }


    // Message_Checking
    else if (regex.test(message.value) == false) {
        messageErreurMessage.textContent = 'Format incorrect';
        messageErreurMessage.style.color = 'orange';
    } else {
        console.log("Nom: " + nom.value + '\n', "prénom:" + prenom.value + '\n', "Adresse email: " + mail.value + '\n', "Message: " + message.value);
        popUp();
    }
}