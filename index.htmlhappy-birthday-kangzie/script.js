const messages = [
  "I hope this year brings you so many good things!",
  "Thank you for making the ordinary days feel like an adventure.",
  "Most importantly, I am very grateful that you exist. Happy birthday!"
];

const messageElement = document.getElementById("message");
const button = document.getElementById("messageButton");
const counter = document.getElementById("counter");

let currentMessage = 0;

button.addEventListener("click", () => {
  if (currentMessage < messages.length) {
    messageElement.style.opacity = "0";

    setTimeout(() => {
      messageElement.textContent = messages[currentMessage];
      messageElement.style.opacity = "1";

      counter.textContent =
        `${currentMessage + 1} of ${messages.length}`;

      currentMessage++;

      if (currentMessage === messages.length) {
        button.textContent = "Celebrate!";
      }
    }, 300);
  } else {
    createConfetti();
    button.textContent = "Happy Birthday! 🎉";
    button.disabled = true;
    counter.textContent = "";
  }
});

function createConfetti() {
  const colours = [
    "#d69c5c",
    "#65734f",
    "#f0c85a",
    "#e88989",
    "#9eb7d6"
  ];

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti");
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor =
      colours[Math.floor(Math.random() * colours.length)];
    piece.style.animationDuration =
      `${2 + Math.random() * 3}s`;
    piece.style.animationDelay =
      `${Math.random() * 0.8}s`;
    piece.style.opacity = Math.random();

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6000);
  }
}
const photoMemories = [
  {
    image: "https://i.imgur.com/Gcp6MZz.jpeg",
    caption: "to my short tongued little FREAKK"
  },
  {
    image: "https://i.imgur.com/KK3KPoT.jpeg",
    caption: "here's to always giving me the first bite-last bite."
  },
  {
    image: "https://i.imgur.com/OHUig4C.jpeg",
    caption: "here's to always giving me the umbrella"
  },
  {
    image: "https://i.imgur.com/aPHqbO2.jpeg",
    caption: "here's to saying yes to my whims"
  },
{
  image: "https://i.imgur.com/6gQH8a5.jpeg",
    caption: "here's to more adventures!"
},
{
   image: "https://i.imgur.com/Br3v2y4.jpeg",
    caption: "...and swapping shirts"
},
{
     image: "https://i.imgur.com/qN3cA0H.jpeg",
    caption: "i love you so very much!"
},
{
  image: "https://i.imgur.com/TNh63Ed.jpeg",
  caption: "your toot"
},
{
  image: "https://i.imgur.com/96FXWJH.jpeg",
caption: "your favourite toot"
}
];

const cameraButton = document.getElementById("cameraButton");
const photoOverlay = document.getElementById("photoOverlay");
const closePhotoViewer = document.getElementById("closePhotoViewer");

const polaroid = document.getElementById("polaroid");
const memoryPhoto = document.getElementById("memoryPhoto");
const memoryCaption = document.getElementById("memoryCaption");
const photoCounter = document.getElementById("photoCounter");

const previousPhoto = document.getElementById("previousPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const flash = document.querySelector(".flash");

let currentPhoto = 0;

cameraButton.addEventListener("click", () => {
  photoOverlay.classList.add("open");
  showPhoto(currentPhoto, false);
});

closePhotoViewer.addEventListener("click", () => {
  photoOverlay.classList.remHove("open");
});

nextPhoto.addEventListener("click", () => {
  currentPhoto =
    (currentPhoto + 1) % photoMemories.length;

  showPhoto(currentPhoto);
});

previousPhoto.addEventListener("click", () => {
  currentPhoto =
    (currentPhoto - 1 + photoMemories.length) %
    photoMemories.length;

  showPhoto(currentPhoto);
});

polaroid.addEventListener("click", () => {
  currentPhoto =
    (currentPhoto + 1) % photoMemories.length;

  showPhoto(currentPhoto);
});

photoOverlay.addEventListener("click", event => {
  if (event.target === photoOverlay) {
    photoOverlay.classList.remove("open");
  }
});

document.addEventListener("keydown", event => {
  if (!photoOverlay.classList.contains("open")) {
    return;
  }

  if (event.key === "ArrowRight") {
    currentPhoto =
      (currentPhoto + 1) % photoMemories.length;

    showPhoto(currentPhoto);
  }

  if (event.key === "ArrowLeft") {
    currentPhoto =
      (currentPhoto - 1 + photoMemories.length) %
      photoMemories.length;

    showPhoto(currentPhoto);
  }

  if (event.key === "Escape") {
    photoOverlay.classList.remove("open");
  }
});

function showPhoto(index, useAnimation = true) {
  const selectedMemory = photoMemories[index];

  if (!useAnimation) {
    updatePhoto(selectedMemory, index);
    return;
  }

  flash.classList.remove("active");
  void flash.offsetWidth;
  flash.classList.add("active");

  polaroid.classList.add("changing");

  setTimeout(() => {
    updatePhoto(selectedMemory, index);
    polaroid.classList.remove("changing");
  }, 200);
}

function updatePhoto(selectedMemory, index) {
  memoryPhoto.src = selectedMemory.image;
  memoryPhoto.alt = selectedMemory.caption;
  memoryCaption.textContent = selectedMemory.caption;

  photoCounter.textContent =
    `${index + 1} of ${photoMemories.length}`;
}
