import {modalOpen, modalClose} from "./modal";
import {postData} from "../services/services";

function form(formSelector, modalTimerId, modalSelector) {
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/spinner.svg",
        success: "Спасибо, форма отправлена!",
        fail: "Ошибка"
    }

    forms.forEach( item => {
        bindPostData(item)
    })

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = 'display: block; margin: 0 auto;';
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData( 'http://localhost:3000/requests', json)
                .then( data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.fail);
                })
                .finally( () => {
                    form.reset();
                })
        });
    }

    function showThanksModal(message) {
        const prevModal = document.querySelector('.modal__dialog');
        prevModal.style.display = 'none';

        modalOpen('.modal', modalTimerId);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
                <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>`
        document.querySelector('.modal').append(thanksModal)
        const modal = document.querySelector(modalSelector);
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
                prevModal.style.display = 'block';
                thanksModal.remove();
                clearInterval(modalTimerIde)
                modalClose('.modal');
            }
        })
        const modalTimerIde =  setTimeout( () => {
            prevModal.style.display = 'block';
            thanksModal.remove();
            modalClose('.modal');
        }, 4000 )
    }
}

export default form