// on verifie les entrees du nom et prenom
function checkName() {
    const lastname = document.getElementById('lastname');
    const firstname = document.getElementById('firstname');
    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (regexName.test(lastname.value) === false && lastname.value === "" && lastname.value <= 2) {
        document.getElementById("lastnameErrorMsg").innerHTML = "Votre nom doit être valide";
        return true;
    } else if (regexName.test(firstname.value) === false && firstname.value === "" && firstname.value <= 2) {
        document.getElementById("firstnameErrorMsg").innerHTML = "Votre prénom doit être valide";
        return true;
    }
    return false;

}


// on verifie les entrees du mail
function checkEmail() {
    const email = document.getElementById("email").value;
    const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    
    if (regexEmail.test(email) === false) {
        document.getElementById("emailErrorMsg").innerHTML = 
        "Votre email doit être valide";
        return true;
    }
    return false;
}

// on verifie les entrees du message

    function checkMessage() {
        const message = document.getElementById("message").value;
        const regexMessage = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        if (regexMessage.test(message) === false && message === "" && message <= 2) {
            document.getElementById("messageErrorMsg").innerHTML = 
            "Votre message doit être valide";
            return true;
        }
        return false;
    }


    emailjs.init('zlONoCIb3T4jO7xIM');

    function sendEmail(e) {
        var tempParams = {
            lastname: document.getElementById("lastname").value,
            firstname: document.getElementById("firstname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        emailjs.send('service_vo5bma2', 'template_p29knmb', tempParams).then((response) => {
            document.getElementById("succes-message").innerHTML = "Votre message a bien été envoyé";    
        }).catch((error) => {
            document.getElementById("error-message").innerHTML = "Une erreur est survenue";
        });
    }


// fonction pour envoyer le formulaire

const formBtn = document.getElementById("btnsubmit");
const form = document.getElementById("form");

    formBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (checkName() === false && checkEmail() === false && checkMessage() === false) {
            formBtn.addEventListener("click", sendEmail());
            
        }
        form.reset();
    });