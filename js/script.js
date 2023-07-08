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
            //Thezero

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
        },
        '61163773': function () {
            //JuanRengifo GAAAAA
        }
    }

    const variable = username;

    if (variable in invitados) {
        invitados[variable]();
        alert("Si estás en lista");
        window.open("/principal.html")
    } else {
        alert("NO ESTAS EN LA LISTA \n \n*escribe sin dejar espacios");
    }
}



