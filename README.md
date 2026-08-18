# calculator
A clean, responsive web calculator built with HTML5, CSS3, and JavaScript, featuring basic arithmetic, percentage logic, memory functions (M+, M-, MRC, MC), and full keyboard support.
# 🧮 Responsive JavaScript Calculator

A sleek, feature-rich web calculator built using vanilla HTML5, CSS3, and JavaScript. Designed with a custom LCD digital display, CSS Grid layout, and full physical keyboard integration for a seamless user experience.

---

## ✨ Features

- **Standard Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Smart Percentage Logic:** Supports both direct percentages (e.g., `50%`) and contextual operations (e.g., `500 + 10%`).
- **Full Memory Functions:**
  - `M+`: Add display value to memory.
  - `M-`: Subtract display value from memory.
  - `MRC`: Recall memory value.
  - `MC`: Clear stored memory.
- **Dynamic Number Formatting:** Automatically formats inputs with localized comma separators (`1,234.56`) while keeping decimal logic intact.
- **Physical Keyboard Integration:** Perform all calculations directly using your desktop/laptop keyboard.
- **Error Handling:** Built-in `try...catch` blocks to handle invalid mathematical syntax gracefully without crashing.
- **Custom LCD Typography:** Embedded `Digital-7` font for an authentic retro calculator feel.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| **0 – 9** | Input Numbers |
| **.** | Insert Decimal Point |
| **+ , - , * , /** | Basic Operators |
| **%** | Percentage Calculation |
| **Enter** or **=** | Calculate Result |
| **Backspace** | Clear Last Entry (CE) |
| **Esc** | Clear All (C) |

---

## 🚀 Live Demo

<a href="https://akimuddin.github.io/calculator/" target="_blank">Click here to view</a>

----
## 🛠️ Tech Stack & Dependencies

- **HTML5** — Semantic structure
- **CSS3** — Custom styling, CSS Grid, Flexbox, `@font-face`
- **Bootstrap 5** — Reset & utility base
- **JavaScript (ES6)** — Core DOM manipulation and logic

---

## 📁 Project Structure

```text
├── index.html       # Calculator UI layout
├── style.css        # Layout design & typography
├── script.js        # Core calculator & keyboard logic
└── fonts/
    └── digital-7.ttf # Custom LCD font file
