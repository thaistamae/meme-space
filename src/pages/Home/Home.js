import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "../../components/Cards/Cards";
import style from "./Home.module.css";

export function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const result = await axios.get("https://ironrest.herokuapp.com/memes");
        setCards([...result.data.reverse()]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCards();
  }, [setCards]);

  return (
    <div className={style.home}>
      {cards.map((card) => {
        return (
          <Cards
            className={style.cards}
            key={card._id}
            logo={card.logo}
            name={card.name}
            description={card.description}
            comments={card.comments}
            comment={card.comment}
            bg={card.bg}
            category={card.category}
            likes={card.likes}
            id={card._id}
            local={card.local}
          />
        );
      })}
    </div>
  );
}

export default Home;
