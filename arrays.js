const nums = [23, 6, 5, 34, 57, 62, '8674'];

console.log(nums);
console.log(typeof nums);

const movies = ['Batman', 'Barbie', 'Oppenheimer', 'Inception', 'Conjuring', 'Gadar'];

console.log(movies.length);

console.log(movies[3]);

console.log(movies.at(-2));

// Slicing

console.log(movies.slice(2, 100));

// Adding elements

movies.push('PK');  // Adds element at end

movies.unshift('Flash')  // Add element at start

console.log(movies);

// Removing elements

movies.pop(); // Removes element from end

movies.shift(); // Removes element from start

console.log(movies);

movies.splice(3,2)

console.log(movies);