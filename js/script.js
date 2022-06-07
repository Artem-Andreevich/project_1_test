window.addEventListener("DOMContentLoaded", () =>{
    // Tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items");

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = "none"
        })
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active")
        })
    }
    function showTabsContent(i = 0) {
        tabsContent[i].style.display = "block";
        tabs[i].classList.add("tabheader__item_active")
    }
    hideTabsContent()
    showTabsContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabsContent()
                    showTabsContent(i)
                }
            })
        }
    })
    // End Tabs

    // Timer
    const deadLine = '2022-06-15';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse( new Date() ),
            days = Math.floor( t / (1000 * 60 * 60 * 24)),
            hours = Math.floor( t / (1000 * 60 * 60) % 24),
            minutes = Math.floor( t / (1000 * 60) % 60),
            seconds = Math.floor( t / 1000 % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if ( num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num
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
    // End Timer

    // Modal
    const btnModalOpen = document.querySelectorAll('[data-modal]'),
        btnModalClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    function modalOpen() {
        modal.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').style.paddingRight = '17px';
        clearInterval(modalTimerId);
    }

    function modalClose() {
        modal.style.display = 'none';
        document.querySelector('body').style.overflow = 'visible';
        document.querySelector('body').style.paddingRight = '0';
    }

    btnModalOpen.forEach( item => {item.addEventListener('click', modalOpen)});

    btnModalClose.addEventListener('click', modalClose);

    modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                modalClose();
            }
        })
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.style.display === "block") {
            modalClose();
        }
    })

    const modalTimerId = setTimeout(modalOpen, 5000);

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', showModalScroll);
        }
    }

    window.addEventListener('scroll', showModalScroll);
    // End Modal




    // const tabBtn = document.querySelectorAll(".tabheader__item");
    // const tabsContent = document.querySelectorAll(".tabcontent");
    //
    // function tabToggle (btnsArr, tabsArr) {
    //     btnsArr.forEach((itemBtn, indexBtn) => {
    //        if(itemBtn.classList.contains("tabheader__item_active")) {
    //            tabsArr.forEach((tabItem, indexTab) => {
    //                tabItem.style.display = "none"
    //                if (indexTab === indexBtn) {
    //                    tabItem.style.display = "block"
    //                }
    //            })
    //        }
    //     })
    // }
    // tabToggle(tabBtn, tabsContent);
    //
    // tabBtn.forEach((item, i) => {
    //     item.addEventListener("click", (e) => {
    //         document.querySelector(".tabheader__item_active").classList.remove("tabheader__item_active");
    //         item.classList.add("tabheader__item_active");
    //         tabToggle(tabBtn, tabsContent);
    //     })
    // })







});