'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" /* тоесть нажимает ок */ || numberOfFilms == null /* тоесть отменяет действие */ || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [ ], 
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ""),
          b = prompt('На сколько оцените его?', "");
    
    if (a != null && b != null && a != "" && b != "" &&  a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done!");
    }
    else {
        console.log("error");
        i--;
    }   
}
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log("The value of privat is false");
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);



//  Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

let favoriteGenre;

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = favoriteGenre;
    }
}

writeYourGenres();

console.log(personalMovieDB);
