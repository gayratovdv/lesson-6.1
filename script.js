//setINterval

// let number = 0;

// const IntervalId = setInterval(() => {
//     number++
//     console.log(`Hisoblagich: ${number}`);

//     if (number === 10) {
//         clearInterval(IntervalId)
//         setTimeout(() => {
//             console.log("Interval to'xtatildi!");
//         }, 500);
//     }
// }, 1000);


// new Date 

// let hozirgiSana = new Date();
// console.log("Hozirgi sana va vaqt: " + hozirgiSana);

const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);