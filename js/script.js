
function validate() {
    var username = document.getElementById("username").value;
    const invitados = {
        '23008888': function () {
            //cesar
            
        },
        '42173645': function () {
            //lisbeth
            
        },
        '74950634': function () {
            //miguel
            
        },
        '40831420': function () {
            //balak
            
        },
        '42887511': function () {
            //Gato
        },
        '22517904': function () {
            //octavia
        },
        '73600696': function () {
            //Mahily
        },
        '48823642': function () {
            //Bocho
        },
        '47206802': function () {
            //Jimy
        }
    }

    const variable = username;

    if (variable in invitados) {
        invitados[variable]();
        alert("Si estás en lista");
        window.open("Restaurant-Fabian/principal.html")
    } else {
        alert("NO ESTAS EN LA LISTA \n \n*escribe sin dejar espacios");
    }



    /* var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "usuario" && password == "contraseña") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    } */
}



