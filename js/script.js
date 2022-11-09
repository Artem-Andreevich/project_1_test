import tabs from '/js/modules/tabs';
import calc from '/js/modules/calc';
import cards from '/js/modules/cards';
import form from '/js/modules/form';
import modal, {modalOpen} from '/js/modules/modal';
import slide from '/js/modules/slide';
import timer from '/js/modules/timer';


window.addEventListener("DOMContentLoaded", () =>{
    const modalTimerId = setTimeout(modalOpen, 50000);
    tabs();
    calc();
    cards();
    form('form', modalTimerId, '.modal');
    modal('[data-modal]', '.modal', modalTimerId);
    slide();
    timer();


console.log('1')



});