//VARIABLES HTML--------------------------------------
const domingo = document.getElementById('domingo')
const lunes = document.getElementById('lunes')
const martes = document.getElementById('martes')
const miercoles = document.getElementById('miercoles')
const jueves = document.getElementById('jueves')
const viernes = document.getElementById('viernes')
const sabado = document.getElementById('sabado')
const reloj = document.getElementById('reloj')
//-----------------------------------------------------

//MODO AMPM--------------------------------------------
var modoAMPM

if (!localStorage.getItem('modoAmPm')) {
    localStorage.setItem('modoAmPm', 'false')
    modoAMPM = false
    docehs2.classList.add('actual')
    docehs2.setAttribute('disabled', true)
} else if (localStorage.getItem('modoAmPm') == 'false') {
    modoAMPM = false
    docehs2.classList.add('actual')
    docehs2.setAttribute('disabled', true)
} else {
    modoAMPM = true
    docehs.classList.add('actual')
    docehs.setAttribute('disabled', true)
}

function cambiarModo() {
    if (modoAMPM == true) {
        modoAMPM = false
        localStorage.setItem('modoAmPm', 'false')
        docehs.classList.remove('actual')
        docehs2.classList.add('actual')
        docehs2.setAttribute('disabled', true)
        docehs.removeAttribute('disabled')
        
    } else {
        modoAMPM = true
        localStorage.setItem('modoAmPm', 'true')
        docehs.classList.add('actual');
        docehs2.classList.remove('actual')
        docehs.setAttribute('disabled', true)
        docehs2.removeAttribute('disabled')
    }
}

function formatAMPM(h, m, s) {
    var ampm = h >= 12 ? ' PM' : ' AM';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    h = h < 10 ? '0' + h : h;
    reloj.innerHTML = h + ':' + m + ':' + s + ampm
}
//-----------------------------------------------------

//RELOJ------------------------------------------------

const tick = () => {
    const date = new Date();
        domingo.classList.add('noactual');
        lunes.classList.add('noactual');
        martes.classList.add('noactual');
        miercoles.classList.add('noactual');
        jueves.classList.add('noactual');
        viernes.classList.add('noactual');
        sabado.classList.add('noactual');
    switch (date.getDay()) {
        case 0:
            domingo.classList.add('actual');
            domingo.classList.remove('noactual');
            break;
        case 1:
            lunes.classList.add('actual');
            lunes.classList.remove('noactual');
            break;
        case 2:
            martes.classList.add('actual');
            martes.classList.remove('noactual');
            break;
        case 3:
            miercoles.classList.add('actual');
            miercoles.classList.remove('noactual');
            break;
        case 4:
            jueves.classList.add('actual');
            jueves.classList.remove('noactual');
            break;
        case 5:
            viernes.classList.add('actual');
            viernes.classList.remove('noactual');
            break;
        case 6:
            sabado.classList.add('actual');
            sabado.classList.remove('noactual');
            break;
    }

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    if (modoAMPM) {
        formatAMPM(h, m, s)
    } else {
        h = h < 10 ? '0' + h : h;
        reloj.innerHTML = h + ':' + m + ':' + s;
    }
}
//----------------------------------------------------

setInterval(tick, 100)
