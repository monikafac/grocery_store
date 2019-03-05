// mechanizm przejścia do strony głównej
const logo = document.querySelector(' div.logo');

logo.addEventListener('click', function(){
    location.href="index.html";
})

//mechanizm przejścia do strony z koszykiem
const basket = document.querySelector('div.basket');

basket.addEventListener('click', function(){
    location.href="basket.html";
})




//mechanizm zmiany liczby zakupionych produktów



