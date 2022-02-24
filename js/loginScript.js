function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

    if(type == "success"){
        window.location = "../index.html";
    }
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    var username;
    var email;
    var password;
    var loginUsername;
    var loginPassword;
    

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        createAccountForm.querySelector("#signupUsername")
        
    }); 

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0) {
                username = e.target.value;
            }
            if (e.target.id === "signupEmail" && e.target.value.length > 0) {
                email = e.target.value;
            }
            if (e.target.id === "signupPassword" && e.target.value.length > 0) {
                password = e.target.value;
            }
            if(username != null && email != null && password != null){

                createAccountForm.addEventListener("submit", e => {
                    e.preventDefault();
                    loginForm.classList.remove("form--hidden");
                    createAccountForm.classList.add("form--hidden");
                });
            }

            if (e.target.id === "loginUsername") {
                loginUsername = e.target.value;
            }
            if (e.target.id === "loginPassword") {
                loginPassword = e.target.value;
            }
            if(loginUsername != null && loginPassword != null){
                loginForm.addEventListener("submit", e => {
                    e.preventDefault();
                    if(loginUsername == username && loginPassword == password){
                        setFormMessage(loginForm, "success","It works");
                    }else{
                        setFormMessage(loginForm, "error", "Did not work");
                    }
                });
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});