import ArticleParagraph from '../components/Typography/ArticleParagraph';
import MainTitle from '../components/Typography/MainTitle';
import Picture   from '../components/Pictures/Picture';
import Button    from '../components/Form/Button';
import RightArrow from '../components/Icons/RightArrow';

function Slider() {
	return (
		<section className="slider">
			<article className="slider__article">
				<MainTitle coloredText="Duis aute irure" mainTitle="dolor in reprehenderit"/>
				<ArticleParagraph articleText="Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget tgravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis tbibendum ut tristique et egestas"/>
				<Button btnText="Discover now " icon={<RightArrow/>}/>
			</article>
			<div className="slider__picture">
				<Picture/>
			</div>
		</section>
	)
}

export default Slider;
