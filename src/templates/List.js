import ArticleTitle   from '../components/ArticleTitle';
import AccordionItem  from '../components/AccordionItem';
import MinusSign      from '../components/MinusSign';
import PlusSign       from '../components/PlusSign';
import HorizontalLine from '../components/HorizontalLine';

function List() {
	return (
		<section className="list">
			<ArticleTitle articleTitle="Lacinia quis vel eros tempor orci"/>
			<ol className="accordionList">
				<li className="accordionList__item"><AccordionItem
					otherTitle="Arcu non odio" articleText="Sapien nec sagittis aliquam malesuada bibendum. Tempor nec feugiat nisl pretium." sign={
					<MinusSign/>}
				/></li><HorizontalLine/>
				<li className="accordionList__item"><AccordionItem
					otherTitle="Eget gravida cum sociis" articleText="" sign={<PlusSign/>}
				/></li><HorizontalLine/>
				<li className="accordionList__item"><AccordionItem
					otherTitle="Massa massa ultricies" articleText="" sign={<PlusSign/>}
				/></li><HorizontalLine/>
			</ol>
		</section>
	)
}

export default List;
