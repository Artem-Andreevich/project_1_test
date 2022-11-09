function cards() {
    // Делаем Class для меню
    class MenuItem {
        constructor(img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
            this.classes = classes;
            this.course = 56;
            this.changeCourse();
        }
        changeCourse () {
            this.price = this.price * this.course
        }
        renderMenu () {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else { this.classes.forEach(classItem => element.classList.add(classItem)) }

            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`
            this.parentSelector.append(element);
        }
    }
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could net fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    axios.get('http://localhost:3000/menu')
        .then( data => {
            data.data.forEach( obj => {
                new MenuItem(obj.img, obj.altimg, obj.title, obj.descr, obj.price, '.menu .container').renderMenu()
            })
        })
}

export default cards