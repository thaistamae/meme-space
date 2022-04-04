import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './EditCard.module.css';

export default function EditCard() {

  const params = useParams();
  const navigate = useNavigate();

  const [meme, setMeme] = useState({
    logo:"",
    name:"",
    local:"",
    description:"",
    comments: "",
    coment: "Adicionar comentário",
    heart: 0,
    bg:"",
    category:"",
    likes: 0
})

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/memes/${params.id}`
        );
        console.log(response);
        setMeme({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }

    fetchCard();
  }, [params.id]);

  function handleChange(event) {
    setMeme({ ...meme, [event.target.name]: event.target.value });
    console.log(meme);
  }

  function handleSubmit(event) {
    event.preventDefault();

    delete meme._id;
    axios
      .put(`https://ironrest.herokuapp.com/memes/${params.id}`, meme)
      .then((result) => navigate(`/home`))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
        <div>

        <div className={styles.formBackground}>
            <div>
                <form onSubmit={handleSubmit}>

                    <div className={styles.formContainer2}>

                        <section className={styles.titleOrganize}>
                        
                            <h3>Editar Legenda</h3>
                            {/*O botão de compatilhar só funciona quando os campos obrigatórios estão preenchidos*/}
                            {(meme.description && meme.category) ? 
                            <button type="submit" className={styles.textButton} >Editar</button>:
                            <button type="button" className={styles.textButtonDisabled} >Editar</button> }
                        </section> 

                        <section className={styles.step3}>
                            {meme.bg ? <img className={styles.cards2} src={meme.bg} alt=""/> : null}
                        
                    
                            <section className={styles.formInputs2}>   
                                <section className={styles.profileStep3}>
                                {meme.logo ? <img className={styles.logo2} src={meme.logo} alt="" /> : null}
                                {meme.name ? <p><b>{meme.name}</b></p> : null}
                                </section>
                                <label htmlFor="description"></label>
                                <input id="description" name="description" className={styles.inputDescription} value={meme.description} onChange={handleChange} placeholder="Escreva uma legenda*..."/>
                                
                                <label htmlFor="local">Localização</label>
                                <p className={styles.selectInput2}>{meme.local}</p>
                            
                                <label htmlFor="category">Categoria <span style={{fontSize:"12px"}}>*</span></label>
                                <p className={styles.selectInput2}>{meme.category}</p>

                            </section>  


                        </section>

                        <section className={styles.obrigatorio}>   
                                <p>* Campos obrigatórios</p>
                        </section>  
                    </div>

                </form>
            </div>
        </div>    
    </div>   

  );
}