

function userLogin() {
    axios.request({
        url : `https://reqres.in/`,
        method : `POST`,
        data : {
            email : document.getElementById(`userlogin`),
            password : document.getElementById(`userPassword`),
        }
    }).then(loginSuccessful).catch(loginFailed);
}

function loginSuccessful() {
    console.log(`success`);
    Cookies.set(`sessionToken`, respons.data.token);
    document.body(<a href="home.html"></a>);
}

function loginFailed(error) {
    console.log(error.response.data.error);
    alert(error.response.data.error);
    
}