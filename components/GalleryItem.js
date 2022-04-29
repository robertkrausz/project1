import styled from "styled-components";
import Link from "next/link";
import TraitsList from "components/TraitsList";
import Image from "next/image";

export default function GalleryItem({item}){
	return (
		<GalleryItemWrapper className="gallery_item">
			<div className="block_list">
				<Link href={`/gallery/${item.tokenId}`}><a>Robotron #{item.tokenId}</a></Link>
				<div className="image">
					<Image priority={true} src={item.image} width={600} height={600} alt="Test image"/>
				</div>
				<TraitsList traits={item.traits}/>
			</div>
			<h2>#{item.tokenId}</h2>
		</GalleryItemWrapper>
	)
}

const GalleryItemWrapper = styled.div`
	h2{
		font-size: 20px;
		line-height: 27px;
		margin-top: 20px;
	}
	.block_list{
		background: #22223F;
		border-radius: 10px;
		padding: 7px;
		min-height: 278px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
		}
	}
	a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.image{
		width: 242px;
		height: 242px;
		line-height: 0;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			height: auto;
		}
		img{
			border-radius: 6px;
		}
	}
	.traits_list{
		padding-left: 10px;
		width: calc(100% - 242px);
		@media only screen and (max-width: 1024px) {
			width: 100%;
			padding-left: 0;
			margin-top: 10px;
		}
		li{
			color: #FFFFFF;
			font-size: 16px;
			line-height: 22px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`
