function showGift() {
    const name = document.getElementById("name").value;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

    if (name.trim() !== "") {
        document.getElementById("userName").textContent = name;
        document.getElementById("setup").classList.add("hidden");
        document.getElementById("reveal").classList.remove("hidden");
    }
}
const cakeImages = [
    "images/cake1.png",
    "images/cake2.png",
    "images/cake3.png",
    "images/cake4.png",
    "images/cake5.png",
    "images/cake6.png",
];

function newCake() {
    const img = document.getElementById("cakeImage");
    const randomCake = cakeImages[Math.floor(Math.random() * cakeImages.length)];
    img.src = randomCake;
}

function showGift() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
        document.getElementById("userName").textContent = name;
        document.getElementById("setup").classList.add("hidden");
        document.getElementById("reveal").classList.remove("hidden");
        newCake(); // Load a random cake initially
    }
}