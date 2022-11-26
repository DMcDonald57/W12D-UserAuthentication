

function userLogin() {
    axios.request({
        url : `https://reqres.in/api/login`,
        method : `POST`,
        data : {
            // email : "eve.holt@reqres.in",
            // password : "cityslicka",

            // OR  on log in page use eve.holt@reqres.in, password: cityslicka
            email : document.getElementById(`userlogIn`).value,
            password : document.getElementById(`userPassword`).value
        }
    }).then(loginSuccessful).catch(loginFailed);
}

function loginSuccessful(response) {
    let data = response.token
    Cookies.set(`sessionToken`, data);
    location.href = (`home.html`);
}

function loginFailed(error) {
    console.log(`Log in Failed`);
    alert(`log in failed`);
    
}

document.getElementById(`submitLogin`).addEventListener(`click`, userLogin);