# 05 - Conditional Rendering in React

In **React**, **conditional rendering** means deciding **what to show in the UI based on some condition** (true/false, value, state, etc).  
It’s like using `if` statements but inside your React components.

---

## 🔹 1. Using `if` Statements

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>
  }
  return <h1>Please sign up.</h1>
}

export default Greeting;
```

✅ If `isLoggedIn = true`, it shows **Welcome back!**  
❌ Otherwise, it shows **Please sign up.**

---

## 🔹 2. Using Ternary Operator (`? :`)

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome back!" : "Please sign up."}</h1>
  )
}
```

👉 Useful for short conditional rendering inside JSX.

---

## 🔹 3. Using Logical AND (`&&`)

```jsx
function Notification({ messages }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {messages.length > 0 && <p>You have {messages.length} new messages</p>}
    </div>
  )
}
```

✅ If `messages.length > 0`, the `<p>` element will render.  
❌ If not, **nothing shows**.

---

## 🔹 4. Conditional Component Rendering

```jsx
function UserProfile({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user found. Please log in.</p>
      )}
    </div>
  )
}
```

---

## ✅ Key Takeaways
- **`if` statements** → Good for larger logic.  
- **Ternary (`? :`)** → Best for inline conditions.  
- **Logical AND (`&&`)** → Show something only if condition is true.  
- **Conditional Components** → Swap whole components based on condition.  

---

✨ With conditional rendering, your UI becomes dynamic and adapts to the data or state of your app!
