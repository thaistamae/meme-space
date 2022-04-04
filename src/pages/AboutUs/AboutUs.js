import styles from "./AboutUs.module.css"
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

export default function AboutUs() {
 
    return (
      <>
  
        <div className={styles.generalOrganize}>


        <section className={styles.profiles1}>
                <img className={styles.ironLogo} src="https://saopaulo.startupsafari.com/wp-content/uploads/sites/6/2018/10/logo_ironhack_blue.png" alt = ""/>
                <article className={styles.text}>Esta aplicação foi desenvolvida no bootcamp <br></br> de Web Development da Ironhack.</article>
                <article className={styles.tech}>React | React Router Dom | Axios </article>
                <article style={{fontSize: 14}}>Fevereiro 2022</article>
            </section>



            <section className={styles.profiles2}>
                <p><b>memeSpace</b> desenvolvido por</p>
                
                <section className={styles.profileOrganize}>
                    <section className={styles.box}>
                        <p>Rita Viana</p>
                        <article className={styles.iconOrganize}>
                            <a className={styles.icon} href="https://github.com/ritavianarib" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            <a className={styles.icon} href="https://www.linkedin.com/in/ritavianarib/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        </article>
                    </section>
                    <section className={styles.box}>
                        <p>Thais Tamae</p>
                        <article className={styles.iconOrganize}>
                            <a className={styles.icon} href="https://github.com/thaistamae" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                            <a className={styles.icon} href="https://www.linkedin.com/in/thaistamae/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        </article>
                    </section>
                </section>
            </section>
                


        </div>
      </>
    );
  }
