
import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "Click a button to test it!"
  );

  return (
    <div className="app">
      <header className="header">
        <h1>React Button Component Library</h1>
        <p>Reusable buttons built with React and CSS Modules</p>
      </header>

      <main className="demo">
        <section className="demo-card">
          <h2>Primary Button</h2>
          <p>Use this button for important actions.</p>

          <Button
            variant="primary"
            onClick={() => setMessage("Primary button clicked!")}
          >
            Primary Button
          </Button>
        </section>

        <section className="demo-card">
          <h2>Secondary Button</h2>
          <p>Use this button for alternative actions.</p>

          <Button
            variant="secondary"
            onClick={() => setMessage("Secondary button clicked!")}
          >
            Secondary Button
          </Button>
        </section>

        <section className="demo-card">
          <h2>More Examples</h2>

          <div className="button-row">
            <Button onClick={() => setMessage("Save clicked!")}>
              Save
            </Button>

            <Button
              variant="secondary"
              onClick={() => setMessage("Cancel clicked!")}
            >
              Cancel
            </Button>
          </div>
        </section>

        <section className="message-card">
          <h2>Button Output</h2>
          <p aria-live="polite">{message}</p>
        </section>
      </main>

      <footer>
        <p>Created using React, JavaScript and CSS Modules</p>
      </footer>
    </div>
  );
}

export default App;
