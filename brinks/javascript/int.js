document.writeln('Olá mundo!')

function mFuncao() {
    var y=document.getElementById ("pr");
    if (y.innerHTML === "eae") {
        SubmitEvent
    } else {
        alert ("tomi")
    }
}


function onoff() { //troca a imagem ; conceito de if e else
    var x=document.getElementById("light");
    if (x.src.match("bulbon")) {
        x.src="img/pic_bulboff.PNG"
    } else {
        x.src="img/pic_bulbon.PNG"
    }
}

function plus() { //calculadora
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + " less: " + (e1 - e2) + "," + " plus: " + (e1 + e2) + "," + " multi: "+ (e1 * e2) + "," + " div: " + (e1 / e2);
}

var names = new Array (); // varias variantes em uma

names[0] = "Fulano de tal"
names[1] = "Beutrano"
names.push("Ciclano")
 console.log (names[0])

for (x=0; x<2; x++) {
    document.write(x)
}

