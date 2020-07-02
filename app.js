const form1 = document.querySelector('#form1'),
      form2 = document.querySelector('#form2'),
      form3 = document.querySelector('#form3'),
      form4 = document.querySelector('#form4'),
      form5 = document.querySelector('#form5'),
      form6 = document.querySelector('#form6');

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

// form 4
const q1degree = document.querySelector('#q1degree'),
      q1minute = document.querySelector('#q1minute'),
      q1second = document.querySelector('#q1second'),
      degree2 = document.querySelector('#degree2'),
      minute2 = document.querySelector('#minute2'),
      second2 = document.querySelector('#second2'),
      q1_2 = document.querySelector('#q1-2'),
      sin2 = document.querySelector('#sin2');

// form 5
const dif2 = document.querySelector('#dif2'),
      q1Lam2 = document.querySelector('#q1-lam2'),
      qty2 = document.querySelector('#qty2'),
      lam2 = document.querySelector('#lam2');

// form 3
const middle2 = document.querySelector('#middle2'),
      k1_2 = document.querySelector('#k1-2'),
      k2_2 = document.querySelector('#k2-2'),
      k3_2 = document.querySelector('#k3-2');

const sinDel = document.querySelector('#sin-del'),
      lamDel = document.querySelector('#lam-del'),
      middleDel = document.querySelector('#middle-del'),
      sin2Del = document.querySelector('#sin2-del'),
      lam2Del = document.querySelector('#lam2-del'),
      middle2Del = document.querySelector('#middle2-del');

sinDel.hidden = 
lamDel.hidden = 
middleDel.hidden = 
sin2Del.hidden = 
lam2Del.hidden = 
middle2Del.hidden = true;

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

// FORM 3
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

// FORM 4
form4.addEventListener('input', e => {
    e.preventDefault();

    q1_2.innerHTML = 
    sin2.innerText = '';

    let res1 = (+q1degree.value + +q1minute.value / 60 + +q1second.value / 3600).toFixed(15),
        res2 = (+degree2.value + +minute2.value / 60 + +second2.value / 3600).toFixed(15),
        sum = Math.sin(((res1 - res2) / 180) * Math.PI).toFixed(15);

    if (degree2.value && minute2.value && second2.value) {
        q1_2.innerHTML = '&phi;1 = ' + res2;
    }

    if (q1degree.value && 
        q1minute.value && 
        q1second.value && 
        degree2.value && 
        minute2.value && 
        second2.value) {
        sin2.innerText = 'Sin = ' + sum;
    }

    sin2Del.hidden = false;
});

sin2Del.addEventListener('click', () => {
    q1degree.value = 
    q1minute.value = 
    q1second.value = 
    degree2.value = 
    minute2.value = 
    second2.value = '';

    q1_2.innerText = 
    sin2.innerText = null;
    sin2Del.hidden = true;

    q1degree.focus();
});

// FORM 5
form5.addEventListener('input', e => {
    e.preventDefault();

    lam2.innerHTML = '';

    if (dif2.value && q1Lam2.value && qty2.value) {
        lam2.innerHTML = '&lambda; = ' + ((dif2.value.replace(',', '.') * 0.000001 * q1Lam2.value) / qty2.value * 1000000000).toFixed(15) + ' нм';
    }

    lam2Del.hidden = false;
});

lam2Del.addEventListener('click', () => {
    dif2.value = 
    q1Lam2.value = 
    qty2.value = '';

    lam2.innerText = null;
    lam2Del.hidden = true;

    dif2.focus();
});

// FORM 6
form6.addEventListener('input', e => {
    e.preventDefault();

    middle2.innerHTML = '';

    if (k1_2.value && k2_2.value && k3_2.value) {
        middle2.innerHTML = '&lambda;ср = ' + ((+k1_2.value.replace(',', '.') + +k2_2.value.replace(',', '.') + +k3_2.value.replace(',', '.')) / 3).toFixed(15)  + ' нм';
    }

    middle2Del.hidden = false;
});

middle2Del.addEventListener('click', () => {
    k1_2.value = 
    k2_2.value = 
    k3_2.value = '';

    middle2.innerText = null;
    middle2Del.hidden = true;

    k1_2.focus();
});
