// Функция для настройки событий
function setupHeaderEvents() {
  const burgerMenus = document.querySelectorAll('.burger-menu'); // Выбираем все элементы с классом burger-menu
  const menus = document.querySelectorAll('.menu'); // Выбираем все элементы с классом menu
  const cityDropdowns = document.querySelectorAll('.city-dropdown'); // Выбираем все элементы с классом city-dropdown
  const body = document.body; // Выбираем элемент body

  // Добавляем обработчик события на элемент body
  body.addEventListener('click', (event) => {
    // Проверяем, был ли клик выполнен вне меню
    if (!event.target.closest('.burger-menu') && !event.target.closest('.menu')) {
      // Закрываем меню и убираем классы .fader и .fixed из body
      burgerMenus.forEach((burgerMenu, index) => {
        burgerMenu.classList.remove('active');
        menus[index].classList.remove('active');
        body.classList.remove('fader', 'fixed');

        // Восстанавливаем прозрачность burger-menu__title
        const title = burgerMenu.nextElementSibling; // Предполагается, что .burger-menu__title идет после .burger-menu
        title.style.opacity = '1';
      });
    }
  });

  // Обходим все элементы с классом burger-menu
  burgerMenus.forEach((burgerMenu, index) => {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active'); // Переключаем класс active для burger-menu
      menus[index].classList.toggle('active'); // Переключаем класс active для соответствующего меню

      // Переключаем прозрачность burger-menu__title
      const title = burgerMenu.nextElementSibling; // Предполагается, что .burger-menu__title идет после .burger-menu
      if (burgerMenu.classList.contains('active')) {
        title.style.opacity = '0'; // Устанавливаем нулевую прозрачность при открытии меню
        
        // Добавляем классы .fader и .fixed к body при открытии меню
        body.classList.add('fader', 'fixed');
      } else {
        title.style.opacity = '1'; // Восстанавливаем прозрачность при закрытии меню
        
        // Убираем классы .fader и .fixed из body при закрытии меню
        body.classList.remove('fader', 'fixed');
      }
    });

    const selectedCity = cityDropdowns[index].querySelector('.selected-city');
    const cityList = cityDropdowns[index].querySelector('.city-list');

    selectedCity.addEventListener('click', () => {
      cityDropdowns[index].classList.toggle('open');
    });

    cityList.addEventListener('click', (event) => {
      const selectedCityText = event.target.textContent;
      selectedCity.textContent = selectedCityText;
      cityDropdowns[index].classList.remove('open');
    });
  });
}

setupHeaderEvents();




document.addEventListener("DOMContentLoaded", function() {
  // Этот код выполняется после загрузки DOM-структуры, но до загрузки изображений
  var swiper = new Swiper('.hero-slider', {
    // Ваши настройки Swiper
    slidesPerView: 1,
    autoplay: {
      delay: 5000, // задержка между слайдами (в миллисекундах)
    },
    height: '100vh',
    pagination: {
      el: '.hero-pagination', // Селектор для контейнера буллетов
      clickable: true, // Разрешить кликать на буллеты для перехода к соответствующему слайду
    },

    
  });

  // Инициализация Swiper
  swiper.init();
});

window.addEventListener("load", function() {
  // Этот код выполняется после загрузки всех изображений
});






// team slider ~~~~~~~~~~~~~~~~

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".team-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    direction: "horizontal",
    navigation: {
        nextEl: ".team-single__slider-next",
        prevEl: ".team-single__slider-prev",
    },
    breakpoints: {
        425: {
          slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,          
        },
        991: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
      },
    },
});
// if (window.innerWidth > 767) {
//   mySwiper.destroy();
// }
});

// team slider ~~~~~~~~~~~~~~~~









// аккордеон ~~~~~~~~~~~~~~~


document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      // Переключаем активное состояние для элемента аккордеона
      item.classList.toggle("active");

      // Закрываем остальные аккордеоны
      // accordionItems.forEach(function (otherItem) {
      //   if (otherItem !== item && otherItem.classList.contains("active")) {
      //     otherItem.classList.remove("active");
      //   }
      // });
    });
  });
});

 
// аккордеон ~~~~~~~~~~~~~~~





document.addEventListener('DOMContentLoaded', function() {
  const procedureDropdowns = document.querySelectorAll('.procedure-dropdown');

  procedureDropdowns.forEach((dropdown) => {
    const selectedProcedure = dropdown.querySelector('.selected-procedure');
    const procedureList = dropdown.querySelector('.procedure-list');

    selectedProcedure.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    procedureList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        selectedProcedure.textContent = event.target.textContent;
        dropdown.classList.remove('open');
      }
    });
  });
});








