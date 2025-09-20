
# Tailwind CSS with Vite ⚡🎨

I personally like to use **Tailwind CSS** because it makes styling much faster and cleaner.  
Here’s how you can set it up with **Vite**.

👉 Reference: [Tailwind Installation with Vite](https://tailwindcss.com/docs/installation/using-vite)

---

## 1. Install Tailwind package

This is for Vite (which I used):

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 2. Update your `vite.config.js`

Import Tailwind and add it to plugins:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- ADD THIS

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- ADD THIS
  ],
})
```

---

## 3. Import Tailwind into your stylesheet

In `index.css` (or `src/index.css`), add:

```css
@import "tailwindcss";
```

---

## 4. Style with Tailwind classes

Here’s a simple card styled with Tailwind:

```jsx
function Card() {
  return (
    <div className="bg-amber-100 w-[150px] h-[200px] p-8 rounded-4xl">
      {/* <img src ={profilePic}></img> */}
      <img src="https://via.placeholder.com/150" alt="profile pic"></img>
      <h2 className="font-bold">Bro Code </h2>
      <p>I am a web dev</p>
    </div>
  )
}

export default Card
```

✅ Now you can use **utility-first classes** (`bg-amber-100`, `p-8`, `rounded-4xl`, etc.) to style your components quickly.
