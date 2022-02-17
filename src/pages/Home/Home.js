import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components/Navbar/Navbar";
import { Cards } from "../../components/Cards/Cards"

export function Home() {

  const [cards, setCards] = useState([]);

    // Pegar os dados dos cards no banco de dados e trazer para a array cards
    
    useEffect(() => {
      async function fetchCards() {
        try {
          const result = await axios.get(
            "https://ironrest.herokuapp.com/memes"
          );
          setCards([...result.data.reverse()]);

        } catch (error) {
          console.error(error);
        }
      }

      fetchCards();
    }, [setCards])


  return (
    
    <div>
     
      <Navbar/>

        {/*renderizar cada elemento da array Card*/}
        {cards
          .map((card) => { 
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
              />
            );
          })}

      </div>
    );
    
}

export default Home;
