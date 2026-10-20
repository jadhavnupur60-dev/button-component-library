# React Button Component Library

## Project Description

This project demonstrates a reusable React Button component library with Primary and Secondary button variants. It showcases React props, click events, CSS Modules, and component reuse.

## Features

- Reusable Button component
- Primary and Secondary button variants
- Custom click event handlers
- Disabled button support
- CSS Modules for component styling
- Responsive demo page
- Interactive button output messages

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- CSS Modules
- Vite

## Project Structure

```text
button-component-library/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Install dependencies:

```bash
npm install
```

## Run the Project

```bash
npm start
```

Open the local URL displayed in the terminal.

## Button Usage Example

```jsx
import Button from "./components/Button";

<Button
  variant="primary"
  onClick={() => alert("Saved!")}
>
  Save
</Button>

<Button
  variant="secondary"
  onClick={() => alert("Cancelled!")}
>
  Cancel
</Button>
```

## Author

Nupur Jadhav
