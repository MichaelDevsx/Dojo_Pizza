
const pizza_napolitana = {
    "masa":"Traditional",
    "sauce":"Tomato",
    "cheese":"Mozzarella",
    "extra":"Anchoas,Oregano,Alcaparras"
}

const pizza_diandrea = {
    "masa":"Traditional",
    "sauce":"Tomato",
    "cheese":"Gouda,Cheddar",
    "extra":"Jamón Serrano,Salchichas,Pimientos"
}

const pizza_romana = {
    "masa":"Traditional",
    "sauce":"Tomato",
    "cheese":"Mozzarella Barra",
    "extra":"Jamón Cocido,Aceitunas,Pimientos"
}



let select = document.querySelector('.choosed');
let chang_img = document.querySelector('.pizza_img')
const ingredients = document.querySelector('.p1');


function napolitana() {
        ingredients.innerHTML = `Masa - ${pizza_napolitana.masa}, Sauce - ${pizza_napolitana.sauce}, Cheese - ${pizza_napolitana.cheese}, Extra - ${pizza_napolitana.extra}`;
        chang_img.src = './img/napolitana.jpg'

}

function diandrea() {
    ingredients.innerHTML = `Masa - ${pizza_diandrea.masa}, Sauce - ${pizza_diandrea.sauce}, Cheese - ${pizza_diandrea.cheese}, Extra - ${pizza_diandrea.extra}`;
    chang_img.src = './img/diandrea.jpg'
}

function romana() {
    ingredients.innerHTML = `Masa - ${pizza_romana.masa}, Sauce - ${pizza_romana.sauce}, Cheese - ${pizza_romana.cheese}, Extra - ${pizza_romana.extra}`;
    chang_img.src = './img/romana.jpg'
}


// modal windows

let cerrar = document.querySelector('.close');
let abrir = document.querySelector('.cta');
let modal = document.querySelector('.modal');
let modalC = document.querySelector('.modal-container');

abrir.addEventListener('click', function(e){
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', function(){
    modal.classList.toggle('modal-close');
    setTimeout(function() {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    },900)
});

// value
const t_masa = document.getElementById('t_masa');
const t_sauce = document.getElementById('t_sauce');
const t_cheese = document.getElementById('t_cheese');
const t_extra = document.getElementById('t_extra');

const btn_add = document.getElementById('btn-add');

    btn_add.addEventListener('click', fun1)

    function fun1() {
        ingredients.innerHTML = `Masa - ${t_masa.value}, Sauce - ${t_sauce.value}, Cheese - ${t_cheese.value}, Extra - ${t_extra.value}`;
        modal.classList.toggle('modal-close');
        setTimeout(function() {
            modalC.style.opacity = '0';
            modalC.style.visibility = 'hidden';
        },900)
    }


// alert

const ssend = document.getElementById('ssend');

ssend.addEventListener('click', snd)

function snd() {
    alert('Order Sent');
}