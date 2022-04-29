import Header from "components/Header";
import Footer from "components/Footer";
import ContentBox from "components/ContentBox";
import Title from "components/Title";
import GalleryGrid from "components/GalleryGrid";
import GalleryItem from "components/GalleryItem";
import Seo from "helpers/Seo";
import {useEffect, useState} from "react";
import axios from "axios";
import InfiniteScroll from "helpers/InfiniteScroll";
import SearchById from "components/SearchById";

export default function Gallery(){
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(null);
	const [array, setArray] = useState(null);
	const [id, setId] = useState(null)
	const limit = 7;

	useEffect(() => {
		setTotal(null)
		if (page === 1) {
			makeRequest()
		} else setPage(1)
	}, [id])

	useEffect(() => {
		makeRequest();
	}, [page])

	const makeRequest = () => {
		if (id) {
			axios.get(`${process.env.API}/searchbyid?id=${id}`).then(r => {
				setArray(r.data.data)
			});
		} else {
			axios.get(`${process.env.API}/gallery?page=${page}&limit=${limit}`).then(r => {
				if (r.data.isSuccess) {
					setArray(page === 1 ? r.data.data : [...array, ...r.data.data])
					setTotal(r.data.meta.pagination.total)
				}
			})
		}
	}

	return (
		<>
			<Seo
				title="Gallery"
				description="Robotrons is a collection of droid characters to minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!"
				image=""
			/>
			<Header/>
			<ContentBox>
				<Title><h1>Gallery</h1></Title>
				<SearchById onCallBack={setId}/>
				<GalleryGrid>
					{
						array ? (
							array.length > 0 ? (
								array.map(item => {
									return parseInt(item.tokenId) === 0 ? null : <GalleryItem key={item.tokenId} item={item}/>
								})
							) : <p>There is nothing in the gallery. Change filter</p>
						) : <p>Loading gallery</p>
					}
				</GalleryGrid>
				<InfiniteScroll page={page} total={total} onCallBack={setPage}/>
			</ContentBox>
			<Footer/>
		</>
	)
}
