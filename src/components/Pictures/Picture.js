import womanImg from "../../img/png/woman.png"
function Picture(){
	return(
		<figure className="picture">
			<img className="picture__content" src={womanImg} alt="Woman with computer" />
		</figure>
	)
}

export default Picture;
