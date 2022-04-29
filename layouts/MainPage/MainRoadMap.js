import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Social from "components/Social";

export default function MainRoadMap(){
	const array = [
		"TRONIC Presale — Minting cost is TRX 250 until October 31th. [CLOSED]",
		"Public sale — Minting cost is TRX 350. [CURRENT]",
		"Airdrops. Unique TRONIC collections of Bored Ape Kennel Club (the OG addition to BAYC), Party Ape, Lazy Lions and a Secret NFT will be airdropped for every minted ROBOTRON.",
		"Marketplace launch along with a secret airdrop."
	]

	return (
		<MainRoadMapWrapper>
			<CenterBlock>
				<div className="title">
					<Image priority={true} src="/pic/road-map.svg" width={1200} height={247} alt="Roadmap"/>
				</div>
				<div className="title_mob">
					<img src="/pic/roadmap-mob.svg" alt="Roadmap mobile"/>
				</div>
				<div className="content_block">
					<div className="content">
						<ul className="list">
							{
								array.map((item, index) => {
									return (
										<li key={index}>
											<span>Step {index + 1}</span>
											{item}
										</li>
									)
								})
							}
						</ul>
						<p className="description">Note that the full roadmap is available to ROBO NFT holders only.</p>
						<Social title="Welcome to"/>
					</div>
					<div className="image">
						<Image priority={true} src="/pic/road-map-image.svg" width={611} height={815} alt="Roadmap images"/>
					</div>
				</div>
			</CenterBlock>
		</MainRoadMapWrapper>
	)
}

const MainRoadMapWrapper = styled.section`
	padding-top: 60px;
	.content_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
		}
	}
	.image{
		padding-left: 40px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.title_mob{
		display: none;
		justify-content: center;
		position: relative;
		right: -100px;
		transform: scale(1.3);
		margin-bottom: 100px;
		@media only screen and (max-width: 600px) {
			display: flex;
		}
	}
	.title{
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.content{
		max-width: 720px;
		width: 100%;
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
		.list{
			li{
				font-size: 20px;
				line-height: 27px;
				margin-bottom: 48px;
				&:last-child{
					margin-bottom: 0;
				}
				span{
					font-weight: bold;
					margin-right: 30px;
				}
			}	
		}
	}
`
