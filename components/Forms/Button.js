import styled from "styled-components";

export default function Button({children, type = "submit", onClick, disabled = false}){
	return (
		<ButtonWrapper
			disabled={disabled}
			className="button"
			onClick={onClick}
			type={type}
		>{children}</ButtonWrapper>
	)
}

const ButtonWrapper = styled.button`
	width: 100%;
`
