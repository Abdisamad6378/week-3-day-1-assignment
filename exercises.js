// TASK 1: DESTRUCTURING, SPREAD, AND REST


console.log('========== TASK 1: Destructuring, Spread, and Rest ==========\n');


// DESTRUCTURING (5 exercises)

console.log('--- DESTRUCTURING ---\n');

// Exercise 1: Extract name and age
const person1 = { name: "Amina", age: 24, city: "Nairobi" };
const { name, age } = person1;
console.log('1. Destructure name and age:', { name, age });

// Exercise 2: Rename name to fullName
const person2 = { name: "Amina", age: 24, city: "Nairobi" };
const { name: fullName, age: personAge } = person2;
console.log('2. Rename name to fullName:', { fullName, personAge });

// Exercise 3: Default value
const person3 = { name: "Brian" };
const { name: userName, role = "student" } = person3;
console.log('3. Default role:', { userName, role });

// Exercise 4: Nested destructuring
const person4 = { 
    name: "Lilian", 
    address: { 
        city: "Mombasa", 
        county: "Mombasa", 
        zip: "80100" 
    } 
};
const { address: { city, county } } = person4;
console.log('4. Nested destructuring:', { city, county });

// Exercise 5: Array destructuring (skip second)
const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];
const [first, , third] = cities;
console.log('5. Array destructuring (skip second):', { first, third });

console.log('\n' + '-'.repeat(50) + '\n');

// SPREAD (5 exercises)

console.log('--- SPREAD ---\n');

// Exercise 1: Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log('1. Merge arrays:', merged);

// Exercise 2: Shallow copy and modify
const originalObj = { name: "Original", value: 10, status: "active" };
const copiedObj = { ...originalObj, value: 20 };
console.log('2. Copy and modify:', { 
    original: originalObj, 
    copied: copiedObj 
});

// Exercise 3: Spread as function arguments
const numbers = [5, 12, 8, 23, 16];
const maxNumber = Math.max(...numbers);
console.log('3. Max using spread:', { numbers, maxNumber });

// Exercise 4: Merge objects (second overrides)
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
const mergedObj = { ...objA, ...objB };
console.log('4. Merge objects (override):', { objA, objB, merged: mergedObj });

// Exercise 5: Add to beginning and end
const baseArray = [2, 3, 4];
const extendedArray = [1, ...baseArray, 5, 6];
console.log('5. Add to beginning and end:', { 
    original: baseArray, 
    extended: extendedArray 
});

console.log('\n' + '='.repeat(60));
console.log('✅ Destructuring and Spread exercises complete!');
console.log('='.repeat(60));



console.log('\n--- REST ---\n');

// Exercise 1: Sum any number of arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log('1. Sum function:', {
    'sum(1,2,3,4)': sum(1, 2, 3, 4),
    'sum(10,20,30)': sum(10, 20, 30),
    'sum(5)': sum(5)
});

// Exercise 2: First parameter and rest
function greet(first, ...others) {
    return `First: ${first}, Others: ${others.join(', ')}`;
}
console.log('2. Greet function:', greet('Alice', 'Bob', 'Charlie', 'Diana'));

// Exercise 3: Destructure with rest
const person5 = { 
    name: "John", 
    age: 30, 
    city: "Nairobi", 
    country: "Kenya", 
    profession: "Engineer" 
};
const { name: personName, ...details } = person5;
console.log('3. Destructure with rest:', { 
    name: personName, 
    details: details 
});

// Exercise 4: Head and rest
function head(first, ...rest) {
    return { first, rest };
}
console.log('4. Head and rest:', head('a', 'b', 'c', 'd', 'e'));

// Exercise 5: First and count remaining
function logFirstAndCount(first, ...rest) {
    return `First: ${first}, remaining: ${rest.length}`;
}
console.log('5. First and count:', logFirstAndCount('x', 'y', 'z', 'w', 'v'));

console.log('\n' + '='.repeat(60) + '\n');
