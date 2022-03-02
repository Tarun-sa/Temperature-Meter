let thermometer=document.querySelector(".temperature");
thermometer.innerHTML="&#xf2cb;";
thermometer.style.color="green";
const risingTemp=()=>{

setTimeout(() => {
    thermometer.innerHTML="&#xf2ca";
    thermometer.style.color="green";
}, 2000);
setTimeout(() => {
    thermometer.innerHTML="&#xf2c9";
    thermometer.style.color="yellow";
}, 3000);
setTimeout(() => {
    thermometer.innerHTML="&#xf2c8";
    thermometer.style.color="yellow";
}, 4000);
setTimeout(() => {
    thermometer.innerHTML="&#xf2c7";
    thermometer.style.color="red";
}, 5000);
setTimeout(() => {
    thermometer.innerHTML="&#xf2cb;";
    thermometer.style.color="green";
}, 6000);
}

risingTemp();

setInterval(() => {
    risingTemp();
}, 6000);
