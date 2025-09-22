
# 06 - Rendering Lists in React

Rendering lists in React is very common, and it’s usually done with **`.map()`**.  
This helps us avoid manually creating each element one by one.

### Example without `.map()`

```jsx
<ul>
  <li>Apple</li>
  <li>Orange</li>
  <li>Banana</li>
</ul>
```

Instead of manually making the list, we can just put the information inside an **array** and use `.map()`.

---

## Basic List Rendering

```jsx
function List() {
  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

  const listItems = fruits.map(fruit => <li>{fruit}</li>);

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
```

---

## Adding Keys

`key` is **required** in React lists. It helps React identify which items changed, added, or removed.  
We usually use the **id** as the key.

```jsx
function List() {
  const fruits = [
    {id:1, name:"apple", calories: 95}, 
    {id:2, name:"orange", calories: 45}, 
    {id:3, name:"banana", calories: 105}, 
    {id:4, name:"coconut", calories: 159}, 
    {id:5, name:"pineapple", calories: 37}
  ];

  const listItems = fruits.map(fruit => 
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
```

---

## Sorting Lists

We can sort alphabetically or numerically. Here are some examples:

```jsx
function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  // Sorting examples (uncomment one to test)
  // fruits.sort((a, b) => a.name.localeCompare(b.name));   // ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name));   // REVERSE ALPHABETICAL
  // fruits.sort((a, b) => a.calories - b.calories);        // NUMERIC
  // fruits.sort((a, b) => b.calories - a.calories);        // REVERSE NUMERIC

  const listItems = fruits.map(fruit => (
    <li key={fruit.id}>
      {fruit.name} &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
```

---

## Filtering Lists

Using `.filter()`, we can filter items based on a condition.  
Example: only show fruits with calories below 100.

```jsx
function List() {
  const fruits = [
    {id:1, name:"apple", calories: 95}, 
    {id:2, name:"orange", calories: 45}, 
    {id:3, name:"banana", calories: 105}, 
    {id:4, name:"coconut", calories: 159}, 
    {id:5, name:"pineapple", calories: 37}
  ];

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  const listItems = lowCalFruits.map(fruit => 
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
```

---

## Making a Reusable Component

We can pass **props** to make the component reusable.

### App.jsx

```jsx
import List from "./assets/List";

function App() {
  const fruits = [
    {id:1, name:"apple", calories: 95}, 
    {id:2, name:"orange", calories: 45}, 
    {id:3, name:"banana", calories: 105}, 
    {id:4, name:"coconut", calories: 159}, 
    {id:5, name:"pineapple", calories: 37}
  ];

  return (
    <>
      <List category="Fruits" items={fruits}/>
    </>
  );
}

export default App;
```

### List.jsx

```jsx
function List(props) {
  const fruits = props.items;
  const category = props.category;
  
  const listItems = fruits.map(fruit => 
    <li key={fruit.id}>
      {fruit.name}: {fruit.calories}
    </li>
  );

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
```

---

## Conditional Rendering

We can conditionally render components depending on data length.

```jsx
import List from './List.jsx'

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 }
  ];

  return (
    <>
      {fruits.length > 0 && (
        <List items={fruits} category="Fruits" />
      )}
      
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
```

Alternative using ternary operator:

```jsx
{fruits.length > 0 ? (
  <List items={fruits} category="Fruits" />
) : null}
```

---

## Adding PropTypes & DefaultProps

To make components safer, we use **PropTypes** (for type checking) and **defaultProps** (fallback values).

### List.jsx

```jsx
import PropTypes from "prop-types";

function List({ category, items }) {
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </div>
  );
}

// ✅ PropTypes: type checking
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ),
};

// ✅ Default props
List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
```

---

## 🔎 Summary

- Use **`.map()`** to render lists.
- Always use a **unique `key`** for each item.
- Use **`.sort()`** to order lists.
- Use **`.filter()`** to show specific data.
- Use **props** to make reusable components.
- Use **conditional rendering** to handle empty lists.
- Add **PropTypes** and **defaultProps** for safety and defaults.

⚡ Now you can create dynamic and reusable lists in React!
