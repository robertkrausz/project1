import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Social from "components/Social";

export default function ContentBox({children}){
	return (
		<ContentBoxWrapper>
			<CenterBlock>
				{children}
				<Social title="Welcome to"/>
			</CenterBlock>
		</ContentBoxWrapper>
	)
}

const ContentBoxWrapper = styled.section`
	min-height: 60vh;
	margin-top: 160px;
	@media only screen and (max-width: 600px) {
		margin-top: 120px;
	}
	.social{
		margin-top: 80px;
		li{
			a{
				color: #22223F;
				text-decoration: underline;
			}
			&:first-child:after{
				color: #22223F;
			}
		}
	}
`
