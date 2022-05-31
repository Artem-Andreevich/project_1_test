"use strict"

let numberOfFilms;

const personFilmsDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// start();
// rememberMyFilms();
// detectPersonalLevel();

function writeYourGenres(arr) {
    for ( let i = 1; i <= 3; i++) {
        personFilmsDB.genres[ i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres(personFilmsDB.genres)

function showDB(arg){
    (arg == false) ? console.log(personFilmsDB) : console.log('Это приватные настройки')
}
showDB(personFilmsDB.private);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой последний фильм Вы посмотрели"),
            b = prompt("На сколько Вы его оцените:");
        if (a.length < 50 && a !== '' && a != null && b !== '' && b != null ){
            personFilmsDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
    while ( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");
    }
}

function detectPersonalLevel() {
    if (personFilmsDB.count <= 10) {
        alert('Вы посмотрели мало фильмов');
    } else if ( numberOfFilms > 10 && numberOfFilms < 30){
        alert('Вы посмотрели много фильмов');
    } else if ( numberOfFilms > 30) {
        alert('Вы киноман');
    } else {
        console.log('error')
    }
}

