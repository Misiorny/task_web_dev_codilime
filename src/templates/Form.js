import OtherTitle from '../components/Typography/OtherTitle';
import Button, {Input, Label, }     from '../components/Form';

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
