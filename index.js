homeCountEl = document.getElementById("home-count");
guestCountEl = document.getElementById("guest-count");
let homeCount = 0
let guestCount = 0

// Functions, three for the home counter and three for the guest counter

function homeadd1() {
    homeCount += 1;
    homeCountEl.textContent = homeCount;
};

function homeadd2() {
    homeCount += 2;
    homeCountEl.textContent = homeCount;
};

function homeadd3() {
    homeCount += 3;
    homeCountEl.textContent = homeCount;
};

function guestadd1() {
    guestCount += 1;
    guestCountEl.textContent = guestCount;
};

function guestadd2() {
    guestCount += 2;
    guestCountEl.textContent = guestCount;
};

function guestadd3() {
    guestCount += 3;
    guestCountEl.textContent = guestCount;
};

// New game button, sets all counts to 0

function newGame() {
    homeCountEl.textContent = 0;
    guestCountEl.textContent = 0;
    homeCount = 0;
    guestCount = 0;
};