

let theName = "mhd";
// let theList =[1, 2 , 3 ]; the name above have sequence like the characters name above (index) 

console.log(theName);

console.log(theName[1]);
console.log(theName.charAt(1));

console.log(theName[3]);
console.log(theName.charAt(5));

console.log(theName.length);// in indexing we start count from 0 , from length we start from 1

let newName = "  ahmad  ";
console.log(newName[1]);
console.log(newName.charAt(1));

console.log(newName[3]);
console.log(newName.charAt(5));


console.log(newName.trim()); // to remove spaces

console.log(newName.toUpperCase()); 
console.log(newName.toLowerCase()); 

// chan methods
console.log(newName.trim().charAt(2).toUpperCase());