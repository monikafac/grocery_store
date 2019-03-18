// mechanizm przejścia do strony głównej
const logo = document.querySelector(" div.logo");
logo.addEventListener("click", function() {
  location.href = "index.html";
});

//mechanizm przejścia do odpowiedniego fragmentu strony
//koszyk
$('.basket').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $('.summary').offset().top
  }, 500);
});

//warzywa
$('.vegetables').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $('#carrot').offset().top
  }, 500);
});

//owoce
$('.fruits').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $('#strawberries').offset().top
  }, 500);
});

//nabiał
$('.dairy').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $('#milk').offset().top
  }, 500);
});

//mechanizm zmiany liczby zakupionych produktów

const carrotAmount = document.querySelector("#carrot input");
const lettuceAmount = document.querySelector("#lettuce input");
const tomatoAmount = document.querySelector("#tomato input");
const strawberriesAmount = document.querySelector("#strawberries input");
const bananasAmount = document.querySelector("#bananas input");
const grapesAmount = document.querySelector("#grapes input");
const milkAmount = document.querySelector("#milk input");
const cheeseAmount = document.querySelector("#cheese input");

const carrotForm = document.querySelector("#carrot form");
const lettuceForm = document.querySelector("#lettuce form");
const tomatoForm = document.querySelector("#tomato form");
const strawberriesForm = document.querySelector("#strawberries form");
const bananasForm = document.querySelector("#bananas form");
const grapesForm = document.querySelector("#grapes form");
const milkForm = document.querySelector("#milk form");
const cheeseForm = document.querySelector("#cheese form");

const div = document.querySelector("section.summary div");
const divElement = document.createElement('div');
const basket = document.querySelector(".basket p.amount");

const cart = [];
let sum=0;
let sumAmount = 0;

const summary = function(){
  sum=0;
  sumAmount=0;
  cart.forEach(product => sum=sum+product.cost);
  cart.forEach(products => sumAmount=sumAmount+Number(products.amount));
  
    divElement.textContent=' ';
    divElement.textContent=`Dodałeś do koszyka ${sumAmount} produktów, zapłacisz ${sum} złotych`;
    divElement.classList.add('active');
    div.appendChild(divElement);
    basket.textContent=`${sumAmount}`;
    
}



const addNewCarrot = function(e) {
  e.preventDefault();
  let amount = carrotAmount.value;
  const price = 30;
  let cost = amount * price;
  if (!cart.carrot) {
    cart.push(carrot = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.carrot.amount+Number(amount);
     cost=+cart.carrot.cost+Number(cost);
     cart.push(carrot = {
      amount: amount,
      cost: cost
    });
  }

  if (amount === "") return;
  carrotAmount.value = ""; 
  summary();
  
};


const addNewLettuce = function(e) {
  e.preventDefault();
  let amount = lettuceAmount.value;
  const price = 4;
  let cost = amount * price;
  if (!cart.lettuce) {
    cart.push(lettuce = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.lettuce.amount+Number(amount);
     cost=+cart.lettuce.cost+Number(cost);
     cart.push(lettuce = {
        amount: amount,
        cost: cost
      });
     
  }

  if (amount === "") return;
  lettuceAmount.value = "";
  summary();
};

const addNewTomato = function(e) {
  e.preventDefault();
  let amount = tomatoAmount.value;
  const price = 15;
  let cost = amount * price;
  if (!cart.tomato) {
    cart.push(tomato = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.tomato.amount+Number(amount);
     cost=+cart.tomato.cost+Number(cost);
     cart.push(tomato = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  tomatoAmount.value = "";
  summary();
};

const addNewStrawberries = function(e) {
  e.preventDefault();
  let amount = strawberriesAmount.value;
  const price = 20;
  let cost = amount * price;
  if (!cart.strawberries) {
    cart.push(strawberries = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.strawberries.amount+Number(amount);
     cost=+cart.strawberries.cost+Number(cost);
     cart.push(strawberries = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  strawberriesAmount.value = ""; 
  summary();
};

const addNewBananas = function(e) {
  e.preventDefault();
  let amount = bananasAmount.value;
  const price = 5;
  let cost = amount * price;
  if (!cart.bananas) {
    cart.push(bananas = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.bananas.amount+Number(amount);
     cost=+cart.bananas.cost+Number(cost);
     cart.push(bananas = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  bananasAmount.value = "";
  summary();
};

const addNewGrapes = function(e) {
  e.preventDefault();
  let amount = grapesAmount.value;
  const price = 15;
  let cost = amount * price;
  if (!cart.grapes) {
    cart.push(grapes = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.grapes.amount+Number(amount);
     cost=+cart.grapes.cost+Number(cost);
     cart.push(grapes = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  grapesAmount.value = "";
  summary();
};

const addNewMilk = function(e) {
  e.preventDefault();
  let amount = milkAmount.value;
  const price = 5;
  let cost = amount * price;
  if (!cart.milk) {
    cart.push(milk = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.milk.amount+Number(amount);
     cost=+cart.milk.cost+Number(cost);
     cart.push(milk = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  milkAmount.value = "";
  summary();
};

const addNewCheese = function(e) {
  e.preventDefault();
  let amount = cheeseAmount.value;
  const price = 24;
  let cost = amount * price;
  if (!cart.cheese) {
    cart.push(cheese = {
      amount: amount,
      cost: cost
    });
  } else{
     amount=+cart.cheese.amount+Number(amount);
     cost=+cart.cheese.cost+Number(cost);
     cart.push(cheese = {
        amount: amount,
        cost: cost
      });
  }

  if (amount === "") return;
  cheeseAmount.value = "";
  summary();
};

carrotForm.addEventListener("submit", addNewCarrot);
lettuceForm.addEventListener("submit", addNewLettuce);
tomatoForm.addEventListener("submit", addNewTomato);
strawberriesForm.addEventListener("submit", addNewStrawberries);
bananasForm.addEventListener("submit", addNewBananas);
grapesForm.addEventListener("submit", addNewGrapes);
milkForm.addEventListener("submit", addNewMilk);
cheeseForm.addEventListener("submit", addNewCheese);
