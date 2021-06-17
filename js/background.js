let oNumber = Math.ceil(Math.random() * 10);
let xNumber = Math.ceil(Math.random() * 10);

//we're increasing the o or x amout if it's too low
if(oNumber <= 3) {
    oNumber = 5;
}
if(xNumber <= 3) {
    xNumber = 5;
}

//we're appending the o to the background
for (let i = 0; i < oNumber; i++) {
    let xPosition = Math.ceil(Math.random() * 100);
    let yPosition = Math.ceil(Math.random() * 100);
    
    $("#background").append(`<svg style="position: relative; top: ${yPosition}vh; left: ${xPosition}vw;" class="backgroundIcons" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#363636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`);
}
for (let i = 0; i < xNumber; i++) {
    let rotateDeg = Math.ceil(Math.random() * 360);

    let xPosition = Math.ceil(Math.random() * 100);
    let yPosition = Math.ceil(Math.random() * 100);

    $("#background").append(`<svg class="backgroundIcons" style='position: relative; top: ${yPosition}vh; left: ${xPosition}vw; transform: rotate(${rotateDeg}deg);' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#363636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}