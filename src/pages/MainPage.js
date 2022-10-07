import Header    from '../templates/Header';
import Slider    from '../templates/Slider';
import List      from '../templates/List';
import Quotation from '../templates/Quotation';
import Cards     from '../templates/Cards';
import Form      from '../templates/Form';
import Footer    from '../templates/Footer';

function MainPage(){
	return(
		<main className="main wrapper">
			<Header/>
			<Slider/>
			<List/>
			<Quotation/>
			<Cards/>
			<Form/>
			<Footer/>
		</main>
	)
}

export default MainPage;
