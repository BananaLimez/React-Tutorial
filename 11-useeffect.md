# 11 - useEffect in React

## 🔹 What is `useEffect`?
`useEffect` is a React Hook that lets you run **side code** (side effects) when something happens in your component.

👉 "Do this code when the component mounts, updates, or unmounts."

---

## 🔹 When does it run?

You control it with the **dependency array**:

1. `useEffect(() => {})`  
   → Runs **after every render**.

2. `useEffect(() => {}, [])`  
   → Runs **only once** (when the component mounts).

3. `useEffect(() => {}, [value])`  
   → Runs on **mount + when `value` changes**.

---

## 🔹 Common uses
- Event listeners  
- DOM manipulation  
- Subscriptions / real-time updates  
- Fetching data from an API  
- Cleanup when a component unmounts  

---

## 🔹 Examples

### 1. Run after every render
```jsx
useEffect(() => {
  document.title = `Count ${count}`;
});
```

### 2. Run once (on mount)
```jsx
useEffect(() => {
  document.title = `Count ${count}`;
}, []);
```

### 3. Run on mount + when value changes
```jsx
useEffect(() => {
  document.title = `Count ${count}`;
}, [count]);
```

### 4. Multiple dependencies
```jsx
useEffect(() => {
  document.title = `Count ${count} ${color}`;
}, [count, color]);
```

---

## 🔹 Cleanup with `return`
The function you return inside `useEffect` is a **cleanup function**.  
It runs **before re-running the effect** or **when the component unmounts**.

### Example: Event Listener
```jsx
useEffect(() => {
  function handleResize() {
    console.log("Window resized");
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### Example: Timer
```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick..."), 1000);

  return () => clearInterval(timer);
}, []);
```

👉 `return` = "React, clean this up before running again or unmounting."

---

## 🔹 Multiple `useEffect`s
Each `useEffect` is **independent**.  
Use separate ones for separate jobs.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

useEffect(() => {
  console.log("Component rendered!");
});

useEffect(() => {
  function handleOnline() { setOnline(true); }
  function handleOffline() { setOnline(false); }

  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
}, []);
```

---

## ✅ Best Practices
- Keep **one concern per effect** (fetching, listeners, timers, etc.).
- Don’t mix unrelated logic in the same effect.
- Always clean up side effects to avoid memory leaks.

---
