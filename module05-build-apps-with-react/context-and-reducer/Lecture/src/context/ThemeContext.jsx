import { createContext, useContext, useState } from 'react';

// Step 1: Create a Context object
// This acts as a "container" that will hold data we want to share across components
// without passing props through every level of the component tree
export const ThemeContext = createContext();

// Step 2: Create a Provider component
// This component will wrap parts of your app and provide the context value to all children
export default function ThemeContextProvider({ children }) {
  // Local state that we want to share globally
  const [theme, setTheme] = useState('cyberpunk');

  // The value object contains all data/functions we want to share
  // Any component that consumes this context will receive this object
  const value = { theme, setTheme };

  // Provider component makes the value available to all nested children
  // Note: Should use ThemeContext.Provider, not just ThemeContext
  return <ThemeContext value={value}>{children}</ThemeContext>;
}

// (Optional) Step 3: Create a custom hook to consume the context
// This is a convenience hook that wraps useContext for cleaner usage
// Instead of: useContext(ThemeContext) everywhere
// We can simply use: useTheme()
export function useTheme() {
  return useContext(ThemeContext);
}
