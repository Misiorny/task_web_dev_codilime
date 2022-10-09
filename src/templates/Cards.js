import ArticleParagraph, { ArticleTitle }                           from '../components/Typography';
import { Card }                                                         from '../components/Other';
import AndroidIcon, { CheckedCircleIcon, ScissorsIcon, CircleIcon } from '../components/Icons';

function Cards() {
	return (
		<section className="cards">
			<ArticleTitle articleTitle="Massa tempor nec feugiat nisl pretium fusce"/>
			<ArticleParagraph
				articleText={[
					"Pellentesque", <strong> habitant </strong>, "morbi tristique senectus et netus et malesuada.",
					<strong>Ipsum faucibus vitae </strong>,
					"aliquet nec ullamcorper sit amet risus nullam.Dictum varius duis at consectetur", <mark> lorem donec </mark>,
					"massa sapien.Massa tempor nec feugiat nisl pretium fusce."]}
			/>
			<ArticleParagraph articleText="Elit scelerisque mauris pellentesque ?"/>
			<div className="cardBox">
				<Card href="https://codilime.com/services/golang-development/" icon={<CircleIcon/>}/>
				<Card href="https://codilime.com/services/c-and-cpp-development/" icon={<ScissorsIcon/>}/>
				<Card href="https://www.android.com/" icon={<AndroidIcon/>}/>
				<Card href="https://codilime.com/services/rust-development/" icon={<CheckedCircleIcon/>}/>
			</div>
		</section>
	)
}

export default Cards;
