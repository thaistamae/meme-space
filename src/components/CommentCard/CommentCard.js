import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";

function CommentCard(props) {
  const [cards, setCards] = useState([]);

  const [comentarios, setComentarios] = useState({ comments: [] });
  const [posted, setPosted] = useState(false);
  console.log(comentarios)

  // Pegar os dados dos cards no banco de dados e trazer para a array cards

  useEffect(() => {


    async function fetchCards() {
      try {
        const result = await axios.get("https://ironrest.herokuapp.com/memes");
        setCards([...result.data.reverse()]);
        setComentarios({ ...result.data.comments });
        setPosted(false)
        console.log(posted)
      } catch (error) {
        console.error(error);
      }
    }

    fetchCards();
  }, [posted]);
  console.log(setPosted)
  return (
    <div>

      {/*renderizar cada elemento da array Card*/}
      {cards.map((card) => {
        return (
          <Cards
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
            postedState={setPosted}
            local={card.local}
            currentTime={card.currentTime}
          />
        );
      })}
    </div>
  );
}

export default CommentCard;