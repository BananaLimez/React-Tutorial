# React Color Picker 🎨

This is a simple React project that lets you pick a color using an HTML `<input type="color" />`.  
The chosen color is applied to a box and displayed as a hex code.

---

## Files

### `App.jsx`
```jsx
import ColorPicker from "./ColorPicker";

function App() {
  return (
    <>
      <ColorPicker />
    </>
  );
}

export default App;
```

### `ColorPicker.jsx`
```jsx
import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div
        style={{ backgroundColor: color }}
        className="w-[300px] h-[300px] m-[2rem] rounded-2xl flex justify-center items-center"
      >
        <p className='font-bold'>Color: {color}</p>
      </div>
      <label>Pick A Color</label>
      <input type='color' value={color} onChange={changeColor} />
    </div>
  );
}

export default ColorPicker;
```

---

## How to Run

1. Clone this repo or copy the files into your React project.
2. Make sure you have **React + TailwindCSS** installed.
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser, pick a color, and watch the box update!

---

## Preview

When you select a color, the box updates in real time and shows the hex code of the chosen color.

🎉 That’s it — a super simple color picker app using React + Tailwind!
