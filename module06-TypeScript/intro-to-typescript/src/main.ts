// Type inference
// let number = 42;
// let text = "Hello";
// let isTrue = true;
// let notDefined;
// let empty = null;

// Type annotation
// let number: number = 42;
// let text: string = "Hello";
// let isTrue: boolean = true;
// let notDefined: undefined;
// let empty: null = null;

// let anything = "Whatever";
// anything = 10;

// console.log(anything);

// Type Annotations for Primitive Types
// let name: string = "Ada";
// let age: number = 28;
// let isActive: boolean = true;

// console.log(name, age, isActive);

// let language = "TypeScript"; // inferred as string
// language = 42;

// Type Inference
// let city = "London"; // inferred as string
// let score = 42; // inferred as number

// console.log(city.charAt(1));
// console.log(score.toPrecision(1));

// let data: string; // any => string
// data = "hello"; // any
// data = 42; // any

// console.log(data); // number

// Basic Functions with Types

// const numberA = 1;
// const numberB = 2;

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// console.log(addNumbers(numberA, numberB));

// Return types

// function greet(): string {
//   return "Hello, World!";
// }

// console.log(greet());

// function logDate(): void {
//   console.log("Its today");
// }

// logDate();

// Catching Bugs with Return Types

// function isOldEnough(age: number): string {
//   if (age >= 18) {
//     return "You are old enough.";
//   } else {
//     return "You are too young.";
//   }
// }

// isOldEnough(16);

// Arrays and Tuples

// Arrays

// const scores: number[] = [95, 87, 100];
// const names: string[] = ["Ada", "Grace", "Linus"];

// console.log(scores);
// console.log(names);

// const flags: Array<boolean> = [true, false, true];

// console.log(flags);

// const cities: string[] = ["London", "Berlin"];
// cities.push(42);
// console.log(cities);

// Tuples

// const user: [string, number] = ["Ada", 36];

// console.log(user);

// let result: [boolean, string];
// result = [true, "Success"];
// result = ["Fail", false];

// console.log(result);

// const coordinates: [number, number] = [51.5, -0.12];

// coordinates.unshift(10);

// console.log(coordinates[0], coordinates[1], coordinates[2]);

// Object Types

// const user: { name: string; age: number; address: string } = {
//   name: "Ada",
//   age: 36,
//   address: "...",
// };

// console.log(user);

// Optional properties

// const product: { name: string; description?: string } = {
//   name: "Laptop",
// };

// product.description = "sagsdgfdsfds";

// console.log(product.description?.toUpperCase());

// console.log(product.description ?? "No description");

// console.log(product);

// Readonly properties

// const settings: { readonly theme: string } = {
//   theme: "dark",
// };

// settings.theme = "light";

// console.log(settings);

// Arrays of Objects

// const users: { name: string; age: number; address?: string }[] = [
//   { name: "Ada", age: 36 },
//   { name: "Grace", age: 30, address: "..." },
// ];

// users.push({ name: "Linus", age: 20 });

// users.forEach((user) => {
//   console.log(`${user.name} is ${user.age} years old`);
// });

// console.log(users);
