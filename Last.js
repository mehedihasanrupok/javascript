// typeof --- defines types of variable but dont show array

const age = 25;
console.log(typeof age);

//isArray()------ returns true if it array
const friend =[10,11,12];
console.log(Array.isArray(friend));

//includes --- check the value present in array
console.log(friend.includes(35));

// concat --- put 2 array together
const friend2 = [23,45,67];
const all = friend.concat(friend2);
console.log(all);

// slice --- start index, last index er age katbe
const partial = all.slice(2,5);
console.log(partial);

// splice --- Removes elements from an array and, 
//if necessary, inserts new elements in their place, returning the deleted elements.
const partial1 = all.splice(2,2);
console.log(partial1);


// Remove Duplicate Elements
// using includes, indexof
const katbe = [10, 11, 22,32, 10, 23, 45, 22];