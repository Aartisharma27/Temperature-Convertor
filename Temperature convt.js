let celsiusinput=document.querySelector('#celsius > input');
let farhenheitinput=document.querySelector('#farhenheit > input');
let kelvininput=document.querySelector('#kelvin > input');

let btn= document.querySelector('.button button');

function roundnumber(number){
  return Math.round(number*100)/100
}

// C to K and F
celsiusinput.addEventListener('input', function(){
  let cTemp=parseFloat(celsiusinput.value);
  let fTemp=(cTemp*(9/5))+32;
  let kTemp=cTemp+273.15;

  farhenheitinput.value=roundnumber(fTemp);
  kelvininput.value=roundnumber(kTemp);
});

// F to C and K

farhenheitinput.addEventListener('input', function(){
  let fTemp=parseFloat(farhenheitinput.value);
  let cTemp=(fTemp-32)*(5/9);
  let kTemp=(fTemp-32)*(5/9)+273.15;

  celsiusinput.value=roundnumber(cTemp);
  kelvininput.value=roundnumber(kTemp);
});

// K to C and F

kelvininput.addEventListener('input', function(){
  let kTemp=parseFloat(kelvininput.value);
  let cTemp=kTemp-273.15
  let fTemp=(fTemp-273.15)*(9/5)+32;

  celsiusinput.value=roundnumber(cTemp);
  farhenheitinput.value=roundnumber(fTemp);
});

// to clear values

btn.addEventListener('click',()=>{
  celsiusinput.value=" ";
  farhenheitinput.value=" ";
  kelvininput.value=" ";

});