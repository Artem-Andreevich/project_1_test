"use strict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");



const personFilmsDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const movies = {
    lastFilm: "",
    raiting: ""
}

movies.lastFilm = prompt("Какой последний фильм Вы посмотрели");
movies.raiting = prompt("На сколько Вы его оцените:")


console.log(movies);