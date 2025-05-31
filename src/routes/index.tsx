import { createFileRoute, useNavigate } from "@tanstack/react-router";
import "../App.css";
import vocabs from "./vocabs.json";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();

  const train_unit = (unit: string) => {
    navigate({ to: "/train_unit", search: { unit: unit } });
  };

  return (
    <div className="App">
      <h1>Vocab Trainer for Toki Pona</h1>
      {Object.entries(vocabs).map(([key]) => (
        <div key={key} className="unit-container">
          <h2>{key}</h2>
          <button className="unit-start-button" onClick={() => train_unit(key)}>
            train unit
          </button>
        </div>
      ))}
    </div>
  );
}
