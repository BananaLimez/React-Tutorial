# 07 - onClick in React 🚀

## 🔹 What is `onClick`?

In React, **`onClick`** is an event handler that lets us run a function when a user clicks on an element (like a button, image, or div).  
This is one of the most common ways to make your app interactive.

---

## 🖱️ Basic Example

We can create a function inside our component and run it when the button is clicked.

```jsx
import React from 'react'

function Button() {
  const handleClick = () => console.log("Yo Mama")

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default Button
```

✅ Here:
- `onClick={handleClick}` → tells React to run `handleClick` when clicked.  
- Nothing runs until the button is actually clicked.  

---

## 🧑 Passing Arguments to Functions

Sometimes, you want to pass a value into your function.  

❌ Wrong way (this runs immediately, before the button is even clicked):

```jsx
import React from 'react'

function Button() {
  const handleClick = (name) => console.log(`Hi ${name}`)

  return (
    <button onClick={handleClick("Richard")}>Click Me</button>
  )
}

export default Button
```

✅ Correct way (use an **arrow function**):

```jsx
import React from 'react'

function Button() {
  const handleClick = (name) => console.log(`Hi ${name}`)

  return (
    <button onClick={() => handleClick("Richard")}>Click Me</button>
  )
}

export default Button
```

---

## 🎭 Events in React

In web development, **events** are actions that happen in the browser. For example:

- A user **clicks** a button  
- A user **types** in an input  
- A form is **submitted**  
- A page is **loaded**  

React gives us **event objects** (like `e`) that represent these actions.  
You can use this to access details about the event — like the target element.

---

## ✍️ Example 1: Change Button Text on Click

We can update the button text using the event object (`e.target`):

```jsx
import React from 'react'

function Button() {
  const handleClick = (e) => {
    e.target.textContent = "Text changed!"
  }

  return (
    <button onClick={(e) => handleClick(e)}>Click Me</button>
  )
}

export default Button
```

✅ When clicked → The button text changes to `"Text changed!"`.

---

## 🪄 Example 2: Make Button Disappear on Click

We can also **hide the button** by changing its `style.display` property.

```jsx
import React from 'react'

function Button() {
  const handleClick = (e) => {
    e.target.style.display = "none"
  }

  return (
    <button onClick={(e) => handleClick(e)}>Click Me</button>
  )
}

export default Button
```

✅ When clicked → The button disappears.  

---

## ⚡ Summary

- Use **`onClick`** to run functions when an element is clicked.  
- To pass arguments → wrap in an arrow function:  
  ```jsx
  onClick={() => handleClick("Hello")}
  ```
- The event object (`e`) lets you access:
  - `e.target` → element that triggered the event  
  - `e.type` → type of event (`click`, `change`, etc.)  
- You can change styles, text, or even hide elements using event handling.  

---

✅ Now your app can **react to clicks** 🎉  
