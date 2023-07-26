const nums = [ 23, 6, 5, 34, 57, 62, '8674' ];

console.log(nums);
console.log( typeof nums );

const movies = ['Batman', 'Barbie', 'Oppenheimer', 'Inception', 'Conjuring', 'Gadar' ];

console.log(movies.length);

console.log(movies[3]);

console.log(movies[-2]);

console.log(movies.at(-2));

// Slicing

console.log( movies.slice(2, 5) );
console.log( movies.slice(2, -1) );
console.log( movies.slice(2));
console.log( movies.slice(2, 100));

// adding elements
movies.push('PK'); // adds element at end of array

movies.unshift('Flash'); // adds element at start of array

console.log(movies);

// removing elements
movies.pop(); // removes element from end of array
movies.shift(); // removes element from start of array

console.log(movies);

movies.splice(3, 2);

console.log(movies);

movies.splice(1, 1, 'Frozen');

console.log(movies);

movies.splice(2, 3);

console.log(movies);

console.log(...movies);

console.log(['mi4' , ...movies, 'mi1','mi2', 'mi3']);