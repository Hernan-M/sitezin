document.addEventListener('DOMContentLoaded', function(){
    var stream = document.querySelector('.carrossel-content');
    var items = document.querySelectorAll('.carrossel-item');
    var prev = document.querySelector('.carrossel-prev');
    var next = document.querySelector('.carrossel-next');
    

prev.addEventListener('click', preV);
prev.addEventListener('drag', preV);

next.addEventListener('click', nexT);
next.addEventListener('drag', nexT);

function preV(){
    stream.insertBefore(items[items.length-1], items[0]);
    items = document.querySelectorAll('.carrossel-item');
}

function nexT(){

    stream.appendChild(items[0]);
    items = document.querySelectorAll('.carrossel-item');

}

});

    const menu = document.getElementById('menu')
    const menuOption = document.querySelector('.menu-option');
    let isOpen = true;
     
    menuOption.addEventListener('click', dropDown);
    menuOption.addEventListener('drag', dropDown);

function dropDown(){
    if(isOpen == true){
        menu.classList.add('active-menu');
        isOpen = false;
      } else {
        menu.classList.remove('active-menu');
        isOpen = true;
      }
}
     
function ab() {
    if(window.innerWidth > 800) {
        document.getElementById("logo").src = "styles/insta-1.PNG";
    } else {
        document.getElementById("logo").src = "styles/mobile/ca.jpeg";
    }
};

function a() {  
    if(window.innerWidth > 800) {
        document.getElementById("logo1").src = "styles/insta-2.PNG";
    } else {
        document.getElementById("logo1").src ="styles/mobile/anorexia.jpeg";
        console.log('a')
    }
};

function b() {
    if(window.innerWidth > 800) {
        document.getElementById("logo2").src =  "styles/insta-3.PNG";
    } else {
        document.getElementById("logo2").src = "styles/mobile/bulimia.jpeg";
    }
};

function c() {
    if(window.innerWidth > 800) {
        document.getElementById("logo3").src = "styles/insta-4.PNG";
    } else {
        document.getElementById("logo3").src = "styles/mobile/c.jpeg";
    }
};

function d() {
    if(window.innerWidth > 800) {
        document.getElementById("logo4").src = "styles/insta-5.PNG";
    } else{
        document.getElementById("logo4").src = "styles/mobile/d.jpeg";
    };
}

a();
b();
c();
d();
ab();

window.addEventListener('resize', a);
window.addEventListener('resize', b);
window.addEventListener('resize', c);
window.addEventListener('resize', d);
window.addEventListener('resize', ab);

