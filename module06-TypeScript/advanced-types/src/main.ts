// ==============================================
// 1. TYPE ALIASES & INTERFACES
// ==============================================

console.log("\n===== 1. TYPE ALIASES & INTERFACES =====");

// -------------------
// 1.1 Interfaces
// -------------------
interface User {
  name: string;
  email: string;
  age?: number; // Optional property
}

// Declaration merging example
interface User {
  role?: string; // Adding an optional role property
}

const ada: User = {
  name: "Ada",
  email: "ada@lovelace.com",
};

console.log("\n--- 1.1 Interface Examples ---");
console.log("User:", ada);

// -------------------
// 1.2 Interface Inheritance
// -------------------
interface Admin extends User {
  role: "admin";
  permissions: string[];
}

interface Staff extends User {
  role: "staff";
  department: string;
}

const admin: Admin = {
  name: "Sarah",
  email: "sarah@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

console.log("\n--- 1.2 Interface Inheritance ---");
console.log("Admin:", admin);

// -------------------
// 1.3 Type Aliases
// -------------------
type Direction = "left" | "right" | "up" | "down";

let move: Direction = "up";

console.log("\n--- 1.3 Type Aliases ---");
console.log("Direction:", move);

// ==============================================
// 2. FUNCTION TYPES & PARAMETERS
// ==============================================

console.log("\n\n===== 2. FUNCTION TYPES & PARAMETERS =====");

// -------------------
// 2.1 Function Type Aliases
// -------------------
type Greeter = (name: string) => string;

const sayHello: Greeter = (name) => `Hello, ${name}`;

console.log("\n--- 2.1 Function Type Aliases ---");
console.log("Greeting:", sayHello("Alice"));

// -------------------
// 2.2 Optional & Default Parameters
// -------------------
function logEvent(message: string, userId?: number): void {
  const user = userId ? ` (User: ${userId})` : "";
  console.log(`Event: ${message}${user}`);
}

function greetUser(name: string = "guest"): string {
  return `Welcome, ${name}!`;
}

console.log("\n--- 2.2 Optional & Default Parameters ---");
logEvent("User logged in");
logEvent("Item added to cart", 123);
console.log("Default Greeting:", greetUser());

// ==============================================
// 3. UNION & INTERSECTION TYPES
// ==============================================

console.log("\n\n===== 3. UNION & INTERSECTION TYPES =====");

// -------------------
// 3.1 Union Types
// -------------------
type ID = string | number;

function printId(id: ID): void {
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Numeric ID: ${id.toFixed(2)}`);
  }
}

console.log("\n--- 3.1 Union Types ---");
printId("abc123");
printId(3.14159);

// -------------------
// 3.2 Intersection Types
// -------------------
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = {
  name: "Alice",
  age: 30,
};

console.log("\n--- 3.2 Intersection Types ---");
console.log("Person:", person);

// ==============================================
// 4. TYPE NARROWING
// ==============================================

console.log("\n\n===== 4. TYPE NARROWING =====");

// -------------------
// 4.1 Type Guards
// -------------------
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

console.log("\n--- 4.1 Type Guards ---");
printValue("hello");
printValue(42);

// -------------------
// 4.2 Discriminated Unions
// -------------------
type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };
type Pet = Dog | Cat;

function speak(pet: Pet): void {
  if (pet.kind === "dog") {
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog: Dog = {
  kind: "dog",
  bark: () => console.log("Woof!"),
};

const cat: Cat = {
  kind: "cat",
  meow: () => console.log("Meow!"),
};

console.log("\n--- 4.2 Discriminated Unions ---");
speak(dog);
speak(cat);

// ==============================================
// 5. ENUMS
// ==============================================

console.log("\n\n===== 5. ENUMS =====");

// -------------------
// 5.1 Numeric Enums
// -------------------
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

console.log("\n--- 5.1 Numeric Enums ---");
console.log(`Direction: ${Directions[0]} = ${Directions.Up}`);

// -------------------
// 5.2 String Enums
// -------------------
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

console.log("\n--- 5.2 String Enums ---");
console.log(`Status: ${Status.Success}`);

// ==============================================
// 6. TYPE ASSERTIONS
// ==============================================

console.log("\n\n===== 6. TYPE ASSERTIONS =====");

const someValue: unknown = "Hello, TypeScript!";

const value1 = someValue as string;

const value2 = <string>someValue;

// const value3 = someValue;

console.log("\n--- Type Assertion ---");
console.log("String Length:", value1.length);
console.log("String Length 2:", value2.length);
// console.log("String Length 3:", value3.length);

// ==============================================
// 7. NULLISH COALESCING & OPTIONAL CHAINING
// ==============================================

console.log("\n\n===== 7. NULLISH COALESCING & OPTIONAL CHAINING =====");

type UserProfile = {
  name: string;
  contact: {
    email: string;
    phoneNumber?: string;
  };
  address?: {
    street: string;
    zipCode: string;
  };
};

const user: UserProfile = {
  name: "Onur",
  contact: { email: "user@example.com" },
};

console.log("\n--- Optional Chaining & Nullish Coalescing ---");
console.log("User Email:", user.contact?.email);
console.log("User Address:", user.address?.street);
// console.log("User Address 2:", user.address.street);

// ==============================================
// 8. TYPE ASSERTION WITH FETCH EXAMPLE
// ==============================================

console.log("\n\n===== 8. TYPE ASSERTION WITH FETCH EXAMPLE =====");

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = (await response.json()) as Post[];
  // Log the title of each post
  posts.forEach((post) => {
    console.log(`Post #${post.id}: ${post.title}`);
    // console.log(`Post #${post.id}: ${post.title} ${post.somethingElse}`); // Property 'somethingElse' does not exist on type 'Post'
  });
} catch (error) {
  if (error instanceof Error) {
    console.error("Fetch failed:", error.message);
  } else {
    console.error("Unknown error occurred.");
  }
}
