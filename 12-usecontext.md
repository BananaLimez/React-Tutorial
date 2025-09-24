# 12 – useContext in React

### 🔹 What is `useContext`?
It’s a **React Hook** that lets you **share values between components** without passing props manually.  

👉 Think of it as:  
**“Global props that any child can read directly.”**

---

### 🔹 Why use it?
Normally, if Component A wants to pass data to Component D, you’d have to pass props through B and C. This is called **prop drilling** and is tedious.  

`useContext` skips the middle components and lets D read values directly.

---

## 🟢 Step 1 – Create Context (Provider)

1. Import `createContext` from React.  
2. Create a context: `export const MyContext = createContext()`.  
3. Wrap your child components with `<MyContext.Provider value={...}>`.  
4. The `value` you put will be shared.

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

      {/* 2️⃣ Provide value */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
```

✅ `UserContext.Provider` makes the `user` value available to **all children** under it.

---

## 🟢 Step 2 – Use Context (Consumer)

1. Import `useContext` from React.  
2. Import the context you created (`UserContext`).  
3. Call `useContext(UserContext)` to get the value.  

```jsx
import { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {
  // 3️⃣ Consume the value
  const user = useContext(UserContext);

  return (
    <div className='border-2 p-4 m-4'>
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD
```

✅ Now Component D can **directly access `user`** even though it’s deeply nested.

---

## 🔹 Component Tree Example
```
App
 └── ComponentA (Provider)
      └── ComponentB
           └── ComponentC
                └── ComponentD (Consumer)
```

- Component A **provides** the `user` value  
- Component D **consumes** it, without props passing through B and C  

---

## 🔹 When to use `useContext`?
- To avoid **prop drilling**  
- When many components need the same data (theme, language, user info)  

---

👉 **In short:**  
- `createContext()` → create a shared data container  
- `<Provider value={...}>` → share the data  
- `useContext()` → read the data anywhere  
