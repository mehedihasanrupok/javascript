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