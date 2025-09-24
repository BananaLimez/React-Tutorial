# 12 – useContext in React

### 🔹 What is `useContext`?
`useContext` is a **React Hook** that lets you **share values between components** without passing props manually through each level.

👉 Imagine you have a deep tree of components (A → B → C → D).  
Normally, you’d have to pass props down through every layer, which is tedious.  
`useContext` solves this by letting you directly access values anywhere in the tree.

---

### 🔹 How it works
There are **two parts**:

1. **Provider** – gives the value  
2. **Consumer** – reads the value  

---

### 🔹 Step 1: Create Context & Provide Value
```jsx
import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

// 1️⃣ Create context
export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Limec");

  return (
    <div className='border-2 p-4 m-4'>
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>

      {/* 2️⃣ Provide context value */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA;
```

✅ `UserContext.Provider` makes the `user` value available to **all children** inside it.

---

### 🔹 Step 2: Consume the Value
```jsx
import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {
  // 3️⃣ Use context
  const user = useContext(UserContext);

  return (
    <div className='border-2 p-4 m-4'>
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD;
```

✅ Instead of passing props through B and C, Component D can **directly use `useContext`**.

---

### 🔹 Component Tree Example
```
App
 └── ComponentA (Provider)
      └── ComponentB
           └── ComponentC
                └── ComponentD (Consumer)
```

- Component A **provides** the value (`user`)
- Component D **consumes** the value, without needing props through B and C.

---

### 🔹 When to use `useContext`?
- When many components need the same data (like theme, user info, language).
- To avoid "prop drilling" (passing props through multiple layers).

---

👉 **In short:**  
- `createContext()` → makes a container for shared data  
- `<Provider value={...}>` → gives the data  
- `useContext()` → reads the data  
