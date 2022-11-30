////////////////////////////////burger-menu//////////////////////////////////////////////////////////////


const burgerHamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.header-links');
const Logo = document.querySelector('.navigation-wrapper');
let body = document.querySelector("body");
let html = document.querySelector("html");
// находим элементы 


function toggleMenu(){
  burgerHamburger.classList.toggle('open-hamburger');
  mobileMenu.classList.toggle('open-menu');
  Logo.classList.toggle('open-navigation');
  isOverflow();
}
// функция, добавляющая класс open... если его нет у элемента и удаляющая его, если он есть 

function isOverflow(){
  if  (html.style.overflow = "hidden" &&
      body.classList.contains("lock")) {
    html.style.removeProperty('overflow');
    body.classList.remove("lock");
  } else {
    html.style.overflow = "hidden";
    body.classList.add("lock");
  }
  
}

burgerHamburger.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);
// при клике по элементам выполняется функция


/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

let pets = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

let overlay = document.querySelector(".overlay");





function toggleBurger() {
  overlay.classList.toggle("active");
  body.classList.toggle("lock");
}

overlay.addEventListener("click", () => {
  if (
    overlay.classList.contains("active") &&
    body.classList.contains("lock") &&
    html.style.overflow
  ) {
    toggleBurger();
  }
});



// popup menu

const POPUP_MENU = document.querySelector(".popup");
const CLOSE_POPUP_MENU = POPUP_MENU.querySelector(".popup__close");
const ACTIVE_ITEM = document.querySelector("#item-active");

let currentPetsOnScreen = [];
let currentCardsCount;

window.onload = numOfCards();
window.onload = () => {
  createPetsPics("#item-left", currentCardsCount);
  createPetsPics("#item-active", currentCardsCount);
  createPetsPics("#item-right", currentCardsCount);
  randomizePets("#item-left");
  randomizePets("#item-right");
  randomizePets("#item-active");
};

function openPopupMenu() {
  POPUP_MENU.classList.add("active");
  body.classList.add("lock");
  overlay.classList.add("active");
  html.style.overflow = "hidden";
  
}

function closePopupMenu() {
  
  body.classList.remove("lock");
  overlay.classList.remove("active");
  html.style.removeProperty('overflow');
  POPUP_MENU.classList.remove("active");
}

function showPetInfo(num) {
  let popupCard = document.querySelector(".popup");
  popupCard.querySelector(
    ".popup__img"
  ).style.backgroundImage = `url(${pets[num]["img"]})`;
  popupCard.querySelector(
    ".popup__content > h3"
  ).textContent = `${pets[num]["name"]}`;
  popupCard.querySelector(".popup__content > h4").textContent =
    `${pets[num]["type"]}` + " - " + `${pets[num]["breed"]}`;
  popupCard.querySelector(
    ".popup__content > p"
  ).textContent = `${pets[num]["description"]}`;
  popupCard.querySelector(".age span").textContent = `${pets[num]["age"]}`;
  popupCard.querySelector(
    ".inoculations span"
  ).textContent = `${pets[num]["inoculations"]}`;
  popupCard.querySelector(
    ".diseases span"
  ).textContent = `${pets[num]["diseases"]}`;
  popupCard.querySelector(
    ".parasites span"
  ).textContent = `${pets[num]["parasites"]}`;
}

CLOSE_POPUP_MENU.addEventListener("click", closePopupMenu);

overlay.addEventListener("click", () => {
  
    closePopupMenu();
    
  
});

// carousel pets slider

const LEFT_ARROW = document.querySelector(".arrow-left");
const RIGHT_ARROW = document.querySelector(".arrow-right");
const CAROUSEL = document.querySelector(".pets__carousel");
const LEFT_ITEM = document.querySelector("#item-left");
const RIGHT_ITEM = document.querySelector("#item-right");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  LEFT_ARROW.removeEventListener("click", moveLeft);
  RIGHT_ARROW.removeEventListener("click", moveRight);
  randomizePets("#item-left");
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  LEFT_ARROW.removeEventListener("click", moveLeft);
  RIGHT_ARROW.removeEventListener("click", moveRight);
  randomizePets("#item-right");
};

let changedItem;
CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = LEFT_ITEM;
    document.querySelector("#item-active").innerHTML = LEFT_ITEM.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = RIGHT_ITEM;
    document.querySelector("#item-active").innerHTML = RIGHT_ITEM.innerHTML;
  }

  LEFT_ARROW.addEventListener("click", moveLeft);
  RIGHT_ARROW.addEventListener("click", moveRight);
  Array.from(document.querySelector("#item-active").children).forEach((item) =>
    item.addEventListener("click", () => {
      showPetInfo(currentPetsOnScreen[item.dataset.num]);
    })
  );
});

function createPetsPics(id, count) {
  let main = document.querySelector(id);
  for (let i = 0; i < count; i++) {
    let card = document.createElement("div");
    card.classList.add("pets__item");
    let img = document.createElement("img");
    card.appendChild(img);
    let name = document.createElement("p");
    let btn = document.createElement("button");
    btn.textContent = "Learn more";
    name.classList.add("pets__item-text");
    name.classList.add("text");
    btn.classList.add("pets__item-btn");
    btn.classList.add("btn");
    card.appendChild(name);
    card.appendChild(btn);
    card.dataset.num = i;
    main.appendChild(card);
    main.addEventListener("click", openPopupMenu);
  }
  Array.from(main.children).forEach((item) =>
    item.addEventListener("click", () => {
      showPetInfo(currentPetsOnScreen[item.dataset.num]);
    })
  );
}

function randomizePets(id) {
  let random;
  let pets = [];
  while (pets.length !== currentCardsCount) {
    random = getRandomInt(0, 7);
    if (!pets.includes(random) && !currentPetsOnScreen.includes(random)) {
      pets.push(random);
    }
  }
  let cards = document.querySelector(id).children;
  currentPetsOnScreen = [...pets];
  for (let i = 0; i < cards.length; i++) {
    setCardInfo(cards[i], pets[i]);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numOfCards() {
  let width = window.innerWidth;
  if (width >= 1280) {
    currentCardsCount = 3;
  } else if (width >= 768) {
    currentCardsCount = 2;
  } else {
    currentCardsCount = 1;
  }
  return currentCardsCount;
}

function setCardInfo(item, n) {
  item.querySelector("img").src = `${pets[n]["img"]}`;
  item.querySelector("p").textContent = `${pets[n]["name"]}`;
}

RIGHT_ARROW.addEventListener("click", moveRight);
LEFT_ARROW.addEventListener("click", moveLeft);