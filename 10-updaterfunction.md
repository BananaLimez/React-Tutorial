# 10 - Updater Functions in React

## What is an Updater Function?

An **updater function** is a function you pass to a state setter (`setState`) instead of a direct value.  
It allows React to **safely update state based on the previous state**.

✅ Good practice: Always use updater functions when the new state depends on the old one.

---

## Why Use It?

If you do this:

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

You might expect `count = 3`, but React batches updates → the result is still **1**.

Instead, use an updater function:

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
}
```

Now React will queue the updates correctly, and `count = 3`.

---

## Updating Objects

❌ Don’t overwrite the object (loses other properties):

```jsx
const [car, setCar] = useState({ year: 2024, brand: "Toyota", model: "Supra" });

function changeYear() {
  setCar({ year: 2005 }); // brand & model are lost
}
```

✅ Instead, use the **spread operator** and updater function:

```jsx
function changeYear(e) {
  setCar(car => ({ ...car, year: e.target.value }));
}

function changeBrand(e) {
  setCar(car => ({ ...car, brand: e.target.value }));
}

function changeModel(e) {
  setCar(car => ({ ...car, model: e.target.value }));
}
```

---

## Updating Arrays

### Adding to an Array

```jsx
const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

function addFood() {
  const newFood = document.getElementById("foodInput").value;
  document.getElementById("foodInput").value = "";
  setFoods(f => [...f, newFood]);
}
```

### Removing from an Array

```jsx
function removeFood(index) {
  setFoods(f => f.filter((_, i) => i !== index));
}
```

---

## Updating Objects Within an Array

```jsx
const [cars, setCars] = useState([]);
const [date, setDate] = useState(new Date().getFullYear());
const [carBrand, setCarBrand] = useState("");
const [carName, setCarName] = useState("");

function addCar() {
  const newCar = { year: date, brand: carBrand, name: carName };
  setCars(c => [...c, newCar]);

  // reset inputs
  setDate(new Date().getFullYear());
  setCarBrand("");
  setCarName("");
}

function removeCar(index) {
  setCars(c => c.filter((_, i) => i !== index));
}
```

### Rendering the Cars

```jsx
<ul>
  {cars.map((car, index) => (
    <li key={index} onClick={() => removeCar(index)}>
      {car.year} - {car.brand} - {car.name}
    </li>
  ))}
</ul>
```

---

## Summary

- Use **updater functions** (`setState(prev => ...)`) when updating based on previous state.  
- Use the **spread operator** when updating objects.  
- Use `map`, `filter`, and spread (`...`) to safely update arrays.  

This ensures your state updates are predictable, safe, and React can handle them efficiently.
