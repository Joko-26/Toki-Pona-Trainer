import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import vocabs from "./vocabs.json";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/train_unit")({
  validateSearch: (search: Record<string, unknown>) => ({
    unit: String(search.unit ?? ""),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const search = useSearch({ from: "/train_unit" });
  const unit_name = search.unit;

  const navigate = useNavigate();

  const [cardText, setCardText] = useState<string>("");
  const [current_card, setCurrentCard] = useState<number>(0);
  const [isFront, setIsFront] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<"in" | "out" | "">("");

  const unit = vocabs[unit_name as keyof typeof vocabs] || [];
  const tokiPonaList = unit.map((item) => item.toki_pona);
  const translationsStringList = unit.map(
    (item) => `${item.english} – ${item.german}`
  );
  const max_card = unit.length - 1;

  const flip_card = () => {
    if (isFront) {
      setCardText(translationsStringList[current_card]);
    } else {
      setCardText(tokiPonaList[current_card]);
    }
    setIsFront(!isFront);
  };

  useEffect(() => {
    setSlideDirection("in");
  }, []);

  useEffect(() => {
    if (isFront) {
      setCardText(tokiPonaList[current_card]);
    } else {
      setCardText(translationsStringList[current_card]);
    }
  }, [current_card, isFront, tokiPonaList, translationsStringList]);

const next_card = () => {
  setSlideDirection("out")
  setTimeout(() => {
    if (current_card < max_card) {
      setCurrentCard(current_card + 1);
      setIsFront(true)
    } else {
      navigate({ to: "/finish_unit", search: { unit: unit_name } });
    }
    setSlideDirection("in")
  }, 300);
};
  return (
    <div>
      <button className="back-button" onClick={() => navigate({ to: "/" })}>
        {" "}⬅ Back{" "}
      </button>
      <div className="center-container">
        <div className={`big-card ${slideDirection}`} onClick={flip_card}>
          <span>{cardText}</span>
        </div>
        <button className="next-button" onClick={() => next_card()}>Next word ➡️</button>
      </div>
    </div>
  );
}
