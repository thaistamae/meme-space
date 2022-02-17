import styles from "./Cards.module.css";
import { LikeButton } from "@lyket/react";

import { Link} from "react-router-dom";


function Cards(props) {

	let printDate;
	function formatDate(dateStr) {
    
		const monthPtBr = [
			"JANEIRO",
			"FEVEREIRO",
			"MARÇO",
			"ABRIL",
			"MAIO",
			"JUNHO",
			"JULHO",
			"AGOSTO",
			"SETEMBRO",
			"NOVEMBRO",
			"DEZEMBRO",
		];
	
		const date = new Date(dateStr);
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		const hour = date.getHours();
		const minutes = date.getMinutes();
		
			printDate = `${hour}:${minutes} - ${day} DE ${monthPtBr[month]} DE ${
				year}`;
			return printDate;
		} 

		let formattedDate = formatDate(props.currentTime)
		console.log(formattedDate)
		
		

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
					<img src="../../assets/images/share.png" className={styles.dot} alt=""/>
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
					<img src="../../assets/images/bookmark.png" alt=""/>
				</div>
			</div>
				
			<h4 className={styles.message}> <b>{props.name}</b> {props.description}</h4>
			<h4 className={styles.comments}>{props.comments}</h4>
			<div className={styles.addComments}> 
				<div className={styles.userImg}>
					<img src={props.user} className={styles.cover} alt=""	/>
				</div>
				
				<form onSubmit={props.handleSubmit}>
				<Link to={`/add-comment/${props.id}`}>
				<input type="text" className={styles.text} placeholder="Adicionar comentário" name="comments" onChange={props.handleChange}/>
				<button type="submit" >add</button> </Link>
				</form>
			</div>
			<h5 className={styles.postTime}>{formattedDate}</h5>
		</div>
	</>
  );
}



export {Cards}