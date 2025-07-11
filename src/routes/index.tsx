import { createFileRoute, useNavigate } from "@tanstack/react-router";
import "../App.css";
import vocabs from "./vocabs.json";
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();

  // brings the user to the train_unit page with the right unit passed as parameters over the url
  const train_unit = (unit: string) => {
    navigate({ to: "/train_unit", search: { unit: unit } });
  };

  return (
    <div className="App">
      <Helmet>
        <title>Toki Pona Vocab Trainer</title>
        <meta name="description" content="Lerne Toki Pona Vokabeln mit diesem interaktiven Vokabeltrainer!" />
        <link rel="icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
        <link rel="apple-touch-icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
      </Helmet>
      <h1>Vocab Trainer for Toki Pona</h1>
      {/*displays an card with the unit name and an button to get to the unit for each section in the vocab.json*/}
      {Object.entries(vocabs).map(([key]) => (
        <div key={key} className="unit-container">
          <h2>{key}</h2>
          {/*the button that triggers the train_unit() funktion with the unit name as parameter*/}
          <button className="unit-start-button" onClick={() => train_unit(key)}>
            train unit
          </button>
        </div>
      ))}
    </div>
  );
}
