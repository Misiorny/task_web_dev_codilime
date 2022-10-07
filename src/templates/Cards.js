import ArticleTitle      from '../components/ArticleTitle';
import ArticleParagraph  from '../components/ArticleParagraph';
import Card              from '../components/Card';
import CircleIcon        from '../components/CircleIcon';
import ScissorsIcon      from '../components/ScissorsIcon';
import AndroidIcon       from '../components/AndroidIcon';
import CheckedCircleIcon from '../components/CheckedCircleIcon';

function Cards() {
	return (
		<section className="cards" >
			<ArticleTitle articleTitle="Massa tempor nec feugiat nisl pretium fusce"/>
			<ArticleParagraph
				articleText={["Pellentesque", <strong> habitant </strong>, "morbi tristique senectus et netus et malesuada.",
					<strong>Ipsum faucibus vitae</strong>, "aliquet nec ullamcorper sit amet risus nullam.Dictum varius duis at consectetur",
					<mark> lorem donec </mark>, "massa sapien.Massa tempor nec feugiat nisl pretium fusce."]}/>
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
