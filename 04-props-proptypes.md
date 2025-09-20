# 04 - Props, PropTypes & Default Props in React

## 🔹 What are Props?

In **React**, **props** (short for *properties*) are a way to  
**pass data from a parent component to a child component**.  

This makes components **reusable** because you can pass in different data each time you use them.

---

### Example: Props in Action

**Student.jsx**

```jsx
function Student(props) {
  return (
    <div className="m-4 border-2 p-2 rounded">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.student ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student
```

**App.jsx**

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Bro" age={29} student={true}/>
      <Student name="Code" age={21} student={false}/>
    </>
  );
}

export default App
```

✅ Output will display 2 students with different data.

---

## 🔹 What are PropTypes?

`PropTypes` is a **type-checking system** for props.  
It makes sure the data you pass into a component has the **correct type** (string, number, boolean, etc).  

This helps catch bugs early and documents what kind of props your component expects.

---

### Example: Using PropTypes

**Student.jsx**

```jsx
import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="m-4 border-2 p-2 rounded">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.student ? "Yes" : "No"}</p>
    </div>
  )
}

// ✅ Type checking with PropTypes
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  student: PropTypes.bool.isRequired,
};

export default Student;
```

**App.jsx**

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Bro" age={29} student={true}/>
      <Student name="Code" age={21} student={false}/>
      {/* ❌ This will give a warning in console because "age" must be a number */}
      <Student name="Buggy" age="twenty" student={true}/>
    </>
  );
}

export default App
```

---

## 🔹 Default Props (React < 19)

Sometimes you want to give props a **default value** if no value is passed.  
This can be done using `defaultProps`.  

⚠️ Note: In **React 19**, `defaultProps` is deprecated for function components.  
Instead, use **default values in function parameters**.

---

### Example: Default Props

**Student.jsx**

```jsx
import PropTypes from "prop-types";

function Student({ name = "Anonymous", age = 0, student = false }) {
  return (
    <div className="m-4 border-2 p-2 rounded">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {student ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  student: PropTypes.bool,
};

export default Student;
```

**App.jsx**

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Bro" age={29} student={true}/>
      <Student /> {/* 👈 Uses default props */}
    </>
  );
}

export default App
```

✅ Output:
```
Name: Bro, Age: 29, Student: Yes
Name: Anonymous, Age: 0, Student: No
```

---

## ✅ Key Takeaways

- **Props** → Pass data from parent to child component.  
- **PropTypes** → Type checking for props (string, number, bool, etc).  
- **Default Props** → Provide default values if no props are passed (use function parameters in React 19+).  

---

✨ Now you can make your React components **reusable, safe, and reliable** with props, PropTypes, and default values.
