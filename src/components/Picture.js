import womanImg from "../img/png/woman.png"
function Picture(){
	return(
		<figure className="picture">
			{/*<source srcSet="/src/img/png/woman.png" media="all"/>*/}
			<img className="picture__content" src={womanImg} alt="Woman with computer" />
		</figure>
	)
}

export default Picture;
