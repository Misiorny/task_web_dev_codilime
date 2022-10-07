import OtherTitle from '../components/OtherTitle';
import Input        from '../components/Input';
import Button       from '../components/Button';
import Label        from '../components/Label';

function Form() {
	return (
		<form className="form">
			<OtherTitle otherTitle="Subscribe to our newsletter"/>
			<div className="form__box">
				<Input name='email'/>
				<Button btnText='Subscribe'/>
			</div>
			<Label for='email' label="Chupa chups gummi bears shortbread candy "/>
		</form>
	)
}

export default Form;
