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
    body.classList.contains("lock")
  ) {
    toggleBurger();
  }
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentCardsCount;
let currentPetsOnScreen = [];

function numOfCards() {
  let width = window.innerWidth;
  if (width >= 1280) {
    currentCardsCount = 8;
  } else if (width >= 768) {
    currentCardsCount = 6;
  } else {
    currentCardsCount = 3;
  }
  return currentCardsCount;
}

let pageInfo;

function startParams() {
  numOfCards();
  createPetsPics("#item-active", currentCardsCount);
  pageInfo = paginateParams(48, 1, currentCardsCount);
  randomizePets("#item-active");
}

window.onload = startParams();

let massive;
let listOfPages;
massive = createMassive(+pageInfo["totalItems"]);
listOfPages = createPages(massive);

function randomizePets(id) {
  let random;
  let petsTemp = [];
  while (petsTemp.length !== currentCardsCount) {
    random = getRandomInt(0, 7);
    if (!petsTemp.includes(random) && !currentPetsOnScreen.includes(random)) {
      petsTemp.push(random);
    }
  }
  let cards = document.querySelector(id).children;
  currentPetsOnScreen = [...petsTemp];
  for (let i = 0; i < cards.length; i++) {
    cards[i].querySelector("img").src = `${
      pets[currentPetsOnScreen[i]]["img"]
    }`;
    cards[i].querySelector("p").textContent = `${
      pets[currentPetsOnScreen[i]]["name"]
    }`;
  }
}

function paginateParams(totalItems, startPage = 1, pageSize = 8) {
  let totalPages = Math.ceil(totalItems / pageSize);
  let endPage = totalPages;
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  return {
    totalItems: totalItems,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    pages: pages,
  };
}

let paginationArrows = document.querySelectorAll(".pets__arrow");

function setCardInfo(item, page, index) {
  if (window.getComputedStyle(item, null) !== "none") {
    item.querySelector("img").src = `${
      pets[+listOfPages[+page][index]]["img"]
    }`;
    item.querySelector("p").textContent = `${
      pets[+listOfPages[+page][index]]["name"]
    }`;
  }
}

