import { createContext, useReducer } from 'react';

export const BookingContext = createContext();

// Step 1: Define the initial state
// This is the starting point for all state managed by the reducer
const initialState = {
  destinations: ['berlin'],
  premium: false,
  // ...
};

// Step 2: Create a reducer function
// A reducer takes the current state and an action, then returns the NEW state
// Reducers must be PURE functions - no side effects, no mutations
// Pattern: (state, action) => newState
function reducer(state, action) {
  // Use a switch statement to handle different action types
  switch (action.type) {
    case 'add_booking': {
      if (state.destinations.includes(action.payload)) {
        return state;
      }
      const premium = state.destinations.length >= 2;
      const destinations = [...state.destinations, action.payload];
      // Return NEW state object (never mutate the original state)
      return { ...state, destinations, premium };
    }
    case 'remove_destination': {
      const destinations = state.destinations.filter((dest) => dest !== action.payload);
      const premium = state.destinations.length >= 2;
      // Return NEW state object (never mutate the original state)
      return { ...state, destinations, premium };
    }
    // Always include a default case to catch typos or unknown actions
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function BookingContextProvider({ children }) {
  // Step 3: Initialize useReducer hook
  // Returns: [currentState, dispatchFunction]
  // - bookingState: the current state value
  // - dispatch: function to send actions to the reducer
  const [bookingState, dispatch] = useReducer(reducer, initialState);

  console.log(bookingState);

  // (Optional) Step 4: Create helper functions to dispatch actions
  // These functions provide a cleaner API for components
  // Instead of: dispatch({ type: 'add_booking', payload: dest })
  // Components can call: addDestination(dest)
  function addDestination(dest) {
    dispatch({ type: 'add_booking', payload: dest });
  }

  function removeDestination(dest) {
    dispatch({ type: 'remove_destination', payload: dest });
  }

  // Step 5: Bundle state and functions into the context value
  // Components consuming this context get both state and ways to update it
  const value = { bookingState, addDestination, removeDestination };

  return <BookingContext value={value}>{children}</BookingContext>;
}
