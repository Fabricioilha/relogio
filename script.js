let boxdigital = document.querySelector(".digital");
let pHora = document.querySelector("#p-hora");
let pMin = document.querySelector("#p-min");
let pSeg = document.querySelector("#p-seg");



setInterval(()=>{
    let time = new Date;
    let hora = time.getHours();
    let minuto = time.getMinutes();
    let segundos = time.getSeconds();
    boxdigital.innerHTML = `${fixzero(hora)}:${fixzero(minuto)}:${fixzero(segundos)}`;
    


    let sdeg = -90 + (360/60)*segundos;
    
    let mdeg = -90 + (360/60)*minuto;
    let hdeg = -90 + (360/12)*hora;
    pHora.style.transform = `rotate(${hdeg}deg)`;
    pMin.style.transform = `rotate(${mdeg}deg)`;
    pSeg.style.transform = `rotate(${sdeg}deg)`;
},1000);




function fixzero(e){
    if(e < 10){
        return "0"+e;
    }else{
        return e;
    }
}
