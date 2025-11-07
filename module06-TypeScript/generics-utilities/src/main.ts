// ==============================================
// GENERICS & UTILITY TYPES
// ==============================================

console.log("\n===== GENERICS & UTILITY TYPES =====\n");

// ==============================================
// 1. BASIC GENERIC SYNTAX
// ==============================================

// const array: number[] = [1, 2, 3];
// const array2: Array<number> = [1, 2, 3];
// const array3: Array<string> = ["1", "2"];

// ==============================================
// 2. GENERIC FUNCTIONS
// ==============================================

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
}

type Post = { userId: number; id: number; title: string; body: string };
type User = { id: number; email: string };

const posts = await fetchData<Post[]>(
  "https://jsonplaceholder.typicode.com/posts?_limit=2"
);

const users = await fetchData<User[]>(
  "https://jsonplaceholder.typicode.com/users?_limit=2"
);

console.log(posts);

// ==========================
// Another example
// ==========================

function printPost(obj: Post): Post {
  console.log(obj);
  return obj;
}

function printUser(obj: User): User {
  console.log(obj);
  return obj;
}

printPost({ userId: 1, id: 1, title: "title", body: "body" });
printUser({ id: 1, email: "email" });

function printObject<T>(obj: T): T {
  console.log(obj);
  return obj;
}

printObject({ userId: 1, id: 1, title: "title", body: "body" });
printObject({ id: 1, email: "email" });

// ==============================================
// 3. GENERIC TYPE ALIASES
// ==============================================

// This type 'wraps' some other data type 'T'
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User2 = { name: string };

const userResponse: ApiResponse<User2> = {
  success: true,
  data: { name: "Ada" },
};

const userResponse2: ApiResponse<boolean> = {
  success: true,
  data: true,
};

const userResponse3: ApiResponse<number> = {
  success: true,
  data: 1,
};

// ==============================================
// 4. GENERIC CONSTRAINTS
// ==============================================

// This means 'T' *must* have a 'length: number' property
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello"); // OK (string has length)
getLength([1, 2, 3]); // OK (array has length)
// //   getLength(123);       // Error: number does not have 'length'

// ==============================================
// 5. DEFAULT GENERIC TYPES
// ==============================================

// T will default to 'string' if no other type is provided
type ApiResponseAgain<T = string> = {
  status: number;
  data: T;
};

// No type provided: 'T' becomes 'string'
const textResponse: ApiResponseAgain = {
  status: 200,
  data: "Operation successful",
};

// Type provided: 'T' becomes '{ id: number }'
const userResponseAgain: ApiResponseAgain<{ id: number }> = {
  status: 200,
  data: { id: 1 },
};

// ==============================================
// 6. UTILITY TYPES
// ==============================================

// ==========================
// 6.1 Partial<T>
// ==========================

type User3 = {
  id: number;
  name: string;
  email: string;
};

const users3: User3[] = [
  {
    id: 1,
    name: "Patrick",
    email: "patrick@mail.com",
  },
  {
    id: 2,
    name: "Reagan",
    email: "reagan@mail.com",
  },
];

// 'newData' can have 'name', 'email', or both, or neither.
function updateUser(id: number, newData: Partial<User3>) {
  // ...logic to find user and merge data
}

// OK! We only provided 'name'.
updateUser(1, { name: "Ada" });

// ==========================
// 6.2 Required<T>
// ==========================

type Settings = {
  darkMode?: boolean;
  language?: string;
};

const initSettings = (config: Required<Settings>) => {
  // expects all values to be present
};

initSettings({ darkMode: true, language: "de" });

// ==========================
// 6.3 Readonly<T>
// ==========================

type Todo = {
  title: string;
};

const todo: Readonly<Todo> = { title: "Learn TypeScript" };

// todo.title = "Something else";
console.log(todo);

// ==========================
// 6.4 Pick<T, K>
// ==========================

type User4 = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Pick<User4, "id" | "name">;

// ==========================
// 6.5 Omit<T, K>
// ==========================

type User5 = {
  id: number;
  name: string;
  email: string;
};

type PublicUserAgain = Omit<User5, "email">;

// ==========================
// 6.6 Record<K, T>
// ==========================

type Roles = "admin" | "user" | "guest";
type RoleAccess = Record<Roles, boolean>;

const access: RoleAccess = {
  admin: true,
  user: true,
  guest: false,
};

// ==========================
// 6.7 Extract<T, U>
// ==========================

type Event = "click" | "hover" | "scroll";
type MouseEvent = Extract<Event, "click" | "hover">;

// ==========================
// 6.8 Exclude<T, U>
// ==========================

type Event2 = "click" | "hover" | "scroll";
type DOMEvent = Exclude<Event2, "scroll">;

// ==========================
// 6.9 NonNullable<T>
// ==========================

type Status = "success" | "failure" | "pending" | null | undefined;
type CleanStatus = NonNullable<Status>;
