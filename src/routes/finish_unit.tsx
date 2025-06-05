import {
  createFileRoute,
  useSearch,
  useNavigate,
} from "@tanstack/react-router";
import vocabs from "./vocabs.json";
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute("/finish_unit")({
  validateSearch: (search: Record<string, unknown>) => ({
    unit: String(search.unit ?? ""), // or use zod for more strict validation
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const search = useSearch({ from: "/finish_unit" });
  const unit_name = search.unit;

  const navigate = useNavigate();

  // gets the vocabs of the unit
  const unitVocabs = vocabs[unit_name as keyof typeof vocabs] || [];

  return (
    <div className="App">
      <Helmet>
        <title>Toki Pona Vocab Trainer</title>
        <meta name="description" content="Lerne Toki Pona Vokabeln mit diesem interaktiven Vokabeltrainer!" />
        <link rel="icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
        <link rel="apple-touch-icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
      </Helmet>
      <h1>You have finished learning the words of the unit {unit_name}</h1>
      <h2>You have learned the words:</h2>
      {/*displays all words with translation in an table*/}
      <table className="vocab-table">
        <thead>
          <tr>
            <th>Toki Pona</th>
            <th>English</th>
            <th>German</th>
          </tr>
        </thead>
        <tbody>
          {unitVocabs.map((item, idx) => (
            <tr key={idx}>
              <td>{item.toki_pona}</td>
              <td>{item.english}</td>
              <td>{item.german}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*button that brings user back to index page*/}
      <button className="back-to-menu" onClick={() => navigate({ to: "/" })}>
        {" "}Back to the Unit selection{" "}
      </button>
    </div>
  );
}
