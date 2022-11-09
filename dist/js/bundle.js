/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  // Калькулятор каллорий
  const resultKkal = document.querySelector('.calculating__result span');
  resultKkal.textContent = 0;
  const calcTo = {
    sex: localStorage.getItem('sex'),
    height: '',
    weight: '',
    age: '',
    ratio: localStorage.getItem('ratio')
  };
  let sex, height, weight, age, ratio;
  sex = document.querySelectorAll('[data-sex]');
  height = document.querySelector('#height');
  weight = document.querySelector('#weight');
  age = document.querySelector('#age');
  ratio = document.querySelectorAll('[data-ratio]');
  sex.forEach(item => {
    // item.classList.remove('calculating__choose-item_active')
    if (calcTo.sex !== null) {
      if (item.getAttribute('data-sex') === calcTo.sex) {
        item.classList.add('calculating__choose-item_active');
      }
    } else {
      item.classList.remove('calculating__choose-item_active');
    }

    item.addEventListener('click', e => {
      sex.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
      });
      e.target.classList.add('calculating__choose-item_active');
      calcTo.sex = e.target.getAttribute('data-sex');
      localStorage.setItem('sex', calcTo.sex);
      calcRatio();
    });
  });
  ratio.forEach(item => {
    // item.classList.remove('calculating__choose-item_active')
    if (calcTo.ratio !== null) {
      if (item.getAttribute('data-ratio') === calcTo.ratio) {
        item.classList.add('calculating__choose-item_active');
      }
    } else {
      item.classList.remove('calculating__choose-item_active');
    }

    item.addEventListener('click', e => {
      ratio.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
      });
      e.target.classList.add('calculating__choose-item_active');
      calcTo.ratio = e.target.getAttribute('data-ratio');
      localStorage.setItem('ratio', calcTo.ratio);
      calcRatio();
    });
  });
  height.addEventListener('input', e => {
    if (e.target.value.match(/\D/g)) {
      e.target.classList.add('calculating__choose-item_active');
      console.log(e.target.value);
    } else {
      e.target.classList.remove('calculating__choose-item_active');
    }

    calcTo.height = height.value;
    calcRatio();
  });
  weight.addEventListener('input', () => {
    calcTo.weight = weight.value;
    calcRatio();
  });
  age.addEventListener('input', () => {
    calcTo.age = age.value;
    calcRatio();
  });

  function calcRatio() {
    let resultCalc = (+calcTo.sex + +calcTo.height * 4.8 + +calcTo.weight * 13.4 + +calcTo.age * 5.7) * +calcTo.ratio; // resultCalc = resultCalc + (+calcTo.ratio)

    resultKkal.textContent = Math.round(resultCalc).toString();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
  // Делаем Class для меню
  class MenuItem {
    constructor(img, alt, title, descr, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parentSelector = document.querySelector(parentSelector);

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.course = 56;
      this.changeCourse();
    }

    changeCourse() {
      this.price = this.price * this.course;
    }

    renderMenu() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(classItem => element.classList.add(classItem));
      }

      element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
      this.parentSelector.append(element);
    }

  }

  const getResource = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could net fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  axios.get('http://localhost:3000/menu').then(data => {
    data.data.forEach(obj => {
      new MenuItem(obj.img, obj.altimg, obj.title, obj.descr, obj.price, '.menu .container').renderMenu();
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom.iterable.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function form(formSelector, modalTimerId, modalSelector) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: "img/spinner.svg",
    success: "Спасибо, форма отправлена!",
    fail: "Ошибка"
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = 'display: block; margin: 0 auto;';
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_services_services__WEBPACK_IMPORTED_MODULE_2__.postData)('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.fail);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModal = document.querySelector('.modal__dialog');
    prevModal.style.display = 'none';
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalOpen)('.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
                <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>`;
    document.querySelector('.modal').append(thanksModal);
    const modal = document.querySelector(modalSelector);
    modal.addEventListener('click', e => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
        prevModal.style.display = 'block';
        thanksModal.remove();
        clearInterval(modalTimerIde);
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalClose)('.modal');
      }
    });
    const modalTimerIde = setTimeout(() => {
      prevModal.style.display = 'block';
      thanksModal.remove();
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalClose)('.modal');
    }, 4000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "modalClose": () => (/* binding */ modalClose),
/* harmony export */   "modalOpen": () => (/* binding */ modalOpen)
/* harmony export */ });
function modalOpen(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('body').style.paddingRight = '17px';
  clearInterval(modalTimerId); // window.removeEventListener('scroll', showModalScroll);
}

function modalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('body').style.paddingRight = '0';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const btnModalOpen = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  btnModalOpen.forEach(item => {
    item.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
      modalClose(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.style.display === "block") {
      modalClose(modalSelector);
    }
  });

  function showModalScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      modalOpen(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalScroll);
    }
  }

  window.addEventListener('scroll', showModalScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slide() {
  // Slider
  const slideItems = document.querySelectorAll('.offer__slide'),
        totalSlide = document.querySelector('#total'),
        currentSlide = document.querySelector('#current'),
        prevSlideBtn = document.querySelector('.offer__slider-prev'),
        nextSlideBtn = document.querySelector('.offer__slider-next'),
        wrapperSlider = document.querySelector('.offer__slider-wrapper'),
        sliders = document.querySelector('.offer__slider-container'); // Настройки для счетчиков

  let offset = 0;
  let countSlide = 1;
  currentSlide.textContent = '01';
  let width = +window.getComputedStyle(wrapperSlider).width.slice(0, -2); // считаем ширину одного слайда

  sliders.style.width = `${+slideItems.length * width}px`; // устанавливаем ширину контейнера для всех слайдов
  // let sliderWidth = +sliders.style.width.slice(0, -2); // Записываем в переменную ширину всех слайдов

  let sliderWidth = +sliders.style.width.replace(/\D/g, ''); // Используем рег. выр-ния
  // Настройки контейнера слайдера

  sliders.style.transform = `translateX(${offset}px)`;
  sliders.style.transition = "0.5s all";
  sliders.style.display = 'flex';
  wrapperSlider.style.overflow = 'hidden'; // total Counter Sliders

  if (slideItems.length < 10) {
    totalSlide.textContent = `0` + slideItems.length;
  } else {
    totalSlide.textContent = `${slideItems.length}`;
  } // Добавляем "ноль" перед счетчиком


  function putZero(elem) {
    if (elem < 10) {
      currentSlide.textContent = `0` + elem;
    } else {
      currentSlide.textContent = elem;
    }
  } // Dots перевключение стиля активности


  function dotActive() {
    dots.forEach(dot => dot.classList.remove('dot_active'));
    dots[countSlide - 1].classList.toggle('dot_active');
  } // Dots для слайдера


  const offerSlider = document.querySelector('.offer__slider'),
        indicator = document.createElement('ol');
  let dots = [];
  indicator.classList.add('carousel-indicators');
  offerSlider.style.position = 'relative';
  offerSlider.append(indicator);

  for (let k = 0; k < slideItems.length; k++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', k + 1);
    dot.classList.add('dot');
    indicator.append(dot);

    if (k === 0) {
      dot.classList.add('dot_active');
    }

    dots.push(dot);
  } // Кнопка следующего слайда


  nextSlideBtn.addEventListener('click', e => {
    offset += width;

    if (offset > sliderWidth - 1) {
      offset = 0;
    }

    sliders.style.transform = `translateX(-${offset}px)`;

    if (countSlide < slideItems.length) {
      countSlide += 1;
      putZero(countSlide);
    } else {
      countSlide = 1;
      currentSlide.textContent = '01';
    }

    dotActive();
  }); // Кнопка предидущего слайда

  prevSlideBtn.addEventListener('click', e => {
    if (offset === 0) {
      offset = sliderWidth;
    }

    offset -= width;
    sliders.style.transform = `translateX(-${offset}px)`;

    if (countSlide < 2) {
      countSlide = slideItems.length;
      putZero(slideItems.length);
    } else {
      countSlide -= 1;
      putZero(countSlide);
    }

    dotActive();
  }); // Навигация по Dots

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const dotData = dot.getAttribute(['data-slide-to']);
      offset = width * (dotData - 1);
      sliders.style.transform = `translateX(-${offset}px)`;
      countSlide = +dotData;
      putZero(countSlide);
      dotActive();
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slide);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

  function hideTabsContent() {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });
    tabs.forEach(item => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabsContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabsContent();
  showTabsContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
  const deadLine = '2022-07-15';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../js/modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _js_modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../js/modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _js_modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../js/modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _js_modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../js/modules/form */ "./js/modules/form.js");
/* harmony import */ var _js_modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../js/modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _js_modules_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../js/modules/slide */ "./js/modules/slide.js");
/* harmony import */ var _js_modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../js/modules/timer */ "./js/modules/timer.js");







window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(_js_modules_modal__WEBPACK_IMPORTED_MODULE_4__.modalOpen, 50000);
  (0,_js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_js_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_js_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_js_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('form', modalTimerId, '.modal');
  (0,_js_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal]', '.modal', modalTimerId);
  (0,_js_modules_slide__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_js_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  console.log('1');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map