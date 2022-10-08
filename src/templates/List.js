import ArticleTitle   from '../components/Typography/ArticleTitle';
import AccordionItem  from '../components/Other/AccordionItem';
import MinusSign      from '../components/Icons/MinusSign';
import PlusSign       from '../components/Icons/PlusSign';
import HorizontalLine from '../components/Other/HorizontalLine';

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
