import styled from "styled-components";

export default function Input({type = "text", name, placeholder, value, onChange, disabled = false, autoComplete = "off", autoFocus = false}){
	return (
		<InputWrapper className="custom_input">
			<input
				autoFocus={autoFocus}
				autoComplete={autoComplete}
				disabled={disabled}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onWheel={e => e.currentTarget.blur()}
				onChange={(e) => onChange(e.target.value)}
			/>
		</InputWrapper>
	)
}

const InputWrapper = styled.div`
	width: 100%;
	input{
		background: #22223F;
		border-radius: 10px;
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 0.02em;
		color: #FFFFFF;
		height: 60px;
		padding: 15px 20px;
	}
`
