function calc() {
    // Калькулятор каллорий

    const resultKkal = document.querySelector('.calculating__result span');

    resultKkal.textContent = 0

    const calcTo = {
        sex: localStorage.getItem('sex'),
        height: '',
        weight: '',
        age: '',
        ratio: localStorage.getItem('ratio')
    };
    let sex, height, weight, age, ratio;

    sex = document.querySelectorAll('[data-sex]')
    height = document.querySelector('#height')
    weight = document.querySelector('#weight')
    age = document.querySelector('#age')
    ratio = document.querySelectorAll('[data-ratio]')

    sex.forEach( item => {
        // item.classList.remove('calculating__choose-item_active')
        if (calcTo.sex !== null){
            if(item.getAttribute('data-sex') === calcTo.sex) {
                item.classList.add('calculating__choose-item_active')
            }
        } else {
            item.classList.remove('calculating__choose-item_active')
        }
        item.addEventListener('click', (e) => {
            sex.forEach( item => {
                item.classList.remove('calculating__choose-item_active')
            })
            e.target.classList.add('calculating__choose-item_active')
            calcTo.sex = e.target.getAttribute('data-sex')
            localStorage.setItem('sex', calcTo.sex)
            calcRatio()
        })
    })

    ratio.forEach( item => {
        // item.classList.remove('calculating__choose-item_active')
        if (calcTo.ratio !== null){
            if(item.getAttribute('data-ratio') === calcTo.ratio) {
                item.classList.add('calculating__choose-item_active')
            }
        } else {
            item.classList.remove('calculating__choose-item_active')
        }
        item.addEventListener('click', (e) => {
            ratio.forEach( item => {
                item.classList.remove('calculating__choose-item_active')
            })
            e.target.classList.add('calculating__choose-item_active')
            calcTo.ratio = e.target.getAttribute('data-ratio')
            localStorage.setItem('ratio', calcTo.ratio)
            calcRatio()
        })
    })

    height.addEventListener('input', (e) => {
        if(e.target.value.match(/\D/g)){
            e.target.classList.add('calculating__choose-item_active')
            console.log(e.target.value)
        } else {
            e.target.classList.remove('calculating__choose-item_active')
        }
        calcTo.height = height.value
        calcRatio()
    })
    weight.addEventListener('input', () => {
        calcTo.weight = weight.value
        calcRatio()
    })
    age.addEventListener('input', () => {
        calcTo.age = age.value
        calcRatio()
    })

    function calcRatio() {
        let resultCalc = ((+calcTo.sex) + (+calcTo.height * 4.8) + (+calcTo.weight * 13.4) + (+calcTo.age * 5.7)) * (+calcTo.ratio)
        // resultCalc = resultCalc + (+calcTo.ratio)
        resultKkal.textContent = Math.round(resultCalc).toString()
    }
}

export default calc