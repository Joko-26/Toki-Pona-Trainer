import {
  createFileRoute,
  useSearch,
  useNavigate,
} from "@tanstack/react-router";
import vocabs from "./vocabs.json";

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

  const unitVocabs = vocabs[unit_name as keyof typeof vocabs] || [];

  return (
    <div className="App">
      <h1>You have finished learning the words of the unit {unit_name}</h1>
      <h2>You have learned the words:</h2>
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
      <button className="back-to-menu" onClick={() => navigate({ to: "/" })}>
        {" "}Back to the Unit selection{" "}
      </button>
    </div>
  );
}
