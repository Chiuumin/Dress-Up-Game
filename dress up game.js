const mainMenu = document.getElementById('main-menu');
const gamePage = document.getElementById('game-page');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    gamePage.classList.add('active');
});

const clothing = {
    hair: ["assets/hair1.png", "assets/hair2.png", "assets/hair3.png", "assets/hair4.png"],
    top: ["assets/top1.png", "assets/top2.png", "assets/top3.png", "assets/top4.png"],
    bottom: ["assets/bottom1.png", "assets/bottom2.png", "assets/bottom3.png"],
    shoes: ["assets/shoes1.png", "assets/shoes2.png", "assets/shoes3.png"]
};

let currentSelection = {
    hair: 0,
    top: 0,
    bottom: 0,
    shoes: 0
};

let activeCategory = null;

const hairImg = document.getElementById("hair-img");
const topImg = document.getElementById("top-img");
const bottomImg = document.getElementById("bottom-img");
const shoesImg = document.getElementById("shoes-img");
const baseImg = document.getElementById("base-img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCharacter() {
    baseImg.src = "assets/base chara.png"; 
    hairImg.src = clothing.hair[currentSelection.hair];
    topImg.src = clothing.top[currentSelection.top];
    bottomImg.src = clothing.bottom[currentSelection.bottom];
    shoesImg.src = clothing.shoes[currentSelection.shoes];
}

function changeItem(category) {
    activeCategory = category;
}

nextBtn.addEventListener("click", () => {
    if (!activeCategory) return;
    const categoryArray = clothing[activeCategory];
    const currentIndex = currentSelection[activeCategory];

    currentSelection[activeCategory] = (currentIndex + 1) % categoryArray.length;

    updateCharacter();
});

prevBtn.addEventListener("click", () => {
    if (!activeCategory) return;
    const categoryArray = clothing[activeCategory];
    const currentIndex = currentSelection[activeCategory];

    currentSelection[activeCategory] = (currentIndex - 1 + categoryArray.length) % categoryArray.length;

    updateCharacter();
});

updateCharacter();