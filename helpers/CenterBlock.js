import styled from 'styled-components';

export default function CenterBlock({children, padding = 30, margin, id, width = 1200, className}) {
	return (
		<CenterBlockWrapper className={`center_block ${className ? className : ''}`} width={width} id={id} margin={margin} padding={padding}>
			{children}
		</CenterBlockWrapper>
	)
}

const CenterBlockWrapper = styled.div`
	position: relative;
	max-width: ${props => `calc(${props.width}px + ${props.padding}px + ${props.padding}px)`};
	width: 100%;
	padding: ${props => `0 ${props.padding}px`};
	box-sizing: border-box;
	margin: 0 auto;
	height: inherit;
	min-height: inherit;
	z-index: 10;
	@media only screen and (max-width: 600px) {
		max-width: ${props => `calc(${props.width}px + ${props.padding - 10}px + ${props.padding - 10}px)`};
		padding: ${props => `0 ${props.padding - 10}px`};
	}
`
