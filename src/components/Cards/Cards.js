import React from "react";
import styles from "./Cards.module.css";
import { LikeButton } from "@lyket/react";


function Cards(props) {
  return (
	  <>
		<div className={styles.card}>
			<div className={styles.top}>
				<div className={styles.userDetails}>
					<div className={styles.profileImg}> 
						<img src={props.logo} className={styles.cover} alt="pessoa" />
					</div>
				     <h3>{props.name}<br/><span>{props.local}</span></h3> 
			    </div>
			    <div>
					<a href = "https://api.whatsapp.com/send?text=">
					<img src={props.share} className={styles.dot} alt=""/>
					</a>
			   </div>
			</div>
			
			<div className={styles.imgBx}>
				<img src={props.bg} className={styles.cover} alt=""/>
			</div>

			<div className={styles.actionBtns}>
				<div className={styles.left}>
					<LikeButton
						namespace="my-blog-post"
						id="how-to-beat-me-at-chess"
						component={LikeButton.templates.Twitter}
					/>
				</div>	
				<div className={styles.right}>
					<img src={props.bookmark} alt=""/>
				</div>
			</div>
				
			<h4 className={styles.message}> <b>{props.name}</b> {props.description}</h4>
			<h4 className={styles.comments}>{props.comments}</h4>
			<div className={styles.addComments}>
				<div className={styles.userImg}>
					<img src={props.user} className={styles.cover} alt=""	/>
				</div>
				<input type="text" className={styles.text} placeholder={props.coment}/>
			</div>
			<h5 className={styles.postTime}>4 hours ago</h5>
		</div>
	</>
  );
}



export {Cards}
