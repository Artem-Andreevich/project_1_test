function modalOpen(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('body').style.paddingRight = '17px';
    clearInterval(modalTimerId);
    // window.removeEventListener('scroll', showModalScroll);
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

    btnModalOpen.forEach( item => {item.addEventListener('click', () => modalOpen(modalSelector, modalTimerId))});

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
            modalClose(modalSelector);
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.style.display === "block") {
            modalClose(modalSelector);
        }
    })

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalScroll);
        }
    }
    window.addEventListener('scroll', showModalScroll);
}

export default modal
export {modalOpen}
export {modalClose}