function doubleForward() {
  if (paginationArrows[4].classList.contains("active")) {
    paginationArrows[2].dataset.page = pageInfo["totalPages"];
    paginationArrows[2].textContent = pageInfo["totalPages"];
    paginationArrows[3].classList.remove("active");
    paginationArrows[3].classList.add("inactive");
    paginationArrows[4].classList.remove("active");
    paginationArrows[4].classList.add("inactive");
    paginationArrows[0].classList.add("active");
    paginationArrows[0].classList.remove("inactive");
    paginationArrows[1].classList.add("active");
    paginationArrows[1].classList.remove("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }
}

function doubleBack() {
  if (paginationArrows[0].classList.contains("active")) {
    paginationArrows[2].dataset.page = 1;
    paginationArrows[2].textContent = 1;
    paginationArrows[3].classList.add("active");
    paginationArrows[3].classList.remove("inactive");
    paginationArrows[4].classList.add("active");
    paginationArrows[4].classList.remove("inactive");
    paginationArrows[0].classList.remove("active");
    paginationArrows[0].classList.add("inactive");
    paginationArrows[1].classList.remove("active");
    paginationArrows[1].classList.add("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }
}

function forwardPage() {
  if (
    paginationArrows[3].classList.contains("active") &&
    +paginationArrows[2].dataset.page < pageInfo["totalPages"]
  ) {
    paginationArrows[2].dataset.page = +paginationArrows[2].dataset.page + 1;
    paginationArrows[2].textContent = paginationArrows[2].dataset.page;
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }

  if (paginationArrows[2].dataset.page == pageInfo["totalPages"]) {
    paginationArrows[3].classList.remove("active");
    paginationArrows[3].classList.add("inactive");
    paginationArrows[4].classList.remove("active");
    paginationArrows[4].classList.add("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }

  if (+paginationArrows[2].dataset.page > 1) {
    paginationArrows[0].classList.add("active");
    paginationArrows[0].classList.remove("inactive");
    paginationArrows[1].classList.add("active");
    paginationArrows[1].classList.remove("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }
}

function backPage() {
  if (
    paginationArrows[1].classList.contains("active") &&
    +paginationArrows[2].dataset.page > 1
  ) {
    paginationArrows[2].dataset.page = +paginationArrows[2].dataset.page - 1;
    paginationArrows[2].textContent = paginationArrows[2].dataset.page;
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }

  if (paginationArrows[2].dataset.page == 1) {
    paginationArrows[0].classList.remove("active");
    paginationArrows[0].classList.add("inactive");
    paginationArrows[1].classList.remove("active");
    paginationArrows[1].classList.add("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }

  if (+paginationArrows[2].dataset.page < pageInfo["totalPages"]) {
    paginationArrows[4].classList.add("active");
    paginationArrows[4].classList.remove("inactive");
    paginationArrows[3].classList.add("active");
    paginationArrows[3].classList.remove("inactive");
    let petCards = document.querySelectorAll(".pets__item");
    Array.from(petCards).forEach((item, index) => {
      if (index < listOfPages[1].length) {
        setCardInfo(item, paginationArrows[2].dataset.page, index);
      }
    });
  }
}

paginationArrows[paginationArrows.length - 1].addEventListener(
  "click",
  doubleForward
);
paginationArrows[0].addEventListener("click", doubleBack);
paginationArrows[1].addEventListener("click", backPage);
paginationArrows[3].addEventListener("click", forwardPage);

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
}

function createMassive() {
  let petCounter = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  };
  let temp = [];
  currentPetsOnScreen.forEach((item) => {
    petCounter[item] += 1;
    temp.push(item);
  });
  let tempNum;
  while (temp.length !== +pageInfo["totalItems"]) {
    tempNum = getRandomInt(0, 7);
    if (petCounter[tempNum] < 6) {
      temp.push(tempNum);
      petCounter[tempNum] += 1;
    }
  }
  return temp;
}

function createPages(massive) {
  let listOfPages = { 1: massive.splice(0, +pageInfo["pageSize"]) };
  let tempMassive = [...massive];
  let temp;
  let tempAllCheck = [...listOfPages[1]];
  let currPage = 2;
  for (let i = 2; i <= pageInfo["pages"].length; i++) {
    temp = [];
    for (let j = 0; j < tempMassive.length; j++) {
      if (temp.length === pageInfo["pageSize"]) break;
      else if (tempAllCheck.length === 8) {
        tempAllCheck = [];
        i -= 1;
        j = -1;
      } else if (tempAllCheck.includes(tempMassive[j])) {
        continue;
      } else if (
        !tempAllCheck.includes(tempMassive[j]) &&
        !temp.includes(tempMassive[j])
      ) {
        tempAllCheck.push(tempMassive[j]);
        temp.push(tempMassive[j]);
        tempMassive.splice(j, 1);
        j -= 1;
      }
    }
    if (temp.length !== 0) {
      listOfPages[currPage] = [...temp];
      currPage += 1;
    }
  }
  console.log(tempMassive);
  return listOfPages;
}

// popup menu

let popupMenu = document.querySelector(".popup");
let closePopupButton = popupMenu.querySelector(".popup__close");
let petCards = document.querySelectorAll(".pets__item");

function openPopupMenu() {
  popupMenu.classList.add("active");
  body.classList.add("lock");
  html.style.overflow = "hidden";
  overlay.classList.add("active");
}

function closePopupMenu() {
  popupMenu.classList.remove("active");
  body.classList.remove("lock");
  html.style.removeProperty("overflow");
  overlay.classList.remove("active");
}
console.log(closePopupMenu());

function showPetInfo(page, index) {
  let popupCard = document.querySelector(".popup");
  popupCard.querySelector(".popup__img").style.backgroundImage = `url(${
    pets[listOfPages[page][index]]["img"]
  })`;
  popupCard.querySelector(".popup__content > h3").textContent = `${
    pets[listOfPages[page][index]]["name"]
  }`;
  popupCard.querySelector(".popup__content > h4").textContent =
    `${pets[listOfPages[page][index]]["type"]}` +
    " - " +
    `${pets[listOfPages[page][index]]["breed"]}`;
  popupCard.querySelector(".popup__content > p").textContent = `${
    pets[listOfPages[page][index]]["description"]
  }`;
  popupCard.querySelector(".age span").textContent = `${
    pets[listOfPages[page][index]]["age"]
  }`;
  popupCard.querySelector(".inoculations span").textContent = `${
    pets[listOfPages[page][index]]["inoculations"]
  }`;
  popupCard.querySelector(".diseases span").textContent = `${
    pets[listOfPages[page][index]]["diseases"]
  }`;
  popupCard.querySelector(".parasites span").textContent = `${
    pets[listOfPages[page][index]]["parasites"]
  }`;
}

petCards.forEach((item, index) =>
  item.addEventListener("click", () => {
    if (index < listOfPages[1].length) {
      showPetInfo(paginationArrows[2].dataset.page, index);
    }
  })
);

closePopupButton.addEventListener("click", closePopupMenu);
petCards.forEach((item) => item.addEventListener("click", openPopupMenu));
overlay.addEventListener("click", () => {
  
    closePopupMenu();
  
});