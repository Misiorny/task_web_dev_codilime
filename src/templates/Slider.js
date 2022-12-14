import ArticleParagraph, { MainTitle } from '../components/Typography';
import { Picture }                     from '../components/Pictures';
import Button                          from '../components/Form';
import { RightArrow }                  from '../components/Icons';

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