// фейвор кнопки работ в портфолио ~~~~~~~~~~~~~~


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".favor__button");
  const sliders = document.querySelectorAll(".slider");

  // Функция для обработки клика по кнопке
  function handleButtonClick(button) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    const category = button.getAttribute("data-category");

    sliders.forEach((slider) => {
      const sliderCategory = slider.getAttribute("data-category");

      if (sliderCategory === category) {
        slider.style.display = "block";
        // slider.style.opacity = "1";
      } else {
        slider.style.display = "none";
        // slider.style.opacity = "0";
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button);
    });
  });

  // Инициализация слайдера для первой активной кнопки
  const activeButton = document.querySelector(".favor__button.active");
  if (activeButton) {
    handleButtonClick(activeButton);
  }
});

// фейвор кнопки работ в портфолио ~~~~~~~~~~~~~~











document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('income__slider');
  const totalProfitElement = document.getElementById('total-profit');
  const miniButton = document.getElementById('mini-button');
  const standardButton = document.getElementById('standard-button');
  const maxButton = document.getElementById('max-button');

  let monthlyProfit = 170073; // Начальная месячная прибыль для "Mini"
  let activeButton = miniButton; // Инициализируем активную кнопку

  // Функция для установки активной кнопки
  function setActiveButton(button) {
    activeButton.classList.remove('active'); // Убираем класс .active у предыдущей активной кнопки
    button.classList.add('active'); // Добавляем класс .active к текущей активной кнопке
    activeButton = button; // Обновляем активную кнопку
  }

  // Функция для обновления значения слайдера и месячной прибыли
  function updateSliderAndMonthlyProfit() {
    const selectedMonths = parseInt(slider.value);
    const calculatedMonthlyProfit = monthlyProfit * selectedMonths;
    const calculatedTotalProfit = calculatedMonthlyProfit.toLocaleString('ru-RU') + ' ₽';

    totalProfitElement.textContent = calculatedTotalProfit;
  }

  // Вызвать функцию для первоначального расчета общей прибыли
  updateSliderAndMonthlyProfit();

  slider.addEventListener('input', updateSliderAndMonthlyProfit);

  miniButton.addEventListener('click', function () {
    monthlyProfit = 170073; // Установка месячной прибыли для "Mini"
    slider.value = 3; // Установка значения слайдера по умолчанию
    updateSliderAndMonthlyProfit();
    setActiveButton(miniButton); // Устанавливаем Mini как активную кнопку
  });

  standardButton.addEventListener('click', function () {
    monthlyProfit = 270073; // Установка месячной прибыли для "Standard"
    slider.value = 3; // Установка значения слайдера по умолчанию
    updateSliderAndMonthlyProfit();
    setActiveButton(standardButton); // Устанавливаем Standard как активную кнопку
  });

  maxButton.addEventListener('click', function () {
    monthlyProfit = 370073; // Установка месячной прибыли для "Max"
    slider.value = 3; // Установка значения слайдера по умолчанию
    updateSliderAndMonthlyProfit();
    setActiveButton(maxButton); // Устанавливаем Max как активную кнопку
  });
});














// Создайте массив с ссылками на полные изображения
const fullImages = [
  "./img/franchise/1-full.png",
  "./img/franchise/4-full.png",
  "./img/franchise/2-full.png",
  "./img/franchise/3-full.jpg",
  "./img/franchise/5-full.jpg",
  "./img/franchise/1-full.png",
  "./img/franchise/4-full.png",
  "./img/franchise/2-full.png",
  "./img/franchise/3-full.jpg",
  "./img/franchise/5-full.jpg",
  // Добавьте ссылки на полные изображения для остальных фотографий
  // ...
];

// Получите все ссылки на изображения и добавьте обработчик события на каждую из них
const galleryLinks = document.querySelectorAll(".gallery__link");

galleryLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      openLightbox(index);
  });
});

// Функция для открытия lightbox с выбранным изображением
function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");

  // Создайте элемент изображения и добавьте его в lightbox
  const image = new Image();
  image.src = fullImages[index]; // Используйте ссылку на полное изображение
  lightboxContent.innerHTML = "";
  lightboxContent.appendChild(image);

  // Покажите lightbox
  lightbox.style.display = "block";

  // Добавьте обработчик события для закрытия lightbox по клику вне фотографии
  lightbox.addEventListener("click", () => {
      closeLightbox();
  });
}

// Функция для закрытия lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Добавьте обработчик событий для двойного клика на элемент .lightbox-content
const lightboxContent = document.querySelector(".lightbox-content");
lightboxContent.addEventListener("dblclick", (event) => {
  event.stopPropagation(); // Остановим всплытие события, чтобы не закрыть лайтбокс
});

















