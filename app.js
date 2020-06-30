const form1 = document.querySelector('#form1'),
      form2 = document.querySelector('#form2'),
      form3 = document.querySelector('#form3');

// form 1
const start = document.querySelector('#start'),
      degree = document.querySelector('#degree'),
      minute = document.querySelector('#minute'),
      second = document.querySelector('#second'),
      q1 = document.querySelector('#q1'),
      sin = document.querySelector('#sin');

// form 2
const dif = document.querySelector('#dif'),
      q1Lam = document.querySelector('#q1-lam'),
      qty = document.querySelector('#qty'),
      lam = document.querySelector('#lam');

// form 3
const middle = document.querySelector('#middle'),
      k1 = document.querySelector('#k1'),
      k2 = document.querySelector('#k2'),
      k3 = document.querySelector('#k3');

const sinDel = document.querySelector('#sin-del'),
      lamDel = document.querySelector('#lam-del'),
      middleDel = document.querySelector('#middle-del');

sinDel.hidden = 
lamDel.hidden = 
middleDel.hidden = true;

// FORM 1
form1.addEventListener('input', e => {
    e.preventDefault();

    q1.innerHTML = 
    sin.innerText = '';

    let res = (+degree.value + +minute.value / 60 + +second.value / 3600).toFixed(4),
        sum = Math.sin(((start.value.replace(',', '.') - res) / 180) * Math.PI).toFixed(4);

    if (degree.value && minute.value && second.value) {
        q1.innerHTML = '&phi;1 = ' + res;
    }

    if (start.value && degree.value && minute.value && second.value) {
        sin.innerText = 'Sin = ' + sum;
    }

    sinDel.hidden = false;
});

sinDel.addEventListener('click', () => {
    start.value = 
    degree.value = 
    minute.value = 
    second.value = '';

    q1.innerText = 
    sin.innerText = null;
    sinDel.hidden = true;

    start.focus();
});

// FORM 2
form2.addEventListener('input', e => {
    e.preventDefault();

    lam.innerHTML = '';

    if (dif.value && q1Lam.value && qty.value) {
        lam.innerHTML = '&lambda; = ' + ((dif.value.replace(',', '.') * 0.000001 * q1Lam.value.replace(',', '.')) / qty.value * 1000000000).toFixed(2) + ' нм';
    }

    lamDel.hidden = false;
});

lamDel.addEventListener('click', () => {
    dif.value = 
    q1Lam.value = 
    qty.value = '';

    lam.innerText = null;
    lamDel.hidden = true;

    dif.focus();
});

form3.addEventListener('input', e => {
    e.preventDefault();

    middle.innerHTML = '';

    if (k1.value && k2.value && k3.value) {
        middle.innerHTML = '&lambda;ср = ' + ((+k1.value.replace(',', '.') + +k2.value.replace(',', '.') + +k3.value.replace(',', '.')) / 3).toFixed(2)  + ' нм';
    }

    middleDel.hidden = false;
});

middleDel.addEventListener('click', () => {
    k1.value = 
    k2.value = 
    k3.value = '';

    middle.innerText = null;
    middleDel.hidden = true;

    k1.focus();
});
