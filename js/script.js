"use strict"

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели");



const personFilmsDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

if (personFilmsDB.count <= 10) {
    alert('Вы посмотрели мало фильмов');
} else if ( numberOfFilms > 10 && numberOfFilms < 30){
    alert('Вы посмотрели много фильмов');
} else if ( numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    console.log('error')
}

console.log(personFilmsDB);