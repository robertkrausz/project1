import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import MintBlock from "components/MintBlock";

export default function MainBlock(){
	return (
		<MainBlockWrapper>
			<CenterBlock>
				<div className="logo">
					<img src="/pic/main-logo.svg" alt="Robotrons is a collection of droid characters to minted as NFTs."/>
				</div>
				<div className="logo_mob">
					<img src="/pic/header-pic-mobile.svg" alt="Robotrons is a collection of droid characters to minted as NFTs."/>
				</div>
				<p className="title">Homage to the Robotos Official NFT</p>
				<p className="description">
					The collection of 10000 unique droids that live on TRON blockchain now and backed by the verified smart contract. Robotos are hosted on IPFS/BTFS and got to be minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors.
				</p>
				<MintBlock/>
			</CenterBlock>
		</MainBlockWrapper>
	)
}

const MainBlockWrapper = styled.section`
	position: relative;
	padding-top: 70px;
	padding-bottom: 60px;
	z-index: 100;
	margin-top: -200px;
	background: #D74040;
	@media only screen and (max-width: 768px) {
		margin-top: -100px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 0;
	}
	.logo{
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.logo_mob{
		display: none;
		justify-content: center;
		margin-top: 100px;
		margin-bottom: 80px;
		img{
			transform: scale(1.3);
		}
		@media only screen and (max-width: 600px) {
			display: flex;
		}
	}
	.description{
		margin: 20px 0 0 0;
		font-size: 18px;
		line-height: 27px;
		color: #ffffff;
		text-align: center;
	}
	.title{
		margin: 40px 0 0 0;
		font-size: 24px;
		line-height: 27px;
		color: #ffffff;
		text-align: center;
	}
`
