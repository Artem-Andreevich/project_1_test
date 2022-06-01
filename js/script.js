"use strict"

const personFilmsDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    writeYourGenres: function () {
        for ( let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}?`);
                if ( a != '' && a != null ) {
                    this.genres[ i - 1] = a;
                } else {
                    i--
                }
        }
        this.genres.forEach(function (item, i) {
            console.log(`Ваш любимый жанр номер ${i + 1} это ${item}`)
        })
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой последний фильм Вы посмотрели"),
                  b = prompt("На сколько Вы его оцените:");
            if (a.length < 50 && a !== '' && a != null && b !== '' && b != null ){
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели");
        while ( this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели");
        }
    },
    toggleVisibleMyDB: function () {
        this.private ? this.private = false : this.private = true;
    },
    showDB: function (){
        (this.private == false) ? console.log("Это база общая") : console.log('Это приватные настройки')
    }

};
// personFilmsDB.toggleVisibleMyDB();
// personFilmsDB.showDB();
// personFilmsDB.start();
// personFilmsDB.rememberMyFilms();
// personFilmsDB.writeYourGenres();
//
// console.log(personFilmsDB);




// // function detectPersonalLevel() {
// //     if (personFilmsDB.count <= 10) {
// //         alert('Вы посмотрели мало фильмов');
// //     } else if ( numberOfFilms > 10 && numberOfFilms < 30){
// //         alert('Вы посмотрели много фильмов');
// //     } else if ( numberOfFilms > 30) {
// //         alert('Вы киноман');
// //     } else {
// //         console.log('error')
// //     }
// // };
// // detectPersonalLevel();
