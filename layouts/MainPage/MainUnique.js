import styled from "styled-components";
import Image from "next/image";
import CenterBlock from "helpers/CenterBlock";

export default function MainUnique(){
	const array = [
		"/pic/unique/1.gif",
		"/pic/unique/2.gif",
		"/pic/unique/3.gif",
		"/pic/unique/4.gif",
		"/pic/unique/5.gif",
		"/pic/unique/6.gif",
		"/pic/unique/7.gif",
		"/pic/unique/8.gif",
		"/pic/unique/9.gif",
		"/pic/unique/10.gif"
	]
	return (
		<MainUniqueWrapper>
			<CenterBlock>
				<div className="logo">
					<Image src="/pic/unique-logo.svg" width={1165} height={117} alt="10 unique robots"/>
				</div>
				<p className="description">
					Unique droids are hidden inside the squad. Go ahead and get your very own Roboto now!
				</p>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div key={index} className="item">
									<Image priority={true} src={item} width={224} height={224} alt={`Unique ${index + 1}`}/>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</MainUniqueWrapper>
	)
}

const MainUniqueWrapper = styled.section`
	position: relative;
	width: 100%;
	padding: 60px 0;
	background: #22223F;
	.description{
		margin: 50px 0 0 0;
		font-size: 20px;
		line-height: 27px;
		color: #fff;
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 60px;
		margin-bottom: -20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: center;
		}
		.item{
			width: calc(100% / 5 - 20px);
			margin-bottom: 20px;
			line-height: 0;
			@media only screen and (max-width: 600px) {
				width: 100%;
				display: flex;
				justify-content: center;
			}
		}
	}
`
