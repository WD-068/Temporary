import { z } from "zod/v4";

// Sample user object to validate
const sampleUser = {
  id: 1,
  name: "John",
  email: "JOHN@gmail.com",
};

// Define a Zod schema for a user object
const UserSchema = z.object({
  id: z.number(), // id must be a number
  name: z.string().min(1), // name must be a non-empty string
  email: z.email("Pls enter a valid email").toLowerCase(), // email must be valid and lowercase
  // isAdmin: z.boolean().default(false), // (optional) boolean with default value
});

// Define a schema for an array of users
const UserSchemaArray = z.array(UserSchema);

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Example of validating a single user
const values = UserSchema.safeParse(sampleUser);
console.log("Example for a single user: ", values);

// -----------------------------------------

// Function to fetch and validate users from an API
const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const resData = await response.json();

    // Validate the fetched data against the schema
    const { success, data, error } = UserSchemaArray.safeParse(resData);

    if (!success) {
      // If validation fails, log the error
      console.log(error?.message);
      throw new Error("Failed to fetch");
    }

    // If validation passes, return the data
    console.log("Fetched array of objects: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchUser();

// -----------------------------------------
// ----- Alternative Code from the LMS -----
// -----------------------------------------

// import { z } from "zod/v4";

// const ProductSchema = z.object({
//   id: z.number().int(),
//   title: z.string().min(1),
//   price: z.number().positive(),
//   description: z.string().min(1),
//   category: z.string(),
//   image: z.url(),
// });

// type Product = z.infer<typeof ProductSchema>;

// const getProduct = async (productId: number): Promise<Product> => {
//   if (!Number.isInteger(productId) || productId < 1 || productId > 20)
//     throw new Error("FakeStore API only has 20 products :D");

//   const response = await fetch(
//     `https://fakestoreapi.com/products/${productId}`
//   );

//   if (!response.ok)
//     throw new Error(`Network response was not ok: ${response.statusText}`);

//   const resData = await response.json(); // At this point, 'data' is of type 'any'

//   // Here is the validation gate.
//   // you could also use .parse() which would throw an error
//   const { data, error, success } = ProductSchema.safeParse(resData);

//   if (!success)
//     // The API returned data that doesn't match our schema.
//     throw new Error(z.prettifyError(error));
//   // If we're here, data is valid. Return the type-safe result.
//   return data;
// };

// try {
//   const product = await getProduct(2);
//   // We can trust 'product' completely. TypeScript knows its shape.
//   console.log(product.title.toUpperCase());
//   console.log(product.category);
//   console.log(product.description);
//   console.log(product.price);
// } catch (error: unknown) {
//   // This catch block now handles network errors AND validation errors.
//   if (error instanceof Error) {
//     console.error("Could not display product:", error.message);
//   } else {
//     console.log("Something went wrong");
//   }
// }
