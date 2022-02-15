import {useState} from 'react';
import './style.css'

import { CgClose } from 'react-icons/cg';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export function Form({ closeForm }){

    const [step1, setStep1Visible] = useState(true)
    const [step2, setStep2Visible] = useState(false)
    const [step3, setStep3Visible] = useState(false)

    function changeToStep1() {
        setStep1Visible(true);
        setStep2Visible(false);
        setStep3Visible(false);
    } 

    function changeToStep2() {
        setStep1Visible(false);
        setStep2Visible(true);
        setStep3Visible(false);
    } 

    function changeToStep3() {
        setStep1Visible(false);
        setStep2Visible(false);
        setStep3Visible(true);
    } 


    const [meme, setMeme] = useState({
        profilePicture:"",
        name:"",
        location:"",
        image:"",
        description:"",
        category:"",
    })

    
    function handleChange(event){
        setMeme({...meme, [event.target.name]: event.target.value})
        console.log(meme);
    }

    function handleSubmit (event){
        event.preventDefault();

        for (let key in meme) {
            if (!meme[key]) {
              window.alert(`Por favor, preencher o campo ${key} corretamente`);
              return;
            }
          }          
        
        console.log("hello")  
        //axios.post("https://ironrest.herokuapp.com/COLOCARNOMEDACOLLECTION", form);
        
        //o setMeme Abaixo só poderá acontecer depois que o axios.post finalizar
        setMeme({
            profilePicture:"",
            name:"",
            location:"",
            image:"",
            description:"",
            category:"",
        })
    }

    function alertToFill() {
        window.alert(`Por favor, preencha todos os campos`);
    }


    return(
        <div>
            <div className="formCloseButton">   
            <button className="closeButton" onClick={() => closeForm(false)}><CgClose size={40} className="closeButton"/></button>
            </div>

            <div className="formBackground">
                <div>
                    <form onSubmit={handleSubmit}>
                    
                        {step1 ?  
                        <div className="formContainer1">
                            <section className="titleOrganize">
                                <h3>Dados do usuário</h3>
                                {(meme.profilePicture && meme.name) ? 
                                <button type="button" className="textButton" onClick={() => changeToStep2()}>Avançar</button> :
                                <button type="button" className="textButtonDisabled" onClick={() => alertToFill()}>Avançar</button>}

                            </section>
                      
                            <section className="formInputs">     

                                {meme.profilePicture ? <img className="profilePicture" src={meme.profilePicture} alt=""/> : null}
                                <label htmlFor="profilePicture">Foto do perfil <span style={{fontSize:"12px"}}>*</span></label>
                                <input id="profilePicture" name="profilePicture" value={meme.profilePicture} onChange={handleChange} placeholder="Insira o link da sua foto de perfil" />        
                                
                                <label htmlFor="name">Nome <span style={{fontSize:"12px"}}>*</span></label>
                                <input id="name" name="name" value={meme.name} onChange={handleChange} /> 
                                 
                                
                            </section>

                            <section className="obrigatorio">   
                                    <p>* Campos obrigatórios</p>
                            </section>  

                        </div>
                        : null
                        }


                        {step2 ?  
                        <div className="formContainer1">
                            <section className="titleOrganize">
                                <button type="button" className="arrowButton" onClick={() => changeToStep1()}><HiOutlineArrowLeft size={30}/></button>
                                <h3>Escolha o seu meme</h3>
                                {(meme.image && meme.name) ? 
                                <button type="button" className="textButton" onClick={() => changeToStep3()}>Avançar</button>:
                                <button type="button" className="textButtonDisabled" onClick={() => alertToFill()}>Avançar</button>}
                            </section>

                            <section className="formInputs">
                                <label htmlFor="image"></label>
                                {meme.image ? <img className="image" src={meme.image} alt=""/> : null}
                            
                                <input id="image" name="image" value={meme.image} onChange={handleChange} placeholder="Insira o link do seu meme aqui *"/>
                            </section>

                            <section className="obrigatorio">   
                                    <p>* Campo obrigatório</p>
                            </section>  
                            
                        </div>
                        : null
                        }

                        {step3 ?  
                        <div className="formContainer2">

                            <section className="titleOrganize">
                            
                                <button type="button" className="arrowButton" onClick={() => changeToStep2()}><HiOutlineArrowLeft size={30}/></button>
                                <h3>Criar nova publicação</h3>
                                {(meme.description && meme.category) ? 
                                <button type="submit" className="textButton" onClick={() => closeForm(false)} >Compartilhar</button>:
                                <button type="submit" className="textButtonDisabled" >Compartilhar</button> }
                            </section> 

                            <section className="step3">
                                {meme.image ? <img className="image" src={meme.image} alt=""/> : null}
                            
                        
                                <section className="formInputs2">   
                                    <section className="profileStep3">
                                    {meme.profilePicture ? <img className="profilePicture2" src={meme.profilePicture} alt=""/> : null}
                                    {meme.name ? <p><b>{meme.name}</b></p> : null}
                                    </section>
                                    <label htmlFor="description"></label>
                                    <input id="description" name="description" className="inputDescription" value={meme.description} onChange={handleChange} placeholder="Escreva uma legenda*..."/>

                                    <label htmlFor="location"></label>
                                    <input id="location" name="location" value={meme.location} onChange={handleChange} placeholder="Adicionar localização" />
                                
                                    <label htmlFor="category"></label>
                                    <input id="category" name="category" value={meme.category} onChange={handleChange} placeholder="Escolha a categoria*"/>
                                    
                                    
                                </section>


                            </section>

                            <section className="obrigatorio">   
                                    <p>* Campos obrigatórios</p>
                              </section>  
                        </div>
                        : null
                        }

                    </form>
                </div>
            </div>    
        </div>   

    )
}