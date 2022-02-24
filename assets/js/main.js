
console.log("Start Warten für 3 Sekunden...");
const tOut = setTimeout(() => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
}, 3000)

function startTime() {
    let current = new Date();
    console.log(current.toLocaleTimeString());
}

// setInterval(startTime, 1000);

let a = 10;
function countdown() {

    console.log(a);
    a--;

    if (a == 0) {
        console.log("Endlich Feierabend");
        clearInterval(count)
    }

}

// let count = setInterval(countdown, 1000);

