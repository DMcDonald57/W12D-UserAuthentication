

function userLogin() {
    axios.request({
        url : `https://reqres.in/api/login`,
        method : `POST`,
        data : {
            email : document.getElementById(`userlogIn`).value,
            password : document.getElementById(`userPassword`).value
        }
    }).then(loginSuccessful).catch(loginFailed);
}

function loginSuccessful() {
    console.log(`success`);
    Cookies.set(`sessionToken`, response.data.token);

    // good to here.  use eve.holt@reqres.in cityslicka.  research move another page
    document(`<a href="home.html"></a>`);
}

function loginFailed(error) {
    console.log(error.response.data.error);
    alert(error.response.data.error);
    
}

document.getElementById(`submitLogin`).addEventListener(`click`, userLogin);