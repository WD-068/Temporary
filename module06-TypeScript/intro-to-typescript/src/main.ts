// ==============================================
// 1. TYPE INFERENCE AND ANNOTATION BASICS
// ==============================================

console.log('\n===== 1. TYPE INFERENCE AND ANNOTATION =====');

// Type Inference (TypeScript infers the type)
let number = 42;
let text = "Hello";
let isTrue = true;
let notDefined;
let empty = null;

// Type Annotation (Explicitly declaring types)
let count: number = 42;
let greeting: string = "Hello";
let isActive: boolean = true;
let notAssigned: undefined;
let nothing: null = null;

console.log('\n--- Type Inference Examples ---');
console.log('number:', number, '| Type:', typeof number);
console.log('text:', text, '| Type:', typeof text);
console.log('isTrue:', isTrue, '| Type:', typeof isTrue);
console.log('notDefined:', notDefined, '| Type:', typeof notDefined);
console.log('empty:', empty, '| Type:', typeof empty);

// TypeScript will prevent type mismatches
let language = "TypeScript"; // Inferred as string
// language = 42; // Error: Type 'number' is not assignable to type 'string'

// ==============================================
// 2. PRIMITIVE TYPES
// ==============================================

console.log('\n===== 2. PRIMITIVE TYPES =====');

let name: string = "Ada";
let age: number = 28;
let isOnline: boolean = true;

console.log('\n--- Primitive Type Examples ---');
console.log('Name:', name, '| Type:', typeof name);
console.log('Age:', age, '| Type:', typeof age);
console.log('Is Online:', isOnline, '| Type:', typeof isOnline);

// ==============================================
// 3. TYPE INFERENCE IN ACTION
// ==============================================

console.log('\n===== 3. TYPE INFERENCE IN ACTION =====');

let city = "London"; // Inferred as string
let score = 42; // Inferred as number

console.log('\n--- Type Inference Examples ---');
console.log('City:', city, '| Type:', typeof city);
console.log('Score:', score, '| Type:', typeof score);
console.log('\n--- Method Examples ---');
console.log(`city.charAt(1):`, city.charAt(1)); // 'o'
console.log('score.toPrecision(1):', score.toPrecision(1)); // '4e+1'

// ==============================================
// 4. FUNCTIONS WITH TYPES
// ==============================================

// Function with parameter and return type annotations
function addNumbers(a: number, b: number): number {
  return a + b;
}

const numberA = 1;
const numberB = 2;

// Function with string return type
function greet(): string {
  return "Hello, World!";
}

// Void return type (no return value)
function logDate(): void {
  console.log("It's today");
}

// Function with conditional return types
function isOldEnough(age: number): string {
  if (age >= 18) {
    return "You are old enough.";
  } else {
    return "You are too young.";
  }
}

console.log('\n===== 4. FUNCTIONS WITH TYPES =====');
console.log('\n--- Function Call Examples ---');
console.log(`addNumbers(${numberA}, ${numberB}):`, addNumbers(numberA, numberB)); // 3
console.log('greet():', greet());
console.log('logDate():', logDate()); // Will show undefined because it returns void
console.log('isOldEnough(16):', isOldEnough(16)); // "You are too young."

// ==============================================
// 5. ARRAYS AND TUPLES
// ==============================================

// Arrays with type annotations
const scores: number[] = [95, 87, 100];
const names: string[] = ["Ada", "Grace", "Linus"];

// Generic array type
const flags: Array<boolean> = [true, false, true];

// TypeScript prevents adding wrong types to arrays
const cities: string[] = ["London", "Berlin"];
// cities.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Tuples - fixed-length arrays with specific types
const user: [string, number] = ["Ada", 36];

let result: [boolean, string];
result = [true, "Success"];
// result = ["Fail", false]; // Error: Type 'string' is not assignable to type 'boolean'.

const coordinates: [number, number] = [51.5, -0.12];
// coordinates.unshift(10); // This would work at runtime but is unsafe

console.log('\n===== 5. ARRAYS AND TUPLES =====');
console.log('\n--- Array Examples ---');
console.log('scores:', scores, '| Type:', 'number[]');
console.log('names:', names, '| Type:', 'string[]');
console.log('flags:', flags, '| Type:', 'Array<boolean>');
console.log('cities:', cities, '| Type:', 'string[]');

console.log('\n--- Tuple Examples ---');
console.log('user:', user, '| Type:', '[string, number]');
console.log('result:', result, '| Type:', '[boolean, string]');
console.log('coordinates:', coordinates, '| Type:', '[number, number]');

// ==============================================
// 6. OBJECT TYPES
// ==============================================

// Object with type annotation
const userObj: { name: string; age: number; address: string } = {
  name: "Ada",
  age: 36,
  address: "123 TypeScript St.",
};

// Optional properties
const product: { name: string; description?: string } = {
  name: "Laptop",
};

product.description = "High-performance laptop";

// Readonly properties
const settings: { readonly theme: string } = {
  theme: "dark",
};

// settings.theme = "light"; // Error: Cannot assign to 'theme' because it is a read-only property.

// Arrays of Objects
const users: { name: string; age: number; address?: string }[] = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 30, address: "456 Programming Ave" },
];

users.push({ name: "Linus", age: 20 });

console.log('\n===== 6. OBJECT TYPES =====');
console.log('\n--- Object Examples ---');
console.log('userObj:', JSON.stringify(userObj, null, 2));
console.log('product:', JSON.stringify(product, null, 2));
console.log('settings:', JSON.stringify(settings, null, 2));

console.log('\n--- Object Method Examples ---');
console.log('product.description?.toUpperCase():', product.description?.toUpperCase());
console.log('product.description ?? "No description":', product.description ?? "No description");

console.log('\n--- Array of Objects ---');
console.log('Users:');
users.forEach((user, index) => {
  console.log(`  ${index + 1}. ${user.name} (${user.age} years old)${user.address ? ` - ${user.address}` : ''}`);
});

console.log('\n--- Full Users Array ---');
console.log(JSON.stringify(users, null, 2));
