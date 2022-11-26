axios.request({
    url : `https://reqres.in/api/unknown`
}).then(colors).catch(nocolors);

function colors(response) {
    let data = response.data.data;
    for (let post of data){
        document.body.insertAdjacentHTML(`beforeend`, `<h3>Name:${post.name}</h3>`);
        document.body.insertAdjacentHTML(`beforeend`, `<h3>Year:${post.year}</h3>`);
        document.body.insertAdjacentHTML(`beforeend`, `<input type = "color" value=${post.color}>`)
    }
}

function nocolors(error) {
    document.body.insertAdjacentHTML(`afterend`, `<h2>No colors for you.</h2>`);
}