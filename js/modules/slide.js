function slide() {
    // Slider
    const slideItems = document.querySelectorAll('.offer__slide'),
        totalSlide = document.querySelector('#total'),
        currentSlide = document.querySelector('#current'),
        prevSlideBtn = document.querySelector('.offer__slider-prev'),
        nextSlideBtn = document.querySelector('.offer__slider-next'),
        wrapperSlider = document.querySelector('.offer__slider-wrapper'),
        sliders = document.querySelector('.offer__slider-container');

    // Настройки для счетчиков
    let offset = 0;
    let countSlide = 1;
    currentSlide.textContent = '01'

    let width = +window.getComputedStyle(wrapperSlider).width.slice(0, -2); // считаем ширину одного слайда
    sliders.style.width = `${+slideItems.length * width}px`; // устанавливаем ширину контейнера для всех слайдов
    // let sliderWidth = +sliders.style.width.slice(0, -2); // Записываем в переменную ширину всех слайдов
    let sliderWidth = +sliders.style.width.replace(/\D/g, '') // Используем рег. выр-ния


    // Настройки контейнера слайдера
    sliders.style.transform = `translateX(${offset}px)`;
    sliders.style.transition = "0.5s all";
    sliders.style.display = 'flex';
    wrapperSlider.style.overflow = 'hidden';

    // total Counter Sliders
    if (slideItems.length < 10) {
        totalSlide.textContent = `0` + slideItems.length
    } else {
        totalSlide.textContent = `${slideItems.length}`
    }

    // Добавляем "ноль" перед счетчиком
    function putZero(elem){
        if (elem < 10){
            currentSlide.textContent = `0` + elem
        } else {
            currentSlide.textContent = elem
        }
    }
    // Dots перевключение стиля активности
    function dotActive() {
        dots.forEach( dot => dot.classList.remove('dot_active'))
        dots[countSlide - 1].classList.toggle('dot_active')
    }

    // Dots для слайдера
    const offerSlider = document.querySelector('.offer__slider'),
        indicator = document.createElement('ol');
    let dots = [];

    indicator.classList.add('carousel-indicators')
    offerSlider.style.position = 'relative'
    offerSlider.append(indicator)

    for (let k = 0; k < slideItems.length; k++ ){
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', k + 1)
        dot.classList.add('dot')
        indicator.append(dot)

        if (k  === 0) {
            dot.classList.add('dot_active')
        }
        dots.push(dot)

    }

    // Кнопка следующего слайда
    nextSlideBtn.addEventListener('click', (e) => {
        offset += width
        if (offset > sliderWidth - 1){
            offset = 0
        }
        sliders.style.transform = `translateX(-${offset}px)`;

        if (countSlide < slideItems.length) {
            countSlide += 1
            putZero(countSlide)
        } else {
            countSlide = 1
            currentSlide.textContent = '01'
        }
        dotActive()
    })

    // Кнопка предидущего слайда
    prevSlideBtn.addEventListener('click', (e) => {
        if (offset === 0){
            offset = sliderWidth
        }
        offset -= width
        sliders.style.transform = `translateX(-${offset}px)`;

        if (countSlide < 2) {
            countSlide = slideItems.length
            putZero(slideItems.length)
        } else {
            countSlide -= 1
            putZero(countSlide)
        }
        dotActive()

    })

    // Навигация по Dots
    dots.forEach( dot => {
        dot.addEventListener('click', () => {
            const dotData = dot.getAttribute(['data-slide-to'])
            offset = width * (dotData -1)
            sliders.style.transform = `translateX(-${offset}px)`;
            countSlide = +dotData
            putZero(countSlide)
            dotActive()
        })
    })
}

export default slide