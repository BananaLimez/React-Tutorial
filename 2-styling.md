
# Styling in React.js 🎨

In React, you can style your components in multiple ways. The three most common are:  

1. **Inline Styling**  
2. **CSS Modules**  
3. **External CSS**

---

## 1. Inline Styling

You can style directly in the component using the `style` attribute.  

👉 The value must be an **object** with camelCase property names.  

```jsx
function InlineStyleExample() {
  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    textAlign: "center",
  };

  return <h1 style={headingStyle}>This is Inline Styling</h1>;
}

export default InlineStyleExample;
```

✅ **Good for** quick styles or conditional logic  
❌ **Not great for** large projects (hard to manage)

---

## 2. CSS Modules

CSS Modules let you scope styles **locally** to a component, avoiding global conflicts.  

1. Create a file named `Card.module.css`  

```css
.card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  color: purple;
  font-size: 22px;
}
```

2. Import it into your component  

```jsx
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Styled with CSS Module</h2>
      <p>This styling is scoped to this component only</p>
    </div>
  );
}

export default Card;
```

✅ **Good for** larger projects, avoids CSS conflicts  
❌ **Extra setup** vs inline styles

---

## 3. External CSS (Global Styles)

You can also use **traditional CSS files** that apply globally across your app.  

1. Create `App.css`  

```css
h1 {
  color: green;
  text-align: center;
}

p {
  font-size: 18px;
  color: gray;
}
```

2. Import it in your component or `App.jsx`  

```jsx
import "./App.css";

function App() {
  return (
    <div>
      <h1>Global CSS Example</h1>
      <p>This is styled with external CSS</p>
    </div>
  );
}

export default App;
```

✅ **Good for** base styles, themes, resets  
❌ **Risk of conflicts** (since styles apply globally)

---

# 🔑 Summary

| Styling Type   | Scope        | Best For                                |
|----------------|-------------|-----------------------------------------|
| **Inline**     | Component   | Quick, dynamic styles                   |
| **CSS Module** | Local       | Larger projects, avoiding conflicts     |
| **External**   | Global      | Base styles, themes, shared stylesheets |
