let letraActual = "";

async function cargarLetra() {
    const res = await fetch("/api/letras");
    const data = await res.json();

    const random = data[Math.floor(Math.random() * data.length)];
    letraActual = random.letra;

    document.getElementById("letra").innerText = "Letra: " + random.letra;
    document.getElementById("palabra").innerText = "Palabra: _ " + random.palabra.slice(1);
}

async function verificar() {
    const respuesta = document.getElementById("respuesta").value;

    const res = await fetch("/api/respuesta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            letra: letraActual,
            respuesta: respuesta
        })
    });

    const data = await res.json();
    document.getElementById("mensaje").innerText = data.mensaje;

    cargarLetra();
}

cargarLetra();