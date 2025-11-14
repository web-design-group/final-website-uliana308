const photosPositions = [
  [
    {top: '120px', left: '0px'},
    {top: '350px', left: '460px'},
    {top: '150px', left: '1100px'}
  ],
  [
    {top: '340px', left: '30px'},
    {top: '110px', left: '670px'},
    {top: '400px', left: '1050px'}
  ],
];

const photosSrc = [
  ['./images/photo1.png', './images/photo2.png', './images/photo3.png'],
  ['./images/photo4.png', './images/photo5.png', './images/photo6.png'],
];

const images = document.querySelectorAll('.overlay-photo');
let currentIndex = 0;

function cyclePhotos() {
  images.forEach((img, i) => {
    if (photosPositions[currentIndex] && photosPositions[currentIndex][i]) {
      const pos = photosPositions[currentIndex][i];
      img.style.top = pos.top;
      img.style.left = pos.left;
    }
    // проверяем чтобы не вызвать ошибку
    if (photosSrc[currentIndex] && photosSrc[currentIndex][i]) {
      img.src = photosSrc[currentIndex][i];
    }
  });
  currentIndex = (currentIndex + 1) % photosPositions.length;
}

setInterval(cyclePhotos, 2000);
cyclePhotos();

function initSlideShow() {
  const halls = [
    {
      image: "./images/hall1.png",
      title: "Lumal<br>Minimal",
      description: `Светлый зал с идеальным естественным светом.<br/>
      Подходит для лаконичных фэшн-портретов,<br/>
      бьюти-съемки и каталогов.`,
    },
    {
      image: "./images/hall2.png",
      title: "Lumal<br>Loft",
      description: `Кирпичные стены подходят для стильных <br/>
      дерзких фотосессий. Свет как естественный,<br/>
      так и профессиональный.`,
    }
  ];

  let currentIndex = 0;

  const imgElem = document.getElementById("hall-image");
  const titleElem = document.getElementById("hall-title");
  const descElem = document.getElementById("hall-description");

  const arrowRight = document.getElementById("arrow-right");
  const arrowLeft = document.getElementById("arrow-left");

  function updateArrows() {
    if (currentIndex === halls.length - 1) {
      arrowRight.style.color = "var(--color-gray)";
      arrowRight.style.cursor = "default";
    } else {
      arrowRight.style.color = "var(--color-black)";
      arrowRight.style.cursor = "pointer";
    }

    if (currentIndex === 0) {
      arrowLeft.style.color = "var(--color-gray)";
      arrowLeft.style.cursor = "default";
    } else {
      arrowLeft.style.color = "var(--color-black)";
      arrowLeft.style.cursor = "pointer";
    }
  }

  function updateHall(index) {
    const hall = halls[index];
    imgElem.src = hall.image;
    titleElem.innerHTML = hall.title;
    descElem.innerHTML = hall.description;

    updateArrows();
  }

  arrowRight.addEventListener("click", () => {
    if (currentIndex < halls.length - 1) {
      currentIndex++;
      updateHall(currentIndex);
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateHall(currentIndex);
    }
  });

  updateHall(currentIndex);
}

initSlideShow();

function Accordion(selector){
    let accordion = document.querySelector(selector);
    let accordionItems = accordion.querySelectorAll(selector + ' > *');
    accordionItems.forEach((item) => {
        item.onclick = function () {
            this.classList.toggle('show');
            this.classList.add('active');
            accordionItems.forEach((everyItem) => {
                if (!everyItem.classList.contains('active')) {
                    everyItem.classList.remove('show');
                }
            });
            this.classList.remove('active');
        }
    });
}
Accordion('.accordion');