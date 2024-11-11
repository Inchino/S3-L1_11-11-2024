/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/


function taglia0(str1, str2){
  const str = str1.slice(0, 2).concat(str2.slice(-3)); //Ho creato una variabile di appoggio dove inserire la stringa1 tagliata e concatenata alla stringa2.
  return str.toUpperCase();
}
console.log(taglia0('aldo', 'manzo'));

/*
function taglia1(str1, str2){
  return str1.toUpperCase(str1.slice(0, 2).concat(str2.slice(-3))); // Rende maiuscolo,taglia e concatena tutto in una procedura//
}
console.log(taglia1('aldo', 'manzo'));
*/
 /* FUNZIONE FRECCIA 1
const taglia2 = (str1,str2) =>{
  const st = str1.slice(0, 2).concat(str2.slice(-3));
  return st.toUpperCase();
}
console.log(taglia2('aldo','manzo'))
*/

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let casualnum = [];
function random(n){
  for(let i=0; i<n; i++){
    casualnum[i] = Math.floor(Math.random() * 101);
  }
  return casualnum;
}
console.log(random(10));

/* FUNZIONE FRECCIA 2
const random10 = () => {
  const array = []
  for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 101))
  }
  return array
}
console.log(random10())
*/

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function filtroPari(array){
  return array.filter(function (num){ //funzione iterata: function (num){ return num%2===0};
    return num % 2 ===0;
  });
}
console.log(filtroPari(random()));

/* FUNZIONE FRECCIA 3
const soloPari = (array) => {
  return array.filter((elemento) => elemento % 2 === 0)
}

console.log(soloPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function somma(array){
  let sum=0;
  //let count=0; Inutili perche forEach scorre autonomamente l'array
  array.forEach(function (num){
    sum += num;
  //  count++;
  })
  return sum;
}
console.log(somma(random()));

/* FUNZIONE FRECCIA 4
const sommaNumeri = (array) => {
  let somma = 0
  array.forEach((element) => {
    somma += element
  })
  return somma
}

console.log(sommaNumeri([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
*/

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function reduceSomma(array) {
  return array.reduce((sum, element) => sum + element);
}
console.log(reduceSomma(random()));

/* FUNZIONE FRECCIA 5
const reduceSommaNumeri = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0)
}

console.log(reduceSommaNumeri([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incremento(array, n) {
  return array.map((element) => element + n);
}
console.log(incremento(random(), 10));

/* FUNZIONE FRECCIA 6
const incrementaArray = (array, n) => {
  return array.map((el) => el + n)
}

console.log(incrementaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))
*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lun(array){
  return array.map(function (element){
    return (element.length);
  })
}
console.log(lun(['Mannaggia', 'la', 'miseria']));

/* FUNZIONE FRECCIA 7
const lunghezze = (array) => {
  return array.map((elem) => elem.length)
}
console.log(lunghezze(['EPICODE', 'is', 'great']))
*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispari(array){
  let dis = [];
  return array.forEach(function (element){
    if (element % 2 !== 0) {
      dis[element];
    }
    return dis;
  })
}
console.log(dispari(random()));

/* FUNZIONE DISPARI FILTER
function filtroDispari(array){
  return array.filter(function (num){
    return num % 2 !==0;
  });
}
console.log(filtroDispari(random()));
*/

/* FUNZIONE FRECCIA
const oddOnly = () => {
  const array = []
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array.push(i)
    }
  }
  return array
}
console.log(oddOnly())
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldestMovie = (array) => {
  let result = { Year: 2100 }
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (currentYear < result.Year) {
      result = movie
    }
  })
  return result
}
console.log(oldestMovie(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const countMovies = (array) => {
  return array.length
}
console.log(countMovies(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const onlyTitles = (array) => {
  return array.map((elem) => elem.Title)
}
console.log(onlyTitles(movies))

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const onlyInThisMillennium = (array) => {
  return array.filter((movie) => {
    return parseInt(movie.Year) > 1999
  })
}

console.log(onlyInThisMillennium(movies))

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sumAllTheYears = (array) => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year), 0)
}

console.log(sumAllTheYears(movies))

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const getMovieById = function (array, id) {
  return array.find((elem) => elem.imdbID === id)
}

console.log(getMovieById(movies, 'tt0355702'))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const getMovieByYear = function (array, year) {
  return array.findIndex((elem) => parseInt(elem.Year) === year)
}

console.log(getMovieByYear(movies, 2012))