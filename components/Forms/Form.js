import styled from "styled-components";

/***
 * Компонент формы
 * @param children
 * @param onSubmit
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form({children, onSubmit}){
	const onHandleSubmit = (e) => {
		e.preventDefault();
		onSubmit(true)
	}
	return (
		<FormWrapper onSubmit={onHandleSubmit} className="form">
			{children}
		</FormWrapper>
	)
}

const FormWrapper = styled.form`
	position: relative;
	width: 100%;
`
