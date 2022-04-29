import Seo from "helpers/Seo";
import Header from "components/Header";
import Footer from "components/Footer";
import ContentBox from "components/ContentBox";
import Title from "components/Title";
import axios from "axios";
import TraitsList from "components/TraitsList";
import styled from "styled-components";
import Image from "next/image";

export default function GalleryPage({data}) {
	return (
		<>
			<Seo
				title={`Robotron #${data.tokenId}`}
				description="Robotrons is a collection of droid characters to minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!"
				image={data.image}
			/>
			<Header/>
			<ContentBox>
				<Title><h1>#{data.tokenId}</h1></Title>
				<GalleryPageWrapper>
					<div className="image">
						<Image priority={true} src={data.image} width={400} height={400} alt={`Robotron #${data.tokenId}`}/>
					</div>
					<div className="content">
						<TraitsList traits={data.traits}/>
					</div>
				</GalleryPageWrapper>
			</ContentBox>
			<Footer/>
		</>
	)
}

const GalleryPageWrapper = styled.div`
	background: #22223F;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	padding: 7px;
	margin-top: 36px;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
	.image{
		width: 400px;
		height: 400px;
		@media only screen and (max-width: 768px) {
			width: 100%;
			height: auto;
		}
	}
	.content{
		width: calc(100% - 400px - 10px);
		@media only screen and (max-width: 768px) {
			width: 100%;
			margin-top: 10px;
		}
	}
	.traits_list{
		li{
			font-size: 20px;
			line-height: 30px;
			@media only screen and (max-width: 600px) {
				font-size: 15px;
				line-height: 22px;
			}
		}
	}
`

export async function getServerSideProps(ctx) {
	const data = await axios.get(`${process.env.API}/searchbyid?id=${ctx.query.id}`)
	if (data.data.data.length) {
		return { props: {data: data.data.data[0]} }
	} else {
		return {
			redirect: {
				permanent: false,
				destination: '/404'
			}
		}
	}
}
