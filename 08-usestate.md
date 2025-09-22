# 08 - useState in React

## What is `useState`?

**`useState`** is a **React Hook** that lets your component remember values between re-renders.  

Without it, if you update a variable manually, React won’t know that the value has changed → the UI will not update.  

---

## Why do we need `useState`?

Let’s say we try to update a variable directly:

```jsx
import { useState } from "react";

function MyComponent() {
  let [name, setName] = useState();

  const updateName = () => {
    name = "Spongebob"; // ❌ this updates only the variable, not the UI
    console.log(name);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;
```

👉 The console will log `"Spongebob"`, but the text on the screen won’t update.  
That’s because **changing a variable directly doesn’t trigger a React re-render**.

---

## Correct way with `useState`

We must call the **setter function** (`setName`) to update state.  
This way, React knows the state changed and re-renders the UI.

```jsx
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("No Name"); // ✅ Initial state

  const updateName = () => {
    setName("Spongebob"); // ✅ React will re-render with new value
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;
```

---

## Example 1: Updating multiple states

We can track more than one piece of state inside the same component.

```jsx
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
}

export default MyComponent;
```

---

## Example 2: Toggling a boolean

`useState` can also manage booleans, which is useful for toggles.

```jsx
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}>Set Status</button>
    </div>
  );
}

export default MyComponent;
```

---

## Summary

- **`useState`** lets React remember values across re-renders.
- You **must use the setter function** (e.g. `setName`) to update state.
- Updating state triggers React to **re-render the UI**.
- You can use `useState` for strings, numbers, booleans, arrays, or objects.

✅ Think of `useState` as React’s way of keeping track of "memory" for your component.
