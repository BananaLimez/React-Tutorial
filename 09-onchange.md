# 09 - onChange in React

In React, the **`onChange`** event is used to capture **user input** and keep the component's state in sync with what the user types, selects, or changes.

Whenever a user types in an input, writes in a textarea, selects a dropdown option, or chooses a radio button, the `onChange` event fires and gives you the updated value.

---

## 🔹 Example with Input

```jsx
import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputExample;
```

---

## 🔹 Example with Textarea

```jsx
import { useState } from 'react';

function TextareaExample() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Write your message..."
      />
      <p>Message: {message}</p>
    </div>
  );
}

export default TextareaExample;
```

---

## 🔹 Example with Radio Buttons

```jsx
import { useState } from 'react';

function RadioExample() {
  const [choice, setChoice] = useState("");

  return (
    <div>
      <label>
        <input 
          type="radio" 
          value="Male" 
          checked={choice === "Male"} 
          onChange={(e) => setChoice(e.target.value)} 
        />
        Male
      </label>

      <label>
        <input 
          type="radio" 
          value="Female" 
          checked={choice === "Female"} 
          onChange={(e) => setChoice(e.target.value)} 
        />
        Female
      </label>

      <p>Selected: {choice}</p>
    </div>
  );
}

export default RadioExample;
```

---

## 🔹 Example with Select Dropdown

```jsx
import { useState } from 'react';

function SelectExample() {
  const [fruit, setFruit] = useState("Apple");

  return (
    <div>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>
      <p>You selected: {fruit}</p>
    </div>
  );
}

export default SelectExample;
```

---

## 🔹 When to use `onChange`?
You use **`onChange`** whenever you want to capture and react to user input:

- Forms (username, password, email, etc.)
- Text areas (comments, feedback, posts)
- Radio/checkbox (gender, options, toggles)
- Dropdown menus (language, theme, category selection)
- Search bars (live updates while typing)

👉 It ensures that your UI always reflects the **latest user input**.
