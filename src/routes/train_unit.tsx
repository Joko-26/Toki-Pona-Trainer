import {
  createFileRoute,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import vocabs from "./vocabs.json";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';

// extrats the unit name from the url
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

  // changes the word of the card from toki pona to germa/english and the other way around
  const flip_card = () => {
    if (isFront) {
      setCardText(translationsStringList[current_card]);
    } else {
      setCardText(tokiPonaList[current_card]);
    }
    setIsFront(!isFront);
  };

  // sets the initial slide direction
  useEffect(() => {
    setSlideDirection("in");
  }, []);

  // displays the text on the card
  useEffect(() => {
    if (isFront) {
      setCardText(tokiPonaList[current_card]);
    } else {
      setCardText(translationsStringList[current_card]);
    }
  }, [current_card, isFront, tokiPonaList, translationsStringList]);

  // switches to the next card if there are words lef
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
      <Helmet>
        <title>Toki Pona Vocab Trainer</title>
        <meta name="description" content="Lerne Toki Pona Vokabeln mit diesem interaktiven Vokabeltrainer!" />
        <link rel="icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
        <link rel="apple-touch-icon" href="/Toki-Pona-Trainer/imgs/Toki_pona.svg.png" />
      </Helmet>
      {/*back to the menu button*/}
      <button className="back-button" onClick={() => navigate({ to: "/" })}>
        {" "}⬅️ Back{" "}
      </button>
      {/*renders card*/}
      {/*triggers flip_card() when clicked*/}
      <div className="center-container">
        <div className={`big-card ${slideDirection}`} onClick={flip_card}>
          <span>{cardText}</span>
        </div>
        {/*triggers next_card(*/}
        <button className="next-button" onClick={() => next_card()}>Next word ➡️</button>
      </div>
    </div>
  );
}
