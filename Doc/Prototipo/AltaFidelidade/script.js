function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid && !passwordValid;
}

function isPasswordValid(){
    const password = document.getElementById("password").value;
    if(!password){
        return false;
    }

    return true;
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function login(){
<<<<<<< HEAD
    window.location
}

const botao = document.querySelector(".dropbutton");
const elementoPlataformas = document.querySelector(".dropbutton .options-drop");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
=======
    const loginemail = document.getElementById("email").value;
    if(loginemail === "funcionario@gmail.com"){
        window.location.href = "homefuncionario.html";
    }

    if(loginemail === "recepcionista@gmail.com"){
        window.location.href = "homerecepcionista.html";
    }

    if(loginemail === "dono@gmail.com"){
        window.location.href = "homedono.html";
    }

    if(loginemail === "cliente@gmail.com"){
        window.location.href = "homecliente.html";
    }

    if(loginemail === "administrador@gmail.com"){
        window.location.href = "homeadministrador.html";
    }

    if(loginemail !== "funcionario@gmail.com" && loginemail !== "recepcionista@gmail.com" && loginemail 
    !== "dono@gmail.com" && loginemail !== "cliente@gmail.com" && loginemail !== "administrador@gmail.com"){
        alert("Essa conta é inexistente!");
    }
}
>>>>>>> a65fb241fedb956adcd3c06cd8fca2a941f0e30a
