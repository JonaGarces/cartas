let boton = document.getElementById("boton");

function cambiarCarta() {
    const pinta = ["♥", "♣ ", "♠", "♦"];
    const valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    

    let sortTipos = pinta[Math.floor(Math.random() * 4)];
    let sortNumbers = valor[Math.floor((Math.random() * 12) + 1)];
    

    let color= sortTipos === "♥" || sortTipos === "♦" ? "red" : "black";

    let numbers = document.getElementById("number");
    let topSuit = document.getElementById("topSuit");
    let botSuit = document.getElementById("bottomSuit");

    topSuit.style.color = color;
    botSuit.style.color =color;

    numbers.innerHTML = sortNumbers;
    topSuit.innerHTML = sortTipos;
    botSuit.innerHTML = sortTipos;

}