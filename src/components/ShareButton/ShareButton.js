import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { GrClose } from "react-icons/gr";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import styles from "./ShareButton.module.css";

export function ShareButton() {

  return (
    <>
      <div className={styles.container1}>

        <div className={styles.container2}>
          <FacebookShareButton
            url="https://memespace.netlify.app/"
            quote={"Enter the community!"}
            hashtag="#memeSpace"
          >
            <div className={styles.line}>
              <RiFacebookCircleLine className={styles.list} size={25} />
              <span className={styles.list}>Facebook</span>
            </div>
          </FacebookShareButton>
          <WhatsappShareButton
            url="https://memespace.netlify.app/"
            quote={"Enter the community!"}
            hashtag="#memeSpace"
          >
            <div className={styles.line}>
              <RiWhatsappLine className={styles.list} size={25} />
              <span className={styles.list}>Whatsapp</span>
            </div>
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
}
