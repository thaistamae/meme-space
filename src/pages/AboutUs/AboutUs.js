import styles from "./AboutUs.module.css"
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

export default function AboutUs() {
 
    return (
      <>
  
        <div className={styles.footerOrganize}>

            <section className={styles.profiles}>
                <p>MemeSpace developed by</p>
                <hr></hr>
                <section>
                    <p>Rita Viana</p>
                    <article className={styles.iconOrganize}>
                        <a className={styles.icon} href="https://example.com"><BsGithub /></a>
                        <a className={styles.icon} href="https://example.com"><BsLinkedin /></a>
                    </article>
                
                    <p>Thais Tamae</p>
                    <article className={styles.iconOrganize}>
                        <a className={styles.icon} href="https://example.com"><BsGithub /></a>
                        <a className={styles.icon} href="https://example.com"><BsLinkedin /></a>
                    </article>
                </section>
            </section>
                
            <section>
                <img className={styles.ironLogo} src="https://saopaulo.startupsafari.com/wp-content/uploads/sites/6/2018/10/logo_ironhack_blue.png" alt = ""/>
            </section>


        </div>
      </>
    );
  }
