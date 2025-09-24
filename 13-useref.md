# React Hook: useRef

`useRef` is a React hook that lets you **persist values between renders** without causing re-renders.  
It’s often compared to `useState`, but the key difference is:

- `useState` → re-renders the component when the state changes.  
- `useRef` → does **not** trigger a re-render when `.current` changes.  

---

## 📝 What is `useRef`?
- Creates a mutable object with a `.current` property.  
- Keeps the same object between re-renders.  
- Useful for **DOM references**, **storing values**, and **timers/intervals**.  

---

## ⚡ Common Uses of `useRef`
1. Accessing DOM elements directly (e.g., focus an input).  
2. Storing values that don’t need to trigger re-render.  
3. Saving interval/timeout IDs.  

---

## 📌 Example 1: Accessing DOM element
```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // focus the input directly
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus} className="ml-2 border px-2">
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
```

👉 `useRef` holds a reference to the input element so we can call `.focus()`.

---

## 📌 Example 2: Storing values without re-render
```jsx
import { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++; // increment every render

  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className="border px-2">
        Increment
      </button>
      <p>This component rendered {renderCount.current} times</p>
    </div>
  );
}

export default Counter;
```

👉 Here, `renderCount` updates without causing extra re-renders.

---

## 📌 Example 3: Timer with `useRef`
```jsx
import { useState, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // already running
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div className="p-4">
      <h1>Timer: {seconds}s</h1>
      <button onClick={startTimer} className="border px-2 mr-2">Start</button>
      <button onClick={stopTimer} className="border px-2">Stop</button>
    </div>
  );
}

export default Timer;
```

👉 `useRef` stores the interval ID so we can start/stop the timer without re-render issues.

---

## 🔑 Key Takeaway
- Use `useState` when you want UI updates.  
- Use `useRef` when you want to remember values but don’t need re-rendering.  
