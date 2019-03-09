// mechanizm przejścia do strony głównej
const logo = document.querySelector(" div.logo");
logo.addEventListener("click", function() {
  location.href = "index.html";
});

//mechanizm przejścia do strony z koszykiem
const basket = document.querySelector("div.basket");
basket.addEventListener("click", function() {
  location.href = "basket.html";
});

//mechanizm zmiany liczby zakupionych produktów
const cart = {};

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

const ul = document.querySelector("section.summary ul");







const addNewCarrot = function(e) {
  e.preventDefault();
  const amount = carrotAmount.value;
  const price = 30;
  let cost = amount * price;
  if (!cart.carrot) {
    cart.carrot = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.carrot.amount+Number(amount);
     cost=+cart.carrot.cost+Number(cost);
     cart.carrot = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  carrotAmount.value = ""; 
  
};

const addNewLettuce = function(e) {
  e.preventDefault();
  const amount = lettuceAmount.value;
  const price = 4;
  let cost = amount * price;
  if (!cart.lettuce) {
    cart.lettuce = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.lettuce.amount+Number(amount);
     cost=+cart.lettuce.cost+Number(cost);
     cart.lettuce = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  lettuceAmount.value = "";
};

const addNewTomato = function(e) {
  e.preventDefault();
  const amount = tomatoAmount.value;
  const price = 15;
  let cost = amount * price;
  if (!cart.tomato) {
    cart.tomato = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.tomato.amount+Number(amount);
     cost=+cart.tomato.cost+Number(cost);
     cart.tomato = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  tomatoAmount.value = "";
};

const addNewStrawberries = function(e) {
  e.preventDefault();
  const amount = strawberriesAmount.value;
  const price = 20;
  let cost = amount * price;
  if (!cart.strawberries) {
    cart.strawberries = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.strawberries.amount+Number(amount);
     cost=+cart.strawberries.cost+Number(cost);
     cart.strawberries = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  strawberriesAmount.value = ""; 
};

const addNewBananas = function(e) {
  e.preventDefault();
  const amount = bananasAmount.value;
  const price = 5;
  let cost = amount * price;
  if (!cart.bananas) {
    cart.bananas = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.bananas.amount+Number(amount);
     cost=+cart.bananas.cost+Number(cost);
     cart.bananas = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  bananasAmount.value = "";
};

const addNewGrapes = function(e) {
  e.preventDefault();
  const amount = grapesAmount.value;
  const price = 15;
  let cost = amount * price;
  if (!cart.grapes) {
    cart.grapes = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.grapes.amount+Number(amount);
     cost=+cart.grapes.cost+Number(cost);
     cart.grapes = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  grapesAmount.value = "";
};

const addNewMilk = function(e) {
  e.preventDefault();
  const amount = milkAmount.value;
  const price = 5;
  let cost = amount * price;
  if (!cart.milk) {
    cart.milk = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.milk.amount+Number(amount);
     cost=+cart.milk.cost+Number(cost);
     cart.milk = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  milkAmount.value = "";
};

const addNewCheese = function(e) {
  e.preventDefault();
  let amount = cheeseAmount.value;
  const price = 24;
  let cost = amount * price;
  if (!cart.cheese) {
    cart.cheese = {
      amount: amount,
      cost: cost
    };
  } else{
     amount=+cart.cheese.amount+Number(amount);
     cost=+cart.cheese.cost+Number(cost);
     cart.cheese = {
        amount: amount,
        cost: cost
      };
  }

  if (amount === "") return;
  cheeseAmount.value = "";
};

carrotForm.addEventListener("submit", addNewCarrot);
lettuceForm.addEventListener("submit", addNewLettuce);
tomatoForm.addEventListener("submit", addNewTomato);
strawberriesForm.addEventListener("submit", addNewStrawberries);
bananasForm.addEventListener("submit", addNewBananas);
grapesForm.addEventListener("submit", addNewGrapes);
milkForm.addEventListener("submit", addNewMilk);
cheeseForm.addEventListener("submit", addNewCheese);
