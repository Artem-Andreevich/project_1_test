window.addEventListener("DOMContentLoaded", () =>{


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