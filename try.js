//HANDEL INPUT
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
/////=======================================================//////



//HANDEL HEAD BUTTONS
const button1 = document.querySelector('.ins-button1');
const button2 = document.querySelector('.ins-button2');
///////===================================================//////



//HANDEL CALCULATION BUTTONS
const division = document.querySelector('.btn-division');
const NSeven = document.querySelector('.btn7');
const N8 = document.querySelector('.btn8');
const N9 = document.querySelector('.btn9');
const minus = document.querySelector('.btn-minus');
const multiply = document.querySelector('.btnx');
const N4 = document.querySelector('.btn4');
const N5 = document.querySelector('.btn5');
const N6 = document.querySelector('.btn6');
const plus = document.querySelector('.btn-plus');
const clear = document.querySelector('.btn-clear');
const N1 = document.querySelector('.btn1');
const N2 = document.querySelector('.btn2');
const N3 = document.querySelector('.btn3');
const dot = document.querySelector('.btn-dot');
const N0 = document.querySelector('.btn0');
const ceo = document.querySelector('.btn-ceo');
const equal = document.querySelector('.btn-equal');
const zero = document.querySelector('.btn0');
////////////////============================================//////




////CEO HANDELING
ceo.addEventListener('click', ()=> {
  let set = true;

  setInterval(()=> {
    input2.value = 'Made By Ahmed Isman';
    input2.style.backgroundColor = 'greenyellow';
    
    set = false
  },1000)

});




NSeven.addEventListener('click', ()=> {
  input1.value += '7';
  console.log("dd");
});


N8.addEventListener('click', ()=> {
  input1.value += '8';
})


plus.addEventListener('click', ()=> {
  input1.value += ' + ';
})


N9.addEventListener('click', ()=> {
  input1.value += '9'
})


N4.addEventListener('click', ()=> {
  input1.value += '4';
})



N5.addEventListener('click', ()=> {
  input1.value += '5';
})



N6.addEventListener('click', ()=> {
  input1.value += '6';
})


N1.addEventListener('click', ()=> {
  input1.value += '1';
})


N2.addEventListener('click', ()=> {
  input1.value += '2';
})


N3.addEventListener('click', ()=> {
   input1.value += '3'
})


equal.addEventListener('click', ()=> {
 input1.value = eval(input1.value);

 if(input1.value > 1000000){
  let error = 'wtf bro  I am not AI ahh!! | max number..'
  input1.value = error;
  error.style.color= 'red';
};

// if(input1.value === NaN || input1.value === undefined){
//   input1.value = 'error'
// }
})




division.addEventListener('click', ()=> {
  input1.value += ' / '
})


multiply.addEventListener('click', ()=> {
  input1.value += ' * ';
})



minus.addEventListener('click', ()=> {
  input1.value += ' - '
})

zero.addEventListener('click', ()=> {
  input1.value += '0';
})


dot.addEventListener('click', ()=> {
  input1.value += '.';
})


clear.addEventListener('click', ()=> {
  input1.value = '';
  input2.value = ''
  input2.style.backgroundColor = 'gray'
})



let left = 'left';
button1.addEventListener('click', ()=> {


  if (left === 'left'){
    button1.style.marginLeft = '30px';
    left = '';
  }

  else{
    button1.style.marginLeft = '5px';
    left = 'left';
  }
})





let left1 = 'left';
button2.addEventListener('click', ()=> {
 

  if (left1 === 'left'){
    button2.style.marginLeft = '40px';
    left1 = '';
  }

  else{
    button2.style.marginLeft = '5px';
    left1 = 'left';
  }
})


