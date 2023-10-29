window.onload = () => {
  // Слайдеры главной страницы
  // Получаем HTML-объект нашего основного слайдера на главном компоненте главной страницы
  const elHTMLFirstSlider = document.querySelector(".first-slider.swiper");
  const elHTMLSalesHitsBox = document.querySelector(".sales-hits-box.swiper");
  const elHTMLProductsAndCats = document.querySelector(
    ".products-and-categories"
  );
  const elHTMLTheyCooperating = document.querySelector(".they-cooperating");
  const elHTMLNewsAndPromo = document.querySelector(".news-and-promo");
  // /Слайдеры главной страницы

  // Страница покупки товара
  const elHTMLMakingOrderMain = document.querySelector(
    ".making-order__preview-image"
  );
  const elHTMLMakingOrderControlGallery = document.querySelector(
    ".making-order__other-image"
  );
  const elHTMLProductAlsoOrder = document.querySelector(".product-also-order");
  const elHTMLadditRecommends = document.querySelector(".addit-recommends");
  // /Страница покупки товара

  // Страница просмотра выбранной новости
  const elOtherNewsAndPromo = document.querySelector(".other-news-and-promo");
  // /Страница просмотра выбранной новости

  // Индивидуальный дизайн
  const elHTMLExampleWorksSlider = document.querySelector(
    ".example-works-slider"
  );
  // /Индивидуальный дизайн

  // Слайдеры главной страницы
  // Получаем объект слайдера передав на класс Swiper наш HTML-объект нашего основного слайдера
  // на главном компоненте главной страницы первым параметром и объект с настройками вторым параметром
  const firstSliderSwiper = new Swiper(elHTMLFirstSlider, {
    // стрелки переключения слайдов
    navigation: {
      nextEl: ".first-slider__button-next",
      prevEl: ".first-slider__button-prev",
    },

    // Точки показывающие количество слайдов и на каком сейчас
    pagination: {
      el: ".first-slider__pagination",
      clickable: true,
    },

    // Слайды можно переключать перетаскиваем (тач)
    simulateTouch: true,

    // Более легкое перетаскивание (если нужно стандарт то заменить на 1)
    touchRatio: 2,

    // Угол перетаскивания слайда
    touchAngle: 45,

    // Меняет курсор мыши на "схватить"
    grabCursor: true,

    // Управление колесом мыши
    mousewheel: {
      sensitivity: 1,
      // eventsTarget: "."
    },

    // Количество слайдов для показа
    slidesPerView: 1, // можно и дробное, например 2.5

    // Отключить функционал слайдера если слайдов меньше чем нужно
    watchOverflow: true,

    // Боковые отступы между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    // slidesPerGroup: 1,

    // Стартовать с какого слайда
    // initialSlide: 1,

    // Бесконечность пролистывания
    loop: true,

    // Перетаскивание слайдов без фиксированных позиций
    // freeMode: true,

    // Автоматическое пролистывание
    autoplay: {
      // Задержка в пролистывании
      delay: 10000,

      // Закончить на последнем слайде
      // stopOnLastSlide: true,

      // Отключить после ручного переключения
      disableOnInteraction: false,
    },

    // Скорость прокрутки
    speed: 1000,

    // Адаптивность
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   490: {
    //     slidesPerView: 2,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //   },
    // },

    // Отключить предзагрузку картинок
    // preloadImages: false,

    // Lazy Loading (загрузка картинок по требования (ленивая))
    // lazy: {
    // Подгружать на старте
    // Переключение слайда
    // loadOnTransitionStart: false,
    // Подгрузить предыдущую и следующие картинки
    // loadPrevNext: true,
    // },

    on: {
      // Дополнительная подробная настройка инициализации слайдера
      init() {
        // Вешаем на объект слайдера событие наведения мыши
        this.el.addEventListener("mouseenter", () => {
          // Остановить автоматическое пролистывание
          this.autoplay.stop();
        });

        // Вешаем на объект слайдера событие, когда мы убираем мышь со слайдера
        this.el.addEventListener("mouseleave", () => {
          // Автоматически запустить автоматическое пролистывание
          this.autoplay.start();
        });
      },
    },
  });

  const salesHitsBoxSwiper = new Swiper(elHTMLSalesHitsBox, {
    navigation: {
      nextEl: ".manager-buttons-right",
      prevEl: ".manager-buttons-left",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 340: {
      //   slidesPerView: 1.3915094339622709,
      // },
      // 360: {
      //   slidesPerView: 1.3915094339622709,
      // },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });

  const productsAndCatsSwiper = new Swiper(elHTMLProductsAndCats, {
    navigation: {
      nextEl: ".manager-buttons-right",
      prevEl: ".manager-buttons-left",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 3,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.637,
      },
      // 993: {
      //   slidesPerView: 2.07,
      // },
      // 1201: {
      //   slidesPerView: 2.5,
      // },
      // 1410: {
      //   slidesPerView: 3,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });

  const theyCooperatingSwiper = new Swiper(elHTMLTheyCooperating, {
    navigation: {
      nextEl: ".manager-buttons__right",
      prevEl: ".manager-buttons__left",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });

  const newsAndPromoSwiper = new Swiper(elHTMLNewsAndPromo, {
    navigation: {
      nextEl: ".news-and-promo__button-right",
      prevEl: ".news-and-promo__button-left",
    },
    autoHeight: true,
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });
  // /Слайдеры главной страницы

  // Страница покупки товара
  const makingOrderControlGalery = new Swiper(elHTMLMakingOrderControlGallery, {
    loop: true,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    simulateTouch: true,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      320: {
        slidesPerView: 4.96,
      },
      375: {
        slidesPerView: 5.75,
      },
      425: {
        slidesPerView: 6.45,
      },
      520: {
        slidesPerView: 7.96,
      },
      620: {
        slidesPerView: 9.36,
      },
      700: {
        slidesPerView: 10.6,
      },
      767: {
        slidesPerView: 3.4534042553191491,
      },
      993: {
        slidesPerView: 4.4544680851063832,
      },
      1201: {
        slidesPerView: 5.3723404255319152,
      },
      1410: {
        slidesPerView: 6.3,
      },
      //
    },
  });

  const makingOrderMainSwiper = new Swiper(elHTMLMakingOrderMain, {
    navigation: {
      nextEl: ".making-order__preview-button-next",
      prevEl: ".making-order__preview-button-prev",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    slidesPerView: 1,
    watchOverflow: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
    thumbs: {
      swiper: makingOrderControlGalery,
    },
  });

  const productAlsoOrderSwiper = new Swiper(elHTMLProductAlsoOrder, {
    navigation: {
      nextEl: ".manager-buttons-right",
      prevEl: ".manager-buttons-left",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });

  const additRecommendsSwiper = new Swiper(elHTMLadditRecommends, {
    navigation: {
      nextEl: ".manager-buttons-right",
      prevEl: ".manager-buttons-left",
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });
  // /Страница покупки товара

  // Страница просмотра выбранной новости
  const otherNewsAndPromoSwiper = new Swiper(elOtherNewsAndPromo, {
    navigation: {
      nextEl: ".manager-buttons-right",
      prevEl: ".manager-buttons-left",
    },
    autoHeight: true,
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
    },
    // slidesPerView: 4,
    watchOverflow: false,
    // spaceBetween: 30,
    // slidesPerGroup: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 1.3632075471698113,
      },
      // 400: {
      //   slidesPerView: 1.8,
      // },
      // 450: {
      //   slidesPerView: 2,
      // },
      // 500: {
      //   slidesPerView: 2.2,
      // },
      // 600: {
      //   slidesPerView: 2.7,
      // },
      // 700: {
      //   slidesPerView: 3,
      // },
      767: {
        spaceBetween: 30,
        slidesPerView: "auto",
        loopedSlides: 4 * 2,

        // slidesPerView: 2.25,
      },
      // 993: {
      //   slidesPerView: 2.8,
      // },
      // 1201: {
      //   slidesPerView: 3.4,
      // },
      // 1410: {
      //   slidesPerView: 4,
      // },
    },

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });
  // /Страница просмотра выбранной новости

  // Индивидуальный дизайн
  const exampleWorksSliderSwiper = new Swiper(elHTMLExampleWorksSlider, {
    navigation: {
      nextEl: ".example-works-slider__button-next",
      prevEl: ".example-works-slider__button-prev",
    },
    pagination: {
      el: ".example-works-slider__pagination",
      clickable: true,
    },
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,
    grabCursor: true,
    mousewheel: {
      sensitivity: 1,
      // eventsTarget: "."
    },
    slidesPerView: 1, // можно и дробное, например 2.5
    watchOverflow: true,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 1000,

    on: {
      init() {
        this.el.addEventListener("mouseenter", () => this.autoplay.stop());
        this.el.addEventListener("mouseleave", () => this.autoplay.start());
      },
    },
  });
  // /Индивидуальный дизайн
};
