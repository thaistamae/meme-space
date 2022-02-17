import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../Cards/Cards";
import { Navbar } from "../Navbar/Navbar";

function CommentCard() {


    const [cards, setCards] = useState([])

    const [comentarios, setComentarios] = useState({comments:[]})
	
	const {id} = useParams()

    // Pegar os dados dos cards no banco de dados e trazer para a array cards
    
    useEffect(() => {
      async function fetchCards() {
        try {
          const result = await axios.get(
            "https://ironrest.herokuapp.com/memes"
          );
          setCards([...result.data.reverse()]);
          setComentarios({...result.data.comments})

        } catch (error) {
          console.error(error);
        }
      }

      fetchCards();
    }, [setCards])

    
    const handleChange= (event) => {
        console.log("===",event.target.value)
					const respons = event.target.value
					setComentarios({comments:respons})
    }


    const handleSubmit= (event) => {
        event.preventDefault();
        
        axios.put(`https://ironrest.herokuapp.com/memes/${id}`, ...comentarios )
        console.log("fezPush")
    
    
    }

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
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                  />
                );
              })}
    
          </div>
        );
    
}

export default CommentCard