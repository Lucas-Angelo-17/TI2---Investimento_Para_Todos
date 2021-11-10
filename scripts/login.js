const objLogin = [
    {
        username: "test",
        password: "123"
    },
    {
        username: "test2",
        password: "1234"
    },
    {
        username: "Test3",
        password: "321"
    },
]

var modal = document.getElementById('id01');

function login() {
    var loc = window.location.pathname;
    var loc2 = loc.substring(1, loc.lastIndexOf('/'));
    const dir = loc2 + "/index.html"
    const username = document.getElementById("usuario").value
    const password = document.getElementById("senha").value
    const o = 0
    
    if (username != null || password != null) {       
    
    for (i = 0; i < objLogin.length; i++) {
        if (username == objLogin[i].username && password == objLogin[i].password) {
            document.getElementById('id01').style.display='none'
            document.getElementById('h_id_user').innerHTML = 'Welcome'
            alert("Bem Vindo: " + username)
            return
        }        
    }
    alert("Incorrect name or password")
}else {
    alert("Please Fill the blank fields or input a valid value")
}
}

