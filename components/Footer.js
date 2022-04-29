import styled from "styled-components";
import Image from "next/image";

export default function Footer(){
	return (
		<FooterWrapper>
			<Image priority={true} src="/pic/footer-image.jpg" width={1920} height={398} alt="footer"/>
		</FooterWrapper>
	)
}

const FooterWrapper = styled.div`
	position: relative;
	width: 100%;
	background: #EDB146;
	padding-top: 90px;
	display: flex;
	justify-content: center;
	@media only screen and (max-width: 600px) {
		padding-top: 40px;
	}
`
