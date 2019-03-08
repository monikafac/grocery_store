// mechanizm przejścia do strony głównej
const logo = document.querySelector(" div.logo");

const cart = {};

logo.addEventListener("click", function() {
  location.href = "index.html";
});

//mechanizm przejścia do strony z koszykiem
const basket = document.querySelector("div.basket");

basket.addEventListener("click", function() {
  location.href = "basket.html";
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

const ul = document.querySelector("section.summary ul");

const addNewCarrot = function(e) {
  e.preventDefault();
  const amount = carrotAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewLettuce = function(e) {
  e.preventDefault();
  const amount = lettuceAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewTomato = function(e) {
  e.preventDefault();
  const amount = tomatoAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewStrawberries = function(e) {
  e.preventDefault();
  const amount = strawberriesAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewBananas = function(e) {
  e.preventDefault();
  const amount = bananasAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewGrapes = function(e) {
  e.preventDefault();
  const amount = grapesAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
};

const addNewMilk = function(e) {
  e.preventDefault();
  const amount = milkAmount.value;
  if (amount === "") return;
  console.log(amount);
  const task = document.createElement("li");
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
  const task = document.createElement("li");
  task.innerHTML = amount + "sztuk sera po 100 dag" + "<button>Usuń</button>";
  ul.appendChild(task);
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
