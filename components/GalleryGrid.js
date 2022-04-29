import styled from "styled-components";

export default function GalleryGrid({children}){
	return (
		<GalleryGridWrapper>
			{children}
		</GalleryGridWrapper>
	)
}

const GalleryGridWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 36px;
	margin-bottom: -30px;
	.gallery_item{
		width: calc(100% / 2 - 15px);
		margin-bottom: 30px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
`
