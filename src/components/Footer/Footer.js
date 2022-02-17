import styles from "./Footer.module.css"
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

export function Footer() {
 
    return (
      <>
  
        <footer className={styles.footerOrganize}>

            <section>
                <p>MemeSpace developed by</p>
                <section className={styles.profileOrganize}>
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


        </footer>
      </>
    );
  }
