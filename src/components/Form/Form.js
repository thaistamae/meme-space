import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../Form/Form.module.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  // Há 3 passos para concluir o preenchimento formulário e fazer uma nova publicação
  // Passo 1: contém as informações de quem está publicando - Foto do Usuário e Nome
  const [step1, setStep1Visible] = useState(true);
  // Passo 2: contém o link do meme
  const [step2, setStep2Visible] = useState(false);
  // Passo 3: contém outras informações da publicação - Legenda, Local, Categoria
  const [step3, setStep3Visible] = useState(false);
  // Função para mostrar o Passo 1 na tela
  function changeToStep1() {
    setStep1Visible(true);
    setStep2Visible(false);
    setStep3Visible(false);
  }
  // Função para mostrar o Passo 2 na tela
  function changeToStep2() {
    setStep1Visible(false);
    setStep2Visible(true);
    setStep3Visible(false);
  }
  // Função para mostrar o Passo 3 na tela
  function changeToStep3() {
    setStep1Visible(false);
    setStep2Visible(false);
    setStep3Visible(true);
  }
  // Informações para popular o banco de dados com os dados das publicações
  const [meme, setMeme] = useState({
    logo: "",
    name: "",
    local: "",
    description: "",
    comments: [],
    coment: "Adicionar comentário",
    heart: 0,
    bg: "",
    category: "",
    likes: 0,
    userImg: [],
    currentTime: "",
  });
  // Função para salvar no objeto as informações preenchidas no formulário
  function handleChange(event) {
    setMeme({ ...meme, [event.target.name]: event.target.value });
    console.log(meme);
  }
  // Função para limpar o objeto, após um meme ser publicado
  function clearMeme() {
    setMeme({
      logo: "",
      name: "",
      local: "",
      description: "",
      comments: [],
      coment: "Adicionar comentário",
      heart: 0,
      bg: "",
      category: "",
      likes: 0,
      userImg: [],
      currentTime: "",
    });
  }

  //Incluir Data

  async function createTime() {
    return setMeme({ ...meme, currentTime: new Date() });
  }

  async function invoke() {
    await createTime();
    await console.log(meme.currentTime);
  }

  useEffect(() => {
    createTime();
  }, []);

  // Função para subir o objeto da publicação no banco de dados, limpar o objeto e fechar o formulário
  async function handleSubmit(event) {
    try {
      await invoke();
      await event.preventDefault();
      await axios.post("https://ironrest.herokuapp.com/memes", meme);
      clearMeme();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  // Função para alertar que faltam campos obrigatórios a serem preenchidos
  function alertToFill() {
    window.alert("Por favor, preencha todos os campos obrigatórios.");
  }
  // Função para alertar que é preciso colocar um link de imagem válido
  function imageAlert() {
    window.alert("Por favor, insira um link de imagem válido.");
  }

  return (
    <div>
      <div className={styles.formBackground}>
        <div>
          <form onSubmit={handleSubmit}>
            {/*Estrutura do passo 1 do formulário*/}
            {step1 ? (
              <div className={styles.formContainer1}>
                <section className={styles.titleOrganize}>
                  <h3>Dados do usuário</h3>
                  {/*O botão de avançar só funciona quando os campos obrigatórios estão preenchidos*/}
                  {meme.logo && meme.name ? (
                    <button
                      type="button"
                      className={styles.textButton}
                      onClick={() => changeToStep2()}
                    >
                      Avançar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.textButtonDisabled}
                      onClick={() => alertToFill()}
                    >
                      Avançar
                    </button>
                  )}
                </section>

                <section className={styles.formInputs}>
                  {meme.logo ? (
                    <img
                      className={styles.logo}
                      src={meme.logo}
                      alt=""
                      onError={imageAlert}
                    />
                  ) : null}
                  <label htmlFor="logo">
                    Foto do perfil <span style={{ fontSize: "12px" }}>*</span>
                  </label>
                  <input
                    id="logo"
                    name="logo"
                    value={meme.logo}
                    onChange={handleChange}
                    placeholder="Cole o link da sua foto de perfil aqui"
                  />

                  <label htmlFor="name">
                    Nome <span style={{ fontSize: "12px" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={meme.name}
                    onChange={handleChange}
                  />
                </section>
                <section className={styles.obrigatorio}>
                  <p>* Campos obrigatórios</p>
                </section>
              </div>
            ) : null}
            {/*Estrutura do passo 2 do formulário*/}
            {step2 ? (
              <div className={styles.formContainer1}>
                <section className={styles.titleOrganize}>
                  <button
                    type="button"
                    className={styles.arrowButton}
                    onClick={() => changeToStep1()}
                  >
                    <HiOutlineArrowLeft size={30} />
                  </button>
                  <h3>Escolha o seu meme</h3>
                  {/*O botão de avançar só funciona quando os campos obrigatórios estão preenchidos*/}
                  {meme.bg ? (
                    <button
                      type="button"
                      className={styles.textButton}
                      onClick={() => changeToStep3()}
                    >
                      Avançar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.textButtonDisabled}
                      onClick={() => alertToFill()}
                    >
                      Avançar
                    </button>
                  )}
                </section>
                <section className={styles.formInputs}>
                  <label htmlFor="bg"></label>
                  {meme.bg ? (
                    <img
                      className={styles.cards}
                      src={meme.bg}
                      alt=""
                      onError={imageAlert}
                    />
                  ) : null}

                  <input
                    id="bg"
                    name="bg"
                    value={meme.bg}
                    onChange={handleChange}
                    placeholder="Cole o link do seu meme aqui *"
                  />
                </section>
                <section className={styles.obrigatorio}>
                  <p>* Campo obrigatório</p>
                </section>
              </div>
            ) : null}
            {/*Estrutura do passo 3 do formulário*/}
            {step3 ? (
              <div className={styles.formContainer2}>
                <section className={styles.titleOrganize}>
                  <button
                    type="button"
                    className={styles.arrowButton}
                    onClick={() => changeToStep2()}
                  >
                    <HiOutlineArrowLeft size={30} />
                  </button>
                  <h3>Criar nova publicação</h3>
                  {/*O botão de compatilhar só funciona quando os campos obrigatórios estão preenchidos*/}
                  {meme.description && meme.category ? (
                    <button type="submit" className={styles.textButton}>
                      Compartilhar
                    </button>
                  ) : (
                    <button type="button" className={styles.textButtonDisabled}>
                      Compartilhar
                    </button>
                  )}
                </section>
                <section className={styles.step3}>
                  {meme.bg ? (
                    <img className={styles.cards2} src={meme.bg} alt="" />
                  ) : null}

                  <section className={styles.formInputs2}>
                    <section className={styles.profileStep3}>
                      {meme.logo ? (
                        <img className={styles.logo2} src={meme.logo} alt="" />
                      ) : null}
                      {meme.name ? (
                        <p>
                          <b>{meme.name}</b>
                        </p>
                      ) : null}
                    </section>
                    <label htmlFor="description"></label>
                    <input
                      id="description"
                      name="description"
                      className={styles.inputDescription}
                      value={meme.description}
                      onChange={handleChange}
                      placeholder="Escreva uma legenda*..."
                    />
                    <label htmlFor="local">Localização</label>
                    <input
                      id="local"
                      name="local"
                      value={meme.local}
                      onChange={handleChange}
                      placeholder="Ex: São Paulo, Brasil"
                    />

                    <label htmlFor="category">
                      Categoria <span style={{ fontSize: "12px" }}>*</span>
                    </label>
                    {/*<input id="category" name="category" value={meme.category} onChange={handleChange} placeholder="Escolha a categoria*"/>*/}
                    <select
                      id="category"
                      name="category"
                      className={styles.selectInput}
                      value={meme.category}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="Turma-65">Turma-65</option>
                      <option value="Javascript">Geral</option>
                    </select>
                  </section>
                </section>
                <section className={styles.obrigatorio}>
                  <p>* Campos obrigatórios</p>
                </section>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
