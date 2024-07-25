const arr1 = ['hello',33564,false,null];

console.log(arr1);

console.log(typeof arr1);

console.log(Array.isArray (arr1) );


const movies = ['Dangal', 'Kill', 'Manji', 'DDLJ','Jawan' ,'PK'];

console.log(movies.length); 

// also works with sring

// indexing

console.log(movies[3]);
console.log(movies.at(-2));

movies[3]='krissh';
console.log(movies);

console.log(movies.indexOf ('Kill') );


console.log(movies [3]);
// also works with strings
console.log(movies.at(-2));
// also works with strings

movies[3]= 'krissh'
console.log(movies);

console.log(movies.indexOf ('Kill'));
// also works with strings

// slicing

console.log(movies);
console.log(movies.slice(2,5))
console.log(movies.slice (2,-3));
console.log(movies.slice (2,60));

// adding and removing elements

movies.push('Kalki'); 
// adds elements at end of array

console.log(movies);

movies.unshift('KGF'); 
console.log(movies);
// adds elements at start of array

movies.pop();
// removes elements from end of arrayy
movies.shift();
// removes elements from start of array
console.log(movies);

 //removes 2 elements starting from index 3

// movies.splice(3,2 ); //replacing elements
// movies.splice(3,2 ,'Deadpool', 'Venom'); //replacing elements
movies.splice(3,0 ,'Deadpool', 'Venom'); //replacing elements
console.log(movies); 



