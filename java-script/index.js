let signup = document.querySelector(".sign-up-page-section")
let signin = document.querySelector(".sign-in-page-section")
let nologin = document.querySelector(".onclick-login-hide")
let login = document.querySelector(".onclick-login-show")



const gotosignin = () => {
    signup.style.display = "none";
    signin.style.display = "flex"
}
const gotosignup = () => {
    signup.style.display = "flex";
    signin.style.display = "none"
}

const createaccountIn = (e) => {
    // e.preventDefault();
    // nologin.style.display = "none";
    // login.style.display = "flex"
    // console.log("submint loginin")
    // window.location.href = "../loginpage.html";

}

function gotonext() {
    window.location.href = "../loginpage.html";
}
const createaccountup = (e) => {
    e.preventDefault();
    gotosignin()

}
const hideSignup = () => {
    signup.style.display == "flex" ? signup.style.display = "none" : signup.style.display = "flex"


}
const hideSignin = () => {
    signin.style.display == "flex" ? signin.style.display = "none" : signin.style.display = "flex"
}