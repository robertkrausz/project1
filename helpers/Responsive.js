import styled from 'styled-components'

export default function Responsive({width = 768, mobileItem = null, desktopItem = null}) {

	return (
		<>
			{desktopItem && <Desktop widthSize={width}>{desktopItem}</Desktop>}
			{mobileItem && <Mobile widthSize={width}>{mobileItem}</Mobile>}
		</>
	)
}

const Desktop = styled.div`
	@media only screen and (max-width: ${props => props.widthSize}px) {
		display: none;
		visibility: hidden;
	}
`

const Mobile = styled.div`
	display: none;
	visibility: hidden;
	@media only screen and (max-width: ${props => props.widthSize}px) {
		display: block;
		visibility: visible;
	}
`